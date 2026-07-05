import type { Education, Stat } from "@/types";

export const personal = {
  name: "Sahana Shreedhar Kulkarni",
  firstName: "Sahana",
  title: "Senior Full Stack Software Engineer",
  role: "Software Engineer III @ Northwestern Mutual",
  tagline: "Turning ambiguous problems into clean, high-impact systems.",
  location: "San Diego, CA",
  email: "sahanashreedhar27@gmail.com",
  phone: "+1 (312) 973-9274",
  github: "https://github.com/sahanashreedhar27",
  githubHandle: "sahanashreedhar27",
  linkedin: "https://www.linkedin.com/in/sahanashreedhar27/",
  linkedinHandle: "sahanashreedhar27",
  currentCompany: "Northwestern Mutual",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
  bio: `I'm a full stack software engineer with 5+ years building robust, scalable web applications across the entire stack — from intuitive React UIs to reliable Java & Node.js backends and AWS cloud infrastructure. At Northwestern Mutual I lead complex B2B vendor integrations end-to-end, mentor engineers, and drive engineering excellence. Most recently I built an internal AI agent that parses our API schemas and auto-generates curl requests with realistic data — a fix for real workflow friction that opened a rotation with our AI Hub team, where I now go deeper on the problems I'm most excited about. I love turning ambiguous problems into clean, high-impact systems, and I'm building thoughtfully with AI as the field keeps moving.`,
  shortBio: `Full stack engineer building robust, scalable web apps with Java, React, Node.js & cloud tech. I lead vendor integrations end-to-end, mentor teams, and build thoughtfully with AI.`,
} as const;

export const education: Education[] = [
  {
    degree: "M.S. Computer Science",
    school: "Illinois Institute of Technology",
    location: "Chicago, IL, USA",
    period: "Aug 2019 – May 2021",
  },
  {
    degree: "B.E. Computer Science",
    school: "Visvesvaraya Technological University",
    location: "India",
    period: "Aug 2015 – May 2019",
  },
];

export const stats: Stat[] = [
  { value: "5+", label: "years", sub: "of experience" },
];
