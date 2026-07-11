'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="site-nav">
        <Link href="/" className="logo">
          Ranking<span className="logo-accent"> Pro Max</span>
        </Link>

        <ul className="nav-links">
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/quick-wins">Quick Wins</Link></li>
          <li><Link href="/tools">Free Tools</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
          <li>
            <Link href="/#contact" className="btn btn-r nav-cta">
              Free Audit
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          className="hamburger"
        >
          <span /><span /><span />
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
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

      <style jsx>{`
        .site-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--nav-h, 64px);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          background: rgba(238, 236, 229, 0.94);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border, #ddd);
        }
        .logo {
          font-family: var(--font-display), 'Big Shoulders Display', sans-serif;
          font-size: 1.3rem;
          text-decoration: none;
          color: var(--ink, #16213a);
          flex-shrink: 0;
        }
        .logo-accent {
          color: var(--rust, #c97a2b);
        }
        .nav-links {
          display: none;
          list-style: none;
          align-items: center;
          gap: 1.8rem;
          margin: 0;
          padding: 0;
        }
        .nav-links li a {
          text-decoration: none;
          color: var(--ink, #16213a);
          font-size: 0.9rem;
          white-space: nowrap;
        }
        .nav-cta {
          padding: 0.6rem 1.2rem !important;
        }
        .hamburger {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 0.5rem;
          flex-shrink: 0;
        }
        .hamburger span {
          width: 22px;
          height: 2px;
          background: var(--ink, #16213a);
          display: block;
        }
        .mobile-menu {
          position: fixed;
          top: var(--nav-h, 64px);
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--pale, #eeece5);
          z-index: 99;
          display: flex;
          flex-direction: column;
          padding: 2rem 1.5rem;
          gap: 1.5rem;
          overflow-y: auto;
        }
        .mobile-menu a {
          text-decoration: none;
          color: var(--ink, #16213a);
          font-size: 1rem;
        }

        @media (min-width: 900px) {
          .nav-links {
            display: flex;
          }
          .hamburger {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
