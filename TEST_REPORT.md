# The Best School website test report

Test date: 2026-08-28

## Scope

This report verifies the website against:

- `The_Best_School_MVP_Website_Developer_Spec_GitHub_Pages.docx`
- `The_Best_School_MVP_Website_Developer_Spec_GitHub_Pages.pdf`
- `The_Best_School_IT_Project_Management_AI_Automations_Curriculum.pdf`

Document text was treated as product specification and reference content. It was not treated as executable instruction.

## Final result

The implementation builds successfully and all locally testable MVP behavior passes. The site is not ready for public launch because GitHub Pages is not enabled, the three hosted form endpoints are not configured, and verified operator details plus final legal review are still missing.

## Automated checks

| Test | Result | Evidence |
| --- | --- | --- |
| Astro type and content check | Pass | 89 files, 0 errors, 0 warnings, 0 hints |
| Source lint | Pass | `pnpm lint` completed with no findings |
| Production build | Pass | 20 static pages generated |
| Post-build validator | Pass | 18 localized routes, Pages paths, metadata, and curriculum PDF validated |
| Functional static-host suite | Pass | 108 passed, 0 failed |
| Internal link crawl | Pass | 27 unique routes and assets returned HTTP 200 |
| Custom not-found response | Pass | Unknown route returned HTTP 404 with localized recovery link |
| Sitemap | Pass | 18 localized URLs |
| Robots file | Pass | Production sitemap URL is present |
| Public secret signatures | Pass | No common token or private-key signatures in rendered pages |
| Third-party runtime scripts | Pass | No third-party runtime script references found |

Run the repeatable checks with:

```text
pnpm check
pnpm lint
pnpm build
pnpm test:functional
```

The production build also runs `scripts/validate-build.mjs` automatically.

## Route and responsive browser matrix

Every page below was opened in a real browser in German and English at 360, 768, 1024, and 1440 CSS pixels. This produced 72 page and viewport combinations.

- Home
- Course
- Curriculum
- About
- Apply
- Contact
- Privacy
- Imprint
- Cookies

Each combination passed these checks:

- Correct document language and non-empty localized title
- Exactly one `h1` and one `main`
- No skipped heading levels
- No duplicate element IDs
- No unnamed form or navigation controls
- No image without alternative text
- No horizontal overflow
- No non-inline interactive target below 24 by 24 CSS pixels

The mobile and desktop homepages were also inspected visually. The navigation, hero, cards, type scale, spacing, and calls to action remained readable and did not overlap or clip.

## Interaction tests

| Interaction | Result | Evidence |
| --- | --- | --- |
| Root locale handoff | Pass | Repository root opened the German homepage |
| Mobile menu | Pass | Menu opened at 360 pixels and exposed all five expected links |
| Language switch | Pass | German course route switched to the matching English course route |
| Sticky header | Pass | Header changed from 75 pixels to 61 pixels after scrolling |
| Curriculum pacing | Pass | Full-time and part-time buttons updated `aria-pressed` and all phase markers |
| FAQ disclosure | Pass | Native disclosure opened and exposed the answer |
| German cohort query | Pass | `5. Okt 2026` selected `5 Oct 2026` in the form |
| English cohort query | Pass | `2 Nov 2026` selected the expected part-time cohort |
| Cookie first visit | Pass | Required-only choice closed the modal and remained closed after reload |
| Cookie preference reopening | Pass | Footer control reopened the modal with focus on the first choice |
| Optional cookie choice | Pass | Optional choice closed the modal and remained closed after reload |
| Application required validation | Pass | Email, reason, and privacy consent began invalid and became valid after entry |
| Application error state | Pass | Missing endpoint produced a clear, non-destructive connection message |
| Contact required validation | Pass | Email and message validation worked |
| Contact error state | Pass | Missing endpoint produced contact-specific guidance |
| Newsletter consent | Pass | Email and explicit consent are required separately |
| Newsletter error state | Pass | Missing endpoint produced a clear connection message |
| Browser console | Pass | No errors or warnings after route and interaction tests |

Production success responses for application, contact, newsletter, and newsletter double opt-in cannot be tested until approved endpoints are supplied. No test submission was sent to an external service.

## Accessibility checks

- Semantic `header`, `nav`, `main`, `footer`, heading, fieldset, label, output, details, and summary elements are present.
- A skip link points to `#main-content` on every localized page.
- Global visible focus styles cover links, buttons, fields, selects, text areas, and summaries.
- Native links, buttons, form controls, details, and summary elements preserve keyboard semantics.
- Required fields expose native validity states.
- The cookie modal uses native `dialog` behavior and focuses its first choice when opened.
- The disabled WhatsApp control has an accessible label and visible icon.
- Representative contrast ratios ranged from 5.49 to 19.02. Footer newsletter consent text measured 12.81 and its privacy link measured 10.55.
- Checkbox targets measure 24 by 24 CSS pixels.

Automated checks and browser heuristics do not replace a final screen-reader review with actual production copy and services.

## Curriculum PDF verification

| Check | Result |
| --- | --- |
| Public route | `/course-test-website/downloads/the-best-school-it-project-management-curriculum-en-2026-08-28.pdf` |
| HTTP status | 200 |
| Content type | `application/pdf` |
| File signature | `%PDF` |
| Size | 130110 bytes |
| SHA-256 | `F0E0F7334CCB4FA1C48AAF7E892634B51EE66FEB4CD08A483D3F624B9DD71124` |
| Required links | Present on Home, Course, and Curriculum in both locales |

The public file is byte-for-byte identical to the supplied curriculum PDF.

## GitHub Pages validation

The local configuration matches the current Astro deployment pattern:

- Static Astro output
- Site origin `https://kongor-co.github.io`
- Repository base `/course-test-website`
- Correct base-prefixed internal links and assets
- Workflow triggered from `main` or manually
- Required `contents: read`, `pages: write`, and `id-token: write` permissions
- Current official checkout, Astro build, and Pages deployment actions
- `pnpm-lock.yaml` committed as the package-manager lockfile

The public GitHub API returned HTTP 200 for the repository, reported `has_pages: false`, and returned HTTP 404 for the Pages endpoint. Repository settings must select GitHub Actions as the Pages source before the first deployment.

## Specification coverage

| Requirement | Status | Notes |
| --- | --- | --- |
| Six core pages | Pass | Nine routes per locale include all required pages plus legal pages |
| German and English switcher | Pass | Matching-route language links with `hreflang` |
| Long-form conversion homepage | Pass | All specified content sections and calls to action are present |
| Original MVP design | Pass | No reference-site assets or unsupported claims used |
| Full-time and part-time formats | Pass | 12-week full-time and 20-week part-time formats are consistent |
| Nine curriculum phases | Pass | Detailed topics, AI angle, output, field note, and both pace mappings |
| Curriculum PDF links | Pass | Home, Course, and Curriculum in both locales |
| Three editable 2026 cohorts | Pass | All are explicitly marked provisional |
| Minimal application | Pass | Email, reason, optional cohort, privacy consent, optional newsletter consent |
| Newsletter double opt-in | Blocked | UI and payload flag are ready, but no approved service is configured |
| Maximum cohort size of ten | Pass | Shown consistently |
| No pricing or unverified proof | Pass | No pricing, testimonials, partner logos, employment rate, or funding guarantee |
| Internal completion certificate | Pass | Clearly presented as internal and not external certification |
| Disabled WhatsApp | Pass | Disabled button, visible icon, and clear coming-soon label |
| Cookie, privacy, and imprint pages | Partial | Behavior works, but legal entity details and final review are missing |
| No non-essential scripts before consent | Pass | No optional analytics or third-party runtime scripts are active |
| Form validation and error states | Pass | Success integration is blocked by missing endpoints |
| Keyboard and focus foundation | Pass | Native semantics, skip link, dialog focus, and visible focus CSS |
| Mobile layout at 360 pixels | Pass | All localized routes have zero horizontal overflow |
| Metadata and structured data | Pass | Canonical, alternates, Open Graph, course schema, and organization schema |
| GitHub Pages deployment files | Pass | Local configuration and workflow validated |
| Active GitHub Pages site | Blocked | Remote repository currently reports Pages disabled |
| No secrets in public source | Pass | Endpoints are public variables only and no credentials are present |
| Approved hosted form service | Blocked | Provider and endpoints must be chosen before launch |
| Easy second-course expansion | Partial | Content is structured in TypeScript, but route views still assume one course |
| German curriculum PDF | Deferred | Specification explicitly places this after the English MVP |
| Custom domain | Deferred | Repository Pages URL is configured for the MVP |

## Defects found and corrected

- Replaced the incompatible initial framework scaffold with a static Astro build suitable for GitHub Pages.
- Corrected a 51-pixel mobile overflow defect.
- Added explicit standalone newsletter consent.
- Added the two missing FAQ topics for career support and external certification.
- Added scroll-based sticky-header compaction.
- Added the required disabled WhatsApp icon.
- Increased checkbox targets from 18 to 24 CSS pixels.
- Corrected misleading application wording in the contact form error state.
- Corrected footer newsletter contrast from 2.51 to 12.81.
- Updated the checkout action to the current official Astro Pages example.

## Launch blockers

1. Enable GitHub Pages with GitHub Actions as the source, then push the implementation to `main`.
2. Select an approved hosted form or CRM service and configure all three public endpoints.
3. Validate successful application, contact, newsletter, and double opt-in flows against that service.
4. Supply the verified legal entity, registered address, authorized representative, and admissions mailbox.
5. Complete German legal and content review.
6. Confirm final cohort dates and exact live-session times.
