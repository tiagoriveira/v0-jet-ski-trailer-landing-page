'use server'

import { createClient } from '@/lib/supabase/server'

export interface LeadFormData {
  name: string
  email: string
  phone: string
  city: string
  trailerType: string
  quantity: string
  timeframe: string
}

export async function submitLead(data: LeadFormData) {
  try {
    const supabase = await createClient()

    // Insert lead into Supabase database
    const { data: insertedData, error } = await supabase
      .from('leads')
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        trailer_type: data.trailerType,
        quantity: data.quantity,
        timeframe: data.timeframe,
        status: '', // Empty status for team to fill
      })
      .select()
      .single()

    if (error) {
      console.error('[v0] Supabase error:', error)
      throw new Error(error.message)
    }

    console.log('[v0] Lead submitted to Supabase successfully:', insertedData)
    return { success: true }
  } catch (error) {
    console.error('[v0] Error submitting lead:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Falha ao enviar formulário',
    }
  }
}
