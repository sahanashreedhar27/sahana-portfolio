import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/** Standard section wrapper: scroll anchor + consistent max width & spacing. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('mx-auto max-w-[1180px] scroll-mt-24 px-5 pt-24 sm:px-6', className)}
    >
      {children}
    </section>
  );
}
