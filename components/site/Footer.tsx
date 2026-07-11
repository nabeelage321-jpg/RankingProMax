import Link from 'next/link';
import { AGENCY, NAV_LINKS } from '@/lib/agency';
import { SERVICES } from '@/lib/services';
import { TOOLS } from '@/lib/tools';

export function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="f-brand">
          <span
            className="logo"
            style={{
              fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif',
              fontWeight: 800,
              fontSize: '1.3rem',
              letterSpacing: '0.02em',
            }}
          >
            RANKING<span style={{ color: 'var(--rust)' }}>PRO</span>MAX
          </span>
          <p>
            Local SEO agency in Farmingdale, NY. Google Business Profile management, citations, websites, AI chatbots, and local SEO strategy — built for businesses in 11735.
          </p>
          <p style={{ marginTop: '0.8rem', fontSize: '0.75rem' }}>
            {AGENCY.address}<br />
            <a href={`tel:${AGENCY.phoneRaw}`} style={{ color: 'var(--cream)', textDecoration: 'none' }}>{AGENCY.phone}</a>
          </p>
        </div>

        <div>
          <h5>Services</h5>
          <ul>
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{s.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/services" style={{ color: 'inherit', textDecoration: 'none' }}>View all →</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5>Free Tools</h5>
          <ul>
            {TOOLS.slice(0, 5).map((t) => (
              <li key={t.slug}>
                <Link href={`/tools/${t.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{t.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/tools" style={{ color: 'inherit', textDecoration: 'none' }}>View all →</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5>Company</h5>
          <ul>
            {NAV_LINKS.filter((l) => !l.href.startsWith('/services') && !l.href.startsWith('/tools')).map((link) => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: 'inherit', textDecoration: 'none' }}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/quick-wins" style={{ color: 'inherit', textDecoration: 'none' }}>Quick Wins</Link>
            </li>
            <li>
              <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</Link>
            </li>
            <li>
              <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="f-bottom">
        <span>© {new Date().getFullYear()} {AGENCY.name}. All rights reserved.</span>
        <span>Founded {AGENCY.founded} · Farmingdale, NY 11735</span>
      </div>
    </footer>
  );
}
