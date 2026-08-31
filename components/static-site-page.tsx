import { curriculumByLocale } from '@/lib/curriculum';
import { pageCopy } from '@/lib/page-copy';
import { curriculumPdfPath, internalPath } from '@/lib/routes';
import type { Locale } from '@/lib/site-content';
import { previewContent } from '@/lib/site-content';
import { MessageCircle } from 'lucide-react';
import { CurriculumTrack } from './curriculum-track';
import { ApplicationForm, ContactForm } from './forms';
import { HomePreview } from './home-preview';
import { LegalPage } from './legal-page';
import { PageShell } from './page-shell';
import { CoursesOverviewPage, SchedulePage } from './course-catalog-page';

export type PageName = 'course' | 'curriculum' | 'courses' | 'schedule' | 'about' | 'apply' | 'contact' | 'privacy' | 'imprint' | 'cookies';

export function StaticSitePage({ locale, page }: { locale: Locale; page?: PageName }) {
  if (!page) return <HomePreview locale={locale} />;
  if (page === 'course') return <CourseView locale={locale} />;
  if (page === 'curriculum') return <CurriculumView locale={locale} />;
  if (page === 'courses') return <CoursesOverviewPage locale={locale} />;
  if (page === 'schedule') return <SchedulePage locale={locale} />;
  if (page === 'about') return <AboutView locale={locale} />;
  if (page === 'apply') return <ApplyView locale={locale} />;
  if (page === 'contact') return <ContactView locale={locale} />;
  return <LegalPage locale={locale} kind={page} />;
}

function CourseView({ locale }: { locale: Locale }) {
  const base = previewContent[locale];
  const copy = pageCopy[locale];
  const phases = curriculumByLocale[locale];
  const t = locale === 'de'
    ? {
        eyebrow: 'Der Kurs', title: 'IT-Projektmanagement für eine KI-geprägte Arbeitswelt.',
        intro: 'Lerne, digitale Initiativen zu planen, Teams zu unterstützen, Entscheidungen zu strukturieren und wiederkehrende Projektarbeit verantwortungsvoll zu automatisieren.',
        change: 'Was sich im KI-Zeitalter verändert hat', changeCopy: 'KI beschleunigt administrative und analytische Arbeit. Dadurch werden Urteilsvermögen, Verifikation, Governance, Stakeholder-Abstimmung und Workflow-Design wichtiger, nicht weniger wichtig.',
        model: 'So lernst du', modelCopy: 'Live-Unterricht, ausgewählte Aufzeichnungen, geführte Workshops, individuelle Aufgaben, Teamsimulationen, Gast-Sessions und ein durchgängiges Capstone-Projekt.',
        outcomes: 'Was du nach dem Kurs können solltest', project: 'Ein Projekt, das mit dir wächst',
        projectCopy: 'Du steuerst die Digitalisierung eines manuellen Customer-Onboarding-Prozesses mit KI-gestützter Dokumentenverarbeitung. Jede Phase ergänzt neue Entscheidungen und Artefakte.',
        phases: 'Neun aufeinander aufbauende Phasen', careers: 'Karrierewege', certificate: 'Zertifikat ohne irreführende Versprechen',
        cta: 'Bereit für den nächsten Schritt?', download: 'Englisches Curriculum PDF', apply: 'Jetzt bewerben', curriculum: 'Curriculum öffnen',
      }
    : {
        eyebrow: 'The course', title: 'IT project management for work shaped by AI.',
        intro: 'Learn to plan digital initiatives, support teams, structure decisions, and automate repetitive project work responsibly.',
        change: 'What has changed in the AI era', changeCopy: 'AI accelerates administrative and analytical work. That makes judgment, verification, governance, stakeholder alignment, and workflow design more important, not less.',
        model: 'How you learn', modelCopy: 'Live instruction, selected recordings, guided workshops, individual homework, team simulations, guest sessions, and one continuous capstone project.',
        outcomes: 'What you should be able to do', project: 'One project that grows with you',
        projectCopy: 'You manage the digitization of a manual customer-onboarding process with AI-assisted document processing. Every phase adds new decisions and artifacts.',
        phases: 'Nine phases that build on each other', careers: 'Career directions', certificate: 'A certificate without misleading promises',
        cta: 'Ready for the next step?', download: 'English curriculum PDF', apply: 'Apply now', curriculum: 'Open curriculum',
      };

  return (
    <PageShell locale={locale} path="course">
      <main id="main-content">
        <section className="page-hero"><div className="section-inner page-hero-grid"><div><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p><div className="hero-actions"><a className="button" href={internalPath(`/${locale}/apply/`)}>{t.apply}</a><a className="button secondary" href={internalPath(`/${locale}/curriculum/`)}>{t.curriculum}</a></div></div><aside className="fact-panel"><dl><dt>{locale === 'de' ? 'Formate' : 'Formats'}</dt><dd>12 weeks FT<br />20 weeks PT</dd><dt>{locale === 'de' ? 'Ort' : 'Place'}</dt><dd>Remote</dd><dt>{locale === 'de' ? 'Unterricht' : 'Teaching'}</dt><dd>English</dd><dt>{locale === 'de' ? 'Gruppe' : 'Cohort'}</dt><dd>Max. 10</dd></dl></aside></div></section>
        <section className="content-section white"><div className="section-inner split-copy"><div><p className="eyebrow">AI era</p><h2>{t.change}</h2></div><div><p>{t.changeCopy}</p><p>{copy.aiCopy}</p></div></div></section>
        <section className="content-section"><div className="section-inner"><div className="section-heading"><h2>{t.outcomes}</h2><p>{copy.outcomesIntro}</p></div><ol className="outcome-grid compact-outcomes">{copy.outcomes.map((outcome, index) => <li key={outcome}><span>{String(index + 1).padStart(2, '0')}</span>{outcome}</li>)}</ol></div></section>
        <section className="content-section navy-section"><div className="section-inner split-copy inverse"><div><p className="eyebrow">Learning model</p><h2>{t.model}</h2></div><div><p>{t.modelCopy}</p><ul className="plain-checks"><li>Live instruction</li><li>Guided workshops</li><li>Team simulations</li><li>Continuous capstone</li><li>Guest sessions</li><li>Career practice</li></ul></div></div></section>
        <section className="content-section white"><div className="section-inner capstone-grid"><div><p className="eyebrow">Capstone</p><h2>{t.project}</h2><p>{t.projectCopy}</p></div><ol className="journey-list">{copy.capstoneOutputs.map((output, index) => <li key={output}><span>{index + 1}</span>{output}</li>)}</ol></div></section>
        <section className="content-section"><div className="section-inner"><div className="section-heading"><h2>{copy.tracksHeading}</h2><p>{copy.tracksIntro}</p></div><div className="track-grid">{[copy.fullTime, copy.partTime].map((track, index) => <article className={index === 0 ? 'track-card featured' : 'track-card'} key={track.title}><span>{index === 0 ? 'FT' : 'PT'}</span><h3>{track.title}</h3><strong>{track.meta}</strong><p>{track.copy}</p></article>)}</div></div></section>
        <section className="content-section white"><div className="section-inner"><div className="section-heading"><h2>{t.phases}</h2><p>{copy.curriculumIntro}</p></div><div className="phase-list compact">{phases.map((phase) => <details key={phase.number}><summary><span>{String(phase.number).padStart(2, '0')}</span><strong>{phase.title}</strong><em>{phase.fullTime} · {phase.partTime}</em></summary><p>{phase.summary}</p></details>)}</div></div></section>
        <section className="content-section"><div className="section-inner career-grid"><div><p className="eyebrow">{t.careers}</p><h2>{copy.careersHeading}</h2><p>{copy.progression}</p></div><div className="role-list">{copy.careers.map((role) => <span key={role}>{role}</span>)}</div></div></section>
        <section className="content-section white"><div className="section-inner certificate-card"><div className="certificate-mark">TBS</div><div><h2>{t.certificate}</h2><p>{copy.certificateCopy}</p></div></div></section>
        <section className="final-cta"><div className="section-inner final-cta-inner"><div><h2>{t.cta}</h2><p>{base.support}</p></div><div className="hero-actions"><a className="button light" href={internalPath(`/${locale}/apply/`)}>{t.apply}</a><a className="button ghost-light" href={curriculumPdfPath()} download>{t.download}</a></div></div></section>
      </main>
    </PageShell>
  );
}

function CurriculumView({ locale }: { locale: Locale }) {
  const t = locale === 'de'
    ? { eyebrow: 'Curriculum', title: 'Neun Phasen vom Problem bis zur Final Delivery.', intro: 'Die Inhalte sind in beiden Tracks identisch. Nur Pacing und Lernrhythmus unterscheiden sich. Der Unterricht findet auf Englisch statt.', download: 'Englisches Curriculum PDF herunterladen', note: 'Die genauen Live-Zeiten werden vor jedem Kurs bestätigt.' }
    : { eyebrow: 'Curriculum', title: 'Nine phases from problem to final delivery.', intro: 'Both tracks cover the same content. Only pacing and learning rhythm differ. Teaching is delivered in English.', download: 'Download the English curriculum PDF', note: 'Exact live-session times are confirmed before each cohort.' };
  return (
    <PageShell locale={locale} path="curriculum">
      <main id="main-content">
        <section className="page-hero"><div className="section-inner page-hero-grid"><div><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p><div className="hero-actions"><a className="button" href={curriculumPdfPath()} download>{t.download}</a><a className="button secondary" href={internalPath(`/${locale}/apply/`)}>{locale === 'de' ? 'Bewerben' : 'Apply'}</a></div></div><aside className="note-card"><strong>{locale === 'de' ? 'Planungshinweis' : 'Planning note'}</strong><p>{t.note}</p></aside></div></section>
        <section className="content-section white"><div className="section-inner"><CurriculumTrack locale={locale} /></div></section>
        <section className="final-cta"><div className="section-inner final-cta-inner"><div><h2>{locale === 'de' ? 'Möchtest du dieses Curriculum praktisch anwenden?' : 'Want to put this curriculum into practice?'}</h2><p>{locale === 'de' ? 'Beginne mit einer kurzen Bewerbung.' : 'Start with a short application.'}</p></div><a className="button light" href={internalPath(`/${locale}/apply/`)}>{locale === 'de' ? 'Jetzt bewerben' : 'Apply now'}</a></div></section>
      </main>
    </PageShell>
  );
}

function AboutView({ locale }: { locale: Locale }) {
  const t = locale === 'de'
    ? {
        eyebrow: 'Über The Best School', title: 'Praktische Bildung für Arbeit, die sich ständig verändert.',
        intro: 'The Best School entwickelt arbeitsmarktrelevante Kompetenzen für digitale Arbeit durch Practitioner-Wissen, strukturiertes Lernen, realistische Projekte und kontinuierliche Anpassung an den Markt.',
        principles: [
          { n: '01', title: 'Practitioner-led', copy: 'Themen werden durch reale Entscheidungen und Trade-offs vermittelt, nicht nur durch Definitionen.' },
          { n: '02', title: 'Tool-agnostisch', copy: 'Lerne zuerst übertragbare Methoden und wende sie anschließend mit aktuellen Tools an.' },
          { n: '03', title: 'Kleine Gruppen', copy: 'Maximal 10 Lernende ermöglichen Diskussion, Feedback und realistische Teamarbeit.' },
          { n: '04', title: 'Praxis vor Konsum', copy: 'Live-Sessions, Simulationen, Aufgaben, Projektartefakte und Gast-Sessions.' },
          { n: '05', title: 'Marktadaptiv', copy: 'Inhalte können sich mit Rollenanforderungen verändern, während Kern-Lernergebnisse stabil bleiben.' },
        ], people: 'Kurse werden von berufstätigen Professionals, Coaches und eingeladenen Praktikerinnen und Praktikern durchgeführt.', cta: 'Entdecke den ersten Kurs',
      }
    : {
        eyebrow: 'About The Best School', title: 'Practical education for work that keeps changing.',
        intro: 'The Best School develops job-relevant skills for digital work by combining practitioner knowledge, structured learning, realistic projects, and continuous adaptation to the market.',
        principles: [
          { n: '01', title: 'Practitioner-led', copy: 'Topics are taught through real decisions and trade-offs, not only definitions.' },
          { n: '02', title: 'Tool-agnostic', copy: 'Learn transferable methods first, then apply them with current tools.' },
          { n: '03', title: 'Small cohorts', copy: 'A maximum of 10 learners supports discussion, feedback, and realistic teamwork.' },
          { n: '04', title: 'Practice over consumption', copy: 'Live sessions, simulations, homework, project artifacts, and guest sessions.' },
          { n: '05', title: 'Market-adaptive', copy: 'Content can evolve with role requirements while core learning outcomes remain stable.' },
        ], people: 'Courses are taught by working professionals, coaches, and invited practitioners.', cta: 'Explore the first course',
      };
  return (
    <PageShell locale={locale} path="about">
      <main id="main-content">
        <section className="page-hero about-hero"><div className="section-inner"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p></div></section>
        <section className="content-section white"><div className="section-inner principles-list">{t.principles.map((principle) => <article key={principle.n}><span>{principle.n}</span><h2>{principle.title}</h2><p>{principle.copy}</p></article>)}</div></section>
        <section className="content-section"><div className="section-inner people-note"><div className="certificate-mark">TBS</div><p>{t.people}</p></div></section>
        <section className="final-cta"><div className="section-inner final-cta-inner"><div><h2>{t.cta}</h2><p>IT Project Management in the World of AI Automations</p></div><a className="button light" href={internalPath(`/${locale}/course/`)}>{locale === 'de' ? 'Kurs ansehen' : 'View course'}</a></div></section>
      </main>
    </PageShell>
  );
}

function ApplyView({ locale }: { locale: Locale }) {
  const t = locale === 'de'
    ? { eyebrow: 'Bewerbung', title: 'Bewirb dich bei The Best School.', intro: 'Sag uns, wie wir dich erreichen und warum dieser Kurs für dich relevant ist. Wir melden uns zu nächsten Schritten, Verfügbarkeit und den Informationen, die du für deine Situation brauchst.', short: 'Bewusst kurz', shortCopy: 'Wir beginnen ein Gespräch. Wir versuchen nicht, dich mit einem langen Formular zu qualifizieren.', privacy: 'Datensparsam', privacyCopy: 'Wir fragen nicht nach Telefonnummer, Adresse, Geburtsdatum, Lebenslauf oder sensiblen Daten.' }
    : { eyebrow: 'Application', title: 'Apply to The Best School.', intro: 'Tell us where to reach you and why this course is relevant to you. We will contact you with next steps, cohort availability, and any information needed for your situation.', short: 'Intentionally short', shortCopy: 'We start a conversation. We do not try to qualify you through a long form.', privacy: 'Data-minimal', privacyCopy: 'We do not ask for a phone number, address, birth date, employment history, or sensitive data.' };
  return (
    <PageShell locale={locale} path="apply">
      <main id="main-content">
        <section className="page-hero"><div className="section-inner page-hero-grid"><div><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p></div><aside className="application-notes"><article><span>01</span><div><strong>{t.short}</strong><p>{t.shortCopy}</p></div></article><article><span>02</span><div><strong>{t.privacy}</strong><p>{t.privacyCopy}</p></div></article></aside></div></section>
        <section className="content-section white"><div className="section-inner narrow-form"><ApplicationForm locale={locale} /></div></section>
      </main>
    </PageShell>
  );
}

function ContactView({ locale }: { locale: Locale }) {
  const t = locale === 'de'
    ? { eyebrow: 'Kontakt', title: 'Kontaktiere The Best School.', intro: 'Fragen zum Kurs, zu einem Track oder zum Bewerbungsprozess? Sende uns eine kurze Nachricht.', email: 'Admissions E-Mail', emailCopy: 'Wird nach Auswahl der Domain eingerichtet.', whatsapp: 'WhatsApp', whatsappCopy: 'Sichtbar, aber deaktiviert, bis eine echte Nummer verfügbar ist.', address: 'Adresse', addressCopy: 'Wird nach Bestätigung der rechtlichen Einheit veröffentlicht.' }
    : { eyebrow: 'Contact', title: 'Contact The Best School.', intro: 'Questions about the course, a track, or the application process? Send us a short message.', email: 'Admissions email', emailCopy: 'To be configured after the domain is selected.', whatsapp: 'WhatsApp', whatsappCopy: 'Visible but disabled until a real number is available.', address: 'Address', addressCopy: 'Published after the legal entity is confirmed.' };
  return (
    <PageShell locale={locale} path="contact">
      <main id="main-content">
        <section className="page-hero"><div className="section-inner"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p></div></section>
        <section className="content-section white"><div className="section-inner contact-grid"><ContactForm locale={locale} /><aside className="contact-details"><article><span>01</span><h2>{t.email}</h2><p>{t.emailCopy}</p></article><article><span>02</span><h2>{t.whatsapp}</h2><p>{t.whatsappCopy}</p><button type="button" disabled aria-label="WhatsApp contact coming soon"><MessageCircle aria-hidden="true" size={14} />WhatsApp · soon</button></article><article><span>03</span><h2>{t.address}</h2><p>{t.addressCopy}</p></article></aside></div></section>
      </main>
    </PageShell>
  );
}
