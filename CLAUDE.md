# 180 Degrees Consulting @ UCI website

Next.js 15 (app router) + Tailwind v4 + React 19. Live at 180dc-uci.org.

## Design system (src/app/globals.css)
- Tokens: ink #0C120E, forest #16302A, brand #8FD400, brand-deep #5A8F00, fog #F2F5F1, line #DCE3DA, slate #5B665E. Use these, never Tailwind gray-* defaults.
- Type: Inter Tight for display (class `.display`) and Manrope for body, loaded with next/font in src/app/layout.tsx. The font CSS variables live on `<html>`, not `<body>`; keep it that way or Tailwind's `:root` theme can't see them.
- Building blocks: `.eyebrow` (small tracked label above every section title), `.pill` + `.pill-brand / .pill-ink / .pill-ghost / .pill-line / .pill-white` (the only button style), `.duo` (green photo treatment, page headers only), `.marquee` + `.mask-x`, `.client-logo` (grayscale to color on hover).
- Shared components: `components/ui/PageHeader.tsx` (dark header for every inner page), `components/ui/SectionHead.tsx` (eyebrow + title + optional aside), `components/layout/Navbar.tsx` (floating pill, aligned to the content container), `components/layout/Footer.tsx`.
- Copy lives in `src/data/homeData.ts` and `src/data/siteData.ts`. Edit words there, not in JSX.

## Rules
- Hero titles and descriptions are plain and professional. No taglines, no cleverness.
- Photos are full color except page headers. No tint on team portraits or collages.
- Team portraits are all the same size (fixed-width cards, flex-wrap, centered short rows).
- Nav is Services, Team, Join, and a "Work with us" button to /contact. Case Competition is not in the nav.
- Home stays broad (who we are, a slim stats ledger, CTA). Service detail belongs on /services. The recruiting FAQ lives at /join-us/faq, linked from the Join timeline.
- Section headings in Title Case ("Executive Board", "Engagement Managers", "Operations & Technology").
- Bullets, boxes, and icon-card grids are the last resort; prefer hairline ledgers, plain type, and whitespace.

## Data hooks
- `CYCLE` in siteData.ts controls the Join page: set the label each cycle and `open: true` when applications are live.
- Team page: set `NEXT_PUBLIC_TEAM_EMBED_URL` to an Airtable "Embed this view" URL to replace the CSV grid with the embed. Unset = Google Sheet CSV grid.
- Client logos: /public/images/clients (transparent webp). Alumni logos: /public/images/logos. Featured lists are in siteData.ts.

## Known leftovers
- Logo: `/images/logo.webp` is white-on-transparent (navbar, on dark). `/images/logo-dark.webp` is the same art with the wordmark recoloured to ink and the green globe kept, used by the footer on light.
- Confirm the homepage numbers: 48 clients (count of logo files), 5k+ hours (carried from old site).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
