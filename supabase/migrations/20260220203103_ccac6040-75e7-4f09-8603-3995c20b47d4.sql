
-- Newsletter signups: insert-only for anon, no reads
CREATE TABLE public.newsletter_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.newsletter_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts only"
  ON public.newsletter_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Corporate inquiries: insert-only for anon, no reads
CREATE TABLE public.corporate_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  team_size text,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.corporate_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts only"
  ON public.corporate_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
