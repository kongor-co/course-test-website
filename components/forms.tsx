'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Locale } from '@/lib/site-content';
import { internalPath } from '@/lib/routes';
import { useEffect, useState, type SyntheticEvent } from 'react';

type FormState = 'idle' | 'sending' | 'success' | 'error';
type FormSubmitEvent = SyntheticEvent<HTMLFormElement, SubmitEvent>;

const labels = {
  en: {
    email: 'Email address',
    reason: 'Why do you want to take this course?',
    reasonHint: '50 to 1,000 characters',
    cohort: 'Preferred cohort',
    privacy: 'I agree that The Best School may process my application and contact me.',
    newsletter: 'Optional: send me course news. A double opt-in email will follow.',
    submit: 'Submit application',
    sending: 'Submitting...',
    success: 'Application received. We will contact you using the email address you provided.',
    error: 'We could not submit the form. Please try again or use the contact page.',
    connection: 'Applications are not connected yet. Please use the contact page until admissions is configured.',
    message: 'Message',
    contactSubmit: 'Send message',
    contactSuccess: 'Message received. We will reply by email.',
    contactConnection: 'Contact messages are not connected yet. Please email admissions once the address is published.',
    newsletterTitle: 'Course notes, occasionally.',
    newsletterCopy: 'Get cohort news and curriculum updates. Confirm through the email we send next.',
    newsletterSubmit: 'Request updates',
    newsletterConsent: 'I consent to receive course updates and accept the privacy notice.',
    newsletterSuccess: 'Check your inbox to confirm your subscription.',
    newsletterError: 'Newsletter signup is not connected yet.',
  },
  de: {
    email: 'E-Mail-Adresse',
    reason: 'Warum möchtest du diesen Kurs besuchen?',
    reasonHint: '50 bis 1.000 Zeichen',
    cohort: 'Bevorzugter Kursstart',
    privacy: 'Ich stimme zu, dass The Best School meine Bewerbung verarbeitet und mich kontaktiert.',
    newsletter: 'Optional: Sendet mir Kursneuigkeiten. Eine Double-Opt-in-E-Mail folgt.',
    submit: 'Bewerbung senden',
    sending: 'Wird gesendet...',
    success: 'Bewerbung erhalten. Wir kontaktieren dich über die angegebene E-Mail-Adresse.',
    error: 'Das Formular konnte nicht gesendet werden. Bitte versuche es erneut oder nutze die Kontaktseite.',
    connection: 'Bewerbungen sind noch nicht verbunden. Bitte nutze vorübergehend die Kontaktseite.',
    message: 'Nachricht',
    contactSubmit: 'Nachricht senden',
    contactSuccess: 'Nachricht erhalten. Wir antworten per E-Mail.',
    contactConnection: 'Kontaktnachrichten sind noch nicht verbunden. Bitte schreibe an Admissions, sobald die Adresse veröffentlicht ist.',
    newsletterTitle: 'Gelegentliche Kursnotizen.',
    newsletterCopy: 'Erhalte Neuigkeiten zu Kursstarts und Curriculum. Bestätige über die nächste E-Mail.',
    newsletterSubmit: 'Updates anfordern',
    newsletterConsent: 'Ich stimme dem Erhalt von Kursupdates zu und akzeptiere den Datenschutzhinweis.',
    newsletterSuccess: 'Prüfe deinen Posteingang und bestätige die Anmeldung.',
    newsletterError: 'Der Newsletter ist noch nicht verbunden.',
  },
};

async function postForm(endpoint: string, form: HTMLFormElement) {
  const data = Object.fromEntries(new FormData(form));
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('submission failed');
  }
}

export function ApplicationForm({ locale, cohort = '' }: { locale: Locale; cohort?: string }) {
  const copy = labels[locale];
  const [state, setState] = useState<FormState>('idle');
  const [cohortValue, setCohortValue] = useState(cohort);
  const endpoint = import.meta.env.PUBLIC_APPLICATION_ENDPOINT;

  useEffect(() => {
    if (cohort) return;
    const requested = new URLSearchParams(window.location.search).get('cohort') ?? '';
    const aliases: Record<string, string> = {
      '5. Okt 2026': '5 Oct 2026',
      '2. Nov 2026': '2 Nov 2026',
      '30. Nov 2026': '30 Nov 2026',
    };
    const timer = window.setTimeout(() => setCohortValue(aliases[requested] ?? requested), 0);
    return () => window.clearTimeout(timer);
  }, [cohort]);

  async function submit(event: FormSubmitEvent) {
    event.preventDefault();
    const form = event.currentTarget;
    const reasonValue = new FormData(form).get('reason');
    const reason = typeof reasonValue === 'string' ? reasonValue.trim() : '';
    if (reason.length < 50) {
      form.querySelector<HTMLTextAreaElement>('[name="reason"]')?.setCustomValidity(copy.reasonHint);
      form.reportValidity();
      form.querySelector<HTMLTextAreaElement>('[name="reason"]')?.setCustomValidity('');
      return;
    }
    if (!endpoint) {
      setState('error');
      return;
    }
    setState('sending');
    try {
      await postForm(endpoint, form);
      setState('success');
      form.reset();
    } catch {
      setState('error');
    }
  }

  const message = state === 'success' ? copy.success : state === 'error' ? (endpoint ? copy.error : copy.connection) : '';

  return (
    <form className="form-card" onSubmit={submit} noValidate={false}>
      <div className="form-field">
        <label htmlFor="application-email">{copy.email}</label>
        <Input id="application-email" className="form-control" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form-field">
        <label htmlFor="application-reason">{copy.reason}</label>
        <Textarea id="application-reason" className="form-control form-textarea" name="reason" minLength={50} maxLength={1000} required />
        <small>{copy.reasonHint}</small>
      </div>
      <div className="form-field">
        <label htmlFor="application-cohort">{copy.cohort}</label>
        <select id="application-cohort" className="form-control" name="cohort" value={cohortValue} onChange={(event) => setCohortValue(event.target.value)}>
          <option value="">Flexible</option>
          <option value="5 Oct 2026">5 Oct 2026 · Full-time</option>
          <option value="2 Nov 2026">2 Nov 2026 · Part-time</option>
          <option value="30 Nov 2026">30 Nov 2026 · Full-time</option>
        </select>
      </div>
      <label className="check-field">
        <input type="checkbox" name="privacyConsent" value="yes" required />
        <span>{copy.privacy} <a href={internalPath(`/${locale}/privacy/`)}>Privacy</a></span>
      </label>
      <label className="check-field">
        <input type="checkbox" name="newsletterConsent" value="yes" />
        <span>{copy.newsletter}</span>
      </label>
      <Button className="form-submit" type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? copy.sending : copy.submit}
      </Button>
      {message ? <output className={`form-message ${state}`}>{message}</output> : null}
    </form>
  );
}

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = labels[locale];
  const [state, setState] = useState<FormState>('idle');
  const endpoint = import.meta.env.PUBLIC_CONTACT_ENDPOINT;

  async function submit(event: FormSubmitEvent) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!endpoint) {
      setState('error');
      return;
    }
    setState('sending');
    try {
      await postForm(endpoint, form);
      setState('success');
      form.reset();
    } catch {
      setState('error');
    }
  }

  return (
    <form className="form-card" onSubmit={submit}>
      <div className="form-field">
        <label htmlFor="contact-email">{copy.email}</label>
        <Input id="contact-email" className="form-control" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">{copy.message}</label>
        <Textarea id="contact-message" className="form-control form-textarea" name="message" minLength={20} maxLength={1500} required />
      </div>
      <Button className="form-submit" type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? copy.sending : copy.contactSubmit}
      </Button>
      {state === 'success' ? <output className="form-message success">{copy.contactSuccess}</output> : null}
      {state === 'error' ? <output className="form-message error">{endpoint ? copy.error : copy.contactConnection}</output> : null}
    </form>
  );
}

export function NewsletterForm({ locale }: { locale: Locale }) {
  const copy = labels[locale];
  const [state, setState] = useState<FormState>('idle');
  const endpoint = import.meta.env.PUBLIC_NEWSLETTER_ENDPOINT;

  async function submit(event: FormSubmitEvent) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!endpoint) {
      setState('error');
      return;
    }
    setState('sending');
    try {
      await postForm(endpoint, form);
      setState('success');
      form.reset();
    } catch {
      setState('error');
    }
  }

  return (
    <form className="newsletter-form" onSubmit={submit}>
      <strong>{copy.newsletterTitle}</strong>
      <p>{copy.newsletterCopy}</p>
      <div className="newsletter-row">
        <Input className="form-control" name="email" type="email" aria-label={copy.email} placeholder={copy.email} required />
        <Button className="newsletter-button" type="submit" disabled={state === 'sending'}>{copy.newsletterSubmit}</Button>
      </div>
      <label className="check-field newsletter-consent">
        <input type="checkbox" name="newsletterConsent" value="yes" required />
        <span>{copy.newsletterConsent} <a href={internalPath(`/${locale}/privacy/`)}>Privacy</a></span>
      </label>
      <input type="hidden" name="doubleOptIn" value="required" />
      {state === 'success' ? <output className="success-text">{copy.newsletterSuccess}</output> : null}
      {state === 'error' ? <output className="error-text">{endpoint ? copy.error : copy.newsletterError}</output> : null}
    </form>
  );
}
