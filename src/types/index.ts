// TypeScript type definitions for the Cozy Code Cafe portfolio

export interface Project {
  id: number;
  title: string;
  description: string;
  emoji: string;
  gradient: string;
  technologies: string[];
  details: string;
  link?: string;
  images?: string[];
}

export interface Skill {
  name: string;
  emoji: string;
  color: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface PersonalityTrait {
  emoji: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  emoji: string;
  url: string;
}

export interface NavigationSection {
  id: string;
  label: string;
  emoji: string;
}

export interface CafeColors {
  latte: string;
  coffee: string;
  cream: string;
  wood: string;
  blush: string;
  mint: string;
  lavender: string;
  honey: string;
  espresso: string;
  'milk-chocolate': string;
}

// Global THREE.js declaration for Vanta
declare global {
  interface Window {
    THREE: any;
  }
}
