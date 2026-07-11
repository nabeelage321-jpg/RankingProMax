import Link from 'next/link';
import { AGENCY } from '@/lib/agency';
import { SERVICES } from '@/lib/services';

export function Footer() {
  return (
    <>
      <footer>
        <div className="f-brand">
          <span className="logo">
            Ranking<span style={{ color: 'var(--rust)' }}> Pro Max</span>
          </span>
          <p style={{ marginTop: '0.8rem' }}>
            Farmingdale, NY&apos;s local SEO specialists. Helping Farmingdale businesses rank #1 on Google.
          </p>
          <div style={{ marginTop: '1.2rem', fontSize: '0.78rem' }}>
            <div style={{ marginBottom: '0.4rem' }}>
              <a href={`tel:${AGENCY.phoneRaw}`} style={{ color: 'rgba(255,255,255,0.5)' }}>
                📞 {AGENCY.phone}
              </a>
            </div>
            <div style={{ marginBottom: '0.4rem' }}>
              <a
                href={`https://wa.me/${AGENCY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                💬 WhatsApp: {AGENCY.phone}
              </a>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.35)' }}>📍 {AGENCY.address}</div>
          </div>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>More Services</h5>
          <ul>
            {SERVICES.slice(6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/process">Our Process</Link></li>
            <li><Link href="/tools">Free Tools</Link></li>
            <li><Link href="/quick-wins">Quick Wins</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
      </footer>
      <div className="f-bottom">
        <span>© 2026 Ranking Pro Max. All rights reserved. · {AGENCY.address}</span>
        <span>Serving Farmingdale, NY</span>
      </div>
    </>
  );
}
