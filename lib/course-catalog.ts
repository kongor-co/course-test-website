import type { Phase } from './curriculum';
import type { Locale } from './site-content';

export type AdditionalCourseSlug = 'tech-product-management-ai' | 'digital-transformation-ai';
export type CourseSlug = 'it-project-management-ai' | AdditionalCourseSlug;

export type CourseCohort = {
  date: string;
  track: 'Full-time' | 'Part-time' | 'Vollzeit' | 'Teilzeit';
  duration: string;
  detail: string;
};

export type CourseCard = {
  slug: CourseSlug;
  title: string;
  category: string;
  summary: string;
  duration: string;
  format: string;
  level: string;
  roles: string[];
  href: string;
  curriculumHref: string;
  pdfFilename: string;
  accent: 'delivery' | 'product' | 'transformation';
  cohorts: CourseCohort[];
};

export interface AdditionalCourse extends CourseCard {
  eyebrow: string;
  lead: string;
  support: string;
  facts: string[];
  outcomesIntro: string;
  outcomes: string[];
  audienceHeading: string;
  audienceIntro: string;
  audience: string[];
  beginnerNote: string;
  differenceTitle: string;
  differenceCopy: string;
  practiceTitle: string;
  practiceCopy: string;
  practiceOutputs: string[];
  phases: Phase[];
  careersHeading: string;
  careersIntro: string;
  progression: string;
  certificateCopy: string;
  faqs: { question: string; answer: string }[];
}

const sharedEnglish = {
  format: 'Remote live learning',
  detail: 'Remote - English - Up to 10 learners',
};

const sharedGerman = {
  format: 'Remote Live-Unterricht',
  detail: 'Remote - Englisch - Max. 10 Lernende',
};

const productPhasesEn: Phase[] = [
  {
    number: 1,
    title: 'Opportunity, Market and Product Strategy',
    fullTime: 'Weeks 1-2',
    partTime: 'Weeks 1-3',
    summary: 'Turn a broad business opportunity into a focused product direction with explicit assumptions and measures of success.',
    topics: ['Market and competitor analysis', 'Customer value and product-market fit', 'Product vision, principles and strategic choices', 'Outcome trees, KPIs and OKRs', 'Opportunity assessment and product ethics'],
    aiAngle: 'Use AI to accelerate market synthesis, option generation and assumption mapping while verifying sources and separating evidence from confident speculation.',
    output: 'Opportunity brief, product vision and strategy map.',
    fieldNote: 'A roadmap is not a strategy when the underlying choices remain invisible.',
  },
  {
    number: 2,
    title: 'Discovery and User Research',
    fullTime: 'Weeks 3-4',
    partTime: 'Weeks 4-6',
    summary: 'Build a reliable picture of user needs before committing a team to a solution.',
    topics: ['Research planning and recruiting', 'Interviews, observation and survey design', 'Jobs to be done and journey mapping', 'Problem statements and product hypotheses', 'Research repositories and decision traceability'],
    aiAngle: 'Use AI to prepare interviews, cluster qualitative evidence and challenge emerging interpretations without exposing sensitive research data.',
    output: 'Research plan, insight repository, journey map and prioritized problem statement.',
    fieldNote: 'The strongest interview quote is not always the most representative evidence.',
  },
  {
    number: 3,
    title: 'Prototyping and Validation',
    fullTime: 'Weeks 5-6',
    partTime: 'Weeks 7-9',
    summary: 'Test desirability, usability and feasibility before expensive delivery decisions become difficult to reverse.',
    topics: ['Value propositions and experiment design', 'Wireframes and interactive prototypes', 'Usability testing and learning criteria', 'Assumption mapping and risk-first testing', 'Evidence-based iteration and stop decisions'],
    aiAngle: 'Generate prototype alternatives and test scripts with AI, then assess whether the resulting experience actually serves the user and business context.',
    output: 'Prototype, validation plan and evidence-based recommendation.',
    fieldNote: 'Validation is designed to reduce uncertainty, not to prove the original idea correct.',
  },
  {
    number: 4,
    title: 'Product Planning and Agile Delivery',
    fullTime: 'Weeks 7-8',
    partTime: 'Weeks 10-12',
    summary: 'Connect product outcomes to a roadmap and backlog that a delivery team can understand and challenge.',
    topics: ['Outcome-based roadmaps and release hypotheses', 'Backlog structure and prioritization', 'User stories, acceptance criteria and Definition of Done', 'Scrum, Kanban and product operating rhythms', 'Dependencies, trade-offs and stakeholder expectations'],
    aiAngle: 'Use AI for backlog drafts, acceptance criteria, dependency discovery and scenario comparison while keeping prioritization accountable to product strategy.',
    output: 'Outcome roadmap, prioritized backlog and release hypothesis.',
    fieldNote: 'A perfectly ordered backlog can still optimize the wrong outcome.',
  },
  {
    number: 5,
    title: 'Product Analytics and Economics',
    fullTime: 'Weeks 9-10',
    partTime: 'Weeks 13-15',
    summary: 'Use product data and economic reasoning to decide what to improve, scale or stop.',
    topics: ['North-star metrics and metric trees', 'Funnels, cohorts and behavioral signals', 'Experiment design and interpretation', 'Business cases, unit economics and pricing basics', 'Benefits tracking and decision thresholds'],
    aiAngle: 'Use AI to explore data questions and draft interpretations, then verify definitions, calculations, sample limitations and causal claims.',
    output: 'Metric tree, analytics specification and product business case.',
    fieldNote: 'A metric becomes dangerous when the team forgets which behavior it was meant to represent.',
  },
  {
    number: 6,
    title: 'Technical Product Practice',
    fullTime: 'Week 11',
    partTime: 'Weeks 16-18',
    summary: 'Develop enough technical fluency to make credible product decisions with engineering, data and security partners.',
    topics: ['APIs, systems, environments and integrations', 'Data flows, quality and ownership', 'Security, privacy and responsible AI requirements', 'Technical debt and platform constraints', 'AI product lifecycle and evaluation'],
    aiAngle: 'Translate product intent into testable AI requirements, evaluation criteria and operational boundaries without pretending to replace engineering expertise.',
    output: 'Technical product brief, data-flow map and AI evaluation plan.',
    fieldNote: 'Technical fluency means asking better questions, not acting as an unqualified architect.',
  },
  {
    number: 7,
    title: 'Go-to-Market, Launch and Growth',
    fullTime: 'Weeks 12-13',
    partTime: 'Weeks 19-20',
    summary: 'Prepare the organization and market for adoption, not merely for a release date.',
    topics: ['Positioning and audience definition', 'Launch strategy and cross-functional readiness', 'Sales, support and operations enablement', 'Adoption, retention and feedback loops', 'Growth experiments and responsible communication'],
    aiAngle: 'Use AI to generate and test messaging variants, synthesize feedback and support enablement while protecting brand accuracy and user trust.',
    output: 'Go-to-market plan, launch checklist and adoption dashboard.',
    fieldNote: 'Shipping creates availability. It does not create adoption.',
  },
  {
    number: 8,
    title: 'Product Leadership and Final Case',
    fullTime: 'Week 14',
    partTime: 'Weeks 21-22',
    summary: 'Lead product decisions across boundaries and present a defensible end-to-end product case.',
    topics: ['Influence without authority', 'Product reviews and decision forums', 'Conflict, negotiation and executive communication', 'Product operating models and team interfaces', 'Portfolio case and career translation'],
    aiAngle: 'Use AI for rehearsal, critique and alternative narratives while keeping the final product story specific, honest and evidence based.',
    output: 'Final product case, executive review and career-ready portfolio story.',
    fieldNote: 'Product leadership is visible in the choices you decline as clearly as those you approve.',
  },
];

const transformationPhasesEn: Phase[] = [
  {
    number: 1,
    title: 'Transformation Context and Change Readiness',
    fullTime: 'Weeks 1-2',
    partTime: 'Weeks 1-3',
    summary: 'Diagnose why change is needed, how ready the organization is and where transformation pressure is coming from.',
    topics: ['Digital and AI transformation patterns', 'External drivers and internal constraints', 'Capability and maturity assessment', 'Change readiness and stakeholder landscapes', 'Transformation principles and guardrails'],
    aiAngle: 'Use AI to structure landscape research and readiness evidence while challenging fashionable solutions that lack a real operating problem.',
    output: 'Transformation context brief and readiness assessment.',
    fieldNote: 'A technology program does not become a transformation merely because its budget is large.',
  },
  {
    number: 2,
    title: 'Opportunity Portfolio and Business Cases',
    fullTime: 'Weeks 3-4',
    partTime: 'Weeks 4-6',
    summary: 'Identify, compare and sequence transformation opportunities using value, feasibility, risk and strategic fit.',
    topics: ['Opportunity discovery and value-stream analysis', 'Use-case assessment and portfolio shaping', 'Benefits, costs and investment logic', 'Prioritization under uncertainty', 'Pilots, experiments and funding stages'],
    aiAngle: 'Use AI to widen the option set and test assumptions, then require explicit data, owners and decision thresholds for every business case.',
    output: 'Prioritized transformation portfolio and investment case.',
    fieldNote: 'A compelling use case still fails when no one owns the process it changes.',
  },
  {
    number: 3,
    title: 'Operating Model, Governance and Decision Rights',
    fullTime: 'Weeks 5-6',
    partTime: 'Weeks 7-9',
    summary: 'Design how strategy, delivery, risk and operational ownership connect across the organization.',
    topics: ['Operating-model choices and capability ownership', 'Governance forums and decision rights', 'Portfolio, program and product interfaces', 'Policies, standards and escalation paths', 'Vendor and partner governance'],
    aiAngle: 'Use AI to simulate governance scenarios and surface control gaps without automating accountable approvals or executive judgment.',
    output: 'Target operating model, governance map and decision-rights matrix.',
    fieldNote: 'Governance should make decisions clearer and faster, not create another reporting layer.',
  },
  {
    number: 4,
    title: 'Data, AI Readiness and Responsible Adoption',
    fullTime: 'Weeks 7-8',
    partTime: 'Weeks 10-12',
    summary: 'Build the data, risk and responsible-use foundations required for credible AI-enabled transformation.',
    topics: ['Data quality, access and ownership', 'AI use-case lifecycle and evaluation', 'Privacy, security and regulatory context', 'Human oversight and automation boundaries', 'Knowledge systems and enterprise integration'],
    aiAngle: 'Assess AI readiness across data, process, people and governance rather than treating model access as proof of organizational capability.',
    output: 'AI readiness assessment, control map and adoption standard.',
    fieldNote: 'Poor data rarely becomes a technology problem only after an AI model encounters it.',
  },
  {
    number: 5,
    title: 'Change Leadership and Capability Building',
    fullTime: 'Weeks 9-10',
    partTime: 'Weeks 13-15',
    summary: 'Prepare leaders, teams and affected employees to adopt new decisions, processes and responsibilities.',
    topics: ['Change narratives and sponsor alignment', 'Stakeholder participation and resistance', 'Capability academies and role transitions', 'Communication and feedback systems', 'Psychological safety and responsible experimentation'],
    aiAngle: 'Use AI to tailor learning and communication drafts while avoiding manipulative messaging, invented sentiment and false certainty about employee concerns.',
    output: 'Change strategy, capability plan and sponsor narrative.',
    fieldNote: 'People do not resist change in the abstract. They resist a specific loss, risk or unanswered question.',
  },
  {
    number: 6,
    title: 'Process, Platform and Workflow Transformation',
    fullTime: 'Weeks 11-12',
    partTime: 'Weeks 16-18',
    summary: 'Redesign work across processes, platforms and automation with measurable operational outcomes.',
    topics: ['Process discovery and service blueprints', 'Platform thinking and integration choices', 'Low-code automation and control design', 'Human-in-the-loop workflows', 'Operational metrics and continuous improvement'],
    aiAngle: 'Prototype AI-assisted workflows with clear exception paths, monitoring, ownership and fallbacks before scaling automation.',
    output: 'Future-state service blueprint and governed automation prototype.',
    fieldNote: 'Automating a broken process often makes the problem faster and less visible.',
  },
  {
    number: 7,
    title: 'Program Delivery, Scaling and Benefits',
    fullTime: 'Weeks 13-14',
    partTime: 'Weeks 19-21',
    summary: 'Coordinate a transformation portfolio across workstreams, dependencies, releases and benefit owners.',
    topics: ['Program roadmaps and transformation increments', 'Cross-team dependencies and integration', 'Risk, assurance and executive reporting', 'Benefits realization and adoption measures', 'Scaling patterns and course correction'],
    aiAngle: 'Use AI for portfolio synthesis, dependency discovery and scenario planning while preserving source evidence and accountable benefit ownership.',
    output: 'Integrated transformation roadmap, benefits register and executive dashboard.',
    fieldNote: 'Deliverables finish. Benefits must be adopted, measured and owned.',
  },
  {
    number: 8,
    title: 'Enterprise Capstone and Executive Narrative',
    fullTime: 'Weeks 15-16',
    partTime: 'Weeks 22-24',
    summary: 'Bring strategy, governance, delivery and change into one defendable transformation proposal.',
    topics: ['Enterprise transformation case', 'Executive decision preparation', 'Board-level risk and investment narrative', 'Implementation sequencing and first 100 days', 'Career evidence and leadership reflection'],
    aiAngle: 'Use AI as a red-team partner for the final proposal, then document assumptions, evidence, limitations and human decisions.',
    output: 'Enterprise transformation strategy, executive presentation and first-100-days plan.',
    fieldNote: 'A transformation story is credible when the first decisions are as clear as the future ambition.',
  },
];

function translatePhase(phase: Phase, values: Omit<Phase, 'number'>): Phase {
  return { number: phase.number, ...values };
}

const productPhasesDe: Phase[] = productPhasesEn.map((phase, index) => translatePhase(phase, [
  { title: 'Chance, Markt und Produktstrategie', fullTime: 'Wochen 1-2', partTime: 'Wochen 1-3', summary: 'Übersetze eine breite Geschäftschance in eine fokussierte Produktrichtung mit klaren Annahmen und Erfolgsmaßen.', topics: ['Markt- und Wettbewerbsanalyse', 'Kundennutzen und Product-Market Fit', 'Produktvision, Prinzipien und strategische Entscheidungen', 'Outcome Trees, KPIs und OKRs', 'Opportunity Assessment und Produktethik'], aiAngle: 'Nutze KI für Marktsynthese, Optionen und Annahmen und prüfe Quellen sowie die Grenze zwischen Evidenz und plausibler Spekulation.', output: 'Opportunity Brief, Produktvision und Strategy Map.', fieldNote: 'Eine Roadmap ist keine Strategie, wenn die zugrunde liegenden Entscheidungen unsichtbar bleiben.' },
  { title: 'Discovery und User Research', fullTime: 'Wochen 3-4', partTime: 'Wochen 4-6', summary: 'Entwickle ein belastbares Bild der Nutzerbedürfnisse, bevor sich ein Team auf eine Lösung festlegt.', topics: ['Research-Planung und Recruiting', 'Interviews, Beobachtung und Umfragen', 'Jobs to be Done und Journey Mapping', 'Problem Statements und Produkthypothesen', 'Research Repositories und Decision Traceability'], aiAngle: 'Nutze KI zur Vorbereitung und Synthese von Research, ohne sensible Daten offenzulegen oder menschliche Interpretation zu ersetzen.', output: 'Research-Plan, Insight Repository, Journey Map und priorisiertes Problem Statement.', fieldNote: 'Das stärkste Interviewzitat ist nicht automatisch die repräsentativste Evidenz.' },
  { title: 'Prototyping und Validierung', fullTime: 'Wochen 5-6', partTime: 'Wochen 7-9', summary: 'Teste Nutzen, Bedienbarkeit und Machbarkeit, bevor teure Delivery-Entscheidungen schwer umkehrbar werden.', topics: ['Value Propositions und Experimentdesign', 'Wireframes und interaktive Prototypen', 'Usability Testing und Lernkriterien', 'Assumption Mapping und risikobasiertes Testen', 'Evidenzbasierte Iteration und Stop-Entscheidungen'], aiAngle: 'Erzeuge Varianten und Testskripte mit KI und prüfe anschließend, ob die Experience wirklich zum Nutzer- und Geschäftskontext passt.', output: 'Prototyp, Validierungsplan und evidenzbasierte Empfehlung.', fieldNote: 'Validierung reduziert Unsicherheit. Sie soll nicht die ursprüngliche Idee bestätigen.' },
  { title: 'Produktplanung und Agile Delivery', fullTime: 'Wochen 7-8', partTime: 'Wochen 10-12', summary: 'Verbinde Produkt-Outcomes mit Roadmap und Backlog, die ein Delivery-Team verstehen und hinterfragen kann.', topics: ['Outcome-basierte Roadmaps und Release-Hypothesen', 'Backlog-Struktur und Priorisierung', 'User Stories, Acceptance Criteria und Definition of Done', 'Scrum, Kanban und Product Operating Rhythms', 'Abhängigkeiten, Trade-offs und Erwartungen'], aiAngle: 'Nutze KI für Backlog-Entwürfe, Acceptance Criteria, Abhängigkeiten und Szenarien und binde Priorisierung an die Produktstrategie.', output: 'Outcome Roadmap, priorisierter Backlog und Release-Hypothese.', fieldNote: 'Ein perfekt geordneter Backlog kann trotzdem das falsche Outcome optimieren.' },
  { title: 'Produktanalytik und Economics', fullTime: 'Wochen 9-10', partTime: 'Wochen 13-15', summary: 'Nutze Produktdaten und wirtschaftliche Logik für Entscheidungen über Verbesserung, Skalierung oder Stopp.', topics: ['North-Star Metrics und Metric Trees', 'Funnels, Cohorts und Verhaltenssignale', 'Experimentdesign und Interpretation', 'Business Cases, Unit Economics und Pricing', 'Benefits Tracking und Entscheidungsschwellen'], aiAngle: 'Nutze KI für Datenfragen und Interpretationen und prüfe Definitionen, Berechnungen, Stichproben und kausale Aussagen.', output: 'Metric Tree, Analytics-Spezifikation und Product Business Case.', fieldNote: 'Eine Metrik wird gefährlich, wenn das Team vergisst, welches Verhalten sie abbilden sollte.' },
  { title: 'Technical Product Practice', fullTime: 'Woche 11', partTime: 'Wochen 16-18', summary: 'Entwickle genug technische Kompetenz für glaubwürdige Entscheidungen mit Engineering, Data und Security.', topics: ['APIs, Systeme, Umgebungen und Integrationen', 'Datenflüsse, Qualität und Ownership', 'Security, Privacy und Responsible-AI-Anforderungen', 'Technical Debt und Plattformgrenzen', 'AI Product Lifecycle und Evaluation'], aiAngle: 'Übersetze Produktintention in testbare KI-Anforderungen und Grenzen, ohne Engineering-Expertise vorzutäuschen.', output: 'Technical Product Brief, Data-Flow Map und AI Evaluation Plan.', fieldNote: 'Technische Kompetenz bedeutet bessere Fragen, nicht die Rolle eines unqualifizierten Architekten.' },
  { title: 'Go-to-Market, Launch und Growth', fullTime: 'Wochen 12-13', partTime: 'Wochen 19-20', summary: 'Bereite Organisation und Markt auf Adoption vor und nicht nur auf ein Release-Datum.', topics: ['Positionierung und Zielgruppen', 'Launch-Strategie und Readiness', 'Enablement für Sales, Support und Operations', 'Adoption, Retention und Feedback Loops', 'Growth Experiments und verantwortungsvolle Kommunikation'], aiAngle: 'Nutze KI für Messaging-Varianten, Feedback-Synthese und Enablement und schütze Markengenauigkeit und Vertrauen.', output: 'Go-to-Market Plan, Launch Checklist und Adoption Dashboard.', fieldNote: 'Shipping schafft Verfügbarkeit. Es schafft noch keine Adoption.' },
  { title: 'Product Leadership und Final Case', fullTime: 'Woche 14', partTime: 'Wochen 21-22', summary: 'Führe Produktentscheidungen über Grenzen hinweg und präsentiere einen belastbaren End-to-End Product Case.', topics: ['Führen ohne Autorität', 'Product Reviews und Decision Forums', 'Konflikt, Verhandlung und Executive Communication', 'Product Operating Models und Team-Schnittstellen', 'Portfolio Case und Karrieretransfer'], aiAngle: 'Nutze KI für Probe, Kritik und alternative Narrative und halte die finale Product Story spezifisch, ehrlich und evidenzbasiert.', output: 'Final Product Case, Executive Review und Portfolio Story.', fieldNote: 'Product Leadership zeigt sich ebenso in den abgelehnten wie in den bestätigten Entscheidungen.' },
][index]));

const transformationPhasesDe: Phase[] = transformationPhasesEn.map((phase, index) => translatePhase(phase, [
  { title: 'Transformationskontext und Change Readiness', fullTime: 'Wochen 1-2', partTime: 'Wochen 1-3', summary: 'Analysiere, warum Veränderung nötig ist, wie bereit die Organisation ist und woher der Transformationsdruck kommt.', topics: ['Muster digitaler und KI-Transformation', 'Externe Treiber und interne Grenzen', 'Capability- und Maturity Assessment', 'Change Readiness und Stakeholder-Landschaft', 'Transformationsprinzipien und Guardrails'], aiAngle: 'Nutze KI für Landscape Research und Readiness-Evidenz und hinterfrage Lösungen ohne reales Operating Problem.', output: 'Transformation Context Brief und Readiness Assessment.', fieldNote: 'Ein Technologieprogramm wird nicht allein durch sein Budget zur Transformation.' },
  { title: 'Opportunity Portfolio und Business Cases', fullTime: 'Wochen 3-4', partTime: 'Wochen 4-6', summary: 'Identifiziere, vergleiche und sequenziere Chancen nach Wert, Machbarkeit, Risiko und strategischem Fit.', topics: ['Opportunity Discovery und Value-Stream-Analyse', 'Use-Case Assessment und Portfolio Shaping', 'Benefits, Kosten und Investmentlogik', 'Priorisierung unter Unsicherheit', 'Piloten, Experimente und Funding Stages'], aiAngle: 'Nutze KI für mehr Optionen und Annahmenchecks und fordere Daten, Owner und Entscheidungsschwellen für jeden Business Case.', output: 'Priorisiertes Transformationsportfolio und Investment Case.', fieldNote: 'Ein überzeugender Use Case scheitert, wenn niemand den veränderten Prozess besitzt.' },
  { title: 'Operating Model, Governance und Decision Rights', fullTime: 'Wochen 5-6', partTime: 'Wochen 7-9', summary: 'Entwickle die Verbindung zwischen Strategie, Delivery, Risiko und operativer Ownership.', topics: ['Operating-Model-Entscheidungen und Capability Ownership', 'Governance Forums und Decision Rights', 'Portfolio-, Programm- und Produktschnittstellen', 'Policies, Standards und Eskalationswege', 'Vendor- und Partner-Governance'], aiAngle: 'Simuliere Governance-Szenarien mit KI, ohne verantwortliche Freigaben oder Executive Judgment zu automatisieren.', output: 'Target Operating Model, Governance Map und Decision-Rights Matrix.', fieldNote: 'Governance sollte Entscheidungen klarer und schneller machen und keine neue Reporting-Schicht schaffen.' },
  { title: 'Data, AI Readiness und Responsible Adoption', fullTime: 'Wochen 7-8', partTime: 'Wochen 10-12', summary: 'Schaffe Daten-, Risiko- und Responsible-Use-Grundlagen für glaubwürdige KI-Transformation.', topics: ['Datenqualität, Zugriff und Ownership', 'AI Use-Case Lifecycle und Evaluation', 'Privacy, Security und regulatorischer Kontext', 'Human Oversight und Automationsgrenzen', 'Knowledge Systems und Enterprise Integration'], aiAngle: 'Bewerte AI Readiness über Daten, Prozesse, Menschen und Governance statt Modellzugang mit Organisationsfähigkeit zu verwechseln.', output: 'AI Readiness Assessment, Control Map und Adoption Standard.', fieldNote: 'Schlechte Daten werden selten erst durch ein KI-Modell zu einem Technologieproblem.' },
  { title: 'Change Leadership und Capability Building', fullTime: 'Wochen 9-10', partTime: 'Wochen 13-15', summary: 'Bereite Führung, Teams und betroffene Mitarbeitende auf neue Entscheidungen, Prozesse und Verantwortlichkeiten vor.', topics: ['Change Narratives und Sponsor Alignment', 'Stakeholder-Beteiligung und Widerstand', 'Capability Academies und Rollenübergänge', 'Kommunikation und Feedbacksysteme', 'Psychological Safety und verantwortliche Experimente'], aiAngle: 'Nutze KI für Lern- und Kommunikationsentwürfe und vermeide manipulative Botschaften oder erfundene Stimmungen.', output: 'Change Strategy, Capability Plan und Sponsor Narrative.', fieldNote: 'Menschen widerstehen nicht Veränderung im Abstrakten, sondern konkretem Verlust, Risiko oder offenen Fragen.' },
  { title: 'Process, Platform und Workflow Transformation', fullTime: 'Wochen 11-12', partTime: 'Wochen 16-18', summary: 'Gestalte Arbeit über Prozesse, Plattformen und Automation mit messbaren operativen Outcomes neu.', topics: ['Process Discovery und Service Blueprints', 'Platform Thinking und Integrationsentscheidungen', 'Low-Code Automation und Control Design', 'Human-in-the-Loop Workflows', 'Operational Metrics und Continuous Improvement'], aiAngle: 'Prototypisiere KI-gestützte Workflows mit Ausnahmen, Monitoring, Ownership und Fallbacks vor der Skalierung.', output: 'Future-State Service Blueprint und Governed-Automation-Prototyp.', fieldNote: 'Automation macht einen kaputten Prozess oft nur schneller und unsichtbarer.' },
  { title: 'Program Delivery, Scaling und Benefits', fullTime: 'Wochen 13-14', partTime: 'Wochen 19-21', summary: 'Koordiniere ein Transformationsportfolio über Workstreams, Abhängigkeiten, Releases und Benefit Owner.', topics: ['Programm-Roadmaps und Transformationsinkremente', 'Teamübergreifende Abhängigkeiten und Integration', 'Risk, Assurance und Executive Reporting', 'Benefits Realization und Adoption Measures', 'Scaling Patterns und Course Correction'], aiAngle: 'Nutze KI für Portfolio-Synthese, Dependencies und Szenarien und bewahre Evidenz und Benefit Ownership.', output: 'Integrierte Transformationsroadmap, Benefits Register und Executive Dashboard.', fieldNote: 'Deliverables enden. Benefits müssen übernommen, gemessen und verantwortet werden.' },
  { title: 'Enterprise Capstone und Executive Narrative', fullTime: 'Wochen 15-16', partTime: 'Wochen 22-24', summary: 'Verbinde Strategie, Governance, Delivery und Change in einem belastbaren Transformationsvorschlag.', topics: ['Enterprise Transformation Case', 'Executive Decision Preparation', 'Board-Level Risk und Investment Narrative', 'Implementierungssequenz und erste 100 Tage', 'Karrierebelege und Leadership Reflection'], aiAngle: 'Nutze KI als Red-Team-Partner und dokumentiere Annahmen, Evidenz, Grenzen und menschliche Entscheidungen.', output: 'Enterprise Transformation Strategy, Executive Presentation und First-100-Days Plan.', fieldNote: 'Eine Transformationsstory ist glaubwürdig, wenn die ersten Entscheidungen so klar sind wie die langfristige Ambition.' },
][index]));

const additionalEnglish: Record<AdditionalCourseSlug, AdditionalCourse> = {
  'tech-product-management-ai': {
    slug: 'tech-product-management-ai',
    title: 'Tech Product Management with AI assistance',
    category: 'Product pathway',
    summary: 'Learn to discover, validate, plan and grow digital products while using AI responsibly across product work.',
    duration: '14 weeks full-time or 22 weeks part-time',
    format: sharedEnglish.format,
    level: 'Beginner-accessible, professionally demanding',
    roles: ['Associate Product Manager', 'Product Owner', 'Product Operations', 'Technical Product Manager'],
    href: '/courses/tech-product-management-ai/',
    curriculumHref: '/courses/tech-product-management-ai/curriculum/',
    pdfFilename: 'the-best-school-tech-product-management-with-ai-assistance-curriculum-en-2026-08-31.pdf',
    accent: 'product',
    cohorts: [
      { date: '18 Jan 2027', track: 'Full-time', duration: '14 weeks', detail: sharedEnglish.detail },
      { date: '15 Feb 2027', track: 'Part-time', duration: '22 weeks', detail: sharedEnglish.detail },
      { date: '12 Apr 2027', track: 'Full-time', duration: '14 weeks', detail: sharedEnglish.detail },
    ],
    eyebrow: 'Product pathway - Remote - English',
    lead: 'Move from an uncertain market opportunity to a validated, measurable and technically credible digital product.',
    support: 'Practitioner-led. Built around discovery evidence, product decisions and one continuous product case.',
    facts: ['14 weeks full-time', '22 weeks part-time', 'Remote', 'English', 'Max. 10 learners', 'Certificate'],
    outcomesIntro: 'By the end, you should be able to connect user evidence, business strategy and delivery choices in one coherent product practice.',
    outcomes: ['Define product opportunities using market and user evidence.', 'Plan and synthesize ethical user research.', 'Prototype and validate risky assumptions.', 'Create outcome roadmaps and prioritized backlogs.', 'Use product metrics and economic reasoning to make decisions.', 'Collaborate credibly with engineering, data and design.', 'Prepare launches and measure adoption.', 'Use AI throughout product work with verification and human accountability.'],
    audienceHeading: 'For people moving toward product responsibility.',
    audienceIntro: 'Designed for career changers and professionals who want to make better digital-product decisions.',
    audience: ['Career changers', 'Project managers', 'Business analysts', 'Product coordinators', 'Design and research professionals', 'Founders and transformation teams'],
    beginnerNote: 'No product title is required. The course starts with foundations and becomes progressively more demanding.',
    differenceTitle: 'Product chooses the value. Project delivery organizes the journey.',
    differenceCopy: 'This course complements IT Project Management by concentrating on market opportunity, user evidence, product strategy, discovery, product analytics and adoption.',
    practiceTitle: 'Build one product case from opportunity to adoption.',
    practiceCopy: 'You develop an AI-assisted service that helps small businesses understand and complete complex compliance tasks without replacing professional advice.',
    practiceOutputs: ['Opportunity brief and research plan', 'Validated prototype and evidence report', 'Outcome roadmap and prioritized backlog', 'Metric tree and product business case', 'Technical product brief and AI evaluation plan', 'Go-to-market plan and executive product review'],
    phases: productPhasesEn,
    careersHeading: 'Career directions with clear boundaries.',
    careersIntro: 'The course prepares learners for entry and transition roles in product work. It does not promise employment or an external certification.',
    progression: 'Senior Product Manager, Group Product Manager and Head of Product require substantial professional experience beyond this course.',
    certificateCopy: 'The Best School certificate confirms completion of the product curriculum and its practical project requirements. It is not an external professional credential.',
    faqs: [
      { question: 'Is this the same as the IT Project Management course?', answer: 'No. Project management focuses on organizing delivery. This course focuses on product opportunity, user value, evidence, strategy and adoption.' },
      { question: 'Do I need previous product experience?', answer: 'No. Motivated beginners can join, while the work and feedback remain professionally demanding.' },
      { question: 'Do I need to code?', answer: 'No. You learn technical product fluency and collaborate around APIs, data, systems and AI evaluation without training as a software developer.' },
      { question: 'Which AI tools are included?', answer: 'Tools may change. The course emphasizes transferable methods for research, synthesis, prototyping, analysis and responsible product decisions.' },
      { question: 'Is the course online?', answer: 'Yes. Teaching is remote in English with live sessions, selected recordings and project work.' },
      { question: 'What certificate do I receive?', answer: 'You receive a The Best School completion certificate after meeting the practical course requirements.' },
    ],
  },
  'digital-transformation-ai': {
    slug: 'digital-transformation-ai',
    title: 'Digital Transformation with AI',
    category: 'Transformation pathway',
    summary: 'Learn to shape and govern digital transformation across strategy, operating models, change, data, AI and benefits.',
    duration: '16 weeks full-time or 24 weeks part-time',
    format: sharedEnglish.format,
    level: 'Intermediate-leaning with guided foundations',
    roles: ['Transformation Manager', 'Program Coordinator', 'Digital Strategy Analyst', 'AI Adoption Lead'],
    href: '/courses/digital-transformation-ai/',
    curriculumHref: '/courses/digital-transformation-ai/curriculum/',
    pdfFilename: 'the-best-school-digital-transformation-with-ai-curriculum-en-2026-08-31.pdf',
    accent: 'transformation',
    cohorts: [
      { date: '8 Feb 2027', track: 'Full-time', duration: '16 weeks', detail: sharedEnglish.detail },
      { date: '8 Mar 2027', track: 'Part-time', duration: '24 weeks', detail: sharedEnglish.detail },
      { date: '3 May 2027', track: 'Full-time', duration: '16 weeks', detail: sharedEnglish.detail },
    ],
    eyebrow: 'Transformation pathway - Remote - English',
    lead: 'Turn digital and AI ambition into a governed transformation portfolio that people can adopt and leaders can evaluate.',
    support: 'Strategy, governance, change and delivery are connected through one enterprise transformation capstone.',
    facts: ['16 weeks full-time', '24 weeks part-time', 'Remote', 'English', 'Max. 10 learners', 'Certificate'],
    outcomesIntro: 'By the end, you should be able to move from transformation pressure to an executable and measurable organizational response.',
    outcomes: ['Assess transformation context, maturity and readiness.', 'Shape opportunity portfolios and staged business cases.', 'Design governance, decision rights and operating models.', 'Evaluate data and AI readiness responsibly.', 'Plan capability building, communication and adoption.', 'Redesign services and workflows with appropriate automation controls.', 'Coordinate programs, dependencies and benefits.', 'Present an executive transformation strategy with a credible first-100-days plan.'],
    audienceHeading: 'For people leading change across teams and functions.',
    audienceIntro: 'Best suited to professionals moving from individual project delivery toward program, transformation and organizational responsibility.',
    audience: ['Project and program professionals', 'Transformation teams', 'Operations managers', 'Product and portfolio professionals', 'Business analysts and consultants', 'AI adoption and governance teams'],
    beginnerNote: 'Foundations are provided, but the course benefits from previous exposure to projects, operations, products or organizational change.',
    differenceTitle: 'Transformation changes the system around the project.',
    differenceCopy: 'This course complements IT Project Management by addressing portfolios, operating models, capability building, governance, organizational adoption and benefits across multiple initiatives.',
    practiceTitle: 'Design one enterprise transformation from pressure to first 100 days.',
    practiceCopy: 'You guide a multi-site service company through an AI-enabled operating-model change involving customer service, knowledge management, data governance and workforce capability.',
    practiceOutputs: ['Readiness assessment and opportunity portfolio', 'Transformation business case and governance map', 'AI readiness and control framework', 'Change and capability strategy', 'Future-state service blueprint and automation prototype', 'Integrated roadmap, benefits register and executive strategy'],
    phases: transformationPhasesEn,
    careersHeading: 'Career directions for organizational change.',
    careersIntro: 'The course supports transition into transformation and program-facing roles. Senior leadership roles still require substantial delivery and organizational experience.',
    progression: 'Transformation Director, Portfolio Director and Chief Transformation Officer are later progression paths, not entry-level outcomes.',
    certificateCopy: 'The Best School certificate confirms completion of the transformation curriculum and its enterprise capstone. It is not an external professional credential.',
    faqs: [
      { question: 'How is this different from IT Project Management?', answer: 'The project course centers on delivering an initiative. This course centers on changing capabilities, governance, operating models and adoption across an organization.' },
      { question: 'Is previous management experience required?', answer: 'It is not mandatory, but experience with projects, operations, products or organizational change will help.' },
      { question: 'Is this a technical AI course?', answer: 'No. It teaches leaders to assess and govern AI-enabled change, work with technical specialists and design responsible adoption.' },
      { question: 'Does the course cover change management?', answer: 'Yes. Sponsor alignment, participation, resistance, communication, capability building and adoption are part of the core curriculum.' },
      { question: 'Is the course online?', answer: 'Yes. Teaching is remote in English with live sessions, selected recordings and enterprise case work.' },
      { question: 'What certificate do I receive?', answer: 'You receive a The Best School completion certificate after meeting the practical course requirements.' },
    ],
  },
};

const additionalGerman: Record<AdditionalCourseSlug, AdditionalCourse> = {
  'tech-product-management-ai': {
    ...additionalEnglish['tech-product-management-ai'],
    category: 'Product-Pfad',
    summary: 'Lerne, digitale Produkte zu entdecken, zu validieren, zu planen und zu entwickeln und nutze KI verantwortungsvoll in der Produktarbeit.',
    duration: '14 Wochen Vollzeit oder 22 Wochen Teilzeit',
    format: sharedGerman.format,
    level: 'Für Einsteiger zugänglich und professionell anspruchsvoll',
    roles: ['Associate Product Manager', 'Product Owner', 'Product Operations', 'Technical Product Manager'],
    cohorts: [
      { date: '18. Jan. 2027', track: 'Vollzeit', duration: '14 Wochen', detail: sharedGerman.detail },
      { date: '15. Feb. 2027', track: 'Teilzeit', duration: '22 Wochen', detail: sharedGerman.detail },
      { date: '12. Apr. 2027', track: 'Vollzeit', duration: '14 Wochen', detail: sharedGerman.detail },
    ],
    eyebrow: 'Product-Pfad - Remote - Unterricht auf Englisch',
    lead: 'Führe eine unsichere Marktchance zu einem validierten, messbaren und technisch glaubwürdigen digitalen Produkt.',
    support: 'Von Praktikerinnen und Praktikern. Rund um Discovery-Evidenz, Produktentscheidungen und einen durchgängigen Product Case.',
    facts: ['14 Wochen Vollzeit', '22 Wochen Teilzeit', 'Remote', 'Englisch', 'Max. 10 Lernende', 'Zertifikat'],
    outcomesIntro: 'Am Ende verbindest du Nutzer-Evidenz, Geschäftsstrategie und Delivery-Entscheidungen in einer kohärenten Produktpraxis.',
    outcomes: ['Produktchancen mit Markt- und Nutzer-Evidenz definieren.', 'Ethisches User Research planen und auswerten.', 'Riskante Annahmen prototypisieren und validieren.', 'Outcome Roadmaps und priorisierte Backlogs erstellen.', 'Produktmetriken und wirtschaftliche Logik nutzen.', 'Glaubwürdig mit Engineering, Data und Design arbeiten.', 'Launches vorbereiten und Adoption messen.', 'KI in der Produktarbeit mit Verifikation und menschlicher Verantwortung einsetzen.'],
    audienceHeading: 'Für Menschen auf dem Weg zu Produktverantwortung.',
    audienceIntro: 'Für Career Changer und Professionals, die bessere Entscheidungen für digitale Produkte treffen möchten.',
    audience: ['Career Changer', 'Projektmanager', 'Business Analysts', 'Product Coordinators', 'Design- und Research-Professionals', 'Founder und Transformationsteams'],
    beginnerNote: 'Ein Product-Titel ist nicht erforderlich. Der Kurs beginnt mit Grundlagen und wird schrittweise anspruchsvoller.',
    differenceTitle: 'Product entscheidet über Wert. Project Delivery organisiert den Weg.',
    differenceCopy: 'Der Kurs ergänzt IT Project Management durch Marktchancen, Nutzer-Evidenz, Produktstrategie, Discovery, Product Analytics und Adoption.',
    practiceTitle: 'Entwickle einen Product Case von Opportunity bis Adoption.',
    practiceCopy: 'Du entwickelst einen KI-gestützten Service, der kleinen Unternehmen hilft, komplexe Compliance-Aufgaben zu verstehen, ohne professionelle Beratung zu ersetzen.',
    practiceOutputs: ['Opportunity Brief und Research Plan', 'Validierter Prototyp und Evidence Report', 'Outcome Roadmap und priorisierter Backlog', 'Metric Tree und Product Business Case', 'Technical Product Brief und AI Evaluation Plan', 'Go-to-Market Plan und Executive Product Review'],
    phases: productPhasesDe,
    careersHeading: 'Karrierewege mit klaren Grenzen.',
    careersIntro: 'Der Kurs bereitet auf Einstiegs- und Übergangsrollen in der Produktarbeit vor. Er verspricht weder Job noch externe Zertifizierung.',
    progression: 'Senior Product Manager, Group Product Manager und Head of Product erfordern umfassende Berufserfahrung über diesen Kurs hinaus.',
    certificateCopy: 'Das Zertifikat von The Best School bestätigt Curriculum und praktische Projektanforderungen. Es ist keine externe Berufszertifizierung.',
    faqs: [
      { question: 'Ist das derselbe Kurs wie IT Project Management?', answer: 'Nein. Project Management organisiert Delivery. Dieser Kurs fokussiert Product Opportunity, Nutzerwert, Evidenz, Strategie und Adoption.' },
      { question: 'Brauche ich Product-Erfahrung?', answer: 'Nein. Motivierte Einsteiger können teilnehmen, während Aufgaben und Feedback professionell anspruchsvoll bleiben.' },
      { question: 'Muss ich programmieren?', answer: 'Nein. Du entwickelst technische Product Fluency rund um APIs, Daten, Systeme und AI Evaluation, ohne Software Developer zu werden.' },
      { question: 'Welche KI-Tools werden genutzt?', answer: 'Tools können sich ändern. Der Fokus liegt auf übertragbaren Methoden für Research, Synthese, Prototyping, Analyse und verantwortliche Entscheidungen.' },
      { question: 'Ist der Kurs online?', answer: 'Ja. Der Unterricht findet remote auf Englisch statt, mit Live-Sessions, ausgewählten Aufzeichnungen und Projektarbeit.' },
      { question: 'Welches Zertifikat erhalte ich?', answer: 'Nach Erfüllung der praktischen Anforderungen erhältst du ein Abschlusszertifikat von The Best School.' },
    ],
  },
  'digital-transformation-ai': {
    ...additionalEnglish['digital-transformation-ai'],
    category: 'Transformation-Pfad',
    summary: 'Lerne, digitale Transformation über Strategie, Operating Models, Change, Data, KI und Benefits zu gestalten und zu steuern.',
    duration: '16 Wochen Vollzeit oder 24 Wochen Teilzeit',
    format: sharedGerman.format,
    level: 'Eher mittleres Niveau mit geführten Grundlagen',
    roles: ['Transformation Manager', 'Program Coordinator', 'Digital Strategy Analyst', 'AI Adoption Lead'],
    cohorts: [
      { date: '8. Feb. 2027', track: 'Vollzeit', duration: '16 Wochen', detail: sharedGerman.detail },
      { date: '8. März 2027', track: 'Teilzeit', duration: '24 Wochen', detail: sharedGerman.detail },
      { date: '3. Mai 2027', track: 'Vollzeit', duration: '16 Wochen', detail: sharedGerman.detail },
    ],
    eyebrow: 'Transformation-Pfad - Remote - Unterricht auf Englisch',
    lead: 'Übersetze digitale und KI-Ambition in ein gesteuertes Transformationsportfolio, das Menschen annehmen und Führungskräfte bewerten können.',
    support: 'Strategie, Governance, Change und Delivery werden in einem Enterprise-Transformation-Capstone verbunden.',
    facts: ['16 Wochen Vollzeit', '24 Wochen Teilzeit', 'Remote', 'Englisch', 'Max. 10 Lernende', 'Zertifikat'],
    outcomesIntro: 'Am Ende kannst du Transformationsdruck in eine umsetzbare und messbare organisatorische Antwort übersetzen.',
    outcomes: ['Transformationskontext, Maturity und Readiness bewerten.', 'Opportunity Portfolios und gestufte Business Cases entwickeln.', 'Governance, Decision Rights und Operating Models gestalten.', 'Data und AI Readiness verantwortungsvoll bewerten.', 'Capability Building, Kommunikation und Adoption planen.', 'Services und Workflows mit geeigneten Automationskontrollen neu gestalten.', 'Programme, Abhängigkeiten und Benefits koordinieren.', 'Eine Executive Transformation Strategy mit First-100-Days Plan präsentieren.'],
    audienceHeading: 'Für Menschen, die Veränderung über Teams und Funktionen hinweg führen.',
    audienceIntro: 'Für Professionals, die von einzelnen Projekten zu Programm-, Transformations- und Organisationsverantwortung wechseln möchten.',
    audience: ['Projekt- und Programmprofessionals', 'Transformationsteams', 'Operations Manager', 'Product- und Portfolio-Professionals', 'Business Analysts und Consultants', 'AI Adoption und Governance Teams'],
    beginnerNote: 'Grundlagen werden vermittelt. Erfahrung mit Projekten, Operations, Produkten oder Change ist hilfreich.',
    differenceTitle: 'Transformation verändert das System rund um das Projekt.',
    differenceCopy: 'Der Kurs ergänzt IT Project Management durch Portfolios, Operating Models, Capability Building, Governance, organisatorische Adoption und Benefits über mehrere Initiativen.',
    practiceTitle: 'Entwickle eine Enterprise Transformation bis zum First-100-Days Plan.',
    practiceCopy: 'Du begleitest ein Service-Unternehmen durch einen KI-gestützten Operating-Model Change in Customer Service, Knowledge Management, Data Governance und Workforce Capability.',
    practiceOutputs: ['Readiness Assessment und Opportunity Portfolio', 'Transformation Business Case und Governance Map', 'AI Readiness und Control Framework', 'Change und Capability Strategy', 'Future-State Service Blueprint und Automation Prototype', 'Integrierte Roadmap, Benefits Register und Executive Strategy'],
    phases: transformationPhasesDe,
    careersHeading: 'Karrierewege für organisatorischen Wandel.',
    careersIntro: 'Der Kurs unterstützt den Übergang in Transformation- und Programmrollen. Senior Leadership erfordert zusätzliche Delivery- und Organisationserfahrung.',
    progression: 'Transformation Director, Portfolio Director und Chief Transformation Officer sind spätere Karrierepfade und keine Einstiegsrollen.',
    certificateCopy: 'Das Zertifikat von The Best School bestätigt Curriculum und Enterprise Capstone. Es ist keine externe Berufszertifizierung.',
    faqs: [
      { question: 'Wie unterscheidet sich der Kurs von IT Project Management?', answer: 'Der Project-Kurs fokussiert die Delivery einer Initiative. Dieser Kurs fokussiert Capabilities, Governance, Operating Models und Adoption in der Organisation.' },
      { question: 'Brauche ich Managementerfahrung?', answer: 'Sie ist nicht zwingend erforderlich, aber Erfahrung mit Projekten, Operations, Produkten oder Change ist hilfreich.' },
      { question: 'Ist das ein technischer KI-Kurs?', answer: 'Nein. Führungskräfte lernen, KI-gestützte Veränderung zu bewerten und zu steuern und mit technischen Spezialisten zu arbeiten.' },
      { question: 'Ist Change Management enthalten?', answer: 'Ja. Sponsor Alignment, Beteiligung, Widerstand, Kommunikation, Capability Building und Adoption gehören zum Kerncurriculum.' },
      { question: 'Ist der Kurs online?', answer: 'Ja. Der Unterricht findet remote auf Englisch statt, mit Live-Sessions, ausgewählten Aufzeichnungen und Enterprise Case Work.' },
      { question: 'Welches Zertifikat erhalte ich?', answer: 'Nach Erfüllung der praktischen Anforderungen erhältst du ein Abschlusszertifikat von The Best School.' },
    ],
  },
};

export const additionalCourseSlugs: AdditionalCourseSlug[] = ['tech-product-management-ai', 'digital-transformation-ai'];

export const additionalCoursesByLocale: Record<Locale, Record<AdditionalCourseSlug, AdditionalCourse>> = {
  en: additionalEnglish,
  de: additionalGerman,
};

export function getCourseCards(locale: Locale): CourseCard[] {
  const shared = locale === 'de' ? sharedGerman : sharedEnglish;
  const existing: CourseCard = locale === 'de'
    ? {
        slug: 'it-project-management-ai',
        title: 'IT Project Management in the World of AI Automations',
        category: 'Delivery-Pfad',
        summary: 'Plane und steuere digitale Initiativen über Discovery, Agile Delivery, Risiken, Releases, Multi-Team-Koordination und KI-Workflows.',
        duration: '12 Wochen Vollzeit oder 20 Wochen Teilzeit',
        format: shared.format,
        level: 'Eher mittleres Niveau mit Einsteiger-Grundlagen',
        roles: ['IT Project Manager', 'Technical Project Coordinator', 'Agile Project Manager', 'Scrum Master'],
        href: '/course/',
        curriculumHref: '/curriculum/',
        pdfFilename: 'the-best-school-it-project-management-curriculum-en-2026-08-28.pdf',
        accent: 'delivery',
        cohorts: [
          { date: '5. Okt. 2026', track: 'Vollzeit', duration: '12 Wochen', detail: shared.detail },
          { date: '2. Nov. 2026', track: 'Teilzeit', duration: '20 Wochen', detail: shared.detail },
          { date: '30. Nov. 2026', track: 'Vollzeit', duration: '12 Wochen', detail: shared.detail },
        ],
      }
    : {
        slug: 'it-project-management-ai',
        title: 'IT Project Management in the World of AI Automations',
        category: 'Delivery pathway',
        summary: 'Plan and lead digital initiatives across discovery, Agile delivery, risk, releases, multi-team coordination and AI workflows.',
        duration: '12 weeks full-time or 20 weeks part-time',
        format: shared.format,
        level: 'Intermediate-leaning with beginner foundations',
        roles: ['IT Project Manager', 'Technical Project Coordinator', 'Agile Project Manager', 'Scrum Master'],
        href: '/course/',
        curriculumHref: '/curriculum/',
        pdfFilename: 'the-best-school-it-project-management-curriculum-en-2026-08-28.pdf',
        accent: 'delivery',
        cohorts: [
          { date: '5 Oct 2026', track: 'Full-time', duration: '12 weeks', detail: shared.detail },
          { date: '2 Nov 2026', track: 'Part-time', duration: '20 weeks', detail: shared.detail },
          { date: '30 Nov 2026', track: 'Full-time', duration: '12 weeks', detail: shared.detail },
        ],
      };
  return [existing, ...additionalCourseSlugs.map((slug) => additionalCoursesByLocale[locale][slug])];
}

export function isAdditionalCourseSlug(value: string): value is AdditionalCourseSlug {
  return additionalCourseSlugs.includes(value as AdditionalCourseSlug);
}
