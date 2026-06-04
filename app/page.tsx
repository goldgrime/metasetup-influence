'use client';

import { useEffect, useRef } from 'react';

type Brand = 'meta' | 'facebook' | 'instagram';

function BrandMark({ brand }: { brand: Brand }) {
  if (brand === 'meta') {
    // Meta infinity logomark (gradient from #0064E0 → #0082FB → #00C6FF)
    return (
      <svg className="brand-icon" viewBox="0 0 36 24" aria-label="Meta" role="img">
        <defs>
          <linearGradient id="meta-g" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0064E0" />
            <stop offset="50%" stopColor="#0082FB" />
            <stop offset="100%" stopColor="#00C6FF" />
          </linearGradient>
        </defs>
        <path
          fill="url(#meta-g)"
          d="M9.4 2.2C5.6 2.2 2.5 5.5 2.5 12s3 9.8 6.7 9.8c2.3 0 3.9-1.1 6.6-5.6l1.9-3.2c.7 1.2 1.3 2.2 1.9 3.2 2.7 4.5 4.3 5.6 6.6 5.6 3.7 0 6.7-3.3 6.7-9.8s-3.1-9.8-6.9-9.8c-2.3 0-4 1.6-5.7 4.2-.5-.7-1-1.4-1.5-2.1C16.2 2.6 14.6 2.2 13 2.2c-1.1 0-2.4.4-3.6 0zm.7 3.4c1 0 2 .5 3 1.4-1.2 1.6-2.4 3.6-3.7 5.7-1.5 2.5-2.3 3.7-3 3.7-1 0-1.7-1.4-1.7-4.2 0-3.9 1.6-6.6 5.4-6.6zm15.2 0c3.7 0 5.5 2.7 5.5 6.6 0 2.8-.7 4.2-1.7 4.2-.7 0-1.4-1.2-2.9-3.7l-3.7-5.7c1-.9 2-1.4 2.8-1.4z"
        />
      </svg>
    );
  }
  if (brand === 'facebook') {
    return (
      <svg className="brand-icon" viewBox="0 0 24 24" aria-label="Facebook" role="img">
        <path
          fill="#1877F2"
          d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.017 1.792-4.683 4.532-4.683 1.312 0 2.686.235 2.686.235v2.971h-1.514c-1.49 0-1.955.93-1.955 1.886v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
        />
      </svg>
    );
  }
  // instagram - gradient camera
  return (
    <svg className="brand-icon" viewBox="0 0 24 24" aria-label="Instagram" role="img">
      <defs>
        <radialGradient id="ig-g" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#FFDD55" />
          <stop offset="10%" stopColor="#FFDD55" />
          <stop offset="50%" stopColor="#FF543E" />
          <stop offset="100%" stopColor="#C837AB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#ig-g)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="#fff" />
    </svg>
  );
}

const STEPS: Array<{
  num: string;
  tag: string;
  brand?: Brand;
  title: React.ReactNode;
  desc: React.ReactNode;
  pathParts?: Array<{ label: string; href?: string; isStart?: boolean }>;
  checklist?: React.ReactNode[];
  callout?: React.ReactNode;
  body?: React.ReactNode;
}> = [
  {
    num: '01',
    tag: 'Access / Admin',
    brand: 'meta',
    title: (
      <>
        Add <em>PatrickReza</em> to your Business Portfolio
      </>
    ),
    desc: (
      <>
        Open your Meta Business Settings and invite us as a user. We need <strong>Full Control / Admin</strong> access
        so we can attach the Page, IG, ad account, and pixel to your campaign without bouncing back to you for
        permissions.
      </>
    ),
    pathParts: [
      { label: 'business.facebook.com/settings', href: 'https://business.facebook.com/settings', isStart: true },
      { label: 'Users' },
      { label: 'People' },
      { label: 'Invite People' },
    ],
    checklist: [
      <>Invite <code>reza@artistinfluence.com</code> as a user</>,
      <>Grant <strong>Full Control / Admin</strong> access where available</>,
      <>Assign access to: <strong>Facebook Page</strong>, <strong>Instagram Account</strong>, <strong>Ad Account</strong>, <strong>Pixel / Dataset</strong>, <strong>Catalog</strong> (if applicable), and any other business assets connected to the campaign</>,
    ],
    callout: (
      <>
        <strong>Heads up:</strong> Meta now requires the inviter to have <strong>two-factor authentication</strong> turned on
        before any new user can be added. If the invite button is greyed out, that&rsquo;s why, enable 2FA in
        Accounts Center first.
      </>
    ),
  },
  {
    num: '02',
    tag: 'Facebook Page',
    brand: 'facebook',
    title: (
      <>
        Make sure your <em>Facebook Page</em> is connected
      </>
    ),
    desc: (
      <>
        Ads need to run under your artist / brand identity, not under another Page or under Artist Influence. Confirm
        your official Page is attached to the Business Portfolio.
      </>
    ),
    pathParts: [
      { label: 'Business Settings', href: 'https://business.facebook.com/settings', isStart: true },
      { label: 'Accounts' },
      { label: 'Pages' },
    ],
    checklist: [
      <>Confirm your official artist / brand Page is listed</>,
      <>If not: <strong>Add → Add a Page</strong> (you own it) <em>or</em> <strong>Request Access to a Page</strong> (someone else does)</>,
      <>If you requested access, approve the request from the Page admin side</>,
    ],
  },
  {
    num: '03',
    tag: 'Instagram',
    brand: 'instagram',
    title: (
      <>
        Make sure your <em>Instagram</em> is connected
      </>
    ),
    desc: (
      <>
        Connect the IG account to the same Business Portfolio so we can run ads, reply to comments, and pull post
        engagement audiences.
      </>
    ),
    pathParts: [
      { label: 'Business Settings', href: 'https://business.facebook.com/settings', isStart: true },
      { label: 'Accounts' },
      { label: 'Instagram Accounts' },
      { label: 'Add → Connect your Instagram account' },
    ],
    checklist: [
      <>Log in to the correct Instagram account</>,
      <>Assign PatrickReza (<code>reza@artistinfluence.com</code>) access to the IG account</>,
      <>Confirm the IG is linked to the correct Facebook Page via <strong>Instagram app → Settings &amp; Privacy → Accounts Center → Connected Experiences</strong>, or in <strong>Meta Business Suite → Settings → Instagram</strong></>,
    ],
  },
  {
    num: '04',
    tag: 'Page + IG Link',
    title: (
      <>
        Confirm the <em>Facebook Page</em> and <em>Instagram</em> are linked
      </>
    ),
    desc: (
      <>
        If the Page and IG aren&rsquo;t formally linked, Meta will block ads from running under your correct identity
       , or worse, run them with the wrong handle.
      </>
    ),
    pathParts: [
      { label: 'Meta Business Suite', href: 'https://business.facebook.com/', isStart: true },
      { label: 'Settings' },
      { label: 'Business Assets' },
    ],
    checklist: [
      <>Click the Facebook Page</>,
      <>Confirm the Instagram account is shown as connected</>,
      <>If not, link them through Accounts Center on the IG side</>,
    ],
  },
  {
    num: '05',
    tag: 'Ad Account',
    brand: 'meta',
    title: (
      <>
        Add or confirm the <em>Ad Account</em>
      </>
    ),
    desc: (
      <>
        This is the wallet that pays for ads and where every campaign, audience, and report lives. Make sure the
        right one is in the Business Portfolio and that we have permission to operate it.
      </>
    ),
    pathParts: [
      { label: 'Business Settings', href: 'https://business.facebook.com/settings', isStart: true },
      { label: 'Accounts' },
      { label: 'Ad Accounts' },
    ],
    checklist: [
      <>Confirm the correct ad account is listed, or <strong>Add → Add an Ad Account</strong> / <strong>Create a New Ad Account</strong></>,
      <>Assign PatrickReza <strong>Admin</strong> access on the ad account (full control: manage campaigns, view performance, manage pixels / datasets, and create ads)</>,
      <>Verify the payment method is attached and active</>,
    ],
  },
  {
    num: '06',
    tag: 'Pixel / Dataset',
    brand: 'meta',
    title: (
      <>
        Set up the <em>Pixel / Dataset</em>
      </>
    ),
    desc: (
      <>
        The pixel is how Meta learns who&rsquo;s actually clicking, listening, and converting. Without it, every
        campaign is flying blind, no retargeting, no lookalikes, no optimization.
      </>
    ),
    pathParts: [
      { label: 'Business Settings', href: 'https://business.facebook.com/settings', isStart: true },
      { label: 'Data Sources' },
      { label: 'Datasets' },
    ],
    checklist: [
      <>Confirm your pixel is connected to the business</>,
      <>Assign PatrickReza access to the pixel / dataset</>,
      <>If you&rsquo;re sending traffic to <strong>Laylo</strong>, <strong>Hypeddit</strong>, <strong>ManyChat</strong>, <strong>Shopify</strong>, or any landing page, install or share the pixel there too</>,
      <>For Laylo / ManyChat / Hypeddit campaigns, send us access or confirm the tracking integrations are active</>,
      <><strong>On Shopify, a custom site, or anything with a server?</strong> Also enable <strong>Conversions API (CAPI)</strong>, browser pixel alone caps signal at ~60% match quality after iOS 14.5. Reza generates the access token from your dataset, you just paste it (or for Shopify, install the Facebook channel app).</>,
      <><strong>Don&rsquo;t have a pixel?</strong> Let Reza know. <em>Option B:</em> we&rsquo;ll set up a brand new one for you, no extra work on your end.</>,
    ],
  },
  {
    num: '07',
    tag: 'iOS 14 / Domain',
    brand: 'meta',
    title: (
      <>
        Domain verification &amp; iOS 14 tracking
      </>
    ),
    desc: (
      <>
        Apple&rsquo;s iOS 14 update broke a lot of Meta&rsquo;s tracking. To get full attribution back on web traffic
        we need <strong>domain verification</strong> and the <strong>top 8 conversion events</strong> configured in
        Aggregated Event Measurement. <strong>Reza configures AEM events on our side.</strong> Domain verification
        needs you to drop a DNS TXT record (or a meta tag on your site), Reza sends you the exact value to paste.
      </>
    ),
    callout: (
      <>
        <strong>What you actually do here:</strong> when Reza emails you the DNS TXT record or meta tag, paste it in
        your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.) or hand it to whoever runs your site. It&rsquo;s
        one record, takes ~5 min once you&rsquo;re in the DNS panel. Required for any campaign sending traffic to a
        web URL, skip it and conversions report at half strength.
      </>
    ),
  },
  {
    num: '08',
    tag: 'Fan Lists & Confirm',
    title: (
      <>
        Send your <em>fan lists</em> &amp; confirm we&rsquo;re live
      </>
    ),
    desc: (
      <>
        Last step. We use your existing fans to seed the audiences Meta targets, that&rsquo;s how the first few
        days actually perform. You don&rsquo;t need to do anything technical, just export and send what you have.
        We&rsquo;ll turn them into custom audiences and lookalikes on our end.
      </>
    ),
  },
];

function PathBreadcrumb({ parts }: { parts: NonNullable<typeof STEPS[number]['pathParts']> }) {
  return (
    <div className="path">
      {parts.map((p, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          {p.href ? (
            <a className="path-link" href={p.href} target="_blank" rel="noopener noreferrer">
              {p.label}
            </a>
          ) : (
            <span className="path-step">{p.label}</span>
          )}
          {i < parts.length - 1 && <span className="path-arrow">→</span>}
        </span>
      ))}
    </div>
  );
}

export default function Page() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === 'undefined') return;
    const targets = root.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef}>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <span className="brand-mark" aria-hidden />
            <span>
              <span className="brand-name">Artist Influence</span>
              <span className="brand-suffix">/ Meta Setup</span>
            </span>
          </a>
          <div className="nav-links">
            <a href="#steps">Steps</a>
            <a href="#bonus">Pro tips</a>
            <a href="#confirm">Confirm</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="hero">
        <div className="hero-inner">
          <div className="hero-kicker">Meta Ads Onboarding · 8 Steps</div>
          <h1 className="hero-title">
            Get your Meta accounts <em>plugged in</em> so we can launch.
          </h1>
          <p className="hero-sub">
            Before we build audiences, install tracking, or spend a single dollar, your{' '}
            <strong>Facebook Page</strong>, <strong>Instagram</strong>, <strong>Ad Account</strong>, and{' '}
            <strong>Pixel</strong> all need to be connected to your Business Portfolio with{' '}
            <strong>PatrickReza</strong> (<code>reza@artistinfluence.com</code>) as an admin. This page walks you through every click.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#steps">
              Start setup ↓
            </a>
            <a
              className="btn btn-ghost"
              href="https://business.facebook.com/settings"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Business Settings ↗
            </a>
          </div>
        </div>
      </header>

      {/* STEPS */}
      <section id="steps" className="section reveal">
        <div className="section-head">
          <span className="section-label">The Setup</span>
          <h2 className="section-title">
            Eight steps. Most people <em>finish in under thirty minutes</em>.
          </h2>
          <p className="section-lede">
            Do them in order, each one assumes the previous is done. If anything is greyed out or you hit a
            permission wall, just text us and we&rsquo;ll screenshare. Don&rsquo;t fight Meta alone.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((s) => (
            <article key={s.num} className="step reveal">
              <div className="step-side">
                {s.brand && <BrandMark brand={s.brand} />}
                <div className="step-num">{s.num}</div>
                <div className="step-tag">{s.tag}</div>
              </div>
              <div className="step-body">
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
                {s.pathParts && <PathBreadcrumb parts={s.pathParts} />}
                {s.checklist && (
                  <ul className="checklist">
                    {s.checklist.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                )}
                {s.body}
                {s.callout && <div className="callout">{s.callout}</div>}
                {s.num === '08' && (
                  <>
                    <div className="fan-block">
                      <div className="fan-head">Send PatrickReza your fan lists</div>
                      <p className="fan-ask">
                        <strong>SMS / email list</strong> (from <strong>Laylo</strong>, <strong>ManyChat</strong>, and{' '}
                        <strong>Hypeddit</strong>).
                      </p>
                      <p className="fan-note">
                        Don&rsquo;t worry about formatting - CSV, Excel, screenshot, whatever. PatrickReza turns these
                        into <strong>custom audiences</strong> and <strong>lookalikes</strong> inside Meta so Day 1
                        ads find your real fans instead of burning budget on cold reach.
                      </p>
                    </div>

                    <div className="callout" style={{ marginTop: 18 }}>
                      <strong>Then email PatrickReza:</strong>{' '}
                      <a
                        className="path-link"
                        href={`mailto:reza@artistinfluence.com?subject=${encodeURIComponent(
                          'Meta Ads - Ready to Launch'
                        )}&body=${encodeURIComponent(
                          'Hey PatrickReza - everything is connected on the Meta side and I am attaching the fan lists I have. Ready to launch.'
                        )}`}
                      >
                        reza@artistinfluence.com
                      </a>{' '}
                      and attach whatever lists you have. We take it from there.
                    </div>
                    <p className="note">
                      Then we build audiences, connect tracking, set up retargeting, and launch.
                    </p>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* BONUS */}
        <div id="bonus" className="bonus reveal">
          <div className="bonus-tag">Bonus · Pro Tips</div>
          <h3 className="bonus-title">Stuff that&rsquo;ll save you a week of back‑and‑forth.</h3>
          <p style={{ color: 'var(--ai-text-dim)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
            None of these block launch, but if you can knock them out now, your campaigns hit harder and ramp faster.
          </p>
          <div className="bonus-grid">
            <div className="bonus-item">
              <strong>Turn on 2FA before inviting</strong>
              Meta blocks new admin invites unless the inviter has two‑factor auth on. Enable it in{' '}
              <em>Accounts Center → Password &amp; Security</em> first.
            </div>
            <div className="bonus-item">
              <strong>Switch IG to a Professional account</strong>
              Personal IG accounts can&rsquo;t run ads or share insights. <em>Settings → Account type → Switch to
              Professional</em>.
            </div>
            <div className="bonus-item">
              <strong>Add a backup payment method</strong>
              One declined card pauses every campaign in the account. Drop a backup in{' '}
              <em>Billing &amp; Payments</em> so we never go dark mid‑flight.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="confirm" className="cta reveal">
        <div className="cta-inner">
          <div>
            <span className="section-label">Final Step</span>
            <h2 className="cta-title">
              Once it&rsquo;s connected, <em>let us know</em>, and we&rsquo;ll take it from here.
            </h2>
            <p className="cta-intro">
              Send a quick confirmation so we know we have everything we need. From there, we build audiences, set up
              tracking, configure retargeting, and launch your campaign.
            </p>
          </div>
          <div className="confirm">
            <div className="confirm-name">PatrickReza</div>
            <div className="confirm-role">Head of Growth · Artist Influence</div>

            <a
              className="confirm-action"
              href={`mailto:reza@artistinfluence.com?subject=${encodeURIComponent(
                'Meta Ads - Access Granted'
              )}&body=${encodeURIComponent(
                'Hey PatrickReza - Facebook Page, Instagram, Ad Account, and Pixel are connected and you have full access. Ready to launch.'
              )}`}
            >
              <span className="confirm-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span className="confirm-body">
                <span className="confirm-label">Email PatrickReza</span>
                <span className="confirm-val">reza@artistinfluence.com</span>
              </span>
              <span className="confirm-cta">Open Mail ↗</span>
            </a>

            <a className="confirm-action" href="sms:+13104300739">
              <span className="confirm-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              <span className="confirm-body">
                <span className="confirm-label">Text · iMessage</span>
                <span className="confirm-val">(310) 430-0739</span>
              </span>
              <span className="confirm-cta">Open Messages ↗</span>
            </a>

            <a
              className="confirm-action"
              href="https://www.artistinfluence.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="confirm-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
              </span>
              <span className="confirm-body">
                <span className="confirm-label">Artist Influence</span>
                <span className="confirm-val">artistinfluence.com</span>
              </span>
              <span className="confirm-cta">Visit ↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* PARTNER SETUP — small alt-path link */}
      <div className="partner-alt reveal">
        <span className="partner-alt-label">Prefer a hands-off setup?</span>
        <a className="partner-alt-btn" href="/partner/">
          Partner Setup →
        </a>
        <span className="partner-alt-note">We host the ad account, you skip the Business Portfolio steps.</span>
      </div>

      {/* FOOTER */}
      <footer className="foot">
        <div className="foot-mark">
          <span
            aria-hidden
            style={{
              width: 22,
              height: 22,
              backgroundColor: 'var(--ai-text)',
              WebkitMaskImage: 'url(/logo.png)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: 'url(/logo.png)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              display: 'inline-block',
            }}
          />
          <span>Artist Influence</span>
        </div>
        <div className="foot-tag">Meta Ads · Onboarding · For Every Client</div>
        <div className="foot-link">
          Questions? Email <a href="mailto:reza@artistinfluence.com">reza@artistinfluence.com</a> · Text{' '}
          <a href="sms:+13104300739">(310) 430-0739</a>
        </div>
      </footer>
    </div>
  );
}
