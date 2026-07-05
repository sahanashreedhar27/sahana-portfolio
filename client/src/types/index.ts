export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
  /** render badges de-emphasized in gray (e.g. emerging / secondary skills) */
  muted?: boolean;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string[];
  tech: string[];
  link?: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export type ProjectStatus = 'live' | 'wip' | 'placeholder';
export type ProjectCategory = 'fullstack' | 'frontend' | 'backend' | 'ai';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
  status: ProjectStatus;
  category: ProjectCategory;
  highlight?: string;
  /** Year the project was built, e.g. "2021" */
  year?: string;
}

export interface Achievement {
  type: 'award' | 'speaking' | 'impact' | 'github' | 'cert';
  label: string;
  description: string;
  icon: string;
  date?: string;
  status?: 'placeholder';
}

export interface Stat {
  value: string;
  label: string;
  sub?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
