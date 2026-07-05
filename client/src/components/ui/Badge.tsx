import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  /** subtle = muted console pill (default); lime = filled accent; gray = de-emphasized, no hover accent */
  variant?: 'subtle' | 'lime' | 'outline' | 'gray';
}

export function Badge({ children, className, variant = 'subtle' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg px-3 py-1.5 font-mono text-xs transition-colors duration-200',
        variant === 'subtle' &&
          'border border-[color:var(--border)] bg-card-2 text-muted hover:border-lime hover:text-lime',
        variant === 'lime' && 'bg-lime font-semibold text-[#111]',
        variant === 'outline' && 'border border-lime/40 text-lime',
        variant === 'gray' && 'border border-[color:var(--border)] bg-card-2 text-muted/70',
        className,
      )}
    >
      {children}
    </span>
  );
}
