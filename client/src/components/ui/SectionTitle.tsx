import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/utils/cn";

interface SectionTitleProps {
  /** zero-padded index e.g. "01" */
  index: string;
  title: string;
  className?: string;
}

/** Section heading: small index eyebrow + big title with a trailing rule. */
export function SectionTitle({ index, title, className }: SectionTitleProps) {
  return (
    <ScrollReveal className={cn("mb-8", className)}>
      <div className="mb-2 font-mono text-xs tracking-[0.25em] text-lime">
        {index}
      </div>
      <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
        <span className="h-px flex-1 bg-gradient-to-r from-[color:var(--border)] to-transparent" />
      </h2>
    </ScrollReveal>
  );
}
