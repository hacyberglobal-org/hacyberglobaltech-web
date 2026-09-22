import { Headphones, ChevronRight } from "lucide-react";
import {
  BrandLockup,
  InstagramIcon,
  TelegramIcon,
  TikTokIcon,
  WhatsAppIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/brand-marks";
import { CONTACT } from "@/lib/content";
import { useSite } from "@/lib/site-context";
import { cn } from "@/lib/utils";

const socials = [
  { key: "whatsapp", href: CONTACT.socials.whatsapp, Icon: WhatsAppIcon, label: "WhatsApp" },
  { key: "telegram", href: CONTACT.socials.telegram, Icon: TelegramIcon, label: "Telegram" },
  { key: "x", href: CONTACT.x, Icon: XIcon, label: "X" },
  { key: "tiktok", href: CONTACT.socials.tiktok, Icon: TikTokIcon, label: "TikTok" },
  { key: "instagram", href: CONTACT.socials.instagram, Icon: InstagramIcon, label: "Instagram" },
  { key: "youtube", href: CONTACT.socials.youtube, Icon: YouTubeIcon, label: "YouTube" },
] as const;

export function SiteFooter() {
  const { t, openSupport } = useSite();

  return (
    <footer id="contact" className="border-t border-line bg-bg">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-8 sm:px-6 md:grid-cols-[1.2fr_1.4fr_1fr_1.1fr] md:items-center">
        <BrandLockup compact />
        <div className="text-center md:text-left">
          <p className="font-display text-sm font-semibold tracking-wide text-fg">
            {t.footer.values}
          </p>
          <p className="mt-1 text-xs text-muted">{t.footer.tagline}</p>
        </div>
        <div>
          <p id="connect-heading" className="mb-2 text-xs font-medium text-muted">
            {t.footer.connect}
          </p>
          <nav className="flex flex-wrap items-center gap-2" aria-labelledby="connect-heading">
            {socials.map(({ key, href, Icon, label }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (${t.a11y.opensNewWindow})`}
                className={cn(
                  "flex size-11 items-center justify-center rounded-full border border-line bg-surface/50 text-accent",
                  "transition-[box-shadow,border-color,transform] duration-150 hover:border-line-strong hover:shadow-[var(--shadow-glow)]",
                )}
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
        <button
          type="button"
          onClick={() => openSupport()}
          className="flex min-h-11 items-center gap-3 rounded-xl border border-line bg-surface/40 px-4 py-3 text-left transition-colors hover:border-line-strong"
        >
          <span className="flex size-10 items-center justify-center rounded-full border border-line text-accent">
            <Headphones className="size-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-xs text-muted">{t.footer.help}</span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-fg">
              {t.footer.contact}
              <ChevronRight className="size-4 text-accent" aria-hidden="true" />
            </span>
          </span>
        </button>
      </div>
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-line px-4 py-4 text-xs text-muted sm:px-6 md:justify-between">
        <p>© {new Date().getFullYear()} HACYBERGLOBALTECH</p>
        <nav className="flex flex-wrap items-center justify-center gap-4" aria-label={t.footer.legal}>
          <a
            href={CONTACT.legal.privacy}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 inline-flex items-center hover:text-fg"
          >
            {t.footer.privacy}
            <span className="sr-only"> ({t.a11y.opensNewWindow})</span>
          </a>
          <a
            href={CONTACT.legal.portal}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 inline-flex items-center hover:text-fg"
          >
            {t.footer.legal}
            <span className="sr-only"> ({t.a11y.opensNewWindow})</span>
          </a>
          <a
            href={CONTACT.lead}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 inline-flex items-center hover:text-fg"
          >
            {t.footer.request}
            <span className="sr-only"> ({t.a11y.opensNewWindow})</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
