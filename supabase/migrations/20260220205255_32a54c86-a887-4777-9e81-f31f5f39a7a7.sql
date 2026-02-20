-- Rate-limit trigger: max 5 newsletter signups per minute globally
CREATE OR REPLACE FUNCTION public.check_newsletter_rate_limit()
RETURNS TRIGGER AS $$
BEGIN
  IF (SELECT COUNT(*) FROM public.newsletter_signups WHERE created_at > now() - interval '1 minute') >= 5 THEN
    RAISE EXCEPTION 'Rate limit exceeded. Please try again later.' USING ERRCODE = 'P0001';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER newsletter_rate_limit
BEFORE INSERT ON public.newsletter_signups
FOR EACH ROW
EXECUTE FUNCTION public.check_newsletter_rate_limit();

-- Rate-limit trigger: max 5 corporate inquiries per minute globally
CREATE OR REPLACE FUNCTION public.check_inquiry_rate_limit()
RETURNS TRIGGER AS $$
BEGIN
  IF (SELECT COUNT(*) FROM public.corporate_inquiries WHERE created_at > now() - interval '1 minute') >= 5 THEN
    RAISE EXCEPTION 'Rate limit exceeded. Please try again later.' USING ERRCODE = 'P0001';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER inquiry_rate_limit
BEFORE INSERT ON public.corporate_inquiries
FOR EACH ROW
EXECUTE FUNCTION public.check_inquiry_rate_limit();