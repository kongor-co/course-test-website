const configuredBase = import.meta.env.BASE_URL;
const basePath = configuredBase === '/' ? '' : configuredBase.replace(/\/$/, '');

export function internalPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export function curriculumPdfPath(): string {
  return internalPath('/downloads/the-best-school-it-project-management-curriculum-en-2026-08-28.pdf');
}
