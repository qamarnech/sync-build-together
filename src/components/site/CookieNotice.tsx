import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const KEY = "mrl-cookie-notice-ack";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      // storage unavailable, stay silent
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(KEY, new Date().toISOString());
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/20 bg-navy-deep/95 px-4 py-4 backdrop-blur"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-gold-pale/80">
          We use only strictly necessary cookies to keep you signed in and secure. No tracking, no
          advertising.{" "}
          <Link to="/cookies" className="underline hover:text-gold-pale">
            Cookie notice
          </Link>{" "}
          ·{" "}
          <Link to="/privacy" className="underline hover:text-gold-pale">
            Privacy notice
          </Link>
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-gold px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-gold/90"
        >
          <X className="h-3.5 w-3.5" /> Got it
        </button>
      </div>
    </div>
  );
}
