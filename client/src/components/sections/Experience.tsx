import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <Section id="experience">
      <SectionTitle index="03" title="Experience" />

      <div className="relative">
        {/* animated drawing timeline line */}
        <motion.span
          aria-hidden
          className="absolute left-[7px] top-2 w-px origin-top bg-gradient-to-b from-lime/60 via-lime/20 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          style={{ bottom: 8 }}
        />

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative pl-9"
            >
              {/* node */}
              <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-lime bg-bg" />

              <article className="relative overflow-hidden rounded-[22px] border border-[color:var(--border)] bg-card p-7 transition-colors duration-300 hover:border-lime sm:p-8">
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="text-lg font-bold">
                      {exp.role}{' '}
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 text-lime hover:underline"
                        >
                          @ {exp.company}
                          <ArrowUpRight size={15} />
                        </a>
                      ) : (
                        <span className="text-lime">@ {exp.company}</span>
                      )}
                    </h3>
                    <p className="font-mono text-xs text-muted">{exp.location}</p>
                  </div>
                  <span className="font-mono text-xs text-lime">
                    {exp.startDate} → {exp.endDate}
                  </span>
                </div>

                <ul className="mb-4 space-y-2">
                  {exp.description.map((d, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-subtle">
                      <span className="mt-1 shrink-0 font-mono text-xs text-lime">▹</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
