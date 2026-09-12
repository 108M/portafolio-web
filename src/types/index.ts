export interface LocalizedString {
  en: string;
  es: string;
}

export interface Project {
  slug: string;
  title: string;                       // display name
  repo: string;                        // GitHub repo name
  category: LocalizedString;           // e.g. "Security" / "Seguridad"
  short: LocalizedString;              // card description
  description: LocalizedString;        // detail page intro (longer)
  features: { en: string[]; es: string[] };
  tags: string[];                      // tech stack
  language: string;                    // primary language
  repoUrl: string;
  liveUrl?: string;
  year: string;
  featured: boolean;
}

export interface Experience {
  type: 'education' | 'work';
  title: LocalizedString;
  organization: string;
  period: string;
  description: LocalizedString;
  tags?: string[];
  link?: string; // slug of a detail page under /experience/
}

export interface TechItem {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'ai' | 'security';
}

export type Lang = 'en' | 'es';
