import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    icon: 'Code2',
    skills: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: 'Layout',
    skills: ['React', 'Redux', 'MERN', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    skills: [
      'Node.js',
      'Express',
      'Spring (MVC/DAO)',
      'REST APIs',
      'Microservices',
      'B2B Integration',
    ],
  },
  {
    category: 'Databases',
    icon: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Prisma'],
  },
  {
    category: 'Cloud & Big Data',
    icon: 'Cloud',
    skills: ['AWS (S3, EC2, Lambda, Glue)', 'SageMaker', 'Spark/PySpark', 'Hadoop', 'Hive'],
  },
  {
    category: 'DevOps & Tools',
    icon: 'Wrench',
    skills: [
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Maven',
      'SonarQube',
      'Git',
      'Dynatrace',
      'GitHub Copilot',
      'CI/CD',
      'Unit Testing (Jest, JUnit)',
      'Agile/Scrum',
    ],
  },
  {
    category: 'AI Engineering',
    icon: 'Sparkles',
    muted: true,
    skills: [
      'LLM API Integration',
      'RAG',
      'Vector DBs (pgvector)',
      'Prompt Engineering',
      'AI-Assisted Development',
    ],
  },
];

// Flat list used for the hero / quick-glance pill cloud
export const topSkills: string[] = [
  'Java',
  'TypeScript',
  'React',
  'Node.js',
  'Spring',
  'AWS',
  'Kubernetes',
  'Spark',
  'Docker',
  'PostgreSQL',
  'Microservices',
  'Python',
];
