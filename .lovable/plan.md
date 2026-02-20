

# Security Hardening Plan (Revised)

Public marketing site with newsletter signup, corporate inquiry form, and AI chatbot. All user input is untrusted. Default posture: deny-by-default.

---

## 1. Risk Summary

| # | Issue | Severity | Notes |
|---|-------|----------|-------|
| 1 | Forms silently discard data (newsletter + inquiry) | HIGH | Zero persistence; users think they subscribed |
| 2 | Chat edge function accepts unbounded input, no rate limit | HIGH | Cost exhaustion, abuse vector |
| 3 | CORS on chat function is `*` -- any origin can consume AI credits | MEDIUM | Should be restricted to known domains |
| 4 | No server-side validation on chat message shape/size | MEDIUM | Malformed or oversized payloads forwarded to AI gateway |
| 5 | ReactMarkdown renders AI links without protocol filtering | MEDIUM | Prompt injection could produce `javascript:` links |
| 6 | No security meta tags (Referrer-Policy, nosniff) | MEDIUM | Clickjacking, MIME-sniffing |
| 7 | No client-side length limits on form inputs | LOW | Oversized data once persistence is added |
| 8 | Deno std lib pinned at old version (0.168.0) | LOW | Potential known issues |
| 9 | Database has zero tables, zero RLS | INFO | Must create with RLS from the start |

---

## 2. Implementation Batches

### Batch 1 -- Data Persistence + RLS (deny-by-default)

**Database migration:**

- Create `newsletter_signups` table (`id uuid PK`, `email text NOT NULL`, `created_at timestamptz`)
- Create `corporate_inquiries` table (`id uuid PK`, `first_name`, `last_name`, `email`, `company`, `team_size`, `message`, `created_at`)
- Enable RLS on both tables
- Single policy per table: `INSERT` only for `anon` role, no SELECT/UPDATE/DELETE
- No data is readable from the client -- admin access only via backend dashboard

**Frontend -- `NewsletterSignup.tsx`:**

- Add zod schema: email format, max 255 chars, trimmed
- Insert into `newsletter_signups` via Supabase client on submit
- Loading spinner, success state, error toast
- Add `maxLength={255}` on input

**Frontend -- `InquiryForm.tsx`:**

- Add zod schema: names max 100, email max 255, company max 200, message max 2000, all trimmed
- Insert into `corporate_inquiries` via Supabase client on submit
- Loading spinner, error toast
- Add `maxLength` attributes on all inputs/textarea

### Batch 2 -- Chat Edge Function Hardening

**`supabase/functions/chat/index.ts`:**

- **Input validation:** Reject if `messages` is not an array, cap at 50 items, each must have `role` in `["user","assistant"]` and `content` as string under 4000 chars. Return 400 on violation.
- **Rate limiting:** Simple in-memory IP-based limiter, 20 requests/minute. Return 429 when exceeded.
- **CORS restriction:** Replace `*` with an allowlist check against the request `Origin` header. Allow `https://web-pathfinder-pal.lovable.app` and the preview domain. Reject others.
- **Deno std update:** Bump import from `@0.168.0` to `@0.208.0`.

### Batch 3 -- Frontend Hardening

**`src/components/Chatbot.tsx`:**

- Add `maxLength={500}` on the chat input field
- Override `ReactMarkdown` link component to block non-`https://`/`http://` protocols (renders as plain text instead)

**`index.html`:**

- Add `<meta http-equiv="X-Content-Type-Options" content="nosniff">`
- Add `<meta name="referrer" content="strict-origin-when-cross-origin">`

---

## 3. Verification Checklist

| Check | How to verify |
|-------|---------------|
| Newsletter persists | Submit form, query `newsletter_signups` table from backend |
| Inquiry persists | Submit form, query `corporate_inquiries` table from backend |
| RLS blocks reads | Run `supabase.from('newsletter_signups').select()` from browser console -- must return empty array |
| RLS blocks deletes | Attempt delete from browser console -- must fail |
| Chat rejects bad input | POST malformed JSON and oversized messages via curl -- expect 400 |
| Chat rate limit works | Send 25 rapid requests -- expect 429 after ~20 |
| CORS blocks foreign origin | Call chat endpoint from a different origin -- expect CORS rejection |
| Markdown links safe | Prompt-inject chatbot to output `javascript:alert(1)` link -- must render as plain text |
| Form validation | Submit empty and oversized values -- client rejects before network call |
| Meta tags present | View page source, confirm `nosniff` and `referrer` meta tags |

