import type { ComponentType } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Trophy,
  Mic,
  TrendingUp,
  Sparkles,
  Rocket,
  Users,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';

type IconComponent = ComponentType<{ size?: number | string; className?: string }>;

const map: Record<string, IconComponent> = {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Trophy,
  Mic,
  TrendingUp,
  Sparkles,
  Rocket,
  Github: GithubIcon,
  Users,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

/** Resolve a lucide icon by name with a safe fallback. */
export function Icon({ name, size = 18, className }: IconProps) {
  const Cmp = map[name] ?? Code2;
  return <Cmp size={size} className={className} />;
}
