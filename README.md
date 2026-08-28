# The Best School website

Static bilingual website for the course “IT Project Management in the World of AI Automations”. The implementation uses Astro, React islands, and GitHub Pages.

## Local development

Requirements: Node.js 22.13 or newer and pnpm.

```text
pnpm install
pnpm dev
```

The configured local path is `http://localhost:4321/course-test-website/`.

## Validation

```text
pnpm check
pnpm lint
pnpm build
pnpm test:functional
```

The production build automatically validates all 18 localized routes, GitHub Pages base paths, metadata, required static files, and the curriculum PDF signature and hash.

See `TEST_REPORT.md` for the complete route matrix, browser interactions, accessibility checks, specification coverage, and launch blockers.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and publishes the site after a push to `main`. In the GitHub repository settings, set Pages source to GitHub Actions before the first deployment.

The temporary production URL is `https://kongor-co.github.io/course-test-website/`. When a custom domain is available, update `SITE_URL`, set `BASE_PATH` to an empty value, add the verified `CNAME` file, and configure the same domain in GitHub Pages settings.

## Required launch configuration

Copy `.env.example` to `.env` and configure reviewed public form endpoints. Never place private credentials in public environment variables.

The application, contact, and newsletter forms deliberately show a connection message until these values are supplied:

- `PUBLIC_APPLICATION_ENDPOINT`
- `PUBLIC_CONTACT_ENDPOINT`
- `PUBLIC_NEWSLETTER_ENDPOINT`

Verified operator details, the admissions mailbox, and final legal review are also required before a public production launch.
