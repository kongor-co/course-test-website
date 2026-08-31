import { curriculumByLocale } from '@/lib/curriculum';
import { pageCopy } from '@/lib/page-copy';
import { curriculumPdfPath, internalPath } from '@/lib/routes';
import type { Locale } from '@/lib/site-content';
import { previewContent } from '@/lib/site-content';
import { PageShell } from './page-shell';
import { getCourseCards } from '@/lib/course-catalog';

export function HomePreview({ locale }: { locale: Locale }) {
  const content = previewContent[locale];
  const copy = pageCopy[locale];
  const phases = curriculumByLocale[locale];
  const courses = getCourseCards(locale);
  const applyText = content.nav.apply;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', name: 'The Best School' },
      {
        '@type': 'Course',
        name: 'IT Project Management in the World of AI Automations',
        description: content.lead,
        provider: { '@type': 'Organization', name: 'The Best School' },
        inLanguage: 'en',
        educationalLevel: 'Intermediate-leaning with beginner foundations',
        teaches: ['IT project management', 'Agile delivery', 'Product thinking', 'AI-assisted workflows'],
      },
    ],
  };

  return (
    <PageShell locale={locale}>
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <section className="hero">
          <div className="section-inner hero-grid">
            <div>
              <p className="eyebrow">{content.eyebrow}</p>
              <h1>{content.title}</h1>
              <p className="hero-lead">{content.lead}</p>
              <p className="hero-support">{content.support}</p>
              <div className="hero-actions">
                <a className="button" href={internalPath(`/${locale}/apply/`)}>{content.primary}</a>
                <a className="button secondary" href={internalPath(`/${locale}/curriculum/`)}>{content.secondary}</a>
              </div>
              <ul className="fact-list" aria-label="Course facts">
                {content.facts.map((fact) => <li key={fact}>{fact}</li>)}
              </ul>
            </div>
            <div className="artifact" aria-label="Example digital initiative board">
              <div className="artifact-head">
                <span className="artifact-kicker">Continuous capstone</span>
                <span className="status">Phase 5 of 9</span>
              </div>
              <h2>Digital onboarding platform</h2>
              <p>One evolving initiative. New decisions, risks, and outputs every phase.</p>
              <div className="progress-track" aria-label="Capstone progress"><span /></div>
              <div className="artifact-board">
                <div className="artifact-column">
                  <strong>Discover</strong>
                  <div className="artifact-card">Stakeholder map</div>
                  <div className="artifact-card teal">Requirements pack</div>
                </div>
                <div className="artifact-column">
                  <strong>Deliver</strong>
                  <div className="artifact-card">Release plan</div>
                  <div className="artifact-card teal">Risk review</div>
                </div>
                <div className="artifact-column">
                  <strong>Improve</strong>
                  <div className="artifact-card">AI workflow</div>
                  <div className="artifact-card teal">Decision memo</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section white home-course-section">
          <div className="section-inner">
            <div className="section-heading">
              <h2>{locale === 'de' ? 'Drei Wege für digitale Arbeit mit KI.' : 'Three paths for digital work with AI.'}</h2>
              <p>{locale === 'de' ? 'Vom fokussierten Delivery-Projekt über das Tech-Produkt bis zur organisationsweiten Transformation.' : 'From a focused delivery initiative to a technology product and organization-wide transformation.'}</p>
            </div>
            <div className="home-course-grid">
              {courses.map((course, index) => <article className="home-course-card" data-accent={course.accent} key={course.slug}>
                <span>0{index + 1}</span>
                <p>{course.category}</p>
                <h3>{course.title}</h3>
                <small>{course.duration}</small>
                <a className="text-link" href={internalPath(`/${locale}${course.href}`)}>{locale === 'de' ? 'Kurs ansehen' : 'View course'} →</a>
              </article>)}
            </div>
            <a className="button secondary section-button" href={internalPath(`/${locale}/courses/`)}>{locale === 'de' ? 'Alle Kurse vergleichen' : 'Compare all courses'}</a>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-heading">
              <h2>{content.cohortHeading}</h2>
              <p>{content.cohortIntro}</p>
            </div>
            <div className="cohort-grid">
              {content.cohorts.map((cohort) => (
                <article className="cohort-card" key={cohort.date}>
                  <p className="cohort-date">{cohort.date}</p>
                  <h3>{cohort.track}</h3>
                  <p className="card-meta">{cohort.detail}</p>
                  <a className="text-link" href={`${internalPath(`/${locale}/apply/`)}?cohort=${encodeURIComponent(cohort.date)}`}>
                    {applyText} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-heading">
              <h2>{content.whyHeading}</h2>
              <p>{content.whyIntro}</p>
            </div>
            <div className="reason-grid">
              {content.reasons.map((reason, index) => (
                <article className="reason-card" key={reason.title}>
                  <span className="reason-number">0{index + 1}</span>
                  <h3>{reason.title}</h3>
                  <p>{reason.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section white">
          <div className="section-inner">
            <div className="section-heading">
              <h2>{copy.outcomesHeading}</h2>
              <p>{copy.outcomesIntro}</p>
            </div>
            <ol className="outcome-grid">
              {copy.outcomes.map((outcome, index) => (
                <li key={outcome}><span>{String(index + 1).padStart(2, '0')}</span>{outcome}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-heading">
              <h2>{copy.audienceHeading}</h2>
              <p>{copy.audienceIntro}</p>
            </div>
            <div className="audience-layout">
              <div className="audience-list">
                {copy.audience.map((item) => <span key={item}>{item}</span>)}
              </div>
              <aside className="note-card">
                <strong>{locale === 'de' ? 'Gut zu wissen' : 'Good to know'}</strong>
                <p>{copy.beginnerNote}</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section navy-section">
          <div className="section-inner">
            <div className="section-heading inverse">
              <h2>{copy.lensesHeading}</h2>
              <p>{copy.lensesIntro}</p>
            </div>
            <div className="lens-grid">
              {copy.lenses.map((lens) => (
                <article key={lens.name}>
                  <strong>{lens.name}</strong>
                  <p>{lens.question}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section ai-band">
          <div className="section-inner ai-grid">
            <div>
              <p className="eyebrow">AI throughout the course</p>
              <h2>{copy.aiHeading}</h2>
              <p>{copy.aiCopy}</p>
            </div>
            <ul>
              {copy.aiExamples.map((example) => <li key={example}>{example}</li>)}
            </ul>
          </div>
        </section>

        <section className="section white">
          <div className="section-inner">
            <div className="section-heading">
              <h2>{copy.curriculumHeading}</h2>
              <p>{copy.curriculumIntro}</p>
            </div>
            <div className="phase-list compact">
              {phases.map((phase) => (
                <details key={phase.number}>
                  <summary>
                    <span>{String(phase.number).padStart(2, '0')}</span>
                    <strong>{phase.title}</strong>
                    <em>{phase.fullTime} · {phase.partTime}</em>
                  </summary>
                  <p>{phase.summary}</p>
                </details>
              ))}
            </div>
            <a className="button secondary section-button" href={internalPath(`/${locale}/curriculum/`)}>{copy.curriculumLink}</a>
          </div>
        </section>

        <section className="section capstone-section">
          <div className="section-inner capstone-grid">
            <div>
              <p className="eyebrow">Continuous capstone</p>
              <h2>{copy.capstoneHeading}</h2>
              <p>{copy.capstoneCopy}</p>
            </div>
            <ol className="journey-list">
              {copy.capstoneOutputs.map((output, index) => <li key={output}><span>{index + 1}</span>{output}</li>)}
            </ol>
          </div>
        </section>

        <section className="section white">
          <div className="section-inner">
            <div className="section-heading">
              <h2>{copy.tracksHeading}</h2>
              <p>{copy.tracksIntro}</p>
            </div>
            <div className="track-grid">
              {[copy.fullTime, copy.partTime].map((track, index) => (
                <article className={index === 0 ? 'track-card featured' : 'track-card'} key={track.title}>
                  <span>{index === 0 ? 'FT' : 'PT'}</span>
                  <h3>{track.title}</h3>
                  <strong>{track.meta}</strong>
                  <p>{track.copy}</p>
                  <a className="text-link" href={internalPath(`/${locale}/apply/`)}>{applyText} →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner career-grid">
            <div>
              <p className="eyebrow">Career directions</p>
              <h2>{copy.careersHeading}</h2>
              <p>{copy.careersIntro}</p>
              <p className="progression-note">{copy.progression}</p>
            </div>
            <div className="role-list">
              {copy.careers.map((role) => <span key={role}>{role}</span>)}
            </div>
          </div>
        </section>

        <section className="section white">
          <div className="section-inner">
            <div className="section-heading">
              <h2>{copy.supportHeading}</h2>
              <p>{locale === 'de' ? 'Praktische Vorbereitung, integriert in die Projektarbeit.' : 'Practical preparation, integrated with the project work.'}</p>
            </div>
            <div className="support-grid">
              {copy.support.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>)}
            </div>
            <aside className="certificate-card">
              <div className="certificate-mark">TBS</div>
              <div><h3>{copy.certificateHeading}</h3><p>{copy.certificateCopy}</p></div>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="section-inner faq-layout">
            <div><p className="eyebrow">FAQ</p><h2>{copy.faqHeading}</h2></div>
            <div className="faq-list">
              {copy.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="section-inner final-cta-inner">
            <div><h2>{copy.finalHeading}</h2><p>{copy.finalCopy}</p></div>
            <div className="hero-actions">
              <a className="button light" href={internalPath(`/${locale}/apply/`)}>{applyText}</a>
              <a className="button ghost-light" href={curriculumPdfPath()} download>{copy.download}</a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
