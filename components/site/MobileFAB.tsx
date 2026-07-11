'use client';

import { AGENCY } from '@/lib/agency';

export function MobileFAB() {
  return (
    <>
      <div className="mobile-fab">
        <a href={`tel:${AGENCY.phoneRaw}`} className="fab-call">
          📞 Call Now
        </a>
        <a
          href={`https://wa.me/${AGENCY.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fab-wa"
        >
          💬 WhatsApp
        </a>
      </div>

      <style jsx>{`
        .mobile-fab {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 90;
          display: flex;
          border-top: 1px solid var(--border, #ddd);
          background: #fff;
        }
        .fab-call,
        .fab-wa {
          flex: 1;
          padding: 0.9rem;
          text-align: center;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none;
        }
        .fab-call {
          color: var(--ink, #16213a);
          border-right: 1px solid var(--border, #ddd);
        }
        .fab-wa {
          color: #fff;
          background: var(--rust, #c97a2b);
        }

        @media (min-width: 641px) {
          .mobile-fab {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
