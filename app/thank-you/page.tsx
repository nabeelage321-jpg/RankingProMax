import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { AGENCY } from '@/lib/agency';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You — Ranking Pro Max',
  description: 'Thanks for reaching out to Ranking Pro Max. We\'ll be in touch shortly.',
};

export default function ThankYouPage() {
  return (
    <div style={{
      marginTop: 'var(--nav-h)',
      minHeight: 'calc(100vh - var(--nav-h))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.2rem',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '500px' }}>
        <CheckCircle size={56} style={{ color: 'var(--sage)', marginBottom: '1.5rem' }} />
        <h1 style={{
          fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif',
          fontSize: 'clamp(2rem, 6vw, 3rem)',
          letterSpacing: '0.02em',
          marginBottom: '0.8rem',
        }}>
          Thanks — message received.
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--mid)', lineHeight: 1.7, marginBottom: '2rem' }}>
          You&apos;ll hear back directly from the person who&apos;ll actually be doing the work — usually within one business day. In the meantime, feel free to explore our free tools or browse our quick wins.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tools" className="btn btn-r">
            Free Tools <ArrowRight size={16} />
          </Link>
          <Link href="/quick-wins" className="btn btn-k">
            Quick Wins
          </Link>
        </div>
        <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--mid)' }}>
          Need to reach us sooner? Call <a href={`tel:${AGENCY.phoneRaw}`} style={{ color: 'var(--rust)' }}>{AGENCY.phone}</a> or message us on{' '}
          <a href={`https://wa.me/${AGENCY.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--rust)' }}>WhatsApp</a>.
        </p>
      </div>
    </div>
  );
}
