import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/services';
import { PageHeader, Breadcrumb } from '@/components/site/PageHeader';
import { CTABand } from '@/components/site/CTABand';
import { ContactSection } from '@/components/site/ContactSection';
import { BusinessSchema } from '@/components/site/Schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local SEO Services Farmingdale NY | Ranking Pro Max',
  description:
    'Eleven local SEO services for Farmingdale, NY businesses — Google Business Profile management, citations, website development, AI chatbots, local SEO strategy, social media, and branding.',
};

export default function ServicesHubPage() {
  return (
    <>
      <BusinessSchema />
      <div style={{ marginTop: 'var(--nav-h)' }}>
        <div style={{ padding: '2.5rem 1.2rem 0', maxWidth: '900px', margin: '0 auto' }}>
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }]} />
        </div>
        <PageHeader
          label="Services"
          title="Local SEO services for Farmingdale, NY businesses."
          subtitle="Eleven services, one town. From Google Business Profile management to AI chatbots to full local SEO strategy — pick what your business needs, or start with a free audit."
        />

        <section style={{ padding: '1rem 1.2rem 3.5rem', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="grid-border svc-grid" style={{ gridTemplateColumns: '1fr' }}>
            {SERVICES.map((svc) => (
              <Link
                href={`/services/${svc.slug}`}
                key={svc.slug}
                className="card"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontFamily: 'var(--font-mono), IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'var(--rust)', letterSpacing: '0.1em' }}>
                      {svc.num}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '1.3rem', letterSpacing: '0.02em', margin: '0.5rem 0 0.5rem' }}>
                      {svc.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--mid)', lineHeight: 1.65 }}>{svc.shortDesc}</p>
                  </div>
                  <ArrowRight size={20} style={{ color: 'var(--rust)', flexShrink: 0, marginTop: '0.5rem' }} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CTABand
          title="Not sure which service you need?"
          subtitle="Start with a free audit — we'll tell you what's missing."
          buttonText="Get Your Free Audit"
          href="/#contact"
        />

        <ContactSection />
      </div>
    </>
  );
}
