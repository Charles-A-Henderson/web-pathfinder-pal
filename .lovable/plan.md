# Test: Stripe Checkout for Private Coaching

A focused, low-risk test of Lovable's built-in Stripe payments using **only Private Coaching** as the test product. Once you see the full flow work end-to-end, we can decide where else to apply it (MTT, Costa Rica, 30 Days, etc.).

## What you'll see when this is live

1. On `/programs`, the Private Coaching card's **"Book a Session"** button becomes a real checkout trigger.
2. Clicking it opens a small "Choose your session" dialog with three options:
   - Single session — $150
   - 4-session package — $560 (save $40)
   - 8-session package — $1,080 (save $120)
3. Selecting one and clicking **Pay** redirects to a hosted Stripe Checkout page (Stripe-hosted, secure, mobile-friendly).
4. After payment → redirected to a new `/pay/success` page ("Thanks — we'll email you within 24 hrs to schedule").
5. If they cancel → redirected to `/pay/cancelled` with a friendly retry option.
6. A record of every successful payment is saved to your backend so you can see who paid for what.

## Why Private Coaching is the right test

- **Low stakes**: small ticket size, no application gating expected by users
- **Self-contained**: no scholarships, cohorts, or acceptance workflow
- **Mirrors real future use**: same mechanics will power 30 Days and Costa Rica later
- **Easy to test with Stripe test cards** before flipping to live mode

## What gets built

### 1. Stripe enabled on the project
Lovable's built-in Stripe payments — no Stripe account setup needed from you upfront, no API keys to manage. (You'll be prompted with a short form during enablement.)

### 2. New backend pieces
- **`payments` table** — records each completed purchase: customer email, product, amount, Stripe session ID, timestamp
- **`create-checkout` edge function** — receives the chosen session type from the website, creates a Stripe Checkout session, returns the redirect URL
- **`verify-payment` edge function** — called from the success page to confirm the Stripe session and write the payment record

### 3. New frontend pieces
- **`CoachingCheckoutDialog`** — small modal with the 3 session-package options and a Pay button
- **`/pay/success`** — confirmation page that verifies the Stripe session and shows a thank-you with next steps
- **`/pay/cancelled`** — friendly "no charge made" page with a button to retry or contact you
- Wire the existing **"Book a Session"** button on `/programs` to open the new dialog instead of routing to `/about`

### 4. No other pages change
MTT keeps Apply Now + Join Us as today. Costa Rica, Corporate, 30 Days — all untouched. This test changes **one button**.

## How testing will work

After build, you'll be able to:
- Click Book a Session → pick a package → land on Stripe Checkout
- Use Stripe's test card `4242 4242 4242 4242` (any future expiry, any CVC) to simulate a purchase
- See the success page render
- Verify a row appears in the `payments` table

When you're ready to accept real money, we flip Stripe from test to live mode (one toggle).

## Technical details

**Stack**: Lovable built-in Stripe payments (not BYOK), Supabase Edge Functions, Postgres table with RLS.

**Files added**:
- `supabase/functions/create-checkout/index.ts`
- `supabase/functions/verify-payment/index.ts`
- `src/components/programs/CoachingCheckoutDialog.tsx`
- `src/pages/PaySuccess.tsx`, `src/pages/PayCancelled.tsx`
- DB migration creating `payments` table with INSERT-only RLS for the service role; `SELECT` restricted (admins only later)

**Files edited**:
- `src/components/programs/ProgramsPage.tsx` — Private Coaching card's CTA opens the dialog
- `src/App.tsx` — register `/pay/success` and `/pay/cancelled` routes

**Stripe Checkout settings**: hosted mode, customer email collected by Stripe, `payment` mode (one-time, not subscription), USD, success/cancel URLs point at the new pages with `{CHECKOUT_SESSION_ID}` appended.

**Security**: edge functions use the Stripe secret server-side only; the website never sees it. The `payments` table is write-only from the verify function via service role; no public reads.

## Questions before I build

1. Are the three coaching packages above (1 / 4 / 8 sessions at $150 / $560 / $1,080) close to what you actually offer? If not, just tell me the right tiers and prices.
2. Should the success page promise a scheduling email within **24 hours**, or do you have a Calendly / scheduling link I should drop in instead so they can book immediately?