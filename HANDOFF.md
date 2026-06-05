# Handoff — Artist Influence: Meta Onboarding + Proposal Generator

**Status: both apps are built, deployed to Vercel (Reza's team), and live on their `.vercel.app` URLs. The custom domains are attached and waiting only on DNS.**

## The two projects

### 1. Meta Ads onboarding
- Repo: `github.com/goldgrime/metasetup-influence`
- Vercel project: `metasetup-influence` (team `rezas-projects-68014b38`)
- Live now: https://metasetup-influence.vercel.app
- Target: **ads.artistinfluence.com** — `/default` = standard setup, `/partners` = partner setup, `/` redirects to `/default`
- Next.js static export, no env vars required.

### 2. Proposal generator (sales team)
- Repo: `github.com/goldgrime/ai-proposal-generator`
- Vercel project: `ai-proposal-generator` (same team)
- Live now: https://ai-proposal-generator-bay-eight.vercel.app
- Targets: **generator.artistinfluence.com** (the app) + **proposal.artistinfluence.com/&lt;slug&gt;** (each saved proposal; `middleware.ts` rewrites `/<slug>` → `/p/<slug>`)
- Env vars set on the project: `BLOB_READ_WRITE_TOKEN`, `SPOTIFY_CLIENT_ID/SECRET`, `NEXT_PUBLIC_PROPOSAL_BASE_URL=https://proposal.artistinfluence.com`. The Anthropic key is per-user (pasted in the app UI), not a server var.

## What's left

### ☐ DNS — makes the custom domains live  *(Corbin)*
Tracked in issues: `metasetup-influence#1` and `ai-proposal-generator#1`.
In Cloudflare (`artistinfluence.com` zone → DNS → Records), add 3 CNAMEs, all **DNS only (grey cloud, not proxied):**

| Type | Name | Content |
|---|---|---|
| CNAME | `ads` | `cname.vercel-dns.com` |
| CNAME | `generator` | `cname.vercel-dns.com` |
| CNAME | `proposal` | `cname.vercel-dns.com` |

TXT fallback (Name `_vercel`) only if Vercel still shows "unverified" after ~15 min:
```
vc-domain-verify=ads.artistinfluence.com,3ff0a34a2507aaf8188f
vc-domain-verify=generator.artistinfluence.com,fc910daa8f884ab78082
vc-domain-verify=proposal.artistinfluence.com,54ec712c7b1bb811db02
```

### ☐ Auto-deploy — so pushes publish automatically
Both projects are CLI-deployed, not yet git-connected. To enable: in Vercel add a GitHub Login Connection, then each project → Settings → Git → connect its repo. Until then, deploy manually: `vercel --prod --scope rezas-projects-68014b38` from the repo.

### ☐ Anthropic keys — so the generator can generate
Each salesperson (e.g. Jared) pastes a key from the team Anthropic account (console.anthropic.com) into the generator's in-app "API Key" panel. No code change.

## Access
- GitHub: invited as a collaborator (write) on both repos.
- Vercel: you'll need access to team `rezas-projects-68014b38` to manage deploys/domains.
- The old `metasetupinfluence` / `partnersetupinfluence` Vercel projects are superseded by `metasetup-influence` and can be retired.

## Editing
Edit the source and push to `main`. Once auto-deploy is connected it publishes in ~1 min; until then run `vercel --prod --scope rezas-projects-68014b38`. Build and route details are in each repo's `README.md`.
