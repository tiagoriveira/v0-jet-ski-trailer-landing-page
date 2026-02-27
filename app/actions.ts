'use server'

import { supabase } from '@/lib/supabase'
import { createHash, randomUUID } from 'crypto'

export interface LeadFormData {
  name: string
  email: string
  phone: string
  city: string
  trailerType: string
  quantity: string
  timeframe: string
  eventId?: string
}

// Hash data with SHA-256 for Meta Conversions API
function hashSHA256(data: string): string {
  return createHash('sha256').update(data.toLowerCase().trim()).digest('hex')
}

// Send lead to Meta Conversions API
async function sendToMetaConversionsAPI(data: LeadFormData) {
  try {
    const pixelId = '7132608246836727'
    const token = process.env.FACEBOOK_CONVERSIONS_API_TOKEN

    if (!token) {
      console.error('[v0] Meta token missing')
      return
    }

    // Usa o eventId do cliente para deduplicação com o Pixel. Fallback para UUID caso não venha.
    const eventId = data.eventId || randomUUID()
    const payload = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jvccarretas.com',
          action_source: 'website',
          user_data: {
            em: [hashSHA256(data.email)],
            ph: [hashSHA256(data.phone.replace(/\D/g, ''))],
            fn: [hashSHA256(data.name.split(' ')[0])],
            ln: [hashSHA256(data.name.split(' ').slice(1).join(' ') || data.name.split(' ')[0])],
            ct: [hashSHA256(data.city)],
          },
          custom_data: {
            value: 1,
            currency: 'BRL',
            content_name: `${data.trailerType} - ${data.quantity} unidades`,
          },
        },
      ],
      access_token: token,
    }

    console.log('[Meta Ads] Sending event:', { event_id: eventId, email: data.email })

    const response = await fetch(`https://graph.facebook.com/v18.0/${pixelId}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error('[Meta Ads] API error:', result)
      throw new Error(`Meta API failed: ${JSON.stringify(result)}`)
    }

    console.log('[Meta Ads] Success:', result)
  } catch (error) {
    console.error('[v0] Meta API failed:', error)
  }
}

// Send lead to Telegram
async function sendToTelegram(data: LeadFormData) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      console.error('[v0] Telegram config missing')
      return
    }

    const message = `
📩 <b>NOVO LEAD!</b>

👤 <b>Nome:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
📱 <b>WhatsApp:</b> ${data.phone}
🏙️ <b>Cidade:</b> ${data.city}
🚗 <b>Tipo de Carreta:</b> ${data.trailerType}
📦 <b>Quantidade:</b> ${data.quantity}
⏰ <b>Prazo:</b> ${data.timeframe}
    `

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    })

    if (!response.ok) {
      console.error('[v0] Telegram error:', await response.text())
    }
  } catch (error) {
    console.error('[v0] Telegram failed:', error)
  }
}

export async function submitLead(data: LeadFormData) {
  console.log('[v0] Starting submitLead:', data)

  try {
    // Validate Supabase client
    if (!supabase) {
      console.error('[v0] Supabase client not initialized')
      return { success: false, error: 'Database connection error' }
    }

    console.log('[v0] Inserting into Supabase leads table...')

    const { data: insertedData, error } = await supabase
      .from('leads')
      .insert([
        {
          nome: data.name,
          email: data.email,
          telefone: data.phone,
          cidade: data.city,
          tipo_carreta: data.trailerType,
          quantidade: data.quantity.toString(),
          prazo: data.timeframe,
          source: 'landing_page',
          status: 'novo'
        },
      ])
      .select()

    if (error) {
      console.error('[v0] Supabase error detail:', JSON.stringify(error, null, 2))
      return {
        success: false,
        error: `Database error: ${error.message || 'Unknown database error'}`
      }
    }

    console.log('[v0] Lead saved successfully')

    // Send to Meta and Telegram in parallel (non-blocking)
    Promise.all([
      sendToMetaConversionsAPI(data),
      sendToTelegram(data),
    ]).catch(err => console.error('[v0] External integrations error:', err))

    return { success: true }
  } catch (error) {
    console.error('[v0] Unexpected error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit form',
    }
  }
}
