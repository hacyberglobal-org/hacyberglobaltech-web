import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteProvider } from "@/lib/site-context";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import appCss from "../styles.css?url";

const APP_NAME = "HACYBERGLOBALTECH — Digital Support & Verification Assistance";
const DESCRIPTION =
  "HACYBERGLOBALTECH provides digital support, gig platform assistance, verification guidance, technical support, and secure digital solutions.";
const CANONICAL = "https://hacyberglobaltech-web.vercel.app/";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index,follow" },
      { name: "theme-color", content: "#050A14" },
      { name: "color-scheme", content: "dark" },
    ],
    links: [
      { rel: "canonical", href: CANONICAL },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteProvider>
            <Outlet />
            <Toaster theme="dark" position="top-center" richColors />
          </SiteProvider>
        </AuthProvider>
        <Analytics />
        <Scripts />
      </body>
    </html>
  ),
});

function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center bg-bg px-6 text-fg">
      <div className="max-w-md text-center">
        <p className="text-xs font-bold tracking-[0.16em] text-accent">404</p>
        <h1 className="mt-2 font-display text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-sm text-muted">
          That page is not on HACYBERGLOBALTECH. Return home or request support.
        </p>
        <Link
          to="/"
          className="btn-gradient mt-6 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold text-white"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
