import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Software Engineer III',
    company: 'Northwestern Mutual',
    location: 'San Diego, CA (Remote)',
    startDate: 'Nov 2023',
    endDate: 'Present',
    current: true,
    description: [
      'Architected and led two enterprise B2B vendor integrations end-to-end — designing API contracts, payload schemas, and a TypeScript integration service layer, achieving 87% unit-test coverage against an 80% quality bar.',
      'Built an internal AI agent (Java/Node.js) that parses API schemas and auto-generates realistic test requests, cutting manual QA setup time and becoming a reusable tool adopted across teams.',
      'Owned CI/CD quality gates across containerized deployments (Docker/Kubernetes, SonarQube), reducing deployment risk by catching regressions pre-release and keeping the integration pipeline incident-free.',
    ],
    tech: ['TypeScript', 'Node.js', 'Java', 'Docker', 'Kubernetes', 'SonarQube', 'REST APIs'],
    link: 'https://www.northwesternmutual.com',
  },
  {
    id: 2,
    role: 'Software Engineer II',
    company: 'Northwestern Mutual',
    location: 'Austin, TX (Remote)',
    startDate: 'Jan 2022',
    endDate: 'Nov 2023',
    description: [
      "Built a compliance platform's front end from the ground up on React, Redux, Express, and Node.js, maintaining 80%+ automated test coverage while scaling delivery as scope grew.",
      'Designed RESTful API contracts and JSON payload schemas, serving as the technical liaison between internal and external engineering teams in a Java/Spring backend environment.',
      'Led a small cross-functional engineering team to resolve a backlog of vendor defects end-to-end, cutting fix lead time by roughly 3x through backlog reprioritization and mentoring.',
    ],
    tech: ['React', 'Redux', 'Express', 'Node.js', 'Java', 'Spring', 'REST APIs'],
    link: 'https://www.northwesternmutual.com',
  },
  {
    id: 3,
    role: 'Software Engineer',
    company: 'AmpliFI Loyalty Solutions',
    location: 'Naperville, IL',
    startDate: 'Feb 2021',
    endDate: 'Jan 2022',
    description: [
      'Designed and built RESTful web services in Java using Spring MVC and MyBatis, with PostgreSQL schemas provisioned via shell scripts across environments.',
      'Developed responsive front-end UIs in JSP using HTML, CSS, JavaScript, and jQuery from wireframes and behavior specs.',
      'Owned CI/CD pipelines (Maven, Tomcat, Jenkins, SonarQube) and implemented structured logging with log4j for debugging and monitoring.',
    ],
    tech: ['Java', 'Spring MVC', 'MyBatis', 'PostgreSQL', 'Jenkins', 'Maven', 'Tomcat'],
    link: 'https://www.amplifiloyalty.com/',
  },
  {
    id: 4,
    role: 'Software Developer Intern',
    company: 'AmpliFI Loyalty Solutions',
    location: 'Naperville, IL',
    startDate: 'Jun 2020',
    endDate: 'Dec 2020',
    description: [
      'Built AWS Glue ETL pipelines to migrate legacy MySQL data to PostgreSQL via S3, using Python (boto3, pandas, numpy).',
      'Resolved static-analysis defects flagged by SonarQube in a JavaScript/CSS/Bootstrap/JSP application within an Agile workflow (Jira, Bitbucket, Confluence).',
    ],
    tech: ['Python', 'AWS Glue', 'S3', 'MySQL', 'PostgreSQL', 'SonarQube'],
    link: 'https://www.amplifiloyalty.com/',
  },
];
