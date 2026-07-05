import { GraduationCap, MapPin, BadgeCheck } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Box } from '@/components/ui/Box';
import { personal, education } from '@/data/personal';

export function About() {
  return (
    <Section id="about">
      <SectionTitle index="01" title="About" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Box label="Bio" className="lg:col-span-2" delay={0}>
          <p className="text-[15px] leading-relaxed text-subtle">{personal.bio}</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-lime" /> {personal.location}
            </span>
            <span className="flex items-center gap-1.5">
              <BadgeCheck size={13} className="text-lime" /> {personal.role}
            </span>
            {personal.availableForWork && (
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 animate-pulse-dot rounded-full bg-lime shadow-[0_0_10px_var(--lime)]" />
                open to senior roles
              </span>
            )}
          </div>
        </Box>

        <Box label="Education" delay={0.1}>
          <ul className="space-y-5">
            {education.map((ed) => (
              <li key={ed.degree} className="flex gap-3">
                <GraduationCap size={18} className="mt-0.5 shrink-0 text-lime" />
                <div>
                  <p className="text-sm font-semibold">{ed.degree}</p>
                  <p className="text-xs text-muted">{ed.school}</p>
                  <p className="mt-1 font-mono text-[11px] text-muted/70">{ed.period}</p>
                </div>
              </li>
            ))}
          </ul>
        </Box>
      </div>
    </Section>
  );
}
