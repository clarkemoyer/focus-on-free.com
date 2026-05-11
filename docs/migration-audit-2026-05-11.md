# focus-on-free.com Migration Audit — 2026-05-11

Issue: https://github.com/clarkemoyer/focus-on-free.com/issues/11

## Scope

Read-only first-pass audit of the live WordPress production site and the current Next.js repository scaffold.

## Live production site

- URL: `https://focus-on-free.com/`
- HTTP status: `200`
- Canonical redirect behavior:
  - `https://focus-on-free.com` resolves successfully.
  - `https://www.focus-on-free.com` redirects to `https://focus-on-free.com/`, but one measured request was slow at ~60 seconds.
- Platform signals: WordPress-era HTML/assets are present.
- Page title: `Focus on Free`
- Meta description: `Your Company's Independent IT Advocate`
- H1: `Focus on Free`
- `https://focus-on-free.com/sitemap.xml`: 404 from server misconfiguration page.
- `https://focus-on-free.com/wp-sitemap.xml`: 404 from server misconfiguration page.
- `https://focus-on-free.com/wp-json/wp/v2/pages`: 404 from server misconfiguration page.
- `https://focus-on-free.com/feed/`: 404 from server misconfiguration page.

## Live homepage internal links discovered

- `/`
- `/technology-consulting/`
- `/location-management/`
- `/reputation-management/`
- `/social-media/`
- `/#Contact-Us`
- `/wp-login.php`

## Live asset hosts discovered

- `focus-on-free.com`
- `fonts.googleapis.com`
- `static.cloudflareinsights.com`
- `unpkg.com`

## Current repository state

- Repo: `clarkemoyer/focus-on-free.com`
- Branch audited: `main`
- Latest commit at audit time: `06bf58e chore: disable template dependabot updates for starter site`
- Current repo description/package intent still says coming soon.
- `src/app/page.tsx` is a minimal coming-soon landing page.
- Build output currently includes:
  - `/`
  - `/cookie-policy`
  - `/donation-policy`
  - `/free-for-charity-donation-policy`
  - `/privacy-policy`
  - `/robots.txt`
  - `/sitemap.xml`
  - `/security-acknowledgements`
  - `/terms-of-service`
  - `/vulnerability-disclosure-policy`
- Static export is configured in `next.config.ts`.
- `src/app/sitemap.ts` and `src/app/robots.ts` still use `https://ffcworkingsite1.org` as the base URL, which is incorrect for this repo/domain.

## Local validation results

After installing dependencies:

- `npm run lint`: passed with 7 warnings.
- `npm test -- --runInBand`: passed, 4 suites / 26 tests.
- `npm run build`: passed, 12 static routes generated.

## Important gap

The repo is technically buildable, but it does not yet represent the live site. The live site is not merely a placeholder; it has at least four service pages and a contact section that need inventory, capture, and migration before any production cutover.

## Recommended next implementation sequence

1. Fix repository metadata artifacts that are unambiguously wrong and safe to correct now:
   - `src/app/sitemap.ts` base URL should be `https://focus-on-free.com`.
   - `src/app/robots.ts` sitemap URL should be `https://focus-on-free.com/sitemap.xml`.
2. Capture live visual baselines:
   - homepage desktop/tablet/mobile
   - `/technology-consulting/`
   - `/location-management/`
   - `/reputation-management/`
   - `/social-media/`
   - contact section
3. Build a content inventory from the live HTML because standard WordPress sitemap/API/feed endpoints return 404.
4. Replace the visible coming-soon homepage with a faithful static Next.js version of the current WordPress homepage.
5. Add matching routes for the four discovered service pages.
6. Add a parity report comparing live WordPress visible text and staging Next.js visible text.
7. Only then prepare DNS/Cloudflare cutover for review.

## Current risk assessment

- High risk: deploying current `main` would replace a real live site with a coming-soon page.
- Medium risk: current live site appears to lack working sitemap/API endpoints, so migration requires HTML crawling/screenshot capture rather than normal WordPress API export.
- Low-risk quick win: correct the Next.js `robots.txt` and `sitemap.xml` base URL in the repo.
