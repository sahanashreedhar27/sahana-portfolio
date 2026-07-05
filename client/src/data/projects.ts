import type { Project } from "@/types";

export const projects: Project[] = [
  // ─── FROM GITHUB ─────────────────────────────────────────────────
  {
    id: 4,
    title: "Amazon Clone",
    description: "A pixel-perfect Amazon storefront clone with cart functionality.",
    longDescription:
      "Frontend clone of Amazon built in JavaScript with cart state management, product listing, and checkout flow backed by Firebase.",
    tech: ["JavaScript", "HTML5", "CSS3", "Firebase"],
    githubUrl: "https://github.com/sahanashreedhar27/amazon-clone",
    liveUrl: "https://clone-36d77.web.app/",
    featured: false,
    status: "live",
    category: "frontend",
    year: "2021",
  },
];
