import { useEffect, useState } from "react";
import { ChevronDown, Globe, Menu, Send, X } from "lucide-react";
import { BrandLockup } from "@/components/brand-marks";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSite } from "@/lib/site-context";
import { cn, scrollToId } from "@/lib/utils";

export function SiteHeader() {
  const { t, lang, setLang, openSupport } = useSite();
  const [mobileOpen, setMobileOpen] = useState(false);

  function go(id: string) {
    setMobileOpen(false);
    scrollToId(id);
  }

  useEffect(() => {
    if (!mobileOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/75 backdrop-blur-xl">
      <a
        href="#main"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          scrollToId("main");
          document.getElementById("main")?.focus();
        }}
      >
        {t.a11y.skip}
      </a>
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-6">
        <BrandLockup />

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t.a11y.primaryNav}>
          <NavLink onClick={() => go("top")}>{t.nav.home}</NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="inline-flex min-h-11 items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-fg"
              >
                {t.nav.services}
                <ChevronDown className="size-3.5" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              {t.servicesMenu.map((item) => (
                <DropdownMenuItem
                  key={item.id}
                  onSelect={() => {
                    openSupport(item.label);
                  }}
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <NavLink onClick={() => go("about")}>{t.nav.about}</NavLink>
          <NavLink onClick={() => openSupport()}>{t.nav.support}</NavLink>
          <NavLink onClick={() => go("contact")}>{t.nav.contact}</NavLink>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="hidden items-center gap-1.5 text-xs font-semibold text-muted sm:flex"
            role="group"
            aria-label={t.a11y.language}
          >
            <Globe className="size-4 text-accent" aria-hidden="true" />
            <button
              type="button"
              className={cn(
                "min-h-11 min-w-11 rounded-full px-1.5 py-1",
                lang === "en" ? "text-fg" : "hover:text-fg",
              )}
              aria-pressed={lang === "en"}
              aria-label={t.a11y.english}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span className="text-line-strong" aria-hidden="true">
              |
            </span>
            <button
              type="button"
              className={cn(
                "min-h-11 min-w-11 rounded-full px-1.5 py-1",
                lang === "es" ? "text-fg" : "hover:text-fg",
              )}
              aria-pressed={lang === "es"}
              aria-label={t.a11y.spanish}
              onClick={() => setLang("es")}
            >
              ES
            </button>
          </div>
          <Button
            size="sm"
            className="h-9 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm"
            aria-label={t.nav.getSupport}
            onClick={() => openSupport()}
          >
            <span className="hidden sm:inline">{t.nav.getSupport}</span>
            <Send className="size-3.5" aria-hidden="true" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={mobileOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <div id="mobile-nav" className="border-t border-line bg-bg/95 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label={t.a11y.primaryNav}>
            <MobileLink onClick={() => go("top")}>{t.nav.home}</MobileLink>
            {t.servicesMenu.map((item) => (
              <MobileLink
                key={item.id}
                onClick={() => {
                  setMobileOpen(false);
                  openSupport(item.label);
                }}
              >
                {item.label}
              </MobileLink>
            ))}
            <MobileLink onClick={() => go("about")}>{t.nav.about}</MobileLink>
            <MobileLink
              onClick={() => {
                setMobileOpen(false);
                openSupport();
              }}
            >
              {t.nav.support}
            </MobileLink>
            <MobileLink onClick={() => go("contact")}>{t.nav.contact}</MobileLink>
            <div className="mt-3 flex items-center justify-between">
              <div
                className="flex items-center gap-2 text-sm font-semibold"
                role="group"
                aria-label={t.a11y.language}
              >
                <Globe className="size-4 text-accent" aria-hidden="true" />
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  aria-pressed={lang === "en"}
                  aria-label={t.a11y.english}
                  className={cn("min-h-11 min-w-11", lang === "en" ? "text-fg" : "text-muted")}
                >
                  EN
                </button>
                <span className="text-muted" aria-hidden="true">
                  |
                </span>
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  aria-pressed={lang === "es"}
                  aria-label={t.a11y.spanish}
                  className={cn("min-h-11 min-w-11", lang === "es" ? "text-fg" : "text-muted")}
                >
                  ES
                </button>
              </div>
              <Button
                size="sm"
                onClick={() => {
                  setMobileOpen(false);
                  openSupport();
                }}
              >
                {t.nav.getSupport}
                <Send className="size-3.5" aria-hidden="true" />
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-fg"
    >
      {children}
    </button>
  );
}

function MobileLink({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-h-11 rounded-md px-3 py-3 text-left text-sm font-medium text-fg hover:bg-surface/70"
    >
      {children}
    </button>
  );
}
