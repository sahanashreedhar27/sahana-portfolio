import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type Variant = "lime" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  lime: "bg-lime text-[#111] hover:-translate-y-0.5",
  outline:
    "border border-[color:var(--border)] text-text hover:-translate-y-0.5 hover:border-lime",
};

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  if (props.as === "a") {
    const { as, variant = "lime", className, children, ...rest } = props;
    void as;
    return (
      <a className={cn(base, variants[variant], className)} {...rest}>
        {children}
      </a>
    );
  }

  const { as, variant = "lime", className, children, ...rest } = props;
  void as;
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
