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
  department?: "Leadership" | "Technology" | "Creative & Media";
  bio?: string;
  quote?: string;
  tools?: string[];
  avatarImage?: string;
}

export interface CareerTeam {
  name: string;
  description: string;
  jobs: string[];
}

export interface CareerProgram {
  id: string;
  title: string;
  description: string;
  teams: CareerTeam[];
}

export interface NavItem {
  label: string;
  href: string;
}