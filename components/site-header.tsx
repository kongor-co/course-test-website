'use client';

import type { Locale } from '@/lib/site-content';
import { previewContent } from '@/lib/site-content';
import { internalPath } from '@/lib/routes';
import { useEffect, useState } from 'react';

export function SiteHeader({ locale, path = '' }: { locale: Locale; path?: string }) {
  const content = previewContent[locale];
  const otherLocale = locale === 'de' ? 'en' : 'de';
  const normalized = path ? `/${path}` : '';
  const navigationLabel = locale === 'de' ? 'Hauptnavigation' : 'Primary navigation';
  const mobileNavigationLabel = locale === 'de' ? 'Mobile Navigation' : 'Mobile navigation';
  const menuLabel = locale === 'de' ? 'Navigation öffnen' : 'Open navigation';
  const homeLabel = locale === 'de' ? 'Startseite von The Best School' : 'The Best School home';
  const [compact, setCompact] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.scrollY > 24;
  });

  useEffect(() => {
    const updateHeader = () => setCompact(window.scrollY > 24);
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return (
    <header className={compact ? 'site-header compact' : 'site-header'}>
      <a className="skip-link" href="#main-content">{locale === 'de' ? 'Zum Inhalt springen' : 'Skip to content'}</a>
      <div className="header-inner">
        <a className="wordmark" href={internalPath(`/${locale}/`)} aria-label={homeLabel}>
          <span className="wordmark-mark">TBS</span>
          <span>The Best School</span>
        </a>
        <nav className="main-nav" aria-label={navigationLabel}>
          <a href={internalPath(`/${locale}/courses/`)}>{content.nav.course}</a>
          <a href={internalPath(`/${locale}/schedule/`)}>{content.nav.schedule}</a>
          <a href={internalPath(`/${locale}/about/`)}>{content.nav.about}</a>
          <a href={internalPath(`/${locale}/contact/`)}>{content.nav.contact}</a>
        </nav>
        <div className="header-actions">
          <a className="language-link" href={internalPath(`/${otherLocale}${normalized}/`)} hrefLang={otherLocale} lang={otherLocale}>
            {otherLocale.toUpperCase()}
          </a>
          <a className="button" href={internalPath(`/${locale}/apply/`)}>
            {content.nav.apply}
          </a>
          <details className="mobile-menu">
            <summary aria-label={menuLabel}>Menu</summary>
            <nav aria-label={mobileNavigationLabel}>
              <a href={internalPath(`/${locale}/courses/`)}>{content.nav.course}</a>
              <a href={internalPath(`/${locale}/schedule/`)}>{content.nav.schedule}</a>
              <a href={internalPath(`/${locale}/about/`)}>{content.nav.about}</a>
              <a href={internalPath(`/${locale}/contact/`)}>{content.nav.contact}</a>
              <a href={internalPath(`/${otherLocale}${normalized}/`)} hrefLang={otherLocale} lang={otherLocale}>{otherLocale.toUpperCase()}</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
