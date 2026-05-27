# Make.com — 911 Cooling Website Lead Scenario

This guide wires your website quote form to **email**, **Google Sheets**, and **Housecall Pro**.

---

## What the website sends

When a visitor submits the form, the site `POST`s JSON to your Make webhook:

```json
{
  "first_name": "John",
  "last_name": "Smith",
  "phone": "(305) 555-0100",
  "email": "john@example.com",
  "details": "AC not cooling, unit is 12 years old",
  "source": "website",
  "page_url": "https://yoursite.com/#quote",
  "submitted_at": "2026-05-20T14:30:00.000Z"
}
```

---

## Step 1 — Create the scenario

1. Log in to [Make.com](https://www.make.com).
2. Click **Create a new scenario**.
3. Name it: `911 Cooling — Website Lead`.

---

## Step 2 — Webhook trigger (Module 1)

1. Click **+** → search **Webhooks** → **Custom webhook**.
2. Click **Add** → name it `911 Cooling Website Lead`.
3. Make will show a URL like `https://hook.us1.make.com/xxxxx`.
4. Copy that URL into:
   - Local: `.env` as `PUBLIC_MAKE_WEBHOOK_URL=...`
   - GitHub: Repo → Settings → Secrets and variables → Actions → same name.
5. Click **OK** on the data structure dialog (first test submission will define fields).

**Test the webhook:** Submit the form on your site once, or use Make’s **Run once** and send a test JSON from the webhook module.

---

## Step 3 — Email notification (Module 2)

1. Click **+** after the webhook → **Gmail** → **Send an email** (or **Email** → **Send an email**).
2. Connect your business Gmail account.
3. Map fields:

| Field | Value |
|-------|--------|
| To | Your business email |
| Subject | `New 911 Cooling lead — {{first_name}} {{last_name}}` |
| Content | See template below |

**Email body template:**

```
New website lead for 911 Cooling

Name: {{first_name}} {{last_name}}
Phone: {{phone}}
Email: {{email}}

Unit / Issue:
{{details}}

Source: {{source}}
Submitted: {{submitted_at}}
Page: {{page_url}}
```

---

## Step 4 — Google Sheets log (Module 3)

1. Click **+** on the webhook module again (parallel branch) → **Google Sheets** → **Add a row**.
2. Connect Google and select your spreadsheet.
3. Create a sheet with headers in row 1:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Date | First | Last | Phone | Email | Details | Source | Page URL |

4. Map columns:

| Column | Webhook field |
|--------|----------------|
| Date | `submitted_at` |
| First | `first_name` |
| Last | `last_name` |
| Phone | `phone` |
| Email | `email` |
| Details | `details` |
| Source | `source` |
| Page URL | `page_url` |

This sheet is your backup if Housecall Pro sync fails.

---

## Step 5 — Housecall Pro lead (Module 4)

1. Add another branch from the webhook → search **Housecall Pro**.
2. If available: **Create a lead** (or **Create customer/lead** — exact name varies by Make version).
3. Connect your Housecall Pro account.
4. Map fields:

| HCP field | Webhook field |
|-----------|----------------|
| First name | `first_name` |
| Last name | `last_name` |
| Phone | `phone` |
| Email | `email` |
| Notes / Description | `details` |
| Lead source | `website` (static text) |

If Make does not list Housecall Pro in your account, check your HCP plan supports integrations, or contact Housecall Pro support. Temporary workaround: import leads manually from the Google Sheet until the connector is enabled.

---

## Step 6 — Error handling (recommended)

After the Housecall Pro module:

1. Click the wrench on the HCP module → **Add error handler** → **Break**.
2. Add a module on the error route: **Gmail** → **Send an email**.
3. Subject: `ALERT: HCP lead failed — {{first_name}} {{last_name}}`
4. Body: `Lead was saved to Google Sheets but failed to sync to Housecall Pro. Check the sheet and import manually.`

Turn the scenario **ON** (toggle in bottom-left).

---

## Field reference (quick copy)

| Website JSON key | Make mapping label |
|------------------|-------------------|
| `first_name` | First name |
| `last_name` | Last name |
| `phone` | Phone |
| `email` | Email |
| `details` | Notes / description |
| `source` | Lead source |
| `submitted_at` | Timestamp |
| `page_url` | Page URL |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Form shows error on submit | Confirm `PUBLIC_MAKE_WEBHOOK_URL` is set in GitHub Actions secrets and workflow re-ran |
| Make scenario never runs | Scenario must be ON; webhook URL must match `.env` exactly |
| Email works, HCP does not | Use error-handler alert; import from Google Sheet |
| CORS error in browser | Make webhooks accept cross-origin POSTs by default; verify URL is the Custom Webhook, not a different module |

---

## Zapier fallback (only if Make + HCP fails)

If Housecall Pro is unavailable in Make, create a Zapier Zap:

- Trigger: Webhooks by Zapier → Catch Hook
- Actions: Gmail send + Google Sheets row + Housecall Pro (if Zapier has it)

Point the website webhook URL to Zapier instead. Only one webhook URL can be active — use Make OR Zapier, not both, unless you chain them.
