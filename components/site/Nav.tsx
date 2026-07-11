'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, AGENCY } from '@/lib/agency';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-h)',
          background: scrolled ? 'var(--pale)' : 'var(--pale)',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1.2rem',
          zIndex: 500,
          transition: 'border-color 0.2s',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '0.02em', color: 'var(--ink)' }}>
            RANKING<span style={{ color: 'var(--rust)' }}>PRO</span>MAX
          </span>
        </Link>

        <div className="nav-links" style={{ display: 'none', gap: '1.8rem' }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: pathname === link.href ? 'var(--rust)' : 'var(--ink)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a href={`tel:${AGENCY.phoneRaw}`} className="btn btn-r" style={{ fontSize: '0.72rem', padding: '0.5rem 1rem', minHeight: '36px' }}>
            <Phone size={14} /> Call Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="nav-toggle"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-h)',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--pale)',
            zIndex: 499,
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: pathname === link.href ? 'var(--rust)' : 'var(--ink)',
                textDecoration: 'none',
                padding: '0.8rem 0',
                borderBottom: '1px solid var(--border)',
                fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a href={`tel:${AGENCY.phoneRaw}`} className="btn btn-r" style={{ marginTop: '1rem', width: '100%' }}>
            <Phone size={16} /> {AGENCY.phone}
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          :global(.nav-links) { display: flex !important; }
          :global(.nav-toggle) { display: none; }
        }
      `}</style>
    </>
  );
}
