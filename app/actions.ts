'use server'

import { supabase } from '@/lib/supabase'

export interface LeadFormData {
  name: string
  email: string
  phone: string
  city: string
  trailerType: string
  quantity: string
  timeframe: string
}

// Send lead to Meta Conversions API
async function sendToMetaConversionsAPI(data: LeadFormData) {
  try {
    const pixelId = '442885398563869'
    const token = process.env.FACEBOOK_CONVERSIONS_API_TOKEN
    
    if (!token) {
      console.error('[v0] Meta token missing')
      return
    }

    const response = await fetch(`https://graph.facebook.com/v18.0/${pixelId}/conversions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [
          {
            event_name: 'Lead',
            event_time: Math.floor(Date.now() / 1000),
            event_id: `${Date.now()}-${Math.random()}`,
            event_source_url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jvccarretas.com',
            user_data: {
              em: Buffer.from(data.email).toString('hex'),
              ph: data.phone.replace(/\D/g, ''),
              fn: data.name.split(' ')[0].toLowerCase(),
              ln: data.name.split(' ').slice(1).join(' ').toLowerCase(),
              ct: data.city.toLowerCase(),
            },
            custom_data: {
              value: '1',
              currency: 'BRL',
              content_name: `${data.trailerType} - ${data.quantity} unidades`,
            },
          },
        ],
        access_token: token,
      }),
    })

    if (!response.ok) {
      console.error('[v0] Meta API error:', await response.text())
    }
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

    console.log('[v0] Inserting into Supabase...')
    
    const { data: insertedData, error } = await supabase
      .from('leads')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          city: data.city,
          trailer_type: data.trailerType,
          quantity: data.quantity,
          timeframe: data.timeframe,
        },
      ])
      .select()

    if (error) {
      console.error('[v0] Supabase error:', error)
      return { 
        success: false, 
        error: `Database error: ${error.message}` 
      }
    }

    console.log('[v0] Lead saved successfully:', insertedData)

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
