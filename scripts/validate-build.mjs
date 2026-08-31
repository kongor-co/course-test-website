import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const locales = ['de', 'en'];
const pages = ['', 'course', 'curriculum', 'courses', 'schedule', 'about', 'apply', 'contact', 'privacy', 'imprint', 'cookies'];
const coursePages = [
  'courses/tech-product-management-ai',
  'courses/tech-product-management-ai/curriculum',
  'courses/digital-transformation-ai',
  'courses/digital-transformation-ai/curriculum',
];
const failures = [];

function fail(message) {
  failures.push(message);
}

for (const locale of locales) {
  for (const page of [...pages, ...coursePages]) {
    const file = join(outputDirectory, locale, page, 'index.html');
    if (!existsSync(file)) {
      fail(`Missing route: /${locale}/${page}`);
      continue;
    }
    const html = readFileSync(file, 'utf8');
    if (!html.includes(`<html lang="${locale}">`)) fail(`Incorrect language metadata: /${locale}/${page}`);
    if (!html.includes('id="main-content"')) fail(`Missing main-content target: /${locale}/${page}`);
    if (!html.includes('https://kongor-co.github.io/course-test-website/')) fail(`Missing Pages canonical URL: /${locale}/${page}`);
    if (html.includes('href="/de/')) fail(`Unprefixed German link: /${locale}/${page}`);
    if (html.includes('href="/en/')) fail(`Unprefixed English link: /${locale}/${page}`);
    if (html.includes('href="/downloads/')) fail(`Unprefixed download link: /${locale}/${page}`);
  }
}

for (const file of ['index.html', '404.html', 'robots.txt', 'sitemap.xml']) {
  if (!existsSync(join(outputDirectory, file))) fail(`Missing build artifact: ${file}`);
}

const pdfPath = join(outputDirectory, 'downloads', 'the-best-school-it-project-management-curriculum-en-2026-08-28.pdf');
if (!existsSync(pdfPath)) {
  fail('Missing curriculum PDF');
} else {
  const pdf = readFileSync(pdfPath);
  const signature = pdf.subarray(0, 4).toString('ascii');
  const hash = createHash('sha256').update(pdf).digest('hex').toUpperCase();
  if (signature !== '%PDF') fail('Curriculum file is not a PDF');
  if (hash !== 'F0E0F7334CCB4FA1C48AAF7E892634B51EE66FEB4CD08A483D3F624B9DD71124') fail('Curriculum PDF hash changed unexpectedly');
}

const additionalPdfs = [
  'the-best-school-tech-product-management-with-ai-assistance-curriculum-en-2026-08-31.pdf',
  'the-best-school-digital-transformation-with-ai-curriculum-en-2026-08-31.pdf',
];
for (const filename of additionalPdfs) {
  const file = join(outputDirectory, 'downloads', filename);
  if (!existsSync(file)) {
    fail(`Missing additional curriculum PDF: ${filename}`);
    continue;
  }
  const pdf = readFileSync(file);
  if (pdf.subarray(0, 4).toString('ascii') !== '%PDF') fail(`Invalid additional curriculum PDF: ${filename}`);
  if (pdf.length < 15000) fail(`Additional curriculum PDF is unexpectedly small: ${filename}`);
}

if (failures.length > 0) {
  for (const failure of failures) console.error(failure);
  process.exitCode = 1;
} else {
  console.log('Validated 30 localized routes, Pages paths, metadata, and three curriculum PDFs.');
}
