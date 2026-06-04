# Artist Influence — Meta Setup Onboarding

Two client-facing onboarding pages for Artist Influence's Meta Ads service, in one deployable site:

| Page | Route | What it is |
| --- | --- | --- |
| **Standard Setup** | `/` | Walks a client through giving Artist Influence (PatrickReza) admin access to *their own* Facebook Page, Instagram, Ad Account, and Pixel. 8 steps. |
| **Partner Setup** | `/partner/` | The hands-off / agency-hosted route: the client shares assets into Artist Influence's own Business Portfolio and we run everything. |

The two pages cross-link (Standard has a "Partner Setup →" button; Partner has a "← Standard setup flow" link), so they behave like two tabs of the same site. All links are relative, so they keep working on whatever subdomain you host this at.

Live reference (current temporary homes):
- https://metasetupinfluence.vercel.app
- https://partnersetupinfluence.vercel.app

There is **no backend, no forms, no database, no analytics.** Every CTA is a `mailto:`, `sms:`, or `https://` link. Contact address on the page is `reza@artistinfluence.com`.

---

## Stack

- **Next.js 14** (App Router) configured for **static export** (`output: 'export'` in `next.config.mjs`)
- React 18 + TypeScript
- No CSS framework — all styles in `app/globals.css`
- `npm run build` produces a fully static `out/` directory (plain HTML/CSS/JS) you can host anywhere

```
metasetup-influence/
├── app/
│   ├── page.tsx        ← Standard Setup page (all copy + the 8 steps live here)
│   ├── layout.tsx      ← <head>, title, OG/share metadata
│   └── globals.css     ← all styling, colors, fonts
├── public/
│   ├── logo.png        ← used as favicon + OG image + footer mark
│   ├── logo.svg
│   └── partner/
│       └── index.html  ← Partner Setup page (self-contained HTML, inline CSS)
├── next.config.mjs
├── package.json
└── tsconfig.json
```

> **Why is Partner Setup a plain `.html` file?** It's a single self-contained page, so it lives in `public/` as static HTML — no build needed to edit it, and Next.js copies it straight into the export at `/partner/`. The Standard page is a richer React page, so it's a proper Next route.

---

## Run / build locally

```bash
npm install
npm run dev      # http://localhost:3000  (Standard) and /partner/ (Partner)
npm run build    # writes a static ./out/ — deploy that directory anywhere
```

No `npm run start` needed — it's a static export.

---

## Hosting it on a subdomain (recommended: Vercel + auto-deploy)

This is the setup that lets **edits show up live automatically**. One-time setup, ~10 minutes:

1. **Import the repo into Vercel** — vercel.com → *Add New → Project* → pick this GitHub repo. Vercel auto-detects Next.js; accept the defaults and deploy.
2. **Point the subdomain at it** — in the Vercel project → *Settings → Domains*, add e.g. `metasetup.artistinfluence.com`. Vercel shows you one **CNAME** record to add at your DNS provider (the registrar for `artistinfluence.com`). Add it; TLS is issued automatically.
3. **(Optional) Set the canonical URL** — Vercel project → *Settings → Environment Variables* → add `NEXT_PUBLIC_SITE_URL` = `https://metasetup.artistinfluence.com`, then redeploy. This only fixes link-preview (OG) cards; the page works either way.

That's it. Both pages are now live:
- `https://metasetup.artistinfluence.com/` → Standard
- `https://metasetup.artistinfluence.com/partner/` → Partner

### How edits go live after that
Because Vercel is connected to this repo, **every push to `main` triggers an automatic rebuild + deploy** — live in ~1 minute. So:
- Edit a file in the **GitHub web editor** (pencil icon → commit), or push from your machine, and the change publishes itself. No manual deploy step.
- If a build ever fails (e.g. a typo in `page.tsx`), Vercel keeps the previous version live and emails you — nothing breaks publicly.

### Prefer to host on your own server instead?
Run `npm run build` and serve the generated `out/` directory as static files (nginx `root`, Apache `DocumentRoot`, Cloudflare Pages, S3+CloudFront, etc.). Keep `/_next/...` paths intact. The trade-off: to get the "edits show live" behavior you'd need to wire your own rebuild-on-push (a GitHub Action or webhook), which Vercel gives you for free.

---

## Where to edit what

- **Standard page copy, the 8 steps, contact info** → `app/page.tsx`
  - The steps are a `STEPS` array near the top of the file — edit titles, descriptions, checklists there.
  - Contact is `reza@artistinfluence.com` and the SMS number `(310) 430-0739`.
- **Partner page copy** → `public/partner/index.html` (plain HTML, edit text directly)
- **Colors, fonts, spacing (Standard page)** → `app/globals.css`
- **Page title / share-preview text** → `app/layout.tsx`
- **Logo** → `public/logo.png` and `public/logo.svg`

### One deliberate non-typo
`reza@artistinfluence.com` is the public contact. You may also see `patrickreza1@gmail.com` referenced inside Meta-invite *instructions* — that's the literal account a client must invite into their Meta Business, not a contact channel. Leave it as-is.

---

Questions on content: Reza. Questions on the build/deploy: whoever's hosting it.
