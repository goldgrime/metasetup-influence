import type { Metadata } from 'next';
import './globals.css';

// Final public URL of this site. Set NEXT_PUBLIC_SITE_URL in your host (e.g.
// Vercel → Project → Settings → Environment Variables) to the live subdomain,
// e.g. https://metasetup.artistinfluence.com, then redeploy. This only affects
// link-preview (OG) image/URL resolution — the page works regardless.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://metasetupinfluence.vercel.app';

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
      <body>{children}</body>
    </html>
  );
}
