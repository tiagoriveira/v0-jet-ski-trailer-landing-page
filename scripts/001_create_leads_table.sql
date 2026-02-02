-- Create leads table to store lead submissions
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now() not null,
  name text not null,
  email text not null,
  phone text not null,
  city text not null,
  trailer_type text not null,
  quantity text not null,
  timeframe text not null,
  status text default '' -- empty for team to fill
);

-- Create an index on created_at for faster queries
create index if not exists leads_created_at_idx on public.leads(created_at desc);

-- Create an index on email for lookups
create index if not exists leads_email_idx on public.leads(email);

-- Enable RLS (Row Level Security)
alter table public.leads enable row level security;

-- Create policy to allow anyone to insert leads (public form)
create policy "leads_insert_public" 
  on public.leads 
  for insert 
  with check (true);

-- Create policy to allow authenticated users to view all leads (admin)
create policy "leads_select_authenticated" 
  on public.leads 
  for select 
  using (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update leads
create policy "leads_update_authenticated" 
  on public.leads 
  for update 
  using (auth.role() = 'authenticated');
