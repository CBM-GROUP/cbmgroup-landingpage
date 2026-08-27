import {
  Brand,
  CareerPath,
  CoreValue,
  Initiative,
  NavItem,
  Pillar,
  TeamMember,
} from "@/types/index";

export const navItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Companies",
    href: "/companies",
  },
  {
    label: "Initiatives",
    href: "/initiatives",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

export const pillars: Pillar[] = [
  {
    id: "media",
    number: "01",
    title: "Media",
    description:
      "We create powerful, story-driven content that informs, inspires, and builds strong brand and community connections across digital and traditional platforms.",
  },
  {
    id: "entertainment",
    number: "02",
    title: "Entertainment",
    description:
      "We develop and promote creative talent, productions, and experiences that captivate audiences and shape culture locally and globally.",
  },
  {
    id: "streaming",
    number: "03",
    title: "Streaming",
    description:
      "We leverage technology to distribute live and on-demand content, ensuring seamless access and wider reach across Africa and beyond.",
  },
];

export const coreValues: CoreValue[] = [
  {
    id: "creativity",
    number: "01",
    title: "Creativity First",
  },
  {
    id: "storytelling",
    number: "02",
    title: "Storytelling with Purpose",
  },
  {
    id: "innovation",
    number: "03",
    title: "Innovation & Technology",
  },
  {
    id: "empowerment",
    number: "04",
    title: "Empowerment and Inclusivity",
  },
  {
    id: "impact",
    number: "05",
    title: "Impact & Sustainability",
  },
];

export const brands: Brand[] = [
  {
    id: "cbm-tv",
    name: "CBM TV",
  },
  {
    id: "now-play",
    name: "Now Play",
  },
  {
    id: "cbm-radio",
    name: "CBM Radio",
  },
  {
    id: "cbm-advertising",
    name: "CBM Advertising",
  },
  {
    id: "cbm-events",
    name: "CBM Events",
  },
  {
    id: "cbm-film",
    name: "CBM Film",
  },
];

export const initiatives: Initiative[] = [
  {
    id: "fellowship",
    number: "01",
    title: "Creative Entrepreneurs Fellowship",
    description:
      "We identify, nurture, and accelerate creative businesses and startups across the music, fashion, film, and media industries, equipping them with the skills, networks, and opportunities needed to thrive.",
  },
  {
    id: "hackathon",
    number: "02",
    title: "Creative Industry Innovation Hackathon",
    description:
      "We champion innovation through a program that brings together innovators, creators, and technology enthusiasts to develop practical solutions that address challenges within the music, fashion, film, and media industries.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "bwire-ronald",
    name: "Bwire Ronald aka Bienald Ronald",
    role: "Founder and Team Lead",
  },
  {
    id: "kalinzi-philp",
    name: "Kalinzi Philp Louis",
    role: "CTO",
  },
  {
    id: "wejuli-christopher",
    name: "Wejuli Christopher",
    role: "Graphics Designer and Photo Editor",
  },
  {
    id: "ssenabulya-trevor",
    name: "Ssenabulya Trevor Venasio",
    role: "Cinematographer and Video Editor",
  },
];

export const careerPaths: CareerPath[] = [
  {
    id: "internship",
    title: "Internship Programme",
  },
  {
    id: "volunteer",
    title: "Volunteer Programme",
  },
  {
    id: "employment",
    title: "Direct Employment",
  },
];

export const careerDepartments = [
  "Business",
  "Creative & Production",
  "Marketing & Communications",
  "Technology (IT)",
  "Events",
];