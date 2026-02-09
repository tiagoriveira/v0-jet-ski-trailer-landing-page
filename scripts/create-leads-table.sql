-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  city VARCHAR(100) NOT NULL,
  trailer_type VARCHAR(100) NOT NULL,
  quantity VARCHAR(50) NOT NULL,
  timeframe VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow service role to insert (for API)
CREATE POLICY "Allow service role insert" ON leads
  FOR INSERT
  WITH CHECK (true);

-- Allow service role to select (for admin viewing)
CREATE POLICY "Allow service role select" ON leads
  FOR SELECT
  USING (true);
