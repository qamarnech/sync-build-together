import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/**
 * Links a pre-seeded member profile to the signed-in account when the
 * account email matches an approved claim. Runs server-side only: the
 * underlying database routine is no longer callable from the browser.
 */
export const claimMyProfile = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const email = String(context.claims['email'] ?? "").trim().toLowerCase();
    if (!email) return { claimed: null as string | null };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Already linked to a profile? Nothing to do.
    const { data: existing } = await supabaseAdmin
      .from("profiles")
      .select("id")
      .eq("user_id", context.userId)
      .maybeSingle();
    if (existing) return { claimed: existing.id };

    const { data: claim } = await supabaseAdmin
      .from("profile_claims")
      .select("profile_id, email")
      .ilike("email", email)
      .maybeSingle();
    if (!claim) return { claimed: null as string | null };

    const { data: updated, error } = await supabaseAdmin
      .from("profiles")
      .update({ user_id: context.userId, updated_at: new Date().toISOString() })
      .eq("id", claim.profile_id)
      .is("user_id", null)
      .select("id")
      .maybeSingle();

    if (error) {
      console.error("profile claim failed", error);
      return { claimed: null as string | null };
    }

    return { claimed: updated?.id ?? null };
  });
