-- 1) Lock down elevated helper functions from direct client calls
REVOKE ALL ON FUNCTION public.claim_my_profile() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.claim_my_profile() TO service_role;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;

-- 2) Contact messages stay server-only
REVOKE ALL ON public.contact_messages FROM anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;
DROP POLICY IF EXISTS "service role manages contact messages" ON public.contact_messages;
CREATE POLICY "service role manages contact messages"
  ON public.contact_messages FOR ALL TO service_role
  USING (true) WITH CHECK (true);

-- 3) Member directory readable only by signed-in members who have a profile
DROP POLICY IF EXISTS "Members can view profiles" ON public.profiles;
CREATE POLICY "Members can view profiles"
  ON public.profiles FOR SELECT TO authenticated
  USING (
    user_id = auth.uid()
    OR EXISTS (SELECT 1 FROM public.profiles me WHERE me.user_id = auth.uid())
  );

-- 4) Membership rows visible only to the applicant or the project owner
DROP POLICY IF EXISTS "Members can view memberships" ON public.project_members;
CREATE POLICY "Members can view memberships"
  ON public.project_members FOR SELECT TO authenticated
  USING (
    profile_id IN (SELECT p.id FROM public.profiles p WHERE p.user_id = auth.uid())
    OR project_id IN (
      SELECT pr.id FROM public.projects pr
      JOIN public.profiles po ON po.id = pr.owner_id
      WHERE po.user_id = auth.uid()
    )
  );