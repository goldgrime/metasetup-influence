// The bare domain (ads.artistinfluence.com) renders the Standard Setup page
// directly, so the root never gets stuck on a client-side redirect. The same
// page also lives at the canonical /default route, and the Partner page is at
// /partners. (Re-exporting keeps a single source of truth in app/default/page.tsx.)
export { default } from './default/page';
