import { supabase } from "@/integrations/supabase/client";

export type Profile = {
  id: string;
  user_id: string | null;
  full_name: string;
  headline: string;
  role_type: string;
  organisation: string;
  country: string;
  expertise: string[];
  needs: string[];
  bio: string;
  avatar_url: string | null;
  created_at: string;
};

export type Project = {
  id: string;
  owner_id: string;
  title: string;
  summary: string;
  description: string;
  mission_area: string;
  project_type: string;
  needed_capabilities: string[];
  status: string;
  open_to_collaborators: boolean;
  created_at: string;
};

export type ProjectMember = {
  id: string;
  project_id: string;
  profile_id: string;
  role: string;
  status: string;
  message: string;
  created_at: string;
};

export const profilesQuery = {
  queryKey: ["profiles"],
  queryFn: async (): Promise<Profile[]> => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: true });
    if (error) throw error;
    return (data ?? []) as Profile[];
  },
};

export const projectsQuery = {
  queryKey: ["projects"],
  queryFn: async (): Promise<Project[]> => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []) as Project[];
  },
};

export const projectMembersQuery = {
  queryKey: ["project_members"],
  queryFn: async (): Promise<ProjectMember[]> => {
    const { data, error } = await supabase.from("project_members").select("*");
    if (error) throw error;
    return (data ?? []) as ProjectMember[];
  },
};

export function myProfileQuery(userId: string | undefined) {
  return {
    queryKey: ["my-profile", userId ?? "anon"],
    enabled: Boolean(userId),
    queryFn: async (): Promise<Profile | null> => {
      if (!userId) return null;
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();
      if (error) throw error;
      return (data as Profile | null) ?? null;
    },
  };
}
