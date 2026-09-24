import {
  Brand,
  CareerPath,
  CareerProgram,
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
  {
    id: "entrepreneurship",
    number: "04",
    title: "Entrepreneurship",
    description:
      "We build innovative platforms, tools, and solutions that empower creators, enhance user experiences, and drive the growth of Africa's creative economy.",
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
    nickname: "Bienald",
    role: "Founder and Team Lead",
    department: "Leadership",
    vibeRole: "Vision Architect & Chief Dreamer",
    bio: "Guiding the creative, technological, and strategic evolution of CBM Group across Africa.",
    quote: "Culture isn't made by accident; it's engineered with bold ideas and heart.",
    superpower: "Turning ambitious visions into thriving creative engines",
    tools: ["Keynote", "Notion", "Triple Espresso", "Strategic Playbooks"],
    favoriteTrack: "Burna Boy — City Boys",
    avatarImage: "/team/ronald.jpeg",
    avatarColor: "from-amber-500 via-amber-600 to-emerald-700",
    stats: {
      creativity: 99,
      caffeine: 95,
      tech: 88,
      vibe: 100,
    },
  },
  {
    id: "kalinzi-philp",
    name: "Kalinzi Philp Louis",
    nickname: "Philp",
    role: "CTO",
    department: "Technology",
    vibeRole: "Cloud Overlord & Code Sorcerer",
    bio: "Architecting resilient digital infrastructure, streaming systems, and technical innovation.",
    quote: "If it compiles on the first try, don't trust it. Test it twice.",
    superpower: "Translating wild creative dreams into unbreakable systems",
    tools: ["Next.js", "Docker", "Mechanical Keeb", "Dark Mode"],
    favoriteTrack: "Daft Punk — Harder, Better, Faster, Stronger",
    avatarImage: "/team/philp.jpeg",
    avatarColor: "from-cyan-500 via-blue-600 to-indigo-700",
    stats: {
      creativity: 93,
      caffeine: 98,
      tech: 100,
      vibe: 95,
    },
  },
  {
    id: "wejuli-christopher",
    name: "Wejuli Christopher",
    nickname: "Chris",
    role: "Graphics Designer and Photo Editor",
    department: "Creative & Media",
    vibeRole: "Pixel Alchemist & Vector Samurai",
    bio: "Sculpting visual identities, brand stories, and editorial imagery that define contemporary African aesthetics.",
    quote: "Good design is invisible; great design is unforgettable.",
    superpower: "Crafting iconic visual branding out of a single sketch",
    tools: ["Photoshop", "Illustrator", "Wacom Stylus", "Color Palettes"],
    favoriteTrack: "Asake — Lonely At The Top",
    avatarImage: "/team/christopher.jpeg",
    avatarColor: "from-purple-500 via-fuchsia-600 to-pink-700",
    stats: {
      creativity: 100,
      caffeine: 92,
      tech: 87,
      vibe: 98,
    },
  },
  {
    id: "ssenabulya-trevor",
    name: "Ssenabulya Trevor Venasio",
    nickname: "Trevor",
    role: "Cinematographer and Video Editor",
    department: "Creative & Media",
    vibeRole: "Frame Maestro & 4K Conjurer",
    bio: "Directing cinematic narratives, grading visuals, and packaging high-impact video experiences.",
    quote: "Every frame must speak before the audio even kicks in.",
    superpower: "Making any room or landscape look like a movie set",
    tools: ["Sony FX6", "DaVinci Resolve", "Gimbals", "Color LUTs"],
    favoriteTrack: "Wizkid & Tems — Essence",
    avatarImage: "/team/travor-web.jpeg",
    avatarColor: "from-orange-500 via-rose-600 to-red-700",
    stats: {
      creativity: 98,
      caffeine: 94,
      tech: 92,
      vibe: 99,
    },
  },
  {
    id: "katende-peterson",
    name: "Katende Peterson",
    nickname: "Peterson",
    role: "Web Developer and UI/UX Designer",
    department: "Technology",
    vibeRole: "Frontend Virtuoso & Motion Alchemist",
    bio: "Crafting fluid interactive interfaces, digital platforms, and immersive web experiences.",
    quote: "Websites shouldn't just be viewed; they should be felt.",
    superpower: "Injecting 60fps joy and buttery micro-interactions into every click",
    tools: ["TypeScript", "Tailwind CSS", "Framer Motion", "Figma"],
    favoriteTrack: "Rema — Calm Down",
    avatarImage: "/team/peterson.jpeg",
    avatarColor: "from-teal-500 via-emerald-600 to-cyan-700",
    stats: {
      creativity: 97,
      caffeine: 99,
      tech: 98,
      vibe: 100,
    },
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