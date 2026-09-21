import {
  Check,
  ChevronRight,
  CircleCheck,
  ExternalLink,
  FileText,
  Headphones,
  Info,
  LineChart,
  Rocket,
  Send,
  Settings,
  Shield,
  ShieldCheck,
  Smartphone,
  UserRound,
} from "lucide-react";
import { LogoMark } from "@/components/brand-marks";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SupportSheet } from "@/components/support-sheet";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/content";
import { useSite } from "@/lib/site-context";
import { cn } from "@/lib/utils";

const featureIcons = [Shield, UserRound, Smartphone, Headphones] as const;
const stepIcons = [Settings, FileText, ShieldCheck, Rocket, LineChart, CircleCheck] as const;

export function HomePage() {
  return (
    <div id="top" className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <main>
        <Hero />
        <ProviderSection />
        <ProcessSection />
        <CtaSection />
      </main>
      <SiteFooter />
      <SupportSheet />
    </div>
  );
}

function Hero() {
  const { t, openSupport } = useSite();
  const h = t.hero;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-70" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full bg-[radial-gradient(ellipse_at_70%_40%,rgb(11_95_255/0.18),transparent_55%)] lg:w-3/5" />
      <img
        src="/images/hero.jpg"
        alt=""
        className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[58%] object-cover object-[32%_18%] lg:block"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg from-0% via-bg/80 via-42% to-transparent to-78%" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-accent">
            <Shield className="size-3.5" />
            {h.badge}
          </div>
          <h1 className="mt-5 font-display text-[2.15rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]">
            <span className="text-fg">{h.h1a}</span>
            <br />
            <span className="text-fg">{h.h1b}</span>
            <br />
            <span className="text-gradient">{h.h1c}</span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            {h.body}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {h.features.map((feat, i) => {
              const Icon = featureIcons[i];
              return (
                <button
                  key={feat.title}
                  type="button"
                  onClick={() => openSupport(feat.title)}
                  className="group flex flex-col items-start gap-2 text-left"
                >
                  <span className="flex size-12 items-center justify-center rounded-full border border-line bg-surface/40 text-accent shadow-[var(--shadow-card)] transition-[box-shadow,border-color] duration-200 group-hover:border-line-strong group-hover:shadow-[var(--shadow-glow)]">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-[13px] font-semibold leading-tight text-fg">
                    {feat.title}
                    <br />
                    {feat.sub}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[320px] sm:min-h-[420px]">
          <img
            src="/images/hero.jpg"
            alt="HACYBERGLOBALTECH operator"
            className="h-[340px] w-full rounded-2xl object-cover object-[32%_16%] shadow-[var(--shadow-card)] outline outline-1 -outline-offset-1 outline-white/10 sm:h-[440px] lg:hidden"
          />
          <div className="absolute top-4 right-2 w-[190px] rounded-xl border border-line bg-surface/55 p-4 shadow-[var(--shadow-glow)] backdrop-blur-xl sm:right-6 sm:top-8 sm:w-[210px]">
            <div className="mx-auto mb-2 flex size-10 items-center justify-center rounded-full border border-accent/40 text-accent">
              <CircleCheck className="size-5" />
            </div>
            <p className="text-center font-display text-lg font-bold tracking-wide text-fg">
              {h.verified}
            </p>
            <p className="text-center text-[10px] font-semibold tracking-[0.16em] text-muted">
              {h.verifiedSub}
            </p>
          </div>
          <div className="absolute right-2 bottom-6 w-[210px] rounded-xl border border-line bg-surface/55 p-4 shadow-[var(--shadow-glow)] backdrop-blur-xl sm:right-8 sm:bottom-10 sm:w-[230px]">
            <div className="mb-3 flex size-10 items-center justify-center rounded-full border border-accent/40 text-accent">
              <Rocket className="size-5" />
            </div>
            <ul className="space-y-1.5">
              {h.checks.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[12px] text-fg">
                  <Check className="size-3.5 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProviderSection() {
  const { t } = useSite();
  const p = t.provider;
  const w = t.why;

  return (
    <section id="about" className="relative px-4 py-6 sm:px-6">
      <div className="mx-auto grid max-w-[1280px] gap-4 lg:grid-cols-[1.55fr_0.9fr]">
        <article className="glass-panel rounded-2xl p-5 sm:p-6">
          <span className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold tracking-[0.14em] text-accent">
            {p.badge}
          </span>
          <div className="mt-5 grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
            <div className="flex items-center gap-3">
              <LogoMark className="size-16" />
              <div>
                <p className="font-display text-2xl font-semibold text-fg">{p.name}</p>
                <p className="text-xs text-muted">{p.tag}</p>
              </div>
            </div>
            <div className="md:border-l md:border-line md:pl-6">
              <h2 className="font-display text-lg font-semibold text-fg">{p.powered}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              <a
                href={CONTACT.fadv}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-bright"
              >
                {p.learn}
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
          <div className="mt-5 flex items-start gap-2 border-t border-line pt-4 text-[13px] leading-relaxed text-muted">
            <Info className="mt-0.5 size-4 shrink-0 text-accent" />
            <p>{p.disclaimer}</p>
          </div>
        </article>

        <article className="glass-panel rounded-2xl p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-accent" />
            <h2 className="font-display text-xl font-semibold text-fg">{w.title}</h2>
          </div>
          <ul className="mt-5 space-y-3">
            {w.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-fg">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm font-semibold text-accent">{w.footer}</p>
        </article>
      </div>
    </section>
  );
}

function ProcessSection() {
  const { t, openSupport } = useSite();
  const p = t.process;

  return (
    <section id="process" className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-md border border-line text-accent">
            <FileText className="size-4" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold text-fg">{p.title}</h2>
            <p className="text-sm text-muted">{p.subtitle}</p>
          </div>
        </div>
        <div className="grid gap-4 overflow-visible sm:grid-cols-2 xl:grid-cols-6">
          {p.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => openSupport(step.title)}
                className={cn(
                  "group relative rounded-xl border border-line bg-surface/40 p-4 text-left",
                  "transition-[box-shadow,border-color,transform] duration-200",
                  "hover:border-line-strong hover:shadow-[var(--shadow-glow)]",
                )}
              >
                <span className="absolute top-3 left-3 flex size-6 items-center justify-center rounded-full border border-line text-[11px] font-bold text-muted">
                  {i + 1}
                </span>
                {i < p.steps.length - 1 ? (
                  <span className="pointer-events-none absolute top-1/2 -right-3 z-10 hidden -translate-y-1/2 text-accent xl:block">
                    <ChevronRight className="size-5" />
                  </span>
                ) : null}
                <div className="mt-4 flex flex-col items-center text-center">
                  <span className="mb-3 flex size-12 items-center justify-center rounded-full border border-line text-accent">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-sm font-semibold text-fg">{step.title}</h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted">{step.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  const { t, openSupport } = useSite();
  const c = t.cta;

  return (
    <section className="px-4 pb-10 sm:px-6">
      <div className="glass-panel mx-auto grid max-w-[1280px] items-center gap-6 rounded-2xl p-4 sm:p-6 lg:grid-cols-[0.9fr_1.4fr_0.8fr]">
        <img
          src="/images/laptop.jpg"
          alt="Secure HACYBERGLOBALTECH workstation"
          className="h-40 w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-white/10 sm:h-44"
        />
        <div className="lg:px-4">
          <p className="text-xs font-bold tracking-[0.16em] text-accent">{c.kicker}</p>
          <h2 className="mt-1 font-display text-2xl font-bold text-fg sm:text-3xl">{c.title}</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{c.body}</p>
          <Button size="lg" className="mt-5" onClick={() => openSupport()}>
            {c.button}
            <Send className="size-4" />
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center border-t border-line pt-4 text-center lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
          <LogoMark className="size-14" />
          <p className="mt-2 font-display text-lg font-semibold text-fg">HACYBERGLOBALTECH</p>
          <p className="text-[11px] text-muted">Driver Support / Account Assistance</p>
          <p className="mt-3 text-sm font-semibold text-muted">{c.trust}</p>
        </div>
      </div>
    </section>
  );
}
