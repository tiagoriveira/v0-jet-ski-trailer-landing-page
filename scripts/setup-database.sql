-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('America/Sao_Paulo', NOW()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  trailer_type TEXT NOT NULL,
  quantity TEXT NOT NULL,
  timeframe TEXT NOT NULL
);

-- Create index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Create index on email for lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for the lead form)
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all leads
CREATE POLICY "Allow authenticated reads" ON leads
  FOR SELECT
  TO authenticated
  USING (true);
