import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Flourish } from "@/components/site/ui-bits";
import { ROLE_TYPES } from "@/lib/site-content";

const searchSchema = z.object({
  mode: z.enum(["signin", "signup"]).optional(),
});

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Join MR Longevity — Member Sign In" },
      {
        name: "description",
        content:
          "Sign in or create your MR Longevity member account to access the projects board, member directory and MR Match.",
      },
      { property: "og:title", content: "Join MR Longevity" },
      {
        property: "og:description",
        content: "Create your member account to collaborate across the healthy longevity ecosystem.",
      },
    ],
  }),
  component: AuthPage,
});

const credentialsSchema = z.object({
  email: z.string().trim().email("Enter a valid email address").max(255),
  password: z.string().min(8, "Password must be at least 8 characters").max(128),
  fullName: z.string().trim().max(120).optional(),
});

function AuthPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">(search.mode ?? "signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [roleType, setRoleType] = useState("researcher");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && user) void navigate({ to: "/dashboard" });
  }, [loading, user, navigate]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const parsed = credentialsSchema.safeParse({ email, password, fullName });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email: parsed.data.email,
          password: parsed.data.password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: { full_name: parsed.data.fullName ?? "", role_type: roleType },
          },
        });
        if (error) throw error;
        toast.success("Welcome to MR Longevity");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: parsed.data.email,
          password: parsed.data.password,
        });
        if (error) throw error;
      }
      void navigate({ to: "/dashboard" });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  };

  const googleSignIn = async () => {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error("Google sign-in failed. Please try again.");
      return;
    }
    if (result.redirected) return;
    void navigate({ to: "/dashboard" });
  };


  return (
    <div className="bg-sand px-6 py-20">
      <div className="mx-auto max-w-md rounded-2xl border border-line bg-white p-8 shadow-sm">
        <h1 className="text-center font-serif text-2xl font-bold text-navy">
          {mode === "signup" ? "Join MR Longevity" : "Member sign in"}
        </h1>
        <Flourish />
        <p className="text-center text-sm text-ink-soft">
          {mode === "signup"
            ? "Create your member profile to publish projects and be matched with collaborators."
            : "Sign in to reach the projects board, member directory and MR Match."}
        </p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          {mode === "signup" && (
            <>
              <div>
                <Label htmlFor="fullName">Full name</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  maxLength={120}
                  placeholder="Dr. Elena Marsh"
                />
              </div>
              <div>
                <Label htmlFor="roleType">I am a…</Label>
                <select
                  id="roleType"
                  value={roleType}
                  onChange={(event) => setRoleType(event.target.value)}
                  className="mt-1 h-10 w-full rounded-md border border-input bg-white px-3 text-sm"
                >
                  {ROLE_TYPES.map((role) => (
                    <option key={role.value} value={role.value}>
                      {role.label}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              maxLength={255}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              maxLength={128}
              required
            />
          </div>
          <Button type="submit" disabled={busy} className="w-full bg-navy text-white hover:bg-navy-2">
            {busy ? "Please wait…" : mode === "signup" ? "Create account" : "Sign in"}
          </Button>
        </form>

        <Button variant="outline" className="mt-3 w-full" onClick={googleSignIn}>
          Continue with Google
        </Button>

        <button
          className="mt-5 w-full text-center text-sm text-gold"
          onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
        >
          {mode === "signup" ? "Already a member? Sign in" : "New here? Create an account"}
        </button>
      </div>
    </div>
  );
}
