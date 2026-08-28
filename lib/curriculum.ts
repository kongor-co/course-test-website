import type { Locale } from './site-content';

export type Phase = {
  number: number;
  title: string;
  fullTime: string;
  partTime: string;
  summary: string;
  topics: string[];
  aiAngle: string;
  output: string;
  fieldNote: string;
};

const phasesEn: Phase[] = [
  {
    number: 1,
    title: 'Digital Work and AI Foundations',
    fullTime: 'Week 1',
    partTime: 'Weeks 1-2',
    summary: 'Build a shared language for digital delivery and responsible AI-assisted work.',
    topics: ['Projects, products, programs, and operations', 'Digital team roles and the delivery lifecycle', 'Agile, predictive, and hybrid approaches', 'Responsibility, authority, collaboration, and project tooling', 'AI foundations, limitations, verification, and privacy'],
    aiAngle: 'Understand how AI speeds up drafting and analysis while increasing the need for verification, context management, data sensitivity, and accountable decisions.',
    output: 'Digital Initiative Brief and personal AI working rules.',
    fieldNote: 'A polished AI draft can still fail when the operating assumptions are wrong.',
  },
  {
    number: 2,
    title: 'Discovery, Requirements and Stakeholders',
    fullTime: 'Week 2',
    partTime: 'Weeks 3-4',
    summary: 'Move from an unclear request to a grounded problem, scope, and stakeholder picture.',
    topics: ['Problem definition and project context', 'Functional and non-functional requirements', 'Stakeholder analysis, interviews, and communication', 'Assumptions, constraints, product hypotheses, and value', 'Prioritization and project charter foundations'],
    aiAngle: 'Use AI to synthesize interviews, identify contradictions, generate questions, and organize requirements without delegating stakeholder judgment.',
    output: 'Problem statement, stakeholder map, requirements pack, and initial project charter.',
    fieldNote: 'The most powerful stakeholder is not always the best source of requirements.',
  },
  {
    number: 3,
    title: 'Planning and Prioritization',
    fullTime: 'Week 3',
    partTime: 'Weeks 5-6',
    summary: 'Turn outcomes into a credible plan that makes trade-offs and dependencies visible.',
    topics: ['Work breakdown and deliverables', 'Resources, capacity, estimation, and milestones', 'Dependencies, roadmaps, and project plans', 'RACI, RAID, communication, and documentation', 'Prioritization, change handling, and governance basics'],
    aiAngle: 'Use AI for first-pass breakdowns, risk brainstorming, scenario comparison, and assumption checks, then critique every output.',
    output: 'Project Delivery Plan, dependency map, RAID log, and communication plan.',
    fieldNote: 'A three-month estimate can mean something very different to a team and an executive.',
  },
  {
    number: 4,
    title: 'Agile Delivery, Scrum and Developer Collaboration',
    fullTime: 'Weeks 4-5',
    partTime: 'Weeks 7-10',
    summary: 'Practice iterative delivery while learning how software teams actually work.',
    topics: ['Agile principles and Scrum accountabilities', 'Events, artifacts, goals, backlog, and Definition of Done', 'Facilitation, impediments, and useful retrospectives', 'Kanban, WIP, cycle time, throughput, and flow', 'APIs, environments, testing, deployment, and technical debt'],
    aiAngle: 'Use AI for backlog refinement, acceptance criteria, meeting preparation, retrospective synthesis, and technical learning while watching for low-quality generated requirements.',
    output: 'Two simulated delivery cycles with rotating roles, backlog, sprint artifacts, and retrospective actions.',
    fieldNote: 'When a Scrum event becomes a status meeting, the format is rarely the only problem.',
  },
  {
    number: 5,
    title: 'Monitoring, Release and Go-Live',
    fullTime: 'Week 6',
    partTime: 'Weeks 11-12',
    summary: 'Make status decision-ready and prepare a release that can survive real constraints.',
    topics: ['Status reporting, KPIs, forecasting, and variance', 'Risk updates, decision logs, quality, and scope change', 'Release planning and go-live readiness', 'Rollback, handover, closure, and lessons learned', 'Evidence-based communication for decision-makers'],
    aiAngle: 'Generate status and risk drafts with AI, then require human validation, evidence, and a clear decision purpose.',
    output: 'Executive status report, go-live checklist, release plan, and closure note.',
    fieldNote: 'A useful status report helps someone decide, not merely observe.',
  },
  {
    number: 6,
    title: 'Strategy, Product Thinking and Team Design',
    fullTime: 'Week 7',
    partTime: 'Weeks 13-14',
    summary: 'Connect delivery choices to strategy, value, and the way a team is designed to decide.',
    topics: ['Company strategy and project objectives', 'Outcomes, KPIs, OKRs, and product vision', 'Product Goal, roadmap, value, and trade-offs', 'Team skills, capacity, and ownership', 'Decision rights, working agreements, and operating model'],
    aiAngle: 'Use AI to compare strategic options, structure outcome trees, draft decision criteria, and surface trade-offs while keeping strategy ownership human.',
    output: 'Strategy-to-Execution Map and team operating model.',
    fieldNote: 'Every stakeholder sees their request as a priority, so the decision rule matters.',
  },
  {
    number: 7,
    title: 'Risk, Complexity and AI-Assisted Decisions',
    fullTime: 'Weeks 8-9',
    partTime: 'Weeks 15-16',
    summary: 'Work with uncertainty, escalation, AI limitations, and decisions that need traceability.',
    topics: ['Risk probability, impact, mitigation, and contingency', 'Assumptions, issues, dependencies, and escalation', 'Cross-team risk and governance', 'LLM behavior, hallucinations, context, retrieval, and agents', 'Privacy, evidence checks, and automation boundaries'],
    aiAngle: 'Treat AI as decision support through structured analysis, scenario generation, critique, evidence checks, careful data handling, and explicit human accountability.',
    output: 'Risk workshop, AI-assisted decision memo, and critique of a flawed AI plan.',
    fieldNote: 'Plausible output becomes risky when assumptions and source evidence are invisible.',
  },
  {
    number: 8,
    title: 'Product Ownership, Multi-Team Delivery and Automation',
    fullTime: 'Week 10',
    partTime: 'Weeks 17-18',
    summary: 'Coordinate multiple streams of work and automate administration without automating accountability.',
    topics: ['Product Owner accountability and backlog management', 'Stakeholder inputs and release decisions', 'Cross-team dependencies, synchronization, and integration', 'Program roadmaps, workstreams, risks, and governance cadence', 'Benefits thinking and workflow automation'],
    aiAngle: 'Design automations for meeting outputs, action extraction, status drafts, risk-register upkeep, backlog support, and documentation.',
    output: 'Multi-team delivery map and one documented project-workflow automation.',
    fieldNote: 'A well-run project can still miss its goal when another team does not deliver.',
  },
  {
    number: 9,
    title: 'Leadership, Career Practice and Final Delivery',
    fullTime: 'Weeks 11-12',
    partTime: 'Weeks 19-20',
    summary: 'Lead across boundaries, present the work, and translate it into credible career evidence.',
    topics: ['Leading without authority and negotiation', 'Conflict, difficult conversations, and expectations', 'Escalation, executive communication, and facilitation', 'Role boundaries across project, product, Scrum, and program work', 'Career translation, interview stories, and case presentation'],
    aiAngle: 'Use AI for practice and feedback while avoiding generic, fabricated, or over-polished career narratives.',
    output: 'Final capstone release, executive presentation, portfolio case, and career-ready project story.',
    fieldNote: 'Clear leadership is often visible in the trade-off you explain, not the title you hold.',
  },
];

const phasesDe: Phase[] = phasesEn.map((phase) => ({ ...phase }));

const translated: Record<number, Omit<Phase, 'number'>> = {
  1: { title: 'Digitale Arbeit und KI-Grundlagen', fullTime: 'Woche 1', partTime: 'Wochen 1-2', summary: 'Entwickle eine gemeinsame Sprache für digitale Delivery und verantwortungsvolle KI-gestützte Arbeit.', topics: ['Projekte, Produkte, Programme und Betrieb', 'Rollen in digitalen Teams und der Delivery-Lebenszyklus', 'Agile, predictive und hybride Ansätze', 'Verantwortung, Autorität, Zusammenarbeit und Projekttools', 'KI-Grundlagen, Grenzen, Verifikation und Datenschutz'], aiAngle: 'Verstehe, wie KI Entwürfe und Analysen beschleunigt und zugleich Verifikation, Kontextmanagement, Datensensibilität und verantwortliche Entscheidungen wichtiger macht.', output: 'Digital Initiative Brief und persönliche Regeln für die Arbeit mit KI.', fieldNote: 'Ein überzeugender KI-Entwurf scheitert trotzdem, wenn die Annahmen falsch sind.' },
  2: { title: 'Discovery, Anforderungen und Stakeholder', fullTime: 'Woche 2', partTime: 'Wochen 3-4', summary: 'Führe eine unklare Anfrage zu einem fundierten Problem-, Scope- und Stakeholder-Bild.', topics: ['Problemdefinition und Projektkontext', 'Funktionale und nicht-funktionale Anforderungen', 'Stakeholder-Analyse, Interviews und Kommunikation', 'Annahmen, Einschränkungen, Produkthypothesen und Wert', 'Priorisierung und Grundlagen der Project Charter'], aiAngle: 'Nutze KI zur Synthese von Interviews, zum Erkennen von Widersprüchen, für Fragen und zur Strukturierung von Anforderungen, ohne Stakeholder-Urteil zu delegieren.', output: 'Problem Statement, Stakeholder Map, Requirements Pack und erste Project Charter.', fieldNote: 'Der mächtigste Stakeholder ist nicht immer die beste Quelle für Anforderungen.' },
  3: { title: 'Planung und Priorisierung', fullTime: 'Woche 3', partTime: 'Wochen 5-6', summary: 'Übersetze Ziele in einen glaubwürdigen Plan, der Abhängigkeiten und Trade-offs sichtbar macht.', topics: ['Work Breakdown und Deliverables', 'Ressourcen, Kapazität, Schätzung und Meilensteine', 'Abhängigkeiten, Roadmaps und Projektpläne', 'RACI, RAID, Kommunikation und Dokumentation', 'Priorisierung, Änderungen und Governance-Grundlagen'], aiAngle: 'Nutze KI für erste Aufteilungen, Risikoideen, Szenarien und Annahmenchecks und prüfe jedes Ergebnis kritisch.', output: 'Project Delivery Plan, Dependency Map, RAID Log und Communication Plan.', fieldNote: 'Eine Drei-Monats-Schätzung kann für Team und Management etwas sehr Unterschiedliches bedeuten.' },
  4: { title: 'Agile Delivery, Scrum und Zusammenarbeit mit Entwicklungsteams', fullTime: 'Wochen 4-5', partTime: 'Wochen 7-10', summary: 'Übe iterative Delivery und lerne, wie Softwareteams tatsächlich arbeiten.', topics: ['Agile Prinzipien und Scrum-Verantwortlichkeiten', 'Events, Artefakte, Ziele, Backlog und Definition of Done', 'Facilitation, Hindernisse und wirksame Retrospektiven', 'Kanban, WIP, Cycle Time, Throughput und Flow', 'APIs, Umgebungen, Tests, Deployment und technische Schulden'], aiAngle: 'Nutze KI für Backlog Refinement, Acceptance Criteria, Meeting-Vorbereitung, Retrospektiven und technisches Lernen und erkenne schwache generierte Anforderungen.', output: 'Zwei simulierte Delivery-Zyklen mit rotierenden Rollen, Backlog, Sprint-Artefakten und Retro-Aktionen.', fieldNote: 'Wenn ein Scrum Event zum Statusmeeting wird, ist das Format selten das einzige Problem.' },
  5: { title: 'Monitoring, Release und Go-Live', fullTime: 'Woche 6', partTime: 'Wochen 11-12', summary: 'Mache Statusinformationen entscheidungsreif und bereite einen robusten Release vor.', topics: ['Statusberichte, KPIs, Forecasting und Abweichungen', 'Risiken, Decision Logs, Qualität und Scope-Änderungen', 'Release-Planung und Go-Live Readiness', 'Rollback, Übergabe, Abschluss und Lessons Learned', 'Evidenzbasierte Kommunikation für Entscheider'], aiAngle: 'Erzeuge Status- und Risikoentwürfe mit KI und fordere menschliche Validierung, Evidenz und einen klaren Entscheidungszweck.', output: 'Executive Status Report, Go-Live Checklist, Release Plan und Closure Note.', fieldNote: 'Ein guter Statusbericht hilft bei einer Entscheidung und beschreibt nicht nur die Lage.' },
  6: { title: 'Strategie, Produktdenken und Teamdesign', fullTime: 'Woche 7', partTime: 'Wochen 13-14', summary: 'Verbinde Delivery-Entscheidungen mit Strategie, Wert und Teamverantwortung.', topics: ['Unternehmensstrategie und Projektziele', 'Outcomes, KPIs, OKRs und Produktvision', 'Product Goal, Roadmap, Wert und Trade-offs', 'Teamfähigkeiten, Kapazität und Ownership', 'Entscheidungsrechte, Working Agreements und Operating Model'], aiAngle: 'Nutze KI für Optionsvergleiche, Outcome Trees, Entscheidungskriterien und Trade-offs und behalte Strategie-Ownership beim Menschen.', output: 'Strategy-to-Execution Map und Team Operating Model.', fieldNote: 'Jeder Stakeholder hält seine Anfrage für eine Priorität, deshalb zählt die Entscheidungsregel.' },
  7: { title: 'Risiko, Komplexität und KI-gestützte Entscheidungen', fullTime: 'Wochen 8-9', partTime: 'Wochen 15-16', summary: 'Arbeite mit Unsicherheit, Eskalation, KI-Grenzen und nachvollziehbaren Entscheidungen.', topics: ['Risikowahrscheinlichkeit, Auswirkung, Mitigation und Contingency', 'Annahmen, Issues, Abhängigkeiten und Eskalation', 'Teamübergreifende Risiken und Governance', 'LLM-Verhalten, Halluzinationen, Kontext, Retrieval und Agents', 'Datenschutz, Evidenzchecks und Automationsgrenzen'], aiAngle: 'Nutze KI als Decision Support für strukturierte Analyse, Szenarien, Kritik, Evidenzchecks, sicheren Umgang mit Daten und klare menschliche Verantwortung.', output: 'Risk Workshop, KI-gestütztes Decision Memo und Kritik eines fehlerhaften KI-Plans.', fieldNote: 'Plausible Ergebnisse werden riskant, wenn Annahmen und Quellen unsichtbar bleiben.' },
  8: { title: 'Product Ownership, Multi-Team Delivery und Automation', fullTime: 'Woche 10', partTime: 'Wochen 17-18', summary: 'Koordiniere mehrere Arbeitsströme und automatisiere Administration, nicht Verantwortung.', topics: ['Product Owner Accountability und Backlog Management', 'Stakeholder-Inputs und Release-Entscheidungen', 'Teamübergreifende Abhängigkeiten, Synchronisierung und Integration', 'Programm-Roadmaps, Workstreams, Risiken und Governance Cadence', 'Benefits Thinking und Workflow Automation'], aiAngle: 'Entwickle Automationen für Meeting-Ergebnisse, Action Extraction, Statusentwürfe, Risk Register, Backlog Support und Dokumentation.', output: 'Multi-Team Delivery Map und eine dokumentierte Projekt-Workflow-Automation.', fieldNote: 'Ein gut geführtes Projekt kann sein Ziel verfehlen, wenn ein anderes Team nicht liefert.' },
  9: { title: 'Leadership, Karrierepraxis und Final Delivery', fullTime: 'Wochen 11-12', partTime: 'Wochen 19-20', summary: 'Führe über Grenzen hinweg, präsentiere die Arbeit und übersetze sie in glaubwürdige Karrierebelege.', topics: ['Führen ohne Autorität und Verhandlung', 'Konflikt, schwierige Gespräche und Erwartungen', 'Eskalation, Executive Communication und Facilitation', 'Rollengrenzen in Projekt, Produkt, Scrum und Programm', 'Karrieretransfer, Interview Stories und Case Presentation'], aiAngle: 'Nutze KI für Übung und Feedback und vermeide generische, erfundene oder überpolierte Karriereerzählungen.', output: 'Final Capstone Release, Executive Presentation, Portfolio Case und glaubwürdige Project Story.', fieldNote: 'Leadership zeigt sich oft im erklärten Trade-off und nicht im Jobtitel.' },
};

for (let index = 0; index < phasesDe.length; index += 1) {
  const number = index + 1;
  phasesDe[index] = { number, ...translated[number] };
}

export const curriculumByLocale: Record<Locale, Phase[]> = {
  en: phasesEn,
  de: phasesDe,
};
