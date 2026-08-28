'use client';

import type { Locale } from '@/lib/site-content';
import { previewContent } from '@/lib/site-content';
import { internalPath } from '@/lib/routes';
import { MessageCircle } from 'lucide-react';
import { NewsletterForm } from './forms';

export function SiteFooter({ locale, path = '' }: { locale: Locale; path?: string }) {
  const nav = previewContent[locale].nav;
  const other = locale === 'de' ? 'en' : 'de';
  const normalized = path ? `/${path}` : '';
  const text = locale === 'de'
    ? { legal: 'Rechtliches', privacy: 'Datenschutz', imprint: 'Impressum', cookies: 'Cookies verwalten', courseNote: 'Der Unterricht findet auf Englisch statt.', whatsapp: 'WhatsApp Kontakt folgt bald' }
    : { legal: 'Legal', privacy: 'Privacy', imprint: 'Imprint', cookies: 'Manage cookies', courseNote: 'Teaching is delivered in English.', whatsapp: 'WhatsApp contact coming soon' };

  function openCookies() {
    document.dispatchEvent(new Event('open-cookie-preferences'));
  }

  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid">
        <div>
          <a className="wordmark footer-wordmark" href={internalPath(`/${locale}/`)}>
            <span className="wordmark-mark">TBS</span>
            <span>The Best School</span>
          </a>
          <p className="footer-statement">Practical education for work that keeps changing.</p>
          <p className="footer-note">{text.courseNote}</p>
          <button className="whatsapp-disabled" type="button" disabled aria-label={text.whatsapp}><MessageCircle aria-hidden="true" size={14} />WhatsApp · {text.whatsapp}</button>
        </div>
        <div className="footer-links">
          <strong>Explore</strong>
          <a href={internalPath(`/${locale}/course/`)}>{nav.course}</a>
          <a href={internalPath(`/${locale}/curriculum/`)}>{nav.curriculum}</a>
          <a href={internalPath(`/${locale}/about/`)}>{nav.about}</a>
          <a href={internalPath(`/${locale}/apply/`)}>{nav.apply}</a>
          <a href={internalPath(`/${locale}/contact/`)}>{nav.contact}</a>
        </div>
        <div className="footer-links">
          <strong>{text.legal}</strong>
          <a href={internalPath(`/${locale}/privacy/`)}>{text.privacy}</a>
          <a href={internalPath(`/${locale}/imprint/`)}>{text.imprint}</a>
          <a href={internalPath(`/${locale}/cookies/`)}>Cookies</a>
          <button type="button" onClick={openCookies}>{text.cookies}</button>
          <a href={internalPath(`/${other}${normalized}/`)} hrefLang={other} lang={other}>{other.toUpperCase()}</a>
        </div>
        <NewsletterForm locale={locale} />
      </div>
      <div className="section-inner footer-bottom">
        <span>© 2026 The Best School</span>
        <span>Remote · Germany-focused · International applicants welcome</span>
      </div>
    </footer>
  );
}
