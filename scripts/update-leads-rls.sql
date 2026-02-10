-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow service role insert" ON leads;
DROP POLICY IF EXISTS "Allow service role select" ON leads;
DROP POLICY IF EXISTS "Allow public insert" ON leads;

-- Allow anonymous inserts (for public form submissions)
CREATE POLICY "Allow public insert" ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow service role to select all (for admin viewing)
CREATE POLICY "Allow service role select" ON leads
  FOR SELECT
  TO service_role
  USING (true);
