import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Calendar, Mail, Send, X } from "lucide-react";
import { toast } from "sonner";
import { WhatsAppIcon } from "@/components/brand-marks";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { CONTACT } from "@/lib/content";
import { useSite } from "@/lib/site-context";
import { cn } from "@/lib/utils";

export function SupportSheet() {
  const { t, supportOpen, setSupportOpen, presetService } = useSite();
  const s = t.support;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(presetService);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (presetService) setService(presetService);
  }, [presetService]);

  useEffect(() => {
    if (!supportOpen) {
      setSent(false);
      setErrors({});
    }
  }, [supportOpen]);

  function validate() {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = s.required;
    if (!email.trim()) next.email = s.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = s.invalidEmail;
    if (!message.trim()) next.message = s.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    const subject = encodeURIComponent(
      `Verification support — ${service || "General"} — ${name}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nService: ${service || "—"}\n\n${message}`,
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
      toast.success(s.successTitle);
    }, 400);
  }

  return (
    <Dialog.Root open={supportOpen} onOpenChange={setSupportOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            "fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-line bg-bg-deep shadow-[var(--shadow-card)]",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
          )}
        >
          <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
            <div>
              <Dialog.Title className="font-display text-xl font-semibold text-fg">
                {s.title}
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm leading-relaxed text-muted">
                {s.subtitle}
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label={s.close}>
                <X className="size-5" />
              </Button>
            </Dialog.Close>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-5">
            {sent ? (
              <div className="glass-panel rounded-xl p-5">
                <p className="font-display text-lg font-semibold text-fg">{s.successTitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.successBody}</p>
                <div className="mt-5 flex flex-col gap-2">
                  <Button asChild>
                    <a href={CONTACT.socials.whatsapp} target="_blank" rel="noreferrer">
                      <WhatsAppIcon className="size-4" />
                      {s.whatsapp}
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={CONTACT.calendly} target="_blank" rel="noreferrer">
                      <Calendar className="size-4" />
                      {s.book}
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={`mailto:${CONTACT.email}`}>
                      <Mail className="size-4" />
                      {s.emailUs}
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <Field label={s.name} error={errors.name}>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={s.placeholderName}
                    autoComplete="name"
                  />
                </Field>
                <Field label={s.email} error={errors.email}>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={s.placeholderEmail}
                    autoComplete="email"
                  />
                </Field>
                <Field label={s.phone}>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={s.placeholderPhone}
                    autoComplete="tel"
                  />
                </Field>
                <Field label={s.service}>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="h-11 w-full rounded-md border border-line bg-bg/70 px-3 text-sm text-fg outline-none focus-visible:border-accent focus-visible:shadow-[var(--shadow-glow)]"
                  >
                    <option value="">—</option>
                    {t.servicesMenu.map((item) => (
                      <option key={item.id} value={item.label}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label={s.message} error={errors.message}>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={s.placeholderMessage}
                  />
                </Field>
                <Button type="submit" size="lg" disabled={sending}>
                  <Send className="size-4" />
                  {sending ? s.sending : s.submit}
                </Button>
                <a
                  href={CONTACT.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-line text-sm font-semibold text-accent transition-colors hover:border-line-strong hover:bg-surface/60"
                >
                  <WhatsAppIcon className="size-4" />
                  {s.whatsapp}
                </a>
                <a
                  href={CONTACT.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-line text-sm font-semibold text-accent transition-colors hover:border-line-strong hover:bg-surface/60"
                >
                  <Calendar className="size-4" />
                  {s.book}
                </a>
              </form>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      {children}
      {error ? <span className="text-xs text-red-400">{error}</span> : null}
    </label>
  );
}
