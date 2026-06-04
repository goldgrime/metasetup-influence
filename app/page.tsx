'use client';

import { useEffect } from 'react';

// The two onboarding pages live at /default (standard setup) and /partners
// (agency-hosted). The bare root just forwards to the standard flow so
// ads.artistinfluence.com never lands on a 404.
export default function RootRedirect() {
  useEffect(() => {
    window.location.replace('/default/');
  }, []);

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', color: '#f5f5f5', fontFamily: 'system-ui, sans-serif' }}>
      <p>
        Redirecting to the setup guide. <a href="/default/" style={{ color: '#ff4d4d' }}>Continue</a>
      </p>
    </main>
  );
}
