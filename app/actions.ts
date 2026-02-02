'use server'

// Using crypto for JWT generation - available in Node.js runtime
import { createSign } from 'crypto'

export interface LeadFormData {
  name: string
  email: string
  phone: string
  city: string
  trailerType: string
  quantity: string
  timeframe: string
}

// Base64URL encode helper
function base64UrlEncode(str: string): string {
  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}

// Generate JWT token for service account authentication
async function generateServiceAccountToken(serviceAccount: {
  private_key: string
  client_email: string
}): Promise<string> {
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  }

  const now = Math.floor(Date.now() / 1000)
  const payload = {
    iss: serviceAccount.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  }

  const headerEncoded = base64UrlEncode(JSON.stringify(header))
  const payloadEncoded = base64UrlEncode(JSON.stringify(payload))
  const signatureInput = `${headerEncoded}.${payloadEncoded}`

  // Use RSA SHA256 signing for RS256
  const sign = createSign('RSA-SHA256')
  sign.update(signatureInput)
  sign.end()

  const signature = sign
    .sign(serviceAccount.private_key, 'base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')

  return `${headerEncoded}.${payloadEncoded}.${signature}`
}

// Get access token from Google OAuth
async function getAccessToken(serviceAccount: {
  private_key: string
  client_email: string
}): Promise<string> {
  try {
    const assertion = await generateServiceAccountToken(serviceAccount)

    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion,
      }).toString(),
    })

    if (!tokenResponse.ok) {
      throw new Error(`Failed to get access token: ${tokenResponse.status}`)
    }

    const tokenData = await tokenResponse.json()
    return tokenData.access_token
  } catch (error) {
    console.error('[v0] Error getting access token:', error)
    throw error
  }
}

export async function submitLead(data: LeadFormData) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID
    const serviceAccountKeyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY

    if (!spreadsheetId || !serviceAccountKeyJson) {
      console.log('[v0] Missing Google Sheets credentials - demo mode')
      return {
        success: true,
        message: 'Form submitted successfully! (Demo mode)',
      }
    }

    // Parse service account credentials
    const serviceAccount = JSON.parse(serviceAccountKeyJson)

    // Get access token
    const accessToken = await getAccessToken(serviceAccount)

    // Format current date/time in Brazilian format
    const now = new Date()
    const brazilTime = new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(now)

    // Prepare row data
    const rowData = [brazilTime, data.name, data.email, data.phone, data.city, data.trailerType, data.quantity, data.timeframe, '']

    // Append to Google Sheets
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A:I:append?valueInputOption=USER_ENTERED`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          values: [rowData],
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error('[v0] Google Sheets error:', errorData)
      throw new Error(`Google Sheets API error: ${response.status}`)
    }

    console.log('[v0] Lead submitted to Google Sheets successfully')
    return { success: true }
  } catch (error) {
    console.error('[v0] Error submitting lead:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit form',
    }
  }
}
