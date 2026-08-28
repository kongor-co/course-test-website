'use client';

import type { Locale } from '@/lib/site-content';
import { useEffect, useRef, useState } from 'react';

const copy = {
  en: {
    title: 'Cookie preferences',
    body: 'The site uses required local storage for your consent choice. Optional analytics are currently disabled.',
    required: 'Use required storage only',
    optional: 'Allow optional analytics',
    note: 'You can change this choice from the footer.',
  },
  de: {
    title: 'Cookie-Einstellungen',
    body: 'Die Website nutzt erforderlichen lokalen Speicher für deine Auswahl. Optionale Analytics sind derzeit deaktiviert.',
    required: 'Nur erforderlichen Speicher nutzen',
    optional: 'Optionale Analytics erlauben',
    note: 'Du kannst diese Auswahl im Footer ändern.',
  },
};

export function CookiePreferences({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !window.localStorage.getItem('tbs-consent');
  });
  const dialogRef = useRef<HTMLDialogElement>(null);
  const content = copy[locale];

  useEffect(() => {
    const show = () => setOpen(true);
    document.addEventListener('open-cookie-preferences', show);
    return () => document.removeEventListener('open-cookie-preferences', show);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      return;
    }
    if (dialog.open) dialog.close();
  }, [open]);

  function save(value: 'required' | 'optional') {
    window.localStorage.setItem('tbs-consent', value);
    setOpen(false);
  }

  return (
    <dialog ref={dialogRef} className="cookie-dialog" aria-labelledby="cookie-title" onCancel={(event) => event.preventDefault()}>
      <section className="cookie-panel">
        <p className="eyebrow">Privacy</p>
        <h2 id="cookie-title">{content.title}</h2>
        <p>{content.body}</p>
        <p className="cookie-note">{content.note}</p>
        <div className="cookie-actions">
          <button className="button secondary" type="button" autoFocus onClick={() => save('required')}>{content.required}</button>
          <button className="button" type="button" onClick={() => save('optional')}>{content.optional}</button>
        </div>
      </section>
    </dialog>
  );
}
