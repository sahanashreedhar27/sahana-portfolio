import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Box } from '@/components/ui/Box';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/utils/icons';
import { cn } from '@/utils/cn';
import { skillCategories } from '@/data/skills';

export function Skills() {
  return (
    <Section id="skills">
      <SectionTitle index="02" title="Skills" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Box key={cat.category} delay={(i % 3) * 0.08}>
            <div className="mb-4 flex items-center gap-2.5">
              <Icon
                name={cat.icon}
                size={18}
                className={cat.muted ? 'text-muted/70' : 'text-lime'}
              />
              <h3 className={cn('text-base font-semibold', cat.muted && 'text-muted/70')}>
                {cat.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <Badge key={skill} variant={cat.muted ? 'gray' : 'subtle'}>
                  {skill}
                </Badge>
              ))}
            </div>
          </Box>
        ))}
      </div>
    </Section>
  );
}
