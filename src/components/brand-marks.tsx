import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo.png"
      alt=""
      className={cn("shrink-0 object-contain", className)}
      aria-hidden="true"
    />
  );
}

export function BrandLockup({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <a
      href="#top"
      className={cn("flex items-center gap-2.5", className)}
      aria-label="HACYBERGLOBALTECH home"
    >
      <LogoMark className={compact ? "size-11" : "size-14"} />
      <span className="leading-none">
        <span className="block font-display text-[15px] font-bold tracking-[0.14em] text-fg sm:text-base">
          HACYBER
        </span>
        <span className="block font-display text-[13px] font-bold tracking-[0.16em] text-accent sm:text-[15px]">
          GLOBALTECH
        </span>
      </span>
    </a>
  );
}

export function FirstAdvantageMark({ className }: { className?: string }) {
  const dots = [
    [20, 8],
    [32, 6],
    [44, 8],
    [12, 16],
    [24, 14],
    [40, 14],
    [52, 16],
    [8, 28],
    [18, 26],
    [32, 24],
    [46, 26],
    [56, 28],
    [12, 40],
    [24, 42],
    [40, 42],
    [52, 40],
    [20, 52],
    [32, 54],
    [44, 52],
  ] as const;
  return (
    <svg viewBox="0 0 64 64" className={cn("shrink-0", className)} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke="#1a4a8a" strokeWidth="1" />
      {dots.map(([x, y], i) => (
        <circle
          key={`${x}-${y}-${i}`}
          cx={x}
          cy={y}
          r={i === 9 ? 3.2 : 2.15}
          fill={i % 3 === 0 ? "#5cc8ff" : "#00a8ff"}
          opacity={0.55 + (i % 4) * 0.1}
        />
      ))}
      <path
        d="M20 32c6-10 18-10 24 0M20 32c6 10 18 10 24 0M12 32h40M32 10v44"
        fill="none"
        stroke="#00a8ff"
        strokeWidth="0.8"
        opacity="0.35"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.93.57 3.72 1.56 5.23L2 22l5.09-1.66a10.1 10.1 0 0 0 4.95 1.27h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.72 13.98c-.24.67-1.18 1.22-1.94 1.38-.52.11-1.2.2-3.49-.75-2.93-1.21-4.82-4.16-4.97-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.77-.36h.55c.18 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.19-.14.32-.28.49-.14.16-.3.37-.42.5-.14.14-.28.3-.12.58.16.29.7 1.16 1.51 1.88 1.04.92 1.91 1.21 2.2 1.35.28.14.45.12.62-.07.16-.19.7-.81.89-1.09.19-.27.38-.23.64-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.7-.17 1.37z" />
    </svg>
  );
}

export function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M21.94 4.47 18.7 19.64c-.24 1.08-.88 1.35-1.78.84l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5.02 9.13-8.25c.4-.35-.09-.55-.62-.2L6.27 13.17 1.41 11.65c-1.06-.33-1.08-1.06.22-1.57L20.55 3.7c.88-.33 1.65.2 1.39.77z" />
    </svg>
  );
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.6 3H20.5L13.96 10.47 21.7 21H15.6l-4.74-6.2L5.4 21H2.48l7.02-8.02L2 3h6.26l4.28 5.67L17.6 3zm-1.02 16.16h1.6L7.5 4.74H5.78l10.8 14.42z" />
    </svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M14.5 3c.4 2.6 1.9 4.3 4.5 4.6v2.5c-1.5 0-2.9-.5-4.1-1.3v6.6c0 3.4-2.7 6.1-6.2 6.1S2.5 18.8 2.5 15.4c0-3.3 2.6-6 5.9-6.1.3 0 .6 0 .9.1v2.7c-.3-.1-.6-.2-.9-.2-1.9 0-3.4 1.6-3.4 3.5s1.5 3.5 3.5 3.5 3.5-1.6 3.5-3.5V3h2.5z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8A3.2 3.2 0 0 0 19.2 16V8A3.2 3.2 0 0 0 16 4.8zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.35 6.4a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05z" />
    </svg>
  );
}

export function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.6V8.8l6.2 3.4-6.2 3.4z" />
    </svg>
  );
}
