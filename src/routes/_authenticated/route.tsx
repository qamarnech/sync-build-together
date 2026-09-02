import { useEffect } from "react";
import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useAuth } from "@/hooks/useAuth";
import { claimMyProfile } from "@/lib/profile-claim.functions";

export const Route = createFileRoute("/_authenticated")({
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const claimProfile = useServerFn(claimMyProfile);

  useEffect(() => {
    if (!loading && !user) void navigate({ to: "/auth" });
  }, [loading, user, navigate]);

  useEffect(() => {
    if (!user) return;
    void claimProfile({ data: undefined }).catch(() => undefined);
  }, [user, claimProfile]);

  if (loading || !user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-sand">
        <p className="font-serif italic text-ink-mute">Checking your membership…</p>
      </div>
    );
  }

  return <Outlet />;
}
