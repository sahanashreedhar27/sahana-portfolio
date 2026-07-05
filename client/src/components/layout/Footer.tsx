import { Mail } from "lucide-react";
import { personal } from "@/data/personal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto mt-16 max-w-[1180px] px-5 pb-10 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-[color:var(--border)] pt-8 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          Built by {personal.name} · © {year}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-lime"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-lime"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-lime"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      <p className="mt-4 text-center font-mono text-[11px] text-muted/60">
        React · TypeScript · Tailwind · Framer Motion · Vite
      </p>
    </footer>
  );
}
