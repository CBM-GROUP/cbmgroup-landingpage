import {
  Brand,
  CareerPath,
  CareerProgram,
  CareerTeam,
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
    href: "https://radio.cbmgroupco.com"
  },
  {
    id: "cbm-records",
    name: "CBM Records",
    image: "/companies/CBM Records Logo - 17.jpg.jpeg",
    href: "https://cbm-record.vercel.app/"
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
    image: "/companies/CBM Events.jpeg",
    href: "https://events.cbmgroupco.com"
  },
  {
    id: "cbm-film",
    name: "CBM Film",
    image: "/companies/Cbm Film.jpeg",
    href: "https://cbm-films-cinematic-vision.vercel.app/"
  },
];

export const initiatives: Initiative[] = [
  {
    id: "fellowship",
    number: "01",
    title: "Creative Entrepreneurs Fellowship",
    images: [
      "/initiatives/hackathon1.jpg",
      "/initiatives/hackathon.jpg",
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
      "/initiatives/fellowship.jpg",
      "/initiatives/fellowship1.jpg",
      "/initiatives/fellowship2.jpg",
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
  {
    id: "katende-peterson",
    name: "Katende Peterson",
    role: "Web Developer and UI/UX Designer",
  },
];

export const careerPrograms: CareerProgram[] = [
  {
    id: "internship",
    title: "Internship Programme",
    description:
      "Hands-on learning experiences designed for emerging creatives, operators, and builders to grow with CBM.",
    teams: [
      {
        name: "Business",
        description:
          "Strategy, partnerships, finance, and operational leadership that keeps the ecosystem moving.",
        jobs: ["Partnerships Intern", "Operations Intern", "Research & Insights Intern"],
      },
      {
        name: "Creative & Production",
        description:
          "Storytelling, media production, content creation, and hands-on creative execution across formats.",
        jobs: ["Production Assistant Intern", "Video Editor Intern", "Content Creator Intern"],
      },
      {
        name: "Marketing & Communications",
        description:
          "Brand building, audience growth, campaign strategy, and communications that connect culture with action.",
        jobs: ["Social Media Intern", "Brand Marketing Intern", "Campaign Intern"],
      },
      {
        name: "Technology (IT)",
        description:
          "Product, platform, systems, and digital infrastructure to power innovation across the group.",
        jobs: ["Frontend Developer Intern", "Product Intern", "Data & Systems Intern"],
      },
      {
        name: "Events",
        description:
          "Curating and producing live experiences, activations, and community-driven moments that deepen engagement.",
        jobs: ["Event Operations Intern", "Experience Coordinator Intern", "Community Engagement Intern"],
      },
    ],
  },
  {
    id: "volunteer",
    title: "Volunteer Programme",
    description:
      "Flexible opportunities for people who want to contribute their time, talent, and energy to growing African creative ecosystems.",
    teams: [
      {
        name: "Business",
        description:
          "Strategy, partnerships, finance, and operational leadership that keeps the ecosystem moving.",
        jobs: ["Partnerships Volunteer", "Business Development Volunteer", "Strategy Volunteer"],
      },
      {
        name: "Creative & Production",
        description:
          "Storytelling, media production, content creation, and hands-on creative execution across formats.",
        jobs: ["Creative Volunteer", "Camera Volunteer", "Post-Production Volunteer"],
      },
      {
        name: "Marketing & Communications",
        description:
          "Brand building, audience growth, campaign strategy, and communications that connect culture with action.",
        jobs: ["Community Outreach Volunteer", "Digital Marketing Volunteer", "PR Volunteer"],
      },
      {
        name: "Technology (IT)",
        description:
          "Product, platform, systems, and digital infrastructure to power innovation across the group.",
        jobs: ["Web Support Volunteer", "Research & Testing Volunteer", "Product Volunteer"],
      },
      {
        name: "Events",
        description:
          "Curating and producing live experiences, activations, and community-driven moments that deepen engagement.",
        jobs: ["Guest Experience Volunteer", "Event Support Volunteer", "Logistics Volunteer"],
      },
    ],
  },
  {
    id: "employment",
    title: "Direct Employment",
    description:
      "Full-time roles across strategy, production, digital, operations, and culture-building initiatives.",
    teams: [
      {
        name: "Business",
        description:
          "Strategy, partnerships, finance, and operational leadership that keeps the ecosystem moving.",
        jobs: ["Business Manager", "Partnerships Lead", "Operations Manager"],
      },
      {
        name: "Creative & Production",
        description:
          "Storytelling, media production, content creation, and hands-on creative execution across formats.",
        jobs: ["Creative Producer", "Senior Video Editor", "Content Lead"],
      },
      {
        name: "Marketing & Communications",
        description:
          "Brand building, audience growth, campaign strategy, and communications that connect culture with action.",
        jobs: ["Brand Strategist", "Communications Manager", "Social Media Lead"],
      },
      {
        name: "Technology (IT)",
        description:
          "Product, platform, systems, and digital infrastructure to power innovation across the group.",
        jobs: ["Frontend Engineer", "Platform Product Manager", "Systems Analyst"],
      },
      {
        name: "Events",
        description:
          "Curating and producing live experiences, activations, and community-driven moments that deepen engagement.",
        jobs: ["Events Manager", "Activation Lead", "Experience Producer"],
      },
    ],
  },
];

export const careerPaths: CareerPath[] = careerPrograms.map(({ id, title, description }) => ({
  id,
  title,
  description,
}));

export const careerDepartments = careerPrograms[0].teams.map((team) => team.name);

export const aboutUsInfo = {
  whoWeAre:
    "CBM Group is a multinational creative media, entertainment, streaming and conglomerate company advancing Africa's creative industry and other industries through storytelling, entrepreneurship, digital innovation, technology and streaming platforms.",
  vision:
    "To be the creative industries hub for storytelling, innovation, technology and streaming in Africa.",
  mission:
    "To build a dynamic ecosystem at the intersection of creativity, storytelling, innovation, technology, and streaming.",
};