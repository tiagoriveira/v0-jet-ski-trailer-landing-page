# Google Sheets Integration Setup Guide

This guide will help you set up the Google Sheets integration for your JVC Carretas landing page.

## Prerequisites

- A Google account
- Access to Google Cloud Console
- Your deployed application URL (from Vercel)

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "JVC Carretas - Leads"
4. In the first row (header row), add the following columns:
   - A1: `Data/Hora`
   - B1: `Nome`
   - C1: `Email`
   - D1: `Telefone`
   - E1: `Cidade`
   - F1: `Tipo de Carreta`
   - G1: `Quantidade`
   - H1: `Prazo`
   - I1: `Status`
5. Copy the Spreadsheet ID from the URL (it's the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
   - The ID is: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

## Step 2: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Name it something like "JVC Carretas Landing Page"

## Step 3: Enable Google Sheets API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and click "Enable"

## Step 4: Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the details:
   - Service account name: `jvc-carretas-sheets`
   - Description: `Service account for submitting leads to Google Sheets`
4. Click "Create and Continue"
5. Skip the optional steps (you don't need to grant additional roles)
6. Click "Done"

## Step 5: Create Service Account Key

1. In the Credentials page, find your newly created service account
2. Click on it to open the details
3. Go to the "Keys" tab
4. Click "Add Key" > "Create new key"
5. Choose "JSON" format
6. Click "Create"
7. A JSON file will be downloaded to your computer
8. **IMPORTANT**: Keep this file secure and never commit it to version control

## Step 6: Share Google Sheet with Service Account

1. Open the JSON key file you just downloaded
2. Find the `client_email` field (it looks like `your-service-account@project-id.iam.gserviceaccount.com`)
3. Copy this email address
4. Go back to your Google Sheet
5. Click the "Share" button (top right)
6. Paste the service account email
7. Give it "Editor" permissions
8. **UNCHECK** "Notify people" (the service account doesn't need an email notification)
9. Click "Share"

## Step 7: Set Environment Variables in Vercel

### Method 1: Using Vercel Dashboard

1. Go to your project in [Vercel Dashboard](https://vercel.com)
2. Go to "Settings" > "Environment Variables"
3. Add the following variables:

   **GOOGLE_SHEETS_ID**
   - Value: The Spreadsheet ID you copied in Step 1

   **GOOGLE_SERVICE_ACCOUNT_KEY**
   - Value: The entire contents of the JSON key file
   - Open the downloaded JSON file in a text editor
   - Copy ALL the content (should start with `{` and end with `}`)
   - Paste it as the value

4. Make sure both variables are available for "Production", "Preview", and "Development"
5. Click "Save"

### Method 2: Using v0 Interface

1. In the v0 chat interface, click on the sidebar
2. Go to "Vars" section
3. Add the two environment variables:
   - `GOOGLE_SHEETS_ID`
   - `GOOGLE_SERVICE_ACCOUNT_KEY`

## Step 8: Redeploy Your Application

After adding the environment variables, redeploy your application:

1. In Vercel Dashboard, go to "Deployments"
2. Click on the three dots next to the latest deployment
3. Click "Redeploy"

OR

1. Push a new commit to your repository
2. Vercel will automatically redeploy

## Testing

1. Go to your live site
2. Scroll to the lead form
3. Fill out all fields
4. Submit the form
5. Check your Google Sheet - a new row should appear with the lead data
6. The "Status" column will be empty for your team to fill in

## Troubleshooting

### Form submission fails

1. Check that both environment variables are set correctly
2. Verify the Spreadsheet ID is correct
3. Make sure the service account has "Editor" access to the sheet
4. Check the browser console for error messages

### "Missing required environment variables" error

- Double-check that both `GOOGLE_SHEETS_ID` and `GOOGLE_SERVICE_ACCOUNT_KEY` are set in Vercel
- Make sure you redeployed after adding the variables

### Permission denied error

- Verify that you shared the Google Sheet with the service account email
- The service account needs "Editor" permissions

### Invalid credentials error

- Check that you copied the entire JSON key content
- Make sure there are no extra spaces or line breaks
- The JSON should be valid (starts with `{` and ends with `}`)

## Sheet Structure

The data will be submitted in this order:

| Column | Field | Description |
|--------|-------|-------------|
| A | Data/Hora | Automatically filled with Brazilian timestamp |
| B | Nome | Customer's full name |
| C | Email | Customer's email address |
| D | Telefone | Customer's WhatsApp number (formatted) |
| E | Cidade | Customer's city |
| F | Tipo de Carreta | Trailer type (Single, Double, Triple, Custom) |
| G | Quantidade | Quantity needed |
| H | Prazo | Timeframe (Urgent, 1 month, 2-3 months, Flexible) |
| I | Status | Empty - for your team to fill (e.g., "Contacted", "Quote Sent", "Closed") |

## Security Best Practices

1. **Never commit the service account JSON file to Git**
2. Keep your `GOOGLE_SERVICE_ACCOUNT_KEY` secure
3. Only share the Google Sheet with necessary team members
4. Regularly review access to your Google Cloud Project
5. Consider setting up alerts for suspicious activity

## Need Help?

If you encounter any issues:

1. Check the Vercel deployment logs for detailed error messages
2. Verify all steps were completed correctly
3. Make sure the Google Sheets API is enabled in your Google Cloud Project
4. Contact support with specific error messages for faster resolution

---

**Congratulations!** Your lead capture system is now ready to collect qualified leads for JVC Carretas.
