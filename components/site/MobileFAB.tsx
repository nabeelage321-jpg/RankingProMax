'use client';

import { AGENCY } from '@/lib/agency';

export function MobileFAB() {
  return (
    <div
      id="mobile-fab"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        display: 'flex',
        borderTop: '1px solid var(--border)',
        background: '#fff',
      }}
    >
      <a
        href={`tel:${AGENCY.phoneRaw}`}
        style={{
          flex: 1,
          padding: '0.9rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--ink)',
          borderRight: '1px solid var(--border)',
        }}
      >
        📞 Call Now
      </a>
      <a
        href={`https://wa.me/${AGENCY.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: 1,
          padding: '0.9rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: '#fff',
          background: 'var(--rust)',
        }}
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
