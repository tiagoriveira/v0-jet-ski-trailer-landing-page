# Supabase Integration Guide

This guide explains the Supabase database integration for the JVC Carretas lead capture form.

## Overview

The landing page form automatically saves lead data to your Supabase database with the following fields:

| Column | Description |
|--------|-------------|
| id | UUID (auto-generated) |
| created_at | Timestamp (auto-populated in Brazilian timezone) |
| name | Lead's full name |
| email | Lead's email address |
| phone | Lead's phone number (formatted) |
| city | Lead's city |
| trailer_type | Type of trailer requested |
| quantity | Number of trailers needed |
| timeframe | Purchase timeframe |
| status | Empty (for your team to fill) |

## How It Works

The form submissions are automatically saved to your Supabase database. The integration has already been set up with:

1. **Database Table**: A `leads` table has been created in your Supabase database
2. **Row Level Security**: Public insert access is enabled for form submissions
3. **Server Action**: The form uses a server action to securely submit data

## Viewing Your Leads

You can view all submitted leads directly in your Supabase dashboard:

1. Go to the Supabase dashboard
2. Select your project
3. Navigate to "Table Editor"
4. Click on the "leads" table
5. You'll see all submitted leads with timestamps

## Database Schema

The migration script created the following table structure:

```sql
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('America/Sao_Paulo', NOW()),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  trailer_type TEXT NOT NULL,
  quantity TEXT NOT NULL,
  timeframe TEXT NOT NULL,
  status TEXT DEFAULT ''
);
```

## Managing Leads

### Filtering and Searching
Use the Supabase dashboard's built-in filters to:
- Search by name, email, or city
- Filter by trailer type or quantity
- Sort by date (newest/oldest first)
- Filter by status

### Updating Status
To track your lead follow-ups:
1. Click on any row in the leads table
2. Update the "status" field with values like:
   - "Novo"
   - "Contatado"
   - "Orçamento Enviado"
   - "Aguardando Resposta"
   - "Fechado"
   - "Perdido"

### Exporting Data
To export leads to Excel or CSV:
1. In the Supabase dashboard, go to the leads table
2. Click the "..." menu in the top right
3. Select "Export" > "CSV" or "JSON"

## Troubleshooting

### Error: "Falha ao enviar formulário"
- Check the Supabase connection in the v0 sidebar
- Verify the database migration was executed successfully
- Check the browser console for detailed error messages

### Leads not appearing in database
- Verify the Supabase integration is connected
- Check that the `leads` table exists in your database
- Review the RLS policies to ensure public insert is enabled

### Need to modify the form fields
If you need to add or remove fields:
1. Update the database schema with a new migration
2. Update the `LeadFormData` interface in `/app/actions.ts`
3. Update the form fields in `/components/lead-form.tsx`
4. Update the insert statement in the server action

## Security

The integration includes Row Level Security (RLS) with:
- **Public INSERT**: Anyone can submit leads through the form
- **No public SELECT/UPDATE/DELETE**: Only authenticated users (your team) can view/modify leads

This ensures form submissions work publicly while keeping your data secure.

## Alternative: Building an Admin Dashboard

For a better management experience, you can create a custom admin dashboard with:
- Authentication for your team
- View leads in a custom interface
- Add notes and follow-up reminders
- Track conversion rates
- Generate reports
- Email notifications for new leads

Let me know if you'd like me to build an admin dashboard for lead management!

## Next Steps

Your lead capture system is now fully operational with Supabase! All form submissions are automatically saved to your database with timestamps.

---

**Questions?** Let me know if you'd like to add features like email notifications, admin dashboard, or lead analytics!
