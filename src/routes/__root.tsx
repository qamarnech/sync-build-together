import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Toaster } from "@/components/ui/sonner";
import { CookieNotice } from "@/components/site/CookieNotice";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "9OsKvYEafqPBGrJXcQKtD4uB-N-tK_IhxTRKasS5uf0",
      },
      { title: "MR. LONGEVITY, Global Healthy Longevity Mission" },
      {
        name: "description",
        content:
          "A members' mission connecting longevity researchers, clinicians, innovators, investors and partners around shared projects.",
      },
      { name: "author", content: "MR. LONGEVITY" },
      { property: "og:title", content: "MR. LONGEVITY, Global Healthy Longevity Mission" },
      {
        property: "og:description",
        content: "Connect, collaborate and build the future of healthy longevity together.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Karla:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const CHUNK_RELOAD_KEY = "chunk-reload-at";

function useStaleChunkRecovery() {
  useEffect(() => {
    const isChunkError = (message?: string) =>
      !!message &&
      (message.includes("Failed to fetch dynamically imported module") ||
        message.includes("error loading dynamically imported module") ||
        message.includes("Importing a module script failed"));

    const recover = () => {
      const last = Number(sessionStorage.getItem(CHUNK_RELOAD_KEY) ?? 0);
      // Only auto-reload once per minute to avoid reload loops.
      if (Date.now() - last < 60_000) return;
      sessionStorage.setItem(CHUNK_RELOAD_KEY, String(Date.now()));
      window.location.reload();
    };

    const onError = (event: ErrorEvent) => {
      if (isChunkError(event.message)) recover();
    };
    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      if (isChunkError(typeof reason === "string" ? reason : reason?.message)) recover();
    };
    const onPreloadError = () => recover();

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    window.addEventListener("vite:preloadError", onPreloadError);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
      window.removeEventListener("vite:preloadError", onPreloadError);
    };
  }, []);
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useStaleChunkRecovery();



  return (
    <QueryClientProvider client={queryClient}>
        <div className="flex min-h-screen flex-col bg-sand">
          <SiteHeader />
          <main className="flex-1">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          <SiteFooter />
        </div>
        <CookieNotice />
        <Toaster position="top-right" />

    </QueryClientProvider>
  );
}

