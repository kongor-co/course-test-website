import type { Locale } from './site-content';

type Copy = {
  outcomesHeading: string;
  outcomesIntro: string;
  outcomes: string[];
  audienceHeading: string;
  audienceIntro: string;
  audience: string[];
  beginnerNote: string;
  lensesHeading: string;
  lensesIntro: string;
  lenses: { name: string; question: string }[];
  aiHeading: string;
  aiCopy: string;
  aiExamples: string[];
  curriculumHeading: string;
  curriculumIntro: string;
  curriculumLink: string;
  capstoneHeading: string;
  capstoneCopy: string;
  capstoneOutputs: string[];
  tracksHeading: string;
  tracksIntro: string;
  fullTime: { title: string; meta: string; copy: string };
  partTime: { title: string; meta: string; copy: string };
  careersHeading: string;
  careersIntro: string;
  careers: string[];
  progression: string;
  supportHeading: string;
  support: { title: string; copy: string }[];
  certificateHeading: string;
  certificateCopy: string;
  faqHeading: string;
  faqs: { question: string; answer: string }[];
  finalHeading: string;
  finalCopy: string;
  download: string;
};

export const pageCopy: Record<Locale, Copy> = {
  en: {
    outcomesHeading: 'Graduate with evidence, not just vocabulary.',
    outcomesIntro: 'By the end, you should be able to move an IT initiative from an unclear problem to a controlled release.',
    outcomes: [
      'Plan an IT project from problem definition through delivery.',
      'Manage stakeholders, expectations, and project communication.',
      'Run Scrum events and support healthy team delivery.',
      'Create roadmaps, backlogs, priorities, and delivery plans.',
      'Manage risks, constraints, dependencies, and scope changes.',
      'Communicate project status to teams and decision-makers.',
      'Coordinate work across multiple teams and workstreams.',
      'Use AI for research, synthesis, planning, and workflow automation.',
      'Work effectively with developers and understand software delivery.',
    ],
    audienceHeading: 'For people moving toward digital delivery.',
    audienceIntro: 'The course is demanding and practical. You do not need a project management job title to begin.',
    audience: ['Career changers', 'Existing project managers', 'Scrum Masters', 'Product professionals', 'Transformation teams', 'Applicants exploring public training support'],
    beginnerNote: 'The course leans intermediate, but motivated beginners are welcome and receive foundation material before advanced delivery topics.',
    lensesHeading: 'One discipline. Four professional lenses.',
    lensesIntro: 'IT project management stays at the center while you learn how adjacent perspectives change the decision.',
    lenses: [
      { name: 'Project', question: 'How do we deliver this successfully?' },
      { name: 'Product', question: 'Are we solving the right problem and creating value?' },
      { name: 'Scrum', question: 'How does the team work effectively and improve?' },
      { name: 'Program', question: 'How does this interact with other teams, dependencies, and priorities?' },
    ],
    aiHeading: 'Use AI as a management capability, not a list of tools.',
    aiCopy: 'Practice principles that transfer across models and platforms: context design, verification, data sensitivity, decision support, automation design, and human accountability.',
    aiExamples: ['Research synthesis', 'Meeting and decision capture', 'Risk discovery', 'Scenario analysis', 'Project reporting', 'Backlog support', 'Dependency mapping', 'Workflow automation'],
    curriculumHeading: 'Nine phases. One connected practice.',
    curriculumIntro: 'Each phase adds a new layer to the same digital initiative, so the curriculum builds instead of resetting.',
    curriculumLink: 'See the detailed curriculum',
    capstoneHeading: 'Learn through one continuous project.',
    capstoneCopy: 'A medium-sized company replaces manual customer onboarding with a digital platform that includes AI-assisted document processing. You manage the initiative as scope, risk, dependencies, and delivery pressure grow.',
    capstoneOutputs: ['Initiative brief and stakeholder map', 'Roadmap, plan, backlog, and RAID', 'Status, release, and go-live plan', 'Workflow automation and decision memo', 'Executive presentation and portfolio case'],
    tracksHeading: 'Same outcomes. Two ways to learn.',
    tracksIntro: 'Both tracks use live teaching, guided practice, independent work, and the continuous capstone.',
    fullTime: { title: 'Full-time', meta: '12 weeks · About 40 hours each week', copy: 'Higher live-session density, intensive team simulation, and concentrated capstone work.' },
    partTime: { title: 'Part-time', meta: '20 weeks · About 24 hours each week', copy: 'Fewer live hours each week, selected recordings, and more independent project work.' },
    careersHeading: 'Career directions with honest boundaries.',
    careersIntro: 'The program supports preparation for entry and transition roles in IT delivery. It does not promise employment, salary, or external certification.',
    careers: ['IT Project Manager', 'Technical Project Coordinator', 'Agile Project Manager', 'Scrum Master', 'Product Operations'],
    progression: 'Product Manager and Program Manager are later progression paths, not guaranteed entry-level outcomes.',
    supportHeading: 'Career work is part of the course.',
    support: [
      { title: 'Market orientation', copy: 'Understand current role expectations and translate course work into relevant evidence.' },
      { title: 'Application practice', copy: 'Develop your CV, profile, interview stories, and portfolio case.' },
      { title: 'Situation support', copy: 'Career support can be coordinated with relevant official institutions where applicable.' },
    ],
    certificateHeading: 'Complete the program with a The Best School certificate.',
    certificateCopy: 'The certificate confirms completion of the course and its practical project requirements. It is not an external professional certification.',
    faqHeading: 'Questions before you apply.',
    faqs: [
      { question: 'Is the course taught in English?', answer: 'Yes. The website is bilingual, but teaching is in English.' },
      { question: 'Do I need previous experience?', answer: 'No. The course is demanding and leans intermediate, but motivated beginners can join.' },
      { question: 'Is the course online?', answer: 'Yes. Teaching is remote, with live sessions, selected recordings, and project work.' },
      { question: 'What is the difference between the tracks?', answer: 'Full-time runs for 12 weeks with higher weekly intensity. Part-time spreads the workload across 20 weeks.' },
      { question: 'Do I receive a certificate?', answer: 'Yes, a The Best School completion certificate.' },
      { question: 'Is an external Scrum or project management certification included?', answer: 'No. The certificate confirms completion of The Best School course and practical project requirements.' },
      { question: 'Which AI tools will I learn?', answer: 'The course is tool-agnostic. Specific tools may be used for practice, but the focus is on transferable methods.' },
      { question: 'How large are cohorts?', answer: 'Up to 10 learners.' },
      { question: 'Is career support included?', answer: 'Yes. Career preparation is integrated and can be coordinated with relevant official institutions where applicable.' },
      { question: 'How do I apply?', answer: 'Submit your email address and a short reason for taking the course. The school will contact you.' },
    ],
    finalHeading: 'Prepare for project work that is already changing.',
    finalCopy: 'Start with a short application. We will contact you about cohort availability and next steps.',
    download: 'Download curriculum PDF',
  },
  de: {
    outcomesHeading: 'Schließe mit Belegen ab, nicht nur mit Begriffen.',
    outcomesIntro: 'Am Ende solltest du eine IT-Initiative von einem unklaren Problem bis zu einem kontrollierten Release führen können.',
    outcomes: [
      'Ein IT-Projekt von der Problemdefinition bis zur Delivery planen.',
      'Stakeholder, Erwartungen und Projektkommunikation steuern.',
      'Scrum Events durchführen und gesunde Team-Delivery fördern.',
      'Roadmaps, Backlogs, Prioritäten und Delivery-Pläne erstellen.',
      'Risiken, Einschränkungen, Abhängigkeiten und Scope-Änderungen steuern.',
      'Projektstatus klar an Teams und Entscheider kommunizieren.',
      'Arbeit über mehrere Teams und Workstreams koordinieren.',
      'KI für Research, Synthese, Planung und Workflow-Automation einsetzen.',
      'Wirksam mit Entwicklungsteams arbeiten und Software Delivery verstehen.',
    ],
    audienceHeading: 'Für Menschen auf dem Weg in digitale Delivery.',
    audienceIntro: 'Der Kurs ist anspruchsvoll und praktisch. Du brauchst zu Beginn keinen Projektmanagement-Titel.',
    audience: ['Career Changer', 'Erfahrene Projektmanager', 'Scrum Master', 'Product Professionals', 'Transformationsteams', 'Menschen mit Interesse an öffentlicher Trainingsförderung'],
    beginnerNote: 'Der Kurs ist eher auf mittlerem Niveau, aber motivierte Einsteiger sind willkommen und erhalten Grundlagenmaterial vor fortgeschrittenen Delivery-Themen.',
    lensesHeading: 'Eine Disziplin. Vier professionelle Perspektiven.',
    lensesIntro: 'IT-Projektmanagement bleibt im Zentrum. Angrenzende Perspektiven verändern die Entscheidung.',
    lenses: [
      { name: 'Projekt', question: 'Wie liefern wir das erfolgreich?' },
      { name: 'Produkt', question: 'Lösen wir das richtige Problem und schaffen wir Wert?' },
      { name: 'Scrum', question: 'Wie arbeitet das Team wirksam und verbessert sich?' },
      { name: 'Programm', question: 'Wie interagiert die Initiative mit anderen Teams, Abhängigkeiten und Prioritäten?' },
    ],
    aiHeading: 'Nutze KI als Managementkompetenz, nicht als Tool-Liste.',
    aiCopy: 'Übe Prinzipien, die über Modelle und Plattformen hinweg gelten: Kontextdesign, Verifikation, Datensensibilität, Decision Support, Automationsdesign und menschliche Verantwortung.',
    aiExamples: ['Research-Synthese', 'Meeting- und Decision Capture', 'Risikoerkennung', 'Szenarioanalyse', 'Projektberichte', 'Backlog Support', 'Dependency Mapping', 'Workflow Automation'],
    curriculumHeading: 'Neun Phasen. Eine verbundene Praxis.',
    curriculumIntro: 'Jede Phase ergänzt dieselbe digitale Initiative. So baut das Curriculum aufeinander auf.',
    curriculumLink: 'Detailliertes Curriculum ansehen',
    capstoneHeading: 'Lerne an einem durchgängigen Projekt.',
    capstoneCopy: 'Ein mittelständisches Unternehmen ersetzt manuelles Customer Onboarding durch eine digitale Plattform mit KI-gestützter Dokumentenverarbeitung. Du steuerst die Initiative, während Scope, Risiko, Abhängigkeiten und Delivery-Druck wachsen.',
    capstoneOutputs: ['Initiative Brief und Stakeholder Map', 'Roadmap, Plan, Backlog und RAID', 'Status, Release und Go-Live Plan', 'Workflow Automation und Decision Memo', 'Executive Presentation und Portfolio Case'],
    tracksHeading: 'Gleiche Outcomes. Zwei Lernwege.',
    tracksIntro: 'Beide Tracks verbinden Live-Unterricht, geführte Praxis, unabhängige Arbeit und das durchgängige Capstone-Projekt.',
    fullTime: { title: 'Vollzeit', meta: '12 Wochen · Etwa 40 Stunden pro Woche', copy: 'Höhere Live-Dichte, intensive Teamsimulation und konzentrierte Capstone-Arbeit.' },
    partTime: { title: 'Teilzeit', meta: '20 Wochen · Etwa 24 Stunden pro Woche', copy: 'Weniger Live-Stunden pro Woche, ausgewählte Aufzeichnungen und mehr unabhängige Projektarbeit.' },
    careersHeading: 'Karrierewege mit ehrlichen Grenzen.',
    careersIntro: 'Das Programm unterstützt die Vorbereitung auf Einstiegs- und Übergangsrollen in IT Delivery. Es verspricht weder Job noch Gehalt oder externe Zertifizierung.',
    careers: ['IT Project Manager', 'Technical Project Coordinator', 'Agile Project Manager', 'Scrum Master', 'Product Operations'],
    progression: 'Product Manager und Program Manager sind spätere Entwicklungspfade, keine garantierten Einstiegsrollen.',
    supportHeading: 'Karrierearbeit ist Teil des Kurses.',
    support: [
      { title: 'Marktorientierung', copy: 'Verstehe aktuelle Rollenerwartungen und übersetze Kursarbeit in relevante Belege.' },
      { title: 'Bewerbungspraxis', copy: 'Entwickle CV, Profil, Interview Stories und deinen Portfolio Case.' },
      { title: 'Situationsbezogene Unterstützung', copy: 'Karriereunterstützung kann, soweit anwendbar, mit relevanten offiziellen Stellen koordiniert werden.' },
    ],
    certificateHeading: 'Schließe das Programm mit einem Zertifikat von The Best School ab.',
    certificateCopy: 'Das Zertifikat bestätigt den Abschluss des Kurses und seiner praktischen Projektanforderungen. Es ist keine externe Berufszertifizierung.',
    faqHeading: 'Fragen vor deiner Bewerbung.',
    faqs: [
      { question: 'Findet der Kurs auf Englisch statt?', answer: 'Ja. Die Website ist zweisprachig, aber der Unterricht findet auf Englisch statt.' },
      { question: 'Brauche ich Vorerfahrung?', answer: 'Nein. Der Kurs ist anspruchsvoll und eher auf mittlerem Niveau, motivierte Einsteiger können aber teilnehmen.' },
      { question: 'Ist der Kurs online?', answer: 'Ja. Der Unterricht ist remote mit Live-Sessions, ausgewählten Aufzeichnungen und Projektarbeit.' },
      { question: 'Was unterscheidet die Tracks?', answer: 'Vollzeit dauert 12 Wochen mit höherer Wochenintensität. Teilzeit verteilt die Arbeit auf 20 Wochen.' },
      { question: 'Erhalte ich ein Zertifikat?', answer: 'Ja, ein Abschlusszertifikat von The Best School.' },
      { question: 'Ist eine externe Scrum- oder Projektmanagement-Zertifizierung enthalten?', answer: 'Nein. Das Zertifikat bestätigt den Abschluss des Kurses und seiner praktischen Projektanforderungen.' },
      { question: 'Welche KI-Tools lerne ich?', answer: 'Der Kurs ist tool-agnostisch. Bestimmte Tools können zum Üben eingesetzt werden, aber der Fokus liegt auf übertragbaren Methoden.' },
      { question: 'Wie groß sind die Gruppen?', answer: 'Maximal 10 Lernende.' },
      { question: 'Ist Karriereunterstützung enthalten?', answer: 'Ja. Karrierevorbereitung ist integriert und kann, soweit anwendbar, mit relevanten offiziellen Stellen koordiniert werden.' },
      { question: 'Wie bewerbe ich mich?', answer: 'Sende deine E-Mail-Adresse und eine kurze Begründung. Die Schule kontaktiert dich.' },
    ],
    finalHeading: 'Bereite dich auf Projektarbeit vor, die sich bereits verändert.',
    finalCopy: 'Beginne mit einer kurzen Bewerbung. Wir melden uns zu Verfügbarkeit und nächsten Schritten.',
    download: 'Curriculum PDF herunterladen',
  },
};
