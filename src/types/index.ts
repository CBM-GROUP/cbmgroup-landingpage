export interface Pillar {
  id: string;
  title: string;
  description: string;
  number: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description?: string;
  number: string;
}

export interface Brand {
  id: string;
  name: string;
  description?: string;
  image?: string;
  images?: string[];
  href?: string;
}

export interface Initiative {
  id: string;
  title: string;
  description: string;
  number: string;
  images: string[];
  href?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  nickname?: string;
  department?: "Leadership" | "Technology" | "Creative & Media";
  vibeRole?: string;
  bio?: string;
  quote?: string;
  superpower?: string;
  tools?: string[];
  favoriteTrack?: string;
  avatarImage?: string;
  avatarColor?: string;
  stats?: {
    creativity: number;
    caffeine: number;
    tech: number;
    vibe: number;
  };
}

export interface CareerTeam {
  name: string;
  description: string;
  jobs: string[];
}

export interface CareerPath {
  id: string;
  title: string;
  description?: string;
  teams?: CareerTeam[];
}

export interface CareerProgram extends CareerPath {
  description: string;
  teams: CareerTeam[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface VisionMission {
  vision: string;
  mission: string;
}