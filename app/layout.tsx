import type { Metadata } from 'next';
import fs from 'node:fs';
import path from 'node:path';

// Final public URL of this site. Set NEXT_PUBLIC_SITE_URL in your host (e.g.
// Vercel → Project → Settings → Environment Variables) to the live subdomain,
// e.g. https://ads.artistinfluence.com, then redeploy. This only affects
// link-preview (OG) image/URL resolution, the page works regardless.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://metasetupinfluence.vercel.app';

// Inline the global CSS straight into the page at build time, so the site has
// NO external stylesheet request. This makes it render correctly even when the
// /_next/static asset files are slow, cached-broken, or throttled on a given
// network (the same reason the self-contained /partners page never breaks).
// The `.reveal` override guarantees content is visible even if the client JS
// (scroll-reveal animation) never loads.
const GLOBAL_CSS =
  fs.readFileSync(path.join(process.cwd(), 'app', 'globals.css'), 'utf8') +
  '\n/* always show content even without client JS */\n.reveal{opacity:1!important;transform:none!important}\n';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Meta Ads Onboarding - Artist Influence',
  description:
    'Connect your Facebook Page, Instagram, Ad Account, and Pixel so Artist Influence can launch your campaigns.',
  openGraph: {
    title: 'Meta Ads Onboarding - Artist Influence',
    description:
      'Step-by-step setup so Artist Influence has the access we need to run your Meta Ads campaign.',
    images: ['/logo.png'],
    url: SITE_URL,
    type: 'website',
  },
  icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
