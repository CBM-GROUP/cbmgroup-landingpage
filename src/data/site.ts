import {
  Brand,
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
    href: "https://cbmtv.cbmgroupco.com",
  },
  {
    id: "now-play",
    name: "Now Play",
    image: "/companies/NOW PLAY - 3.jpg.jpeg",
    href: "https://nowplay.cbmgroupco.com",
  },
  {
    id: "cbm-radio",
    name: "CBM Radio",
    image: "/companies/Cbm Radio - 1.jpg.jpeg",
    href: "https://radio.cbmgroupco.com",
  },
  {
    id: "cbm-records",
    name: "CBM Records",
    image: "/companies/CBM Records Logo - 17.jpg.jpeg",
    href: "https://records.cbmgroupco.com",
  },
  {
    id: "cbm-advertising",
    name: "CBM Advertising",
    image: "/companies/CBM Advertising Logo - 3 (1).jpg.jpeg",
    href: "https://adverts.cbmgroupco.com",
  },
  {
    id: "cbm-events",
    name: "CBM Events",
    image: "/companies/CBM Events.jpeg",
    href: "https://events.cbmgroupco.com",
  },
  {
    id: "cbm-film",
    name: "CBM Film",
    image: "/companies/Cbm Film.jpeg",
    href: "https://cbmfilms.cbmgroupco.com",
  },
];

export const initiatives: Initiative[] = [
  {
    id: "fellowship",
    number: "01",
    title: "Creative Entrepreneurs Fellowship",
    images: [
      "/initiatives/businessfellowship.jpeg",
      "/initiatives/businessfellows.jpeg",
      "/initiatives/businessfellowshi.jpeg",
      "/initiatives/businessfelloship.jpeg",
    ],
    description:
      "We identify, nurture, and accelerate creative businesses and startups across the music, fashion, film, and media industries, equipping them with the skills, networks, and opportunities needed to thrive.",
  },
  {
    id: "hackathon",
    number: "02",
    title: "Creative Industry Innovation Hackathon",
    images: [
      "/initiatives/hackathon.jpeg",
      "/initiatives/hackathon2.jpeg",
      "/initiatives/hackathon3.jpeg",
      "/initiatives/hackathon4.jpeg",
    ],
    description:
      "We champion innovation through a program that brings together innovators, creators, and technology enthusiasts to develop practical solutions that address challenges within the music, fashion, film, and media industries.",
  },
  {
    id: "internship",
    number: "03",
    title: "CBM Internship Programme",
    images: [
      "/initiatives/internship.jpeg",
      "/initiatives/internship1.jpeg",
      "/initiatives/internship2.jpeg",
      "/initiatives/internship3.jpeg",
      "/initiatives/internship4.jpeg",
    ],
    description:
      "Hands-on learning experiences and structured mentorship designed for emerging creatives, operators, and builders to develop real-world skills across production, technology, business, and media.",
    href: "/careers",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "bwire-ronald",
    name: "Bienald Ronald",
    role: "Founder and Team Lead ",
    department: "Leadership",
    bio:
      "Ronald aka Bienald Ronald is a multi-talented Ugandan creative entrepreneur excelling in various fields. He is a filmmaker, film and TV producer, media innovator, scriptwriter, content creator, mentor, and songwriter. He is also known as Bwire Ronald. Bienald's passion for the creative industry led him to found CBM Group, a Creative Media, Entertainment, Entrepreneurship and Streaming. Through CBM Group, he strives to make a positive impact, fostering talent, entrepreneurship and innovation in the creative industry. With his artistic prowess and dedication to empowering others, Bienald continues to be a driving force in Uganda's creative landscape, inspiring and uplifting aspiring artists and entrepreneurs alike.",
    quote: "The state of becoming is hidden under the state of beginning. No one is coming it's you and you.",
    tools: ["Founder", "CEO & Team lead at CBM Group", "Film Maker & Producer", "Media Innovator", "Creative Entrepreneur"],
    avatarImage: "/team/ronald.jpeg",
  },
  {
    id: "namutaawe-patience",
    name: "Namutaawe Patience",
    role: "Host & Content(CBM Radio)",
    quote: "",
    bio: "As a Host & Content Creator for CBM Radio, I specialize in crafting engaging audio experiences that inform, entertain, and inspire our listeners. My focus is on creating content that resonates with our audience, builds meaningful connections, and reflects the vibrant spirit of CBM Radio.",
    tools: ["Content Creation", "Social Media Strategy", "Engagement"],
    avatarImage: "/team/patience.jpg",
    department: "Marketing & Communications",
  },
  {
    id: "wejuli-christopher",
    name: "Wejuli Christopher",
    role: "Graphics Designer and Photo Editor",
    department: "Creative & Media",
    bio: "Sculpting visual identities, brand stories, and editorial imagery that define contemporary African aesthetics.",
    quote: "Good design is invisible; great design is unforgettable.",
    tools: ["Photoshop", "Illustrator", "Brand Identity", "Editorial"],
    avatarImage: "/team/christopher.jpeg",
  },
  {
    id: "ssenabulya-trevor",
    name: "Ssenabulya Trevor Venasio",
    role: "Cinematographer and Video Editor",
    department: "Creative & Media",
    bio: "Directing cinematic narratives, grading visuals, and packaging high-impact video experiences.",
    quote: "Every frame must speak before the audio even kicks in.",
    tools: ["Sony FX6", "DaVinci Resolve", "Color Grading", "Cinematography"],
    avatarImage: "/team/travor-web.jpeg",
  },
  {
    id: "katende-peterson",
    name: "Katende Peterson",
    role: "Software Developer",
    department: "Technology",
    bio: "As a Software Developer, I specialize in creating seamless, intuitive digital experiences that blend functionality with aesthetic excellence. I focus on building user-centric interfaces that enhance engagement and drive meaningful interactions across platforms.",
    quote: "Surpass Your Limits, Here and Now",
    tools: [""],
    avatarImage: "/team/peterson.jpg",
  },
  {
    id: "namwase-whitney",
    name: "Namwase Whitney",
    role: "Digital Community Lead",
    department: "Marketing & Communications",
    bio: "As a Digital Community Lead, I specialize in building and nurturing vibrant online communities around brands and initiatives. My focus is on fostering meaningful connections, driving engagement, and creating platforms where communities can thrive, collaborate, and grow together.",
    quote: "",
    tools: ["Community Management", "Content Creation", "Social Media Strategy", "Engagement"],
    avatarImage: "/team/whitney.jpg",
  },
  {
    id: "joyce-amoding",
    name: "Joyce Amoding",
    role: "Social Media Manager(CBM Radio)",
    department: "Marketing & Communications",
    bio: "As a Digital Community Lead, I specialize in building and nurturing vibrant online communities around brands and initiatives. My focus is on fostering meaningful connections, driving engagement, and creating platforms where communities can thrive, collaborate, and grow together.",
    quote: "",
    tools: ["Content Creation", "Social Media Strategy", "Engagement"],
    avatarImage: "/team/amoding.jpeg",
  },
  {
    id: "benjamin-ranzo",
    name: "Benjamin Ranzo",
    role: "Motion Graphics Designer",
    department: "Creative & Media",
    bio: "Leading visual storytelling and creative excellence across CBM's media platforms.",
    quote: "Visuals that speak louder than words.",
    tools: ["Creative Direction", "Brand Identity", "Video Production", "Post-Production"],
    avatarImage: "/team/ranzo.jpg",
  },
  {
    id: "mukama-shafic",
    name: "Mukama Shafic",
    role: "Frontend Developer & UI/UX Designer",
    department: "Technology",
    bio: "As a Frontend Developer, I focus on bringing designs to life through clean, efficient, and user-centric web interfaces. I specialize in transforming concepts into seamless digital experiences that prioritize performance, accessibility, and intuitive navigation.",
    quote: "",
    tools: ["HTML5, Tailwind CSS, JavaScript, Lovable"],
    avatarImage: "/team/shafic.jpeg",
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
        jobs: ["Business Development Lead", "Partnerships Lead", "Corporate Business Lead", "Client Relationship", "Operations Lead"],
      },
      {
        name: "Creative & Production",
        description:
          "Storytelling, media production, content creation, and hands-on creative execution across formats.",
        jobs: ["Video Editor", "Graphics Designer", "Content Creator", "Video/Cinematography Lead", "Photography Lead", "Motion Graphics Designer"],
      },
      {
        name: "Marketing & Communications",
        description:
          "Brand building, audience growth, campaign strategy, and communications that connect culture with action.",
        jobs: ["Marketing Lead", "Communication Strategist", "Public Relations Lead", "Digital Community Lead"],
      },
      {
        name: "Technology (IT)",
        description:
          "Product, platform, systems, and digital infrastructure to power innovation across the group.",
        jobs: ["IT Lead", "Backend Developer", "Data Management Lead", "Product Manager", "Cyber Security Specialist"],
      },
      {
        name: "Events",
        description:
          "Curating and producing live experiences, activations, and community-driven moments that deepen engagement.",
        jobs: ["Events Lead", "Partnerships & Sponsorships", "Team Management Lead", "Activations & Promotions"],
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
        jobs: ["Business Development Lead", "Partnerships Lead", "Corporate Business Lead", "Client Relationship", "Operations Lead"],
      },
      {
        name: "Creative & Production",
        description:
          "Storytelling, media production, content creation, and hands-on creative execution across formats.",
        jobs: ["Video Editor", "Graphics Designer", "Content Creator", "Video/Cinematography Lead", "Photography Lead", "Motion Graphics Designer"],
      },
      {
        name: "Marketing & Communications",
        description:
          "Brand building, audience growth, campaign strategy, and communications that connect culture with action.",
        jobs: ["Marketing Lead", "Communication Strategist", "Public Relations Lead", "Digital Community Lead"],
      },
      {
        name: "Technology (IT)",
        description:
          "Product, platform, systems, and digital infrastructure to power innovation across the group.",
        jobs: ["IT Lead", "Backend Developer", "Data Management Lead", "Product Manager", "Cyber Security Specialist"],
      },
      {
        name: "Events",
        description:
          "Curating and producing live experiences, activations, and community-driven moments that deepen engagement.",
        jobs: ["Events Lead", "Partnerships & Sponsorships", "Team Management Lead", "Activations & Promotions"],
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
        jobs: ["Business Development Lead", "Partnerships Lead", "Corporate Business Lead", "Client Relationship", "Operations Lead"],
      },
      {
        name: "Creative & Production",
        description:
          "Storytelling, media production, content creation, and hands-on creative execution across formats.",
        jobs: ["Video Editor", "Graphics Designer", "Content Creator", "Video/Cinematography Lead", "Photography Lead", "Motion Graphics Designer"],
      },
      {
        name: "Marketing & Communications",
        description:
          "Brand building, audience growth, campaign strategy, and communications that connect culture with action.",
        jobs: ["Marketing Lead", "Communication Strategist", "Public Relations Lead", "Digital Community Lead"],
      },
      {
        name: "Technology (IT)",
        description:
          "Product, platform, systems, and digital infrastructure to power innovation across the group.",
        jobs: ["IT Lead", "Backend Developer", "Data Management Lead", "Product Manager", "Cyber Security Specialist"],
      },
      {
        name: "Events",
        description:
          "Curating and producing live experiences, activations, and community-driven moments that deepen engagement.",
        jobs: ["Events Lead", "Partnerships & Sponsorships", "Team Management Lead", "Activations & Promotions"],
      },
    ],
  },
];

export const aboutUsInfo = {
  whoWeAre:
    "CBM Group is a multinational creative media, entertainment, streaming and conglomerate company advancing Africa's creative industry and other industries through storytelling, entrepreneurship, digital innovation, technology and streaming platforms.",
  vision:
    "To be the creative industries hub for storytelling, innovation, technology and streaming in Africa.",
  mission:
    "To build a dynamic ecosystem at the intersection of creativity, storytelling, innovation, technology, and streaming.",
};