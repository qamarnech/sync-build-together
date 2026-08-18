
CREATE TYPE public.app_role AS ENUM ('admin','moderator','member');

CREATE TABLE public.profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid UNIQUE,
  full_name text NOT NULL DEFAULT '',
  headline text NOT NULL DEFAULT '',
  role_type text NOT NULL DEFAULT 'researcher',
  organisation text NOT NULL DEFAULT '',
  country text NOT NULL DEFAULT '',
  expertise text[] NOT NULL DEFAULT '{}',
  needs text[] NOT NULL DEFAULT '{}',
  bio text NOT NULL DEFAULT '',
  avatar_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members can view profiles" ON public.profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users insert own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users delete own profile" ON public.profiles FOR DELETE TO authenticated USING (user_id = auth.uid());

CREATE TABLE public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  summary text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  mission_area text NOT NULL DEFAULT 'Biological Age',
  project_type text NOT NULL DEFAULT 'Research collaboration',
  needed_capabilities text[] NOT NULL DEFAULT '{}',
  status text NOT NULL DEFAULT 'Discovery',
  open_to_collaborators boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.projects TO authenticated;
GRANT ALL ON public.projects TO service_role;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members can view projects" ON public.projects FOR SELECT TO authenticated USING (true);
CREATE POLICY "Owners insert projects" ON public.projects FOR INSERT TO authenticated
  WITH CHECK (owner_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));
CREATE POLICY "Owners update projects" ON public.projects FOR UPDATE TO authenticated
  USING (owner_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()))
  WITH CHECK (owner_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));
CREATE POLICY "Owners delete projects" ON public.projects FOR DELETE TO authenticated
  USING (owner_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

CREATE TABLE public.project_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  profile_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  role text NOT NULL DEFAULT 'Collaborator',
  status text NOT NULL DEFAULT 'interested',
  message text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (project_id, profile_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.project_members TO authenticated;
GRANT ALL ON public.project_members TO service_role;
ALTER TABLE public.project_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members can view memberships" ON public.project_members FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users join projects" ON public.project_members FOR INSERT TO authenticated
  WITH CHECK (profile_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));
CREATE POLICY "Owners manage requests" ON public.project_members FOR UPDATE TO authenticated
  USING (project_id IN (SELECT p.id FROM public.projects p JOIN public.profiles pr ON pr.id = p.owner_id WHERE pr.user_id = auth.uid()))
  WITH CHECK (project_id IN (SELECT p.id FROM public.projects p JOIN public.profiles pr ON pr.id = p.owner_id WHERE pr.user_id = auth.uid()));
CREATE POLICY "Users or owners remove membership" ON public.project_members FOR DELETE TO authenticated
  USING (
    profile_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
    OR project_id IN (SELECT p.id FROM public.projects p JOIN public.profiles pr ON pr.id = p.owner_id WHERE pr.user_id = auth.uid())
  );

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users view own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER projects_updated_at BEFORE UPDATE ON public.projects FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, role_type)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', ''), COALESCE(NEW.raw_user_meta_data->>'role_type', 'researcher'))
  ON CONFLICT (user_id) DO NOTHING;
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'member') ON CONFLICT DO NOTHING;
  RETURN NEW;
END; $$;

CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

INSERT INTO public.profiles (id, full_name, headline, role_type, organisation, country, expertise, needs, bio) VALUES
('11111111-1111-4111-8111-111111111101','Dr. Elena Marsh','Cellular senescence researcher','researcher','University of Cambridge','United Kingdom','{"Cellular Senescence","Ageing Biology","Biomarkers"}','{"Clinical validation","Funding"}','Studies senescent-cell burden and its links to functional decline.'),
('11111111-1111-4111-8111-111111111102','Dr. Wei Chen','Translational geroscience clinician','clinician','Shanghai Longevity Institute','China','{"Clinical Trials","Metabolic Ageing","Preventive Health"}','{"Biomarker laboratory","Research partners"}','Runs early-phase clinical studies on metabolic interventions.'),
('11111111-1111-4111-8111-111111111103','Amara Osei','Founder, biological age diagnostics','innovator','EpiClock Bio','United Kingdom','{"Diagnostics","Biological Age","AI Models of Ageing"}','{"Clinical partners","Regulatory expertise"}','Building multi-omic biological age tests for preventive care.'),
('11111111-1111-4111-8111-111111111104','James Whitfield','Translational capital for healthy longevity','investor','Northline Ventures','United Kingdom','{"Funding","Translation","Commercialisation"}','{"Validated technologies"}','Invests in validated healthspan technologies at Series A.'),
('11111111-1111-4111-8111-111111111105','Dr. Priya Nair','Public health and population impact','public-health','NHS Population Health Unit','United Kingdom','{"Population Impact","Preventive Health","Data Standards"}','{"Real-world evidence partners"}','Works on scaling prevention programmes across populations.'),
('11111111-1111-4111-8111-111111111106','Sofia Almeida','Immune ageing and regenerative medicine','researcher','Lisbon Institute of Ageing','Portugal','{"Immune Ageing","Regenerative Medicine"}','{"Clinical validation","AI modelling"}','Investigates immune resilience across the lifespan.');

INSERT INTO public.projects (id, owner_id, title, summary, description, mission_area, project_type, needed_capabilities, status, open_to_collaborators) VALUES
('22222222-2222-4222-8222-222222222201','11111111-1111-4111-8111-111111111101','Senescence biomarker panel for early functional decline','A validated panel linking senescent-cell burden to measurable loss of function in adults over 55.','We have preclinical evidence and a candidate panel of six markers. We are seeking a clinical partner to run a 200-participant observational study and a laboratory able to standardise assays across sites.','Cellular Senescence','Research collaboration','{"Clinical Trials","Biomarkers","Funding"}','Clinical Validation',true),
('22222222-2222-4222-8222-222222222202','11111111-1111-4111-8111-111111111103','Multi-omic biological age clock for preventive clinics','Turning a research-grade biological age model into a clinic-ready test with clear evidence labelling.','The model performs well in retrospective cohorts. Next steps are prospective validation, regulatory pathway mapping in the UK, and integration into preventive clinic workflows.','Biological Age','Translation','{"Regulatory expertise","Clinical Trials","AI Models of Ageing"}','Demonstration',true),
('22222222-2222-4222-8222-222222222203','11111111-1111-4111-8111-111111111102','China–UK metabolic ageing trial corridor','A shared protocol for early-phase metabolic intervention studies run in parallel across China and the UK.','Aligning inclusion criteria, endpoints and data standards so results are comparable across both environments, with governance agreed up front.','Metabolic Ageing','International partnership','{"Data Standards","Clinical Trials","Governance"}','Scientific Validation',true),
('22222222-2222-4222-8222-222222222204','11111111-1111-4111-8111-111111111105','Population healthspan measurement framework','Defining a small set of healthspan indicators that can be measured routinely at population scale.','Working with clinicians, statisticians and data engineers to agree indicators covering movement, metabolic health, cognition and social connection.','Population Impact','Public health programme','{"Data Standards","Population Impact","Real-world evidence"}','Discovery',true),
('22222222-2222-4222-8222-222222222205','11111111-1111-4111-8111-111111111106','Immune resilience index across the lifespan','Building an interpretable index of immune ageing from existing cohort data.','Seeking AI/ML collaborators and access to longitudinal immune datasets to test whether the index predicts infection outcomes and recovery.','Immune Ageing','Research collaboration','{"AI Models of Ageing","Biomarkers"}','Discovery',true);

INSERT INTO public.project_members (project_id, profile_id, role, status) VALUES
('22222222-2222-4222-8222-222222222201','11111111-1111-4111-8111-111111111102','Clinical partner','accepted'),
('22222222-2222-4222-8222-222222222202','11111111-1111-4111-8111-111111111104','Investor','interested'),
('22222222-2222-4222-8222-222222222203','11111111-1111-4111-8111-111111111105','Public health advisor','accepted');
