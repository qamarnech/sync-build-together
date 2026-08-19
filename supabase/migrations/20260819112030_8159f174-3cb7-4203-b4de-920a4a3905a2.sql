
CREATE TABLE IF NOT EXISTS public.profile_claims (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  email text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.profile_claims TO service_role;
ALTER TABLE public.profile_claims ENABLE ROW LEVEL SECURITY;

INSERT INTO public.profiles (
  full_name, headline, role_type, organisation, country, expertise, needs, bio
) VALUES (
  'Professor Qiang Fu 付强',
  'Longevity Scientist · Biotech Entrepreneur · MR Longevity Founder',
  'researcher',
  'MR Longevity · Institute of Aging Medicine',
  'China · UK · Global',
  ARRAY['Ageing Biology','Regenerative Medicine','Translation','Biomarkers','AI Models of Ageing','Commercialisation','Preventive Health','Immune Ageing'],
  ARRAY['Clinical Trials','Funding','Data Standards','Regulatory expertise','Diagnostics','Manufacturing','Real-world evidence'],
  E'Professor Qiang Fu is a scientist and biotechnology entrepreneur working to understand the biology of ageing and translate scientific discoveries into practical solutions for healthier, longer lives.\n\nHis work spans cellular senescence, pharmacology, regenerative medicine, stem-cell biology, reproductive ageing and longevity biotechnology. Alongside fundamental research into the mechanisms of ageing, his focus is increasingly translational: identifying promising interventions, validating them scientifically and creating pathways through which research can become technologies, products and health solutions.\n\nAs a founder of MR Longevity, his wider ambition is to build an international ecosystem connecting science, people, technology, healthcare, data and investment to accelerate progress in healthy longevity.\n\nMission — turn ageing science into healthier, longer human lives. Scientific discovery alone is not enough: promising research must be connected with the people, infrastructure, technology, capital and real-world environments required to validate and translate it.'
)
ON CONFLICT DO NOTHING;

INSERT INTO public.profile_claims (profile_id, email)
SELECT id, 'fudanielove@gmail.com' FROM public.profiles WHERE full_name = 'Professor Qiang Fu 付强'
ON CONFLICT (email) DO NOTHING;

CREATE OR REPLACE FUNCTION public.claim_my_profile()
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  claimed uuid;
  caller_email text;
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN NULL;
  END IF;
  caller_email := lower(coalesce(auth.jwt() ->> 'email', ''));
  IF caller_email = '' THEN
    RETURN NULL;
  END IF;

  UPDATE public.profiles p
     SET user_id = auth.uid(), updated_at = now()
    FROM public.profile_claims c
   WHERE c.profile_id = p.id
     AND lower(c.email) = caller_email
     AND p.user_id IS NULL
     AND NOT EXISTS (SELECT 1 FROM public.profiles x WHERE x.user_id = auth.uid())
  RETURNING p.id INTO claimed;

  RETURN claimed;
END;
$$;

REVOKE ALL ON FUNCTION public.claim_my_profile() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.claim_my_profile() TO authenticated;
