import { createHash } from 'node:crypto';
import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const outputRoot = join(projectRoot, 'dist');
const basePath = '/course-test-website';
const localePages = ['', 'course', 'curriculum', 'courses', 'schedule', 'about', 'apply', 'contact', 'privacy', 'imprint', 'cookies', 'courses/tech-product-management-ai', 'courses/tech-product-management-ai/curriculum', 'courses/digital-transformation-ai', 'courses/digital-transformation-ai/curriculum'];
const routes = ['de', 'en'].flatMap((locale) => localePages.map((page) => `/${locale}/${page ? `${page}/` : ''}`));
const results = [];

function record(name, passed, evidence) {
  results.push({ name, passed, evidence });
  if (!passed) process.exitCode = 1;
}

function every(...conditions) {
  return conditions.every(Boolean);
}

function contentType(file) {
  const types = {
    '.css': 'text/css',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.pdf': 'application/pdf',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.txt': 'text/plain',
    '.xml': 'text/xml',
  };
  return types[extname(file).toLowerCase()] ?? 'application/octet-stream';
}

function routeFile(pathname) {
  if (!pathname.startsWith(basePath)) return null;
  const relative = decodeURIComponent(pathname.slice(basePath.length)).replace(/^\/+/, '');
  let candidate = join(outputRoot, relative);
  if (pathname.endsWith('/')) candidate = join(candidate, 'index.html');
  if (!extname(candidate)) candidate = join(candidate, 'index.html');
  const safe = normalize(candidate);
  if (!safe.startsWith(normalize(outputRoot))) return null;
  if (!existsSync(safe)) return null;
  if (!statSync(safe).isFile()) return null;
  return safe;
}

const server = createServer((request, response) => {
  const url = new URL(request.url ?? '/', 'http://127.0.0.1');
  const file = routeFile(url.pathname);
  if (!file) {
    const notFound = join(outputRoot, '404.html');
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    createReadStream(notFound).pipe(response);
    return;
  }
  response.writeHead(200, { 'Content-Type': `${contentType(file)}; charset=utf-8` });
  createReadStream(file).pipe(response);
});

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const address = server.address();
if (!address) throw new Error('Test server did not start');
if (typeof address === 'string') throw new Error('Unexpected test server address');
const origin = `http://127.0.0.1:${address.port}`;

async function get(path) {
  return fetch(`${origin}${basePath}${path}`, { redirect: 'manual' });
}

try {
  const routeHtml = new Map();
  for (const route of routes) {
    const response = await get(route);
    const html = await response.text();
    routeHtml.set(route, html);
    record(`HTTP 200 ${route}`, response.status === 200, `status ${response.status}`);
    record(`HTML semantics ${route}`, every(html.includes('id="main-content"'), (html.match(/<h1[ >]/g) ?? []).length === 1), 'one H1 and one main target');
    const locale = route.startsWith('/de/') ? 'de' : 'en';
    record(`Localization metadata ${route}`, every(html.includes(`<html lang="${locale}">`), html.includes(`hreflang="de"`), html.includes(`hreflang="en"`)), `${locale} language and both alternates`);
    record(`GitHub Pages paths ${route}`, every(!html.includes('href="/de/'), !html.includes('href="/en/'), !html.includes('href="/downloads/')), 'all internal paths include repository base');
  }

  const rootResponse = await get('/');
  const rootHtml = await rootResponse.text();
  record('Root locale handoff', every(rootResponse.status === 200, rootHtml.includes('/course-test-website/de/')), 'root points to German home');

  const notFoundResponse = await get('/this-route-does-not-exist/');
  const notFoundHtml = await notFoundResponse.text();
  record('Custom 404', every(notFoundResponse.status === 404, notFoundHtml.includes('Seite nicht gefunden')), `status ${notFoundResponse.status}`);

  const allLinks = new Set();
  for (const html of routeHtml.values()) {
    for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const target = match[1];
      if (target.startsWith(`${basePath}/`)) allLinks.add(target.slice(basePath.length));
    }
  }
  const brokenLinks = [];
  for (const link of allLinks) {
    const response = await get(link);
    if (response.status !== 200) brokenLinks.push(`${link}: ${response.status}`);
  }
  record('Internal link crawl', brokenLinks.length === 0, `${allLinks.size} unique links and assets checked`);

  const germanHome = routeHtml.get('/de/') ?? '';
  const englishHome = routeHtml.get('/en/') ?? '';
  record('Home conversion structure', every(germanHome.includes('Wähle dein Tempo'), germanHome.includes('Für Arbeit, die sich bereits verändert'), germanHome.includes('Neun Phasen'), germanHome.includes('Bewerben')), 'cohorts, rationale, curriculum, and application CTA');
  record('All specified FAQ entries', every((englishHome.match(/<details/g) ?? []).length >= 19, englishHome.includes('Is career support included?'), englishHome.includes('Is an external Scrum or project management certification included?')), 'nine curriculum items and ten FAQ items');
  record('Structured data', every(englishHome.includes('application/ld+json'), englishHome.includes('Organization'), englishHome.includes('Course')), 'Organization and Course schemas');
  record('English teaching language', every(germanHome.includes('Der Unterricht findet auf Englisch statt'), englishHome.includes('Teaching is delivered in English')), 'teaching language appears in both locales');
  record('Cohort placeholders', every(germanHome.includes('5. Okt 2026'), germanHome.includes('2. Nov 2026'), germanHome.includes('30. Nov 2026')), 'all three provisional dates');
  record('Maximum cohort size', every(germanHome.includes('Max. 10 Lernende'), englishHome.includes('Max. 10 learners')), 'maximum ten shown in both locales');

  for (const locale of ['de', 'en']) {
    const course = routeHtml.get(`/${locale}/course/`) ?? '';
    const curriculum = routeHtml.get(`/${locale}/curriculum/`) ?? '';
    const application = routeHtml.get(`/${locale}/apply/`) ?? '';
    const contact = routeHtml.get(`/${locale}/contact/`) ?? '';
    record(`Both course formats ${locale}`, every(course.includes('12 weeks FT'), course.includes('20 weeks PT')), 'full-time and part-time formats');
    record(`Nine curriculum phases ${locale}`, (curriculum.match(/class="phase-detail"/g) ?? []).length === 9, 'nine detailed phase articles');
    record(`Both pacing mappings ${locale}`, (curriculum.match(/class="pace-pair"/g) ?? []).length === 9, 'full-time and part-time mapping for every phase');
    record(`Application fields ${locale}`, every(application.includes('name="email"'), application.includes('name="course"'), application.includes('name="reason"'), application.includes('name="privacyConsent"'), application.includes('name="newsletterConsent"')), 'course-aware application with separate consents');
    record(`Contact form ${locale}`, every(contact.includes('name="email"'), contact.includes('name="message"')), 'email and message inputs');
    record(`Disabled WhatsApp ${locale}`, every(contact.includes('disabled=""'), contact.includes('WhatsApp contact coming soon')), 'disabled control with accessible label');
  }

  for (const locale of ['de', 'en']) {
    const catalog = routeHtml.get(`/${locale}/courses/`) ?? '';
    const schedule = routeHtml.get(`/${locale}/schedule/`) ?? '';
    const product = routeHtml.get(`/${locale}/courses/tech-product-management-ai/`) ?? '';
    const productCurriculum = routeHtml.get(`/${locale}/courses/tech-product-management-ai/curriculum/`) ?? '';
    const transformation = routeHtml.get(`/${locale}/courses/digital-transformation-ai/`) ?? '';
    const transformationCurriculum = routeHtml.get(`/${locale}/courses/digital-transformation-ai/curriculum/`) ?? '';
    record(`Three-course catalog ${locale}`, every(catalog.includes('Tech Product Management with AI assistance'), catalog.includes('Digital Transformation with AI'), catalog.includes('IT Project Management in the World of AI Automations')), 'all three course names present');
    record(`New schedule ${locale}`, every(schedule.includes('18 Jan 2027') || schedule.includes('18. Jan. 2027'), schedule.includes('8 Feb 2027') || schedule.includes('8. Feb. 2027')), 'product and transformation starts present');
    record(`Product course content ${locale}`, every(product.includes('Tech Product Management with AI assistance'), product.includes('14 weeks') || product.includes('14 Wochen')), 'title and duration present');
    record(`Transformation course content ${locale}`, every(transformation.includes('Digital Transformation with AI'), transformation.includes('16 weeks') || transformation.includes('16 Wochen')), 'title and duration present');
    record(`Product curriculum phases ${locale}`, (productCurriculum.match(/class="phase-detail"/g) ?? []).length === 8, 'eight product phases');
    record(`Transformation curriculum phases ${locale}`, (transformationCurriculum.match(/class="phase-detail"/g) ?? []).length === 8, 'eight transformation phases');
  }

  const pdfRoute = '/downloads/the-best-school-it-project-management-curriculum-en-2026-08-28.pdf';
  const pdfResponse = await get(pdfRoute);
  const pdf = Buffer.from(await pdfResponse.arrayBuffer());
  const pdfHash = createHash('sha256').update(pdf).digest('hex').toUpperCase();
  record('Curriculum PDF response', every(pdfResponse.status === 200, (pdfResponse.headers.get('content-type') ?? '').startsWith('application/pdf')), `${pdf.length} bytes`);
  record('Curriculum PDF integrity', every(pdf.subarray(0, 4).toString('ascii') === '%PDF', pdfHash === 'F0E0F7334CCB4FA1C48AAF7E892634B51EE66FEB4CD08A483D3F624B9DD71124'), pdfHash);
  for (const locale of ['de', 'en']) {
    for (const page of ['', 'course', 'curriculum']) {
      const html = routeHtml.get(`/${locale}/${page ? `${page}/` : ''}`) ?? '';
      record(`PDF link ${locale}/${page || 'home'}`, html.includes(pdfRoute), 'versioned curriculum link present');
    }
  }

  const additionalPdfRoutes = [
    '/downloads/the-best-school-tech-product-management-with-ai-assistance-curriculum-en-2026-08-31.pdf',
    '/downloads/the-best-school-digital-transformation-with-ai-curriculum-en-2026-08-31.pdf',
  ];
  for (const route of additionalPdfRoutes) {
    const response = await get(route);
    const data = Buffer.from(await response.arrayBuffer());
    record(`Additional PDF ${route}`, every(response.status === 200, data.subarray(0, 4).toString('ascii') === '%PDF', data.length > 15000), `${data.length} bytes`);
  }

  const sitemapResponse = await get('/sitemap.xml');
  const sitemap = await sitemapResponse.text();
  record('Sitemap route count', (sitemap.match(/<url>/g) ?? []).length === 30, '30 localized URLs');
  const robotsResponse = await get('/robots.txt');
  const robots = await robotsResponse.text();
  record('Robots sitemap reference', robots.includes('https://kongor-co.github.io/course-test-website/sitemap.xml'), 'production sitemap URL');

  const scripts = [...allLinks].filter((link) => link.endsWith('.js'));
  record('No third-party runtime scripts', scripts.every((script) => script.startsWith('/_astro/')), `${scripts.length} local script bundles`);

  const workflow = readFileSync(join(projectRoot, '.github', 'workflows', 'deploy.yml'), 'utf8');
  record('GitHub Pages workflow', every(workflow.includes('actions/checkout@v7'), workflow.includes('withastro/action@v6'), workflow.includes('actions/deploy-pages@v5'), workflow.includes('pages: write'), workflow.includes('id-token: write')), 'official checkout, Astro, and Pages actions with required permissions');

  const sourceText = [...routeHtml.values()].join('\n');
  record('No pricing', !/[€$£]\s?\d|\d\s?(EUR|USD|GBP)/i.test(sourceText), 'no currency prices');
  record('No testimonial claims', !/testimonial|alumni success|hiring rate/i.test(sourceText), 'no testimonial or hiring-rate content');
  record('No public secrets', !/(sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|BEGIN PRIVATE KEY)/.test(sourceText), 'no common secret signatures');
} finally {
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
}

const passed = results.filter((result) => result.passed).length;
const failed = results.length - passed;
for (const result of results) console.log(`${result.passed ? 'PASS' : 'FAIL'} | ${result.name} | ${result.evidence}`);
console.log(`\nFunctional tests: ${passed} passed, ${failed} failed, ${results.length} total.`);
