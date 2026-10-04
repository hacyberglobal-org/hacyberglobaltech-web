export const RECAPTCHA_SITE_KEY = "6LftgN0tAAAAAEOGlM-Q6M9UUonT12BvtdjIAyJY";

export const RECAPTCHA_SCRIPT_SRC = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`;

declare global {
  interface Window {
    grecaptcha?: {
      enterprise?: {
        ready: (cb: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

export async function executeRecaptcha(action: string): Promise<string> {
  const enterprise = window.grecaptcha?.enterprise;
  if (!enterprise) {
    throw new Error("Security check is still loading. Wait a moment and try again.");
  }
  await new Promise<void>((resolve) => {
    enterprise.ready(() => resolve());
  });
  const token = await enterprise.execute(RECAPTCHA_SITE_KEY, { action });
  if (!token) {
    throw new Error("Security check failed. Refresh the page and try again.");
  }
  return token;
}
