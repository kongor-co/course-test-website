export const locales = ['de', 'en'] as const;
export type Locale = (typeof locales)[number];

type PreviewContent = {
  nav: { course: string; curriculum: string; about: string; contact: string; apply: string };
  eyebrow: string;
  title: string;
  lead: string;
  support: string;
  primary: string;
  secondary: string;
  facts: string[];
  cohortHeading: string;
  cohortIntro: string;
  whyHeading: string;
  whyIntro: string;
  cohorts: { date: string; track: string; detail: string }[];
  reasons: { title: string; copy: string }[];
};

export const previewContent: Record<Locale, PreviewContent> = {
  en: {
    nav: { course: 'Course', curriculum: 'Curriculum', about: 'About', contact: 'Contact', apply: 'Apply' },
    eyebrow: 'Online course · English · Germany-focused',
    title: 'IT Project Management in the World of AI Automations',
    lead: 'Build the project, Agile, product, coordination, and AI workflow skills needed to manage digital work as roles and operating models change.',
    support: 'Practitioner-led. Tool-agnostic. Built around realistic delivery situations and one continuous capstone project.',
    primary: 'Apply for a cohort',
    secondary: 'View curriculum',
    facts: ['12 weeks full-time', '20 weeks part-time', 'Remote', 'English', 'Max. 10 learners', 'Certificate'],
    cohortHeading: 'Choose your pace.',
    cohortIntro: 'Three provisional 2026 starts. Exact live-session times are confirmed before each cohort.',
    whyHeading: 'Built for work that is already changing.',
    whyIntro: 'Frameworks matter. So do judgment, context, and the ability to improve how work moves.',
    cohorts: [
      { date: '5 Oct 2026', track: 'Full-time · 12 weeks', detail: 'Remote · English · Up to 10 learners' },
      { date: '2 Nov 2026', track: 'Part-time · 20 weeks', detail: 'Remote · English · Up to 10 learners' },
      { date: '30 Nov 2026', track: 'Full-time · 12 weeks', detail: 'Remote · English · Up to 10 learners' },
    ],
    reasons: [
      { title: 'Project work is changing', copy: 'AI is reshaping documentation, analysis, coordination, planning, and decision support.' },
      { title: 'Framework knowledge is not enough', copy: 'Practice decisions across project, product, Agile, and organizational contexts.' },
      { title: 'Adaptability travels', copy: 'Learn transferable principles instead of depending on one AI vendor or project tool.' },
    ],
  },
  de: {
    nav: { course: 'Kurs', curriculum: 'Curriculum', about: 'Über uns', contact: 'Kontakt', apply: 'Bewerben' },
    eyebrow: 'Onlinekurs · Unterricht auf Englisch · Deutschland-Fokus',
    title: 'IT Project Management in the World of AI Automations',
    lead: 'Entwickle Projekt-, Agile-, Produkt-, Koordinations- und KI-Workflow-Kompetenzen für digitale Arbeit in sich verändernden Rollen und Organisationsmodellen.',
    support: 'Von Praktikerinnen und Praktikern. Tool-agnostisch. Rund um realistische Delivery-Situationen und ein durchgängiges Capstone-Projekt.',
    primary: 'Für einen Kurs bewerben',
    secondary: 'Curriculum ansehen',
    facts: ['12 Wochen Vollzeit', '20 Wochen Teilzeit', 'Remote', 'Englisch', 'Max. 10 Lernende', 'Zertifikat'],
    cohortHeading: 'Wähle dein Tempo.',
    cohortIntro: 'Drei vorläufige Starts für 2026. Die genauen Live-Zeiten werden vor jedem Kurs bestätigt.',
    whyHeading: 'Für Arbeit, die sich bereits verändert.',
    whyIntro: 'Frameworks sind wichtig. Genauso wichtig sind Urteilsvermögen, Kontext und bessere Arbeitsabläufe.',
    cohorts: [
      { date: '5. Okt 2026', track: 'Vollzeit · 12 Wochen', detail: 'Remote · Englisch · Max. 10 Lernende' },
      { date: '2. Nov 2026', track: 'Teilzeit · 20 Wochen', detail: 'Remote · Englisch · Max. 10 Lernende' },
      { date: '30. Nov 2026', track: 'Vollzeit · 12 Wochen', detail: 'Remote · Englisch · Max. 10 Lernende' },
    ],
    reasons: [
      { title: 'Projektarbeit verändert sich', copy: 'KI verändert Dokumentation, Analyse, Koordination, Planung und Entscheidungsunterstützung.' },
      { title: 'Framework-Wissen reicht nicht', copy: 'Übe Entscheidungen in Projekt-, Produkt-, Agile- und Organisationskontexten.' },
      { title: 'Anpassungsfähigkeit bleibt', copy: 'Lerne übertragbare Prinzipien statt Abhängigkeit von einem KI-Anbieter oder Projekttool.' },
    ],
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
