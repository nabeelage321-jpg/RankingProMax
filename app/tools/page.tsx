import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TOOLS } from '@/lib/tools';
import { PageHeader, Breadcrumb } from '@/components/site/PageHeader';
import { CTABand } from '@/components/site/CTABand';
import { ContactSection } from '@/components/site/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Local SEO Tools for Farmingdale Businesses | Ranking Pro Max',
  description:
    'Ten free local SEO tools for Farmingdale, NY businesses — GBP audit score, local SEO score, ROI calculator, review request generator, keyword generator, and more. No signup required.',
};

export default function ToolsHubPage() {
  return (
    <>
      <div style={{ marginTop: 'var(--nav-h)' }}>
        <div style={{ padding: '2.5rem 1.2rem 0', maxWidth: '900px', margin: '0 auto' }}>
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Free Tools', href: '/tools' }]} />
        </div>
        <PageHeader
          label="Free Tools"
          title="Free local SEO tools for Farmingdale businesses."
          subtitle="Real answers, not a sales pitch. Every tool below is genuinely free, with no signup required and no catch. Pick the one that matches what's on your mind right now."
        />

        <section style={{ padding: '1rem 1.2rem 3.5rem', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="grid-border svc-grid" style={{ gridTemplateColumns: '1fr' }}>
            {TOOLS.map((tool) => (
              <Link
                href={`/tools/${tool.slug}`}
                key={tool.slug}
                className="card"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontFamily: 'var(--font-mono), IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'var(--rust)', letterSpacing: '0.1em' }}>
                      {tool.num}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '1.3rem', letterSpacing: '0.02em', margin: '0.5rem 0 0.5rem' }}>
                      {tool.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--mid)', lineHeight: 1.65 }}>{tool.shortDesc}</p>
                  </div>
                  <ArrowRight size={20} style={{ color: 'var(--rust)', flexShrink: 0, marginTop: '0.5rem' }} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CTABand
          title="See a gap you want help closing?"
          subtitle="We handle the work these tools surface — professionally."
          buttonText="See Services"
          href="/services"
        />

        <ContactSection />
      </div>
    </>
  );
}
