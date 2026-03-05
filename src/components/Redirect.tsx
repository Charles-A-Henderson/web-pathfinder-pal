import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface RedirectProps {
  to: string;
}

/**
 * Client-side redirect component that mimics 301 behavior for SEO crawlers.
 * - Sets a <meta> refresh tag for bots that don't execute JS
 * - Sets canonical link to the target URL
 * - Immediately navigates via React Router (replace, so back button skips this)
 */
const Redirect = ({ to }: RedirectProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // For SEO: add meta refresh and canonical before navigating
    const meta = document.createElement("meta");
    meta.httpEquiv = "refresh";
    meta.content = `0;url=${to}`;
    document.head.appendChild(meta);

    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = `${window.location.origin}${to}`;
    document.head.appendChild(link);

    // Set document title to indicate redirect
    document.title = "Redirecting… | The Path";

    // Navigate immediately (replace so old URL doesn't stay in history)
    navigate(to, { replace: true });

    return () => {
      meta.remove();
      link.remove();
    };
  }, [to, navigate]);

  // Fallback content for no-JS crawlers
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">
        Redirecting to <a href={to}>{to}</a>…
      </p>
    </div>
  );
};

export default Redirect;
