import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Box } from '@/components/ui/Box';
import { Icon } from '@/utils/icons';
import { achievements } from '@/data/achievements';

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionTitle index="05" title="Wins & Recognition" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Box key={a.label} delay={(i % 3) * 0.08} className="flex flex-col">
            <div className="mb-3 flex items-start justify-between gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime/30 bg-lime/5 text-lime">
                <Icon name={a.icon} size={20} />
              </span>
              {a.date && <span className="font-mono text-[11px] text-muted">{a.date}</span>}
            </div>
            <h3 className="text-[15px] font-bold leading-snug">{a.label}</h3>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{a.description}</p>
          </Box>
        ))}
      </div>
    </Section>
  );
}
