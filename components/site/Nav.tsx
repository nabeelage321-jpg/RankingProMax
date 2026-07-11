'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-h)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1.5rem',
          background: 'rgba(238,236,229,0.92)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <Link
          href="/"
          className="logo"
          style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '1.3rem' }}
        >
          Ranking<span style={{ color: 'var(--rust)' }}> Pro Max</span>
        </Link>

        <ul
          className="nav-links"
          style={{
            gap: '1.8rem',
            listStyle: 'none',
            alignItems: 'center',
          }}
        >
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/quick-wins">Quick Wins</Link></li>
          <li><Link href="/tools">Free Tools</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
          <li>
            <Link href="/#contact" className="btn btn-r" style={{ padding: '0.6rem 1.2rem' }}>
              Free Audit
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '0.5rem',
          }}
          className="hamburger"
        >
          <span style={{ width: '22px', height: '2px', background: 'var(--ink)' }} />
          <span style={{ width: '22px', height: '2px', background: 'var(--ink)' }} />
          <span style={{ width: '22px', height: '2px', background: 'var(--ink)' }} />
        </button>
      </nav>

      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-h)',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--pale)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            gap: '1.5rem',
          }}
        >
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/quick-wins" onClick={() => setMobileOpen(false)}>Quick Wins</Link>
          <Link href="/tools" onClick={() => setMobileOpen(false)}>Free Tools</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/process" onClick={() => setMobileOpen(false)}>Our Process</Link>
          <Link href="/#contact" className="btn btn-r" onClick={() => setMobileOpen(false)}>
            Free Audit
          </Link>
        </div>
      )}
    </>
  );
}
