import type { Locale } from '@/lib/site-content';
import type { ReactNode } from 'react';
import { CookiePreferences } from './cookie-preferences';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

export function PageShell({ locale, path = '', children }: { locale: Locale; path?: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader locale={locale} path={path} />
      {children}
      <SiteFooter locale={locale} path={path} />
      <CookiePreferences locale={locale} />
    </>
  );
}
