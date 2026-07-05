import { ExternalLink, Lock } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Box } from '@/components/ui/Box';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data/projects';
import type { Project } from '@/types';
import { cn } from '@/utils/cn';

function StatusBadge({ status }: { status: Project['status'] }) {
  if (status === 'live') return null;
  const label = status === 'wip' ? 'in progress' : 'coming soon';
  return (
    <span className="rounded-md border border-lime/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-lime">
      {label}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const disabled = project.githubUrl === '#';
  return (
    <div className="mt-4 flex items-center gap-4 font-mono text-xs">
      {disabled ? (
        <span className="flex items-center gap-1.5 text-muted/60">
          <Lock size={14} /> private
        </span>
      ) : (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted transition-colors hover:text-lime"
        >
          <GithubIcon size={15} /> code
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted transition-colors hover:text-lime"
        >
          <ExternalLink size={15} /> live
        </a>
      )}
    </div>
  );
}

/** Browser-chrome header shared by preview variants. */
function BrowserBar() {
  return (
    <div className="flex items-center gap-1.5 border-b border-[color:var(--border)] bg-black/30 px-3 py-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
    </div>
  );
}

/** The "preview window" that fronts each project card. */
function Preview({ title, liveUrl }: { title: string; liveUrl?: string | null }) {
  // Live sites get a real, scaled-down iframe snapshot you can click through.
  if (liveUrl) {
    return (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group/preview mb-4 block overflow-hidden rounded-[14px] border border-[color:var(--border)] transition-colors hover:border-lime/40"
      >
        <BrowserBar />
        <div className="relative h-[180px] overflow-hidden bg-white">
          <iframe
            src={liveUrl}
            title={`Live preview of ${title}`}
            loading="lazy"
            tabIndex={-1}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 h-[400%] w-[400%] origin-top-left scale-[0.25]"
          />
          {/* Hover overlay hint */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover/preview:bg-black/30 group-hover/preview:opacity-100">
            <span className="flex items-center gap-1.5 rounded-md bg-lime px-3 py-1.5 font-mono text-xs font-semibold text-black">
              <ExternalLink size={14} /> visit site
            </span>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="mb-4 min-h-[120px] flex-1 overflow-hidden rounded-[14px] border border-[color:var(--border)]">
      <BrowserBar />
      <div
        className="flex h-full min-h-[100px] items-center justify-center bg-[linear-gradient(135deg,#1f1f1a,#111)] font-mono text-base text-lime [background-image:radial-gradient(circle_at_80%_20%,rgba(232,255,0,0.12),transparent_50%)]"
        aria-hidden
      >
        {'{ '}
        {title}
        {' }'}
      </div>
    </div>
  );
}

export function Projects() {
  const single = projects.length === 1;

  return (
    <Section id="projects">
      <SectionTitle index="04" title="Work" />

      {/* Equal-weight cards, centered so a short list still feels intentional */}
      <div
        className={cn(
          'mx-auto grid grid-cols-1 gap-4',
          single ? 'max-w-md' : 'max-w-3xl md:grid-cols-2',
        )}
      >
        {projects.map((p, i) => (
          <Box
            key={p.id}
            delay={i * 0.1}
            className={cn('flex flex-col', p.highlight && 'border-lime/30')}
          >
            {p.highlight && (
              <div className="mb-3 inline-flex w-fit items-center rounded-md bg-lime/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-lime">
                {p.highlight}
              </div>
            )}
            <Preview title={p.title} liveUrl={p.liveUrl} />
            <div className="mb-1 flex items-center justify-between gap-2">
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-bold">{p.title}</h3>
                {p.year && <span className="font-mono text-xs text-muted/70">{p.year}</span>}
              </div>
              <StatusBadge status={p.status} />
            </div>
            <p className="flex-1 text-sm leading-relaxed text-muted">{p.longDescription}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <ProjectLinks project={p} />
          </Box>
        ))}
      </div>

      <p className="mt-8 text-center font-mono text-xs text-muted">
        More on{' '}
        <a
          href="https://github.com/sahanashreedhar27"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime hover:underline"
        >
          github.com/sahanashreedhar27
        </a>
      </p>
    </Section>
  );
}
