import { PageHeader, Breadcrumb } from '@/components/site/PageHeader';
import { CTABand } from '@/components/site/CTABand';
import { ContactSection } from '@/components/site/ContactSection';
import { AGENCY } from '@/lib/agency';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Ranking Pro Max — Local SEO Agency Farmingdale NY',
  description:
    'Ranking Pro Max is a local SEO business based in Farmingdale, NY, founded in 2026. Solo-operated, direct access, published pricing, one town focus. Learn who you\'d actually be working with.',
};

export default function AboutPage() {
  return (
    <div style={{ marginTop: 'var(--nav-h)' }}>
      <div style={{ padding: '2.5rem 1.2rem 0', maxWidth: '900px', margin: '0 auto' }}>
        <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />
      </div>
      <PageHeader
        label="About"
        title="About Ranking Pro Max."
        subtitle="A local SEO business based in Farmingdale, NY, founded in 2026. Solo-operated — one person handling the audits, the strategy, and the execution."
      />

      <section style={{ padding: '1rem 1.2rem 3.5rem', maxWidth: '800px', margin: '0 auto' }}>
        <div className="prose-content">
          <h2>Why This Business Exists</h2>
          <p>Farmingdale is a small, specific market, and a lot of the local businesses in it have Google Business Profiles that are incomplete, inconsistent, or barely maintained — missing categories, outdated hours, no photos, citations that don&apos;t match across directories. That&apos;s not a knock on those businesses; it&apos;s just not what most owners have time to manage on top of running things day to day. But it also means the opportunity here is real: a handful of focused fixes can move a business ahead of competitors who haven&apos;t touched their listings in years. Ranking Pro Max exists to fill that specific gap — not as a scaled-down version of a national agency, but as a business built around one town, with the local knowledge that comes from actually paying attention to what&apos;s happening in it.</p>

          <h2>What Makes This Different From a National Agency</h2>
          <p>With a large agency, your account often gets passed between a salesperson, a strategist, and whoever&apos;s actually doing the work that week — and pricing is frequently hidden behind a &quot;custom quote&quot; call. Here, the person you talk to is the person doing the work, and pricing is published up front instead of gated behind a sales conversation. Because the client list isn&apos;t at national scale, response times stay fast — questions get answered directly instead of routed through a support queue. This isn&apos;t a promise of unlimited teams or 24/7 coverage. It&apos;s a smaller setup built around direct access and clear communication.</p>

          <h2>Our Commitment to Farmingdale Businesses</h2>
          <p>The strategy here is &quot;one town first.&quot; Rather than marketing to every ZIP code in the region, the focus stays on Farmingdale — learning its specific competitive landscape, its Google Business Profile category quirks near Route 109 and Route 110, and what actually moves rankings for businesses here. That focus means clients get real attention instead of being one of hundreds of accounts spread across a huge territory. Expansion may come later, but not before Farmingdale is done right.</p>

          <p>If you&apos;re a Farmingdale business owner and want a clear look at where you stand, request a free audit. You&apos;ll hear back directly from the person who&apos;ll actually be doing the work.</p>
        </div>

        <div style={{
          background: 'var(--ink)',
          padding: '2rem',
          marginTop: '2rem',
          color: 'var(--cream)',
        }}>
          <h3 style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '1.2rem', letterSpacing: '0.05em', color: 'var(--gold)', marginBottom: '1rem' }}>
            Business Details
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', marginBottom: '0.3rem' }}>Address</div>
              <div style={{ fontSize: '0.85rem' }}>{AGENCY.address}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', marginBottom: '0.3rem' }}>Phone</div>
              <div style={{ fontSize: '0.85rem' }}>{AGENCY.phone}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', marginBottom: '0.3rem' }}>Founded</div>
              <div style={{ fontSize: '0.85rem' }}>{AGENCY.founded}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', marginBottom: '0.3rem' }}>Service Area</div>
              <div style={{ fontSize: '0.85rem' }}>Farmingdale, NY only</div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Want to know who you'd be working with?"
        subtitle="Request a free audit — you'll hear back directly."
        buttonText="Get Your Free Audit"
        href="/#contact"
      />

      <ContactSection />
    </div>
  );
}
