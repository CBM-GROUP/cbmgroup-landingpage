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
    label: "Companies",
    href: "/companies",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Purpose",
    href: "/initiatives",
  },
  {
    label: "Work At CBM",
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
    image: "/companies/CBM Advertising Logo - 7 (1).jpg.jpeg",
    href: "https://cbmtv.cbmgroupco.com"
  },
  {
    id: "now-play",
    name: "Now Play",
    image: "/companies/NOW PLAY - 3.jpg.jpeg",
    href: "https://nowplay.cbmgroupco.com"
  },
  {
    id: "cbm-radio",
    name: "CBM Radio",
    image: "/companies/Cbm Radio - 1.jpg.jpeg",
    href: "https://cbmradio.cbmgroupco.com"
  },
  {
    id: "cbm-records",
    name: "CBM Records",
    image: "/companies/CBM Records Logo - 17.jpg.jpeg",
    href: "https://records.cbmgroupco.com"
  },
  {
    id: "cbm-advertising",
    name: "CBM Advertising",
    image: "/companies/CBM Advertising Logo - 3 (1).jpg.jpeg",
    href: "https://adverts.cbmgroupco.com"
  },
  {
    id: "cbm-events",
    name: "CBM Events",
    images: [
      "/companies/CBM Events.jpeg",
      "/companies/CBM Advertising Logo - 7 (1).jpg.jpeg",
      "/companies/CBM Records Logo - 17.jpg.jpeg",
    ],
    href: "https://events.cbmgroupco.com"
  },
  {
    id: "cbm-film",
    name: "CBM Film",
    images: [
      "/companies/Cbm Film.jpeg",
      "/companies/Cbm Radio - 1.jpg.jpeg",
      "/companies/NOW PLAY - 3.jpg.jpeg",
    ],
    href: "https://film.cbmgroupco.com"
  },
];

export const initiatives: Initiative[] = [
  {
    id: "fellowship",
    number: "01",
    title: "Creative Entrepreneurs Fellowship",
    images: [
      "/initiatives/hackathon1.jpg",
      "/initiatives/hackathon1.jpg",
      "/initiatives/hackathon2.jpg",
    ],
    description:
      "We identify, nurture, and accelerate creative businesses and startups across the music, fashion, film, and media industries, equipping them with the skills, networks, and opportunities needed to thrive.",
  },
  {
    id: "hackathon",
    number: "02",
    title: "Creative Industry Innovation Hackathon",
    images: [
      "/companies/Cbm Film.jpeg",
      "/companies/Cbm Radio - 1.jpg.jpeg",
      "/companies/NOW PLAY - 3.jpg.jpeg",
    ],
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

export const aboutUsInfo = {
  whoWeAre:
    "CBM Group is a multinational creative media, entertainment, streaming and conglomerate company advancing Africa's creative industry and other industries through storytelling, entrepreneurship, digital innovation, technology and streaming platforms.",
  vision:
    "To be the creative industries hub for storytelling, innovation, technology and streaming in Africa.",
  mission:
    "To build a dynamic ecosystem at the intersection of creativity, storytelling, innovation, technology, and streaming.",
};