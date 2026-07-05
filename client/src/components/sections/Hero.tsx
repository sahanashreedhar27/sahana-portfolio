import { motion, type Variants } from "framer-motion";
import { personal, stats } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] } },
};

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1180px] px-5 pt-28 sm:px-6 sm:pt-32">
      <div className="grid grid-cols-1 gap-4">
        {/* Hero panel: full width */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col justify-between overflow-hidden rounded-[22px] border border-[color:var(--border)] bg-[linear-gradient(160deg,#1a1a14,#0f0f0f)] p-8 sm:p-10"
        >
          <div>
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3 font-mono text-[13px]"
            >
              <span className="flex items-center gap-2 text-lime">
                <span className="h-2 w-2 animate-pulse-dot rounded-full bg-lime shadow-[0_0_10px_var(--lime)]" />
                Open to Opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-3 py-1">
                <b className="font-semibold text-lime">
                  {stats[0].value} {stats[0].label}
                </b>
                <span className="text-text">{stats[0].sub}</span>
              </span>
            </motion.div>
            <motion.h1
              variants={item}
              className="my-4 text-[clamp(2.2rem,4.4vw,3.3rem)] font-bold leading-[1.02] tracking-tight"
            >
              {personal.name}
            </motion.h1>
            <motion.div variants={item} className="text-lg text-muted sm:text-xl">
              Senior <b className="font-semibold text-text">Full Stack</b> Software
              Engineer
            </motion.div>
            <motion.p variants={item} className="mt-1 text-[13px] text-muted/70">
              {personal.role}
            </motion.p>
            <motion.p
              variants={item}
              className="mt-4 max-w-lg text-sm italic text-muted"
            >
              {personal.tagline}
            </motion.p>
          </div>

          <motion.div variants={item} className="mt-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button as="a" href="#projects" variant="lime">
                View Work →
              </Button>
              <Button
                as="a"
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                Resume ↓
              </Button>
              <div className="ml-1 flex items-center gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted transition-colors hover:text-lime"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted transition-colors hover:text-lime"
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
