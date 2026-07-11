import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      marginTop: 'var(--nav-h)',
      minHeight: 'calc(100vh - var(--nav-h))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.2rem',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif',
          fontSize: 'clamp(5rem, 20vw, 10rem)',
          color: 'var(--rust)',
          lineHeight: 0.9,
          marginBottom: '0.5rem',
        }}>404</div>
        <h1 style={{
          fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif',
          fontSize: '1.5rem',
          letterSpacing: '0.03em',
          marginBottom: '0.8rem',
        }}>
          This page doesn&apos;t exist.
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--mid)', marginBottom: '2rem' }}>
          The page you&apos;re looking for may have been moved or never existed. Try heading back home or exploring our services.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-r">
            <Home size={16} /> Go Home
          </Link>
          <Link href="/services" className="btn btn-k">
            View Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
