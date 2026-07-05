import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Wins", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// Section ids tracked by the scroll-spy (order matters)
export const SECTION_IDS = [
  "about",
  "skills",
  "experience",
  "projects",
  "achievements",
  "contact",
];
