'use client';

import { curriculumByLocale } from '@/lib/curriculum';
import type { Phase } from '@/lib/curriculum';
import type { Locale } from '@/lib/site-content';
import { useState } from 'react';

type CurriculumTrackProps = {
  locale: Locale;
  phases?: Phase[];
  fullLabel?: string;
  partLabel?: string;
};

export function CurriculumTrack({ locale, phases: suppliedPhases, fullLabel, partLabel }: CurriculumTrackProps) {
  const [track, setTrack] = useState<'full' | 'part'>('full');
  const phases = suppliedPhases ?? curriculumByLocale[locale];
  const labels = locale === 'de'
    ? { full: fullLabel ?? 'Vollzeit · 12 Wochen', part: partLabel ?? 'Teilzeit · 20 Wochen', topics: 'Kernthemen', ai: 'KI-Perspektive', output: 'Praktisches Ergebnis', field: 'Aus der Praxis' }
    : { full: fullLabel ?? 'Full-time · 12 weeks', part: partLabel ?? 'Part-time · 20 weeks', topics: 'Core topics', ai: 'AI-era angle', output: 'Practical output', field: 'From the field' };

  return (
    <div>
      <fieldset className="track-toggle">
        <legend className="visually-hidden">{locale === 'de' ? 'Kurstempo' : 'Course pacing'}</legend>
        <button type="button" className={track === 'full' ? 'active' : ''} aria-pressed={track === 'full'} onClick={() => setTrack('full')}>{labels.full}</button>
        <button type="button" className={track === 'part' ? 'active' : ''} aria-pressed={track === 'part'} onClick={() => setTrack('part')}>{labels.part}</button>
      </fieldset>
      <div className="curriculum-detail-list">
        {phases.map((phase) => (
          <article className="phase-detail" key={phase.number}>
            <div className="phase-rail">
              <span>{String(phase.number).padStart(2, '0')}</span>
              <div />
            </div>
            <div>
              <div className="phase-title-row">
                <div><p>Phase {phase.number}</p><h2>{phase.title}</h2></div>
                <div className="pace-pair">
                  <span className={track === 'full' ? 'active' : ''}>FT · {phase.fullTime}</span>
                  <span className={track === 'part' ? 'active' : ''}>PT · {phase.partTime}</span>
                </div>
              </div>
              <p className="phase-summary">{phase.summary}</p>
              <div className="phase-detail-grid">
                <section>
                  <h3>{labels.topics}</h3>
                  <ul>{phase.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
                </section>
                <section className="ai-angle-card">
                  <h3>{labels.ai}</h3>
                  <p>{phase.aiAngle}</p>
                </section>
              </div>
              <div className="phase-output-grid">
                <div><strong>{labels.output}</strong><p>{phase.output}</p></div>
                <aside><strong>{labels.field}</strong><p>{phase.fieldNote}</p></aside>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
