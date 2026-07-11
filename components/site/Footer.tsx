'use client';

import Link from 'next/link';
import { AGENCY } from '@/lib/agency';
import { SERVICES } from '@/lib/services';

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="f-brand">
          <span className="logo">
            Ranking<span className="logo-accent"> Pro Max</span>
          </span>
          <p className="f-desc">
            Farmingdale, NY&apos;s local SEO specialists. Helping Farmingdale businesses rank #1 on Google.
          </p>
          <div className="f-contact">
            <div>
              <a href={`tel:${AGENCY.phoneRaw}`}>📞 {AGENCY.phone}</a>
            </div>
            <div>
              <a href={`https://wa.me/${AGENCY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                💬 WhatsApp: {AGENCY.phone}
              </a>
            </div>
            <div className="f-address">📍 {AGENCY.address}</div>
          </div>
        </div>

        <div className="f-col">
          <h5>Services</h5>
          <ul>
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="f-col">
          <h5>More Services</h5>
          <ul>
            {SERVICES.slice(6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="f-col">
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

      <style jsx>{`
        .site-footer {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 2.5rem;
          padding: 3.5rem 1.5rem 2.5rem;
          background: var(--ink, #16213a);
          color: rgba(255, 255, 255, 0.7);
        }
        .logo {
          font-family: var(--font-display), 'Big Shoulders Display', sans-serif;
          font-size: 1.4rem;
          color: #fff;
        }
        .logo-accent {
          color: var(--rust, #c97a2b);
        }
        .f-desc {
          margin-top: 0.8rem;
          font-size: 0.85rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.5);
          max-width: 320px;
        }
        .f-contact {
          margin-top: 1.2rem;
          font-size: 0.78rem;
        }
        .f-contact div {
          margin-bottom: 0.4rem;
        }
        .f-contact a {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
        }
        .f-address {
          color: rgba(255, 255, 255, 0.35);
        }
        .f-col h5 {
          font-family: var(--font-display), 'Big Shoulders Display', sans-serif;
          font-size: 0.95rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 1rem;
        }
        .f-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin: 0;
          padding: 0;
        }
        .f-col a {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
        }
        .f-col a:hover {
          color: #fff;
        }
        .f-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 1.2rem 1.5rem;
          background: var(--ink, #16213a);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.35);
        }

        @media (max-width: 780px) {
          .site-footer {
            grid-template-columns: 1fr 1fr;
          }
          .f-brand {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </>
  );
}
