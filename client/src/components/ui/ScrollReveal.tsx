import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Fades + lifts its children into view when scrolled into the viewport. */
export function ScrollReveal({ children, delay = 0, className }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
