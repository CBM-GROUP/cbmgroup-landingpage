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
  images: string[];
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
}

export interface CareerPath {
  id: string;
  title: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface VisionMission {
  vision: string;
  mission: string;
}