REVOKE ALL ON public.contact_messages FROM anon;
REVOKE ALL ON public.contact_messages FROM authenticated;
GRANT ALL ON public.contact_messages TO service_role;