import { Mail, ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Box } from '@/components/ui/Box';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { personal } from '@/data/personal';

const links = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: `/in/${personal.linkedinHandle}`,
    href: personal.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: `@${personal.githubHandle}`,
    href: personal.github,
    icon: GithubIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionTitle index="06" title="Get in Touch" />
      <Box
        label="Reach me directly"
        className="bg-[linear-gradient(160deg,#1a1a14,#0f0f0f)]"
        noHover
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold leading-tight">Let's build something →</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Open to senior full stack engineering opportunities. The fastest way to reach me is
              email — I read every message and reply personally.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-3">
            {links.map(({ label, value, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex flex-col gap-3 rounded-xl border border-[color:var(--border)] bg-card-2 p-4 transition-colors hover:border-lime"
              >
                <div className="flex items-center justify-between">
                  <Icon size={20} className="text-lime" />
                  <ArrowUpRight
                    size={16}
                    className="text-muted/50 transition-colors group-hover:text-lime"
                  />
                </div>
                <div>
                  <p className="text-xs text-muted">{label}</p>
                  <p className="mt-0.5 break-all font-mono text-sm text-text">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Box>
    </Section>
  );
}
