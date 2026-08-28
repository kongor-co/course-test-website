import type { PageName } from '@/components/static-site-page';
import type { Locale } from './site-content';

const home = {
  de: {
    title: 'IT Project Management in the World of AI Automations',
    description: 'Praxisnaher Onlinekurs für IT-Projektmanagement, Agile Delivery und KI-gestützte Workflows. Unterricht auf Englisch.',
  },
  en: {
    title: 'IT Project Management in the World of AI Automations',
    description: 'Practitioner-led online course in IT project management, Agile delivery, and AI-assisted workflows.',
  },
};

const pages: Record<PageName, Record<Locale, { title: string; description: string }>> = {
  course: {
    de: { title: 'Onlinekurs für IT-Projektmanagement und KI', description: 'Zwei Tracks, neun Lernphasen und ein durchgängiges Capstone-Projekt. Unterricht auf Englisch.' },
    en: { title: 'Online IT Project Management and AI Course', description: 'Two tracks, nine learning phases, and one continuous capstone project. Teaching is in English.' },
  },
  curriculum: {
    de: { title: 'IT-Projektmanagement und KI Curriculum', description: 'Neun Phasen mit Vollzeit- und Teilzeit-Pacing, KI-Perspektive und praktischen Ergebnissen.' },
    en: { title: 'IT Project Management and AI Curriculum', description: 'Nine phases with full-time and part-time pacing, AI-era angles, and practical outputs.' },
  },
  about: {
    de: { title: 'Über The Best School', description: 'Praxisnahe digitale Bildung für Arbeit, die sich ständig verändert.' },
    en: { title: 'About The Best School', description: 'Practical digital career education for work that keeps changing.' },
  },
  apply: {
    de: { title: 'Bewerben', description: 'Kurze Bewerbung für den Onlinekurs von The Best School.' },
    en: { title: 'Apply', description: 'A short application for The Best School online course.' },
  },
  contact: {
    de: { title: 'Kontakt', description: 'Kontaktiere The Best School zu Kursen und Bewerbungen.' },
    en: { title: 'Contact', description: 'Contact The Best School about courses and applications.' },
  },
  privacy: {
    de: { title: 'Datenschutz', description: 'Datenschutzhinweise von The Best School.' },
    en: { title: 'Privacy', description: 'The Best School privacy notice.' },
  },
  imprint: {
    de: { title: 'Impressum', description: 'Rechtliche Hinweise von The Best School.' },
    en: { title: 'Imprint', description: 'The Best School legal notice.' },
  },
  cookies: {
    de: { title: 'Cookie-Informationen', description: 'Cookie-Informationen und Einstellungen von The Best School.' },
    en: { title: 'Cookie information', description: 'The Best School cookie information and preferences.' },
  },
};

export function pageMetadata(locale: Locale, page?: PageName) {
  return page ? pages[page][locale] : home[locale];
}
