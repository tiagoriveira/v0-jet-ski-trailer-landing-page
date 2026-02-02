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

export async function submitLead(data: LeadFormData) {
  try {
    console.log('[v0] Submitting lead to Supabase:', data)

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
      throw error
    }

    console.log('[v0] Lead submitted to Supabase successfully:', insertedData)
    return { success: true }
  } catch (error) {
    console.error('[v0] Error submitting lead:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit form',
    }
  }
}
