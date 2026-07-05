import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SECTION_IDS } from '@/utils/constants';
import { useScrollSpy } from '@/hooks/useScrollSpy';
// import { personal } from '@/data/personal'; // re-enable when resume link is restored
import { cn } from '@/utils/cn';

export function Navbar() {
  const active = useScrollSpy(SECTION_IDS);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Auto-hide on scroll down, reveal on scroll up.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 200);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? '-110%' : 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled && 'border-b border-[color:var(--border)] bg-bg/70 backdrop-blur-md',
      )}
    >
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4 sm:px-6">
        <a href="#top" className="font-mono text-[15px] font-extrabold">
          Sahana<span className="text-lime">.dev</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 text-[13px] md:flex">
          {NAV_ITEMS.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-lime',
                  isActive ? 'text-lime' : 'text-muted',
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          {/* Resume hidden for now
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-lime/40 px-4 py-1.5 text-xs font-medium text-lime transition-all hover:bg-lime hover:text-[#111] sm:inline-block"
          >
            Resume ↓
          </a>
          */}
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="text-text md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-[color:var(--border)] bg-bg/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4 text-sm">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'rounded-lg px-3 py-2 transition-colors hover:bg-card-2 hover:text-lime',
                    active === item.href.slice(1) ? 'text-lime' : 'text-muted',
                  )}
                >
                  {item.label}
                </a>
              ))}
              {/* Resume hidden for now 
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full border border-lime/40 px-3 py-2 text-center text-lime"
              >
                Resume ↓
              </a>
              */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
