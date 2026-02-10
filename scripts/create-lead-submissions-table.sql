-- Create lead_submissions table
CREATE TABLE IF NOT EXISTS lead_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome_completo TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  cidade TEXT NOT NULL,
  tipo_carreta TEXT NOT NULL,
  quantidade INTEGER NOT NULL DEFAULT 1,
  prazo_interesse TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE lead_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert
CREATE POLICY "Allow public insert" ON lead_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow service role to select
CREATE POLICY "Service role select" ON lead_submissions
  FOR SELECT
  TO service_role
  USING (true);
