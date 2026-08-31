import { getCourseCards } from '@/lib/course-catalog';
import { coursePdfPath, internalPath } from '@/lib/routes';
import type { Locale } from '@/lib/site-content';
import { PageShell } from './page-shell';

function cohortApplicationPath(locale: Locale, course: string, cohort: string) {
  return internalPath(`/${locale}/apply/?${new URLSearchParams({ course, cohort })}`);
}

export function CoursesOverviewPage({ locale }: { locale: Locale }) {
  const courses = getCourseCards(locale);
  const text = locale === 'de'
    ? {
        eyebrow: 'Drei Lernwege',
        title: 'Wähle den Umfang, den du gestalten möchtest.',
        lead: 'Lerne, ein digitales Vorhaben zu liefern, ein Tech-Produkt zu führen oder eine organisationsweite Transformation zu gestalten. Jeder Kurs verbindet belastbare Methoden mit verantwortlicher KI-Unterstützung.',
        compare: 'Welcher Kurs passt?',
        compareCopy: 'Die Programme ergänzen sich, ohne dieselbe Rolle dreimal zu erklären.',
        details: 'Kursdetails', curriculum: 'Curriculum PDF', roles: 'Mögliche Richtungen', schedule: 'Alle Termine ansehen', apply: 'Jetzt bewerben',
        notes: [
          ['Liefern', 'Wähle IT Project Management, wenn dein Schwerpunkt auf koordinierter Umsetzung liegt.'],
          ['Entdecken', 'Wähle Tech Product Management, wenn du Kundenprobleme, Produktentscheidungen und Adoption verbinden möchtest.'],
          ['Verändern', 'Wähle Digital Transformation, wenn du Operating Model, Governance, Change und ein Portfolio verbinden möchtest.'],
        ],
      }
    : {
        eyebrow: 'Three learning paths',
        title: 'Choose the scope you want to shape.',
        lead: 'Learn to deliver a digital initiative, lead a technology product, or shape organization-wide transformation. Every course combines durable methods with responsible AI assistance.',
        compare: 'Which course fits?',
        compareCopy: 'The programs complement each other without teaching the same role three times.',
        details: 'Course details', curriculum: 'Curriculum PDF', roles: 'Possible directions', schedule: 'View all dates', apply: 'Apply now',
        notes: [
          ['Deliver', 'Choose IT Project Management when your focus is coordinated execution.'],
          ['Discover', 'Choose Tech Product Management when you want to connect customer problems, product decisions, and adoption.'],
          ['Transform', 'Choose Digital Transformation when you want to connect operating model, governance, change, and a portfolio.'],
        ],
      };

  return (
    <PageShell locale={locale} path="courses">
      <main id="main-content">
        <section className="page-hero catalog-hero">
          <div className="section-inner">
            <p className="eyebrow">{text.eyebrow}</p>
            <h1>{text.title}</h1>
            <p>{text.lead}</p>
          </div>
        </section>
        <section className="content-section white">
          <div className="section-inner course-catalog-grid">
            {courses.map((course, index) => (
              <article className="catalog-card" data-accent={course.accent} key={course.slug}>
                <div className="catalog-card-top"><span>0{index + 1}</span><p>{course.category}</p></div>
                <h2>{course.title}</h2>
                <p>{course.summary}</p>
                <dl className="course-meta"><div><dt>{locale === 'de' ? 'Dauer' : 'Duration'}</dt><dd>{course.duration}</dd></div><div><dt>{locale === 'de' ? 'Format' : 'Format'}</dt><dd>{course.format}</dd></div><div><dt>{locale === 'de' ? 'Niveau' : 'Level'}</dt><dd>{course.level}</dd></div></dl>
                <div className="catalog-roles"><strong>{text.roles}</strong><div className="role-list">{course.roles.map((role) => <span key={role}>{role}</span>)}</div></div>
                <div className="catalog-actions">
                  <a className="button" href={internalPath(`/${locale}${course.href}`)}>{text.details}</a>
                  <a className="text-link" href={coursePdfPath(course.pdfFilename)} download>{text.curriculum}</a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="content-section">
          <div className="section-inner">
            <div className="section-heading"><h2>{text.compare}</h2><p>{text.compareCopy}</p></div>
            <div className="course-path-grid">{text.notes.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
          </div>
        </section>
        <section className="final-cta"><div className="section-inner final-cta-inner"><div><h2>{locale === 'de' ? 'Plane deinen nächsten Schritt.' : 'Plan your next step.'}</h2><p>{locale === 'de' ? 'Vergleiche die vorläufigen Vollzeit- und Teilzeitstarts.' : 'Compare the provisional full-time and part-time starts.'}</p></div><div className="hero-actions"><a className="button light" href={internalPath(`/${locale}/schedule/`)}>{text.schedule}</a><a className="button ghost-light" href={internalPath(`/${locale}/apply/`)}>{text.apply}</a></div></div></section>
      </main>
    </PageShell>
  );
}

export function SchedulePage({ locale }: { locale: Locale }) {
  const courses = getCourseCards(locale);
  const text = locale === 'de'
    ? { eyebrow: 'Kurstermine', title: 'Wähle Programm und Tempo.', lead: 'Alle Termine sind vorläufig. Die genauen Live-Zeiten werden vor jedem Start bestätigt.', duration: 'Dauer', apply: 'Für diesen Start bewerben', details: 'Kursdetails', note: 'Remote. Unterricht auf Englisch. Maximal 10 Lernende pro Gruppe.' }
    : { eyebrow: 'Course schedule', title: 'Choose your program and pace.', lead: 'All dates are provisional. Exact live-session times are confirmed before each start.', duration: 'Duration', apply: 'Apply for this start', details: 'Course details', note: 'Remote. Teaching in English. Up to 10 learners per cohort.' };

  return (
    <PageShell locale={locale} path="schedule">
      <main id="main-content">
        <section className="page-hero"><div className="section-inner page-hero-grid"><div><p className="eyebrow">{text.eyebrow}</p><h1>{text.title}</h1><p>{text.lead}</p></div><aside className="note-card"><strong>{locale === 'de' ? 'Für alle Kurse' : 'For every course'}</strong><p>{text.note}</p></aside></div></section>
        <section className="content-section white"><div className="section-inner schedule-groups">
          {courses.map((course) => <section className="schedule-course" data-accent={course.accent} key={course.slug}>
            <header><div><p>{course.category}</p><h2>{course.title}</h2></div><a className="text-link" href={internalPath(`/${locale}${course.href}`)}>{text.details}</a></header>
            <div className="schedule-grid">{course.cohorts.map((cohort) => <article className="schedule-card" key={`${course.slug}-${cohort.date}`}><time>{cohort.date}</time><strong>{cohort.track}</strong><dl><dt>{text.duration}</dt><dd>{cohort.duration}</dd></dl><p>{cohort.detail}</p><a className="button secondary" href={cohortApplicationPath(locale, course.slug, cohort.date)}>{text.apply}</a></article>)}</div>
          </section>)}
        </div></section>
      </main>
    </PageShell>
  );
}
