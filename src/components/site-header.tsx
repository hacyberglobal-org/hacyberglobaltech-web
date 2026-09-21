import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-6">
        <BrandLockup />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <NavLink onClick={() => go("top")}>{t.nav.home}</NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-fg">
                {t.nav.services}
                <ChevronDown className="size-3.5" />
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
          <div className="hidden items-center gap-1.5 text-xs font-semibold text-muted sm:flex">
            <Globe className="size-4 text-accent" />
            <button
              className={cn(
                "rounded-full px-1.5 py-1",
                lang === "en" ? "text-fg" : "hover:text-fg",
              )}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span className="text-line-strong">|</span>
            <button
              className={cn(
                "rounded-full px-1.5 py-1",
                lang === "es" ? "text-fg" : "hover:text-fg",
              )}
              onClick={() => setLang("es")}
            >
              ES
            </button>
          </div>
          <Button size="sm" className="h-9 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm" onClick={() => openSupport()}>
            <span className="hidden sm:inline">{t.nav.getSupport}</span>
            <Send className="size-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-line bg-bg/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
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
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Globe className="size-4 text-accent" />
                <button onClick={() => setLang("en")} className={lang === "en" ? "text-fg" : "text-muted"}>
                  EN
                </button>
                <span className="text-muted">|</span>
                <button onClick={() => setLang("es")} className={lang === "es" ? "text-fg" : "text-muted"}>
                  ES
                </button>
              </div>
              <Button size="sm" onClick={() => { setMobileOpen(false); openSupport(); }}>
                {t.nav.getSupport}
                <Send className="size-3.5" />
              </Button>
            </div>
          </div>
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
      onClick={onClick}
      className="rounded-md px-3 py-3 text-left text-sm font-medium text-fg hover:bg-surface/70"
    >
      {children}
    </button>
  );
}
