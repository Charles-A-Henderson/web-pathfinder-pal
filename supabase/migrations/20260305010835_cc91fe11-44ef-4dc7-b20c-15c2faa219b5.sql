
CREATE TABLE public.teacher_training_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  newsletter_opt_in BOOLEAN NOT NULL DEFAULT false,
  location TEXT,
  motivation TEXT,
  meditation_experience TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.teacher_training_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on teacher_training_applications"
  ON public.teacher_training_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
