import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full rounded-md border border-line bg-bg/70 px-3 text-sm text-fg placeholder:text-muted",
        "outline-none transition-[border-color,box-shadow] duration-150",
        "focus-visible:border-accent focus-visible:shadow-[var(--shadow-glow)]",
        "aria-invalid:border-red-400 aria-invalid:shadow-[0_0_0_1px_rgb(248_113_113_/_0.5)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-28 w-full rounded-md border border-line bg-bg/70 px-3 py-2.5 text-sm text-fg placeholder:text-muted",
        "outline-none transition-[border-color,box-shadow] duration-150",
        "focus-visible:border-accent focus-visible:shadow-[var(--shadow-glow)]",
        "aria-invalid:border-red-400 aria-invalid:shadow-[0_0_0_1px_rgb(248_113_113_/_0.5)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("text-xs font-medium tracking-wide text-muted", className)}
      {...props}
    />
  );
}

export { Input, Textarea, Label };
