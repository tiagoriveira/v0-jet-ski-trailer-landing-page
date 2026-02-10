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
  nome: string
  email: string
  telefone: string
  cidade: string
  tipo_carreta: string
  quantidade: string
  prazo: string
  source?: string
  status?: string
  updated_at?: string
}
