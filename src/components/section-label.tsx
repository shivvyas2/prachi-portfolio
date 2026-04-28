import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export default function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted",
        className
      )}
    >
      <span className="h-1 w-1 rounded-full bg-foreground/60" />
      {children}
    </div>
  );
}
