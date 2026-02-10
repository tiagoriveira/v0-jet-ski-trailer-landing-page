import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tnjsiorosknldeobwukq.supabase.co'
const supabaseAnonKey = 'sb_publishable_BsJjik4Foo2aT0q61D1zYA_KbJQk9aP'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
})

export interface Lead {
  id?: string
  created_at?: string
  name: string
  email: string
  phone: string
  city: string
  trailer_type: string
  quantity: string
  timeframe: string
}
