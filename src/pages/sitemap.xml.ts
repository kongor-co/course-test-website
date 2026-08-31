import type { PageName } from '@/components/static-site-page';
import { locales } from '@/lib/site-content';
import { additionalCourseSlugs } from '@/lib/course-catalog';

const basePath = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');
const pages: Array<PageName | ''> = ['', 'course', 'curriculum', 'courses', 'schedule', 'about', 'apply', 'contact', 'privacy', 'imprint', 'cookies'];
const coursePages = additionalCourseSlugs.flatMap((slug) => [`courses/${slug}`, `courses/${slug}/curriculum`]);

export function GET({ site }: { site: URL }) {
  const entries = locales.flatMap((locale) => [...pages, ...coursePages].map((page) => {
    const suffix = page ? `${page}/` : '';
    const location = new URL(`${basePath}/${locale}/${suffix}`, site);
    return `<url><loc>${location}</loc><lastmod>2026-08-31</lastmod></url>`;
  })).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
