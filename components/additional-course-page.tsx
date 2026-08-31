import type { AdditionalCourse } from '@/lib/course-catalog';
import { coursePdfPath, internalPath } from '@/lib/routes';
import type { Locale } from '@/lib/site-content';
import { CurriculumTrack } from './curriculum-track';
import { PageShell } from './page-shell';

interface AdditionalCoursePageProps {
  locale: Locale;
  course: AdditionalCourse;
}

function cohortApplicationPath(locale: Locale, course: string, cohort: string) {
  return internalPath(`/${locale}/apply/?${new URLSearchParams({ course, cohort })}`);
}

export function AdditionalCoursePage({ locale, course }: AdditionalCoursePageProps) {
  const text = locale === 'de'
    ? { apply: 'Jetzt bewerben', curriculum: 'Curriculum ansehen', download: 'Englisches Curriculum PDF', outcomes: 'Das kannst du danach', audience: 'Für wen dieser Kurs gedacht ist', phases: 'Acht aufeinander aufbauende Phasen', schedule: 'Vorläufige Kursstarts', dates: 'Alle Termine', careers: 'Karriere', certificate: 'Zertifikat ohne irreführende Versprechen', questions: 'Häufige Fragen', duration: 'Dauer' }
    : { apply: 'Apply now', curriculum: 'View curriculum', download: 'English curriculum PDF', outcomes: 'What you should be able to do', audience: 'Who this course is for', phases: 'Eight phases that build on each other', schedule: 'Provisional course starts', dates: 'All dates', careers: 'Career', certificate: 'A certificate without misleading promises', questions: 'Common questions', duration: 'Duration' };
  const path = `courses/${course.slug}`;
  const applyPath = internalPath(`/${locale}/apply/?course=${course.slug}`);

  return (
    <PageShell locale={locale} path={path}>
      <main id="main-content">
        <section className="page-hero course-detail-hero" data-accent={course.accent}><div className="section-inner page-hero-grid"><div><p className="eyebrow">{course.eyebrow}</p><h1>{course.title}</h1><p>{course.lead}</p><p className="hero-support">{course.support}</p><div className="hero-actions"><a className="button" href={applyPath}>{text.apply}</a><a className="button secondary" href={internalPath(`/${locale}${course.curriculumHref}`)}>{text.curriculum}</a></div></div><aside className="fact-panel"><ul>{course.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul></aside></div></section>
        <section className="content-section white"><div className="section-inner split-copy"><div><p className="eyebrow">Role clarity</p><h2>{course.differenceTitle}</h2></div><div><p>{course.differenceCopy}</p></div></div></section>
        <section className="content-section"><div className="section-inner"><div className="section-heading"><h2>{text.outcomes}</h2><p>{course.outcomesIntro}</p></div><ol className="outcome-grid compact-outcomes">{course.outcomes.map((outcome, index) => <li key={outcome}><span>{String(index + 1).padStart(2, '0')}</span>{outcome}</li>)}</ol></div></section>
        <section className="content-section navy-section"><div className="section-inner split-copy inverse"><div><p className="eyebrow">Capstone</p><h2>{course.practiceTitle}</h2><p>{course.practiceCopy}</p></div><ol className="journey-list">{course.practiceOutputs.map((output, index) => <li key={output}><span>{index + 1}</span>{output}</li>)}</ol></div></section>
        <section className="content-section white"><div className="section-inner audience-grid"><div><p className="eyebrow">Fit</p><h2>{text.audience}</h2><p>{course.audienceIntro}</p><p className="beginner-note">{course.beginnerNote}</p></div><ul className="plain-checks">{course.audience.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
        <section className="content-section"><div className="section-inner"><div className="section-heading"><h2>{text.phases}</h2><p>{locale === 'de' ? 'Beide Tracks behandeln dieselben Inhalte in unterschiedlichem Tempo.' : 'Both tracks cover the same content at a different pace.'}</p></div><div className="phase-list compact">{course.phases.map((phase) => <details key={phase.number}><summary><span>{String(phase.number).padStart(2, '0')}</span><strong>{phase.title}</strong><em>{phase.fullTime} · {phase.partTime}</em></summary><p>{phase.summary}</p></details>)}</div><div className="section-actions"><a className="button secondary" href={internalPath(`/${locale}${course.curriculumHref}`)}>{text.curriculum}</a><a className="text-link" href={coursePdfPath(course.pdfFilename)} download>{text.download}</a></div></div></section>
        <section className="content-section white"><div className="section-inner"><div className="section-heading"><h2>{text.schedule}</h2><a className="text-link" href={internalPath(`/${locale}/schedule/`)}>{text.dates}</a></div><div className="schedule-grid">{course.cohorts.map((cohort) => <article className="schedule-card" key={cohort.date}><time>{cohort.date}</time><strong>{cohort.track}</strong><dl><dt>{text.duration}</dt><dd>{cohort.duration}</dd></dl><p>{cohort.detail}</p><a className="button secondary" href={cohortApplicationPath(locale, course.slug, cohort.date)}>{text.apply}</a></article>)}</div></div></section>
        <section className="content-section"><div className="section-inner career-grid"><div><p className="eyebrow">{text.careers}</p><h2>{course.careersHeading}</h2><p>{course.careersIntro}</p><p>{course.progression}</p></div><div className="role-list">{course.roles.map((role) => <span key={role}>{role}</span>)}</div></div></section>
        <section className="content-section white"><div className="section-inner certificate-card"><div className="certificate-mark">TBS</div><div><h2>{text.certificate}</h2><p>{course.certificateCopy}</p></div></div></section>
        <section className="content-section"><div className="section-inner faq-list"><div className="section-heading"><h2>{text.questions}</h2></div>{course.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
        <section className="final-cta"><div className="section-inner final-cta-inner"><div><h2>{course.title}</h2><p>{course.support}</p></div><div className="hero-actions"><a className="button light" href={applyPath}>{text.apply}</a><a className="button ghost-light" href={coursePdfPath(course.pdfFilename)} download>{text.download}</a></div></div></section>
      </main>
    </PageShell>
  );
}

export function AdditionalCourseCurriculumPage({ locale, course }: AdditionalCoursePageProps) {
  const text = locale === 'de'
    ? { eyebrow: 'Curriculum', title: `Curriculum: ${course.title}`, lead: 'Acht Lernphasen, ein durchgängiger Capstone und zwei Lernrhythmen. Der Unterricht findet auf Englisch statt.', download: 'Englisches Curriculum PDF herunterladen', apply: 'Jetzt bewerben', note: 'Die genauen Live-Zeiten werden vor jedem Kurs bestätigt.' }
    : { eyebrow: 'Curriculum', title: `${course.title} curriculum`, lead: 'Eight learning phases, one continuous capstone, and two learning rhythms. Teaching is delivered in English.', download: 'Download the English curriculum PDF', apply: 'Apply now', note: 'Exact live-session times are confirmed before each cohort.' };
  const fullLabel = course.accent === 'product' ? (locale === 'de' ? 'Vollzeit · 14 Wochen' : 'Full-time · 14 weeks') : (locale === 'de' ? 'Vollzeit · 16 Wochen' : 'Full-time · 16 weeks');
  const partLabel = course.accent === 'product' ? (locale === 'de' ? 'Teilzeit · 22 Wochen' : 'Part-time · 22 weeks') : (locale === 'de' ? 'Teilzeit · 24 Wochen' : 'Part-time · 24 weeks');

  return (
    <PageShell locale={locale} path={`courses/${course.slug}/curriculum`}>
      <main id="main-content">
        <section className="page-hero"><div className="section-inner page-hero-grid"><div><p className="eyebrow">{text.eyebrow}</p><h1>{text.title}</h1><p>{text.lead}</p><div className="hero-actions"><a className="button" href={coursePdfPath(course.pdfFilename)} download>{text.download}</a><a className="button secondary" href={internalPath(`/${locale}/apply/?course=${course.slug}`)}>{text.apply}</a></div></div><aside className="note-card"><strong>{locale === 'de' ? 'Planungshinweis' : 'Planning note'}</strong><p>{text.note}</p></aside></div></section>
        <section className="content-section white"><div className="section-inner"><CurriculumTrack locale={locale} phases={course.phases} fullLabel={fullLabel} partLabel={partLabel} /></div></section>
        <section className="final-cta"><div className="section-inner final-cta-inner"><div><h2>{locale === 'de' ? 'Möchtest du dieses Curriculum praktisch anwenden?' : 'Want to put this curriculum into practice?'}</h2><p>{course.practiceCopy}</p></div><a className="button light" href={internalPath(`/${locale}/apply/?course=${course.slug}`)}>{text.apply}</a></div></section>
      </main>
    </PageShell>
  );
}
