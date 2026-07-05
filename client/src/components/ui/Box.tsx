import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

const variants: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

interface BoxProps {
  children: ReactNode;
  className?: string;
  /** uppercase eyebrow label shown at the top of the box */
  label?: string;
  delay?: number;
  /** disables the hover lime border (e.g. for gradient hero/contact) */
  noHover?: boolean;
  id?: string;
}

/**
 * The core bento card. Animates in on scroll and highlights its border on
 * hover. Rounded, flat surface in the bento-grid style.
 */
export function Box({ children, className, label, delay = 0, noHover = false, id }: BoxProps) {
  return (
    <motion.div
      id={id}
      className={cn(
        'relative overflow-hidden rounded-[22px] border border-[color:var(--border)] bg-card p-7 sm:p-8 transition-colors duration-300',
        !noHover && 'hover:border-lime',
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
      variants={variants}
    >
      {label && (
        <div className="mb-4 text-[13px] font-bold uppercase tracking-[0.08em] text-subtle">
          {label}
        </div>
      )}
      {children}
    </motion.div>
  );
}
