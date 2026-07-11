import { PageHeader, Breadcrumb } from '@/components/site/PageHeader';
import { CTABand } from '@/components/site/CTABand';
import { ContactSection } from '@/components/site/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Process — Local SEO Farmingdale NY | Ranking Pro Max',
  description:
    'How local SEO works at Ranking Pro Max in Farmingdale, NY — audit, strategy, implementation, and ongoing monitoring. The same process used for every Farmingdale business we work with.',
};

export default function ProcessPage() {
  return (
    <div style={{ marginTop: 'var(--nav-h)' }}>
      <div style={{ padding: '2.5rem 1.2rem 0', maxWidth: '900px', margin: '0 auto' }}>
        <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Process', href: '/process' }]} />
      </div>
      <PageHeader
        label="Our Process"
        title="Local SEO process in Farmingdale: what actually happens."
        subtitle="Before you pick up the phone, you should know exactly what you're signing up for. This page walks through the local SEO process step by step — no vague promises, no jargon you have to guess at."
      />

      <section style={{ padding: '1rem 1.2rem 3.5rem', maxWidth: '800px', margin: '0 auto' }}>
        <div className="prose-content">
          <h2>Step 1: Audit</h2>
          <p>Every engagement starts with a full audit of where you currently stand. That means a close look at your Google Business Profile — categories, hours, photos, service areas, and how completely it&apos;s filled out — along with your website&apos;s on-page SEO and your citation consistency across directories like Yelp, Bing Places, and industry-specific listings. We check for duplicate or incorrect listings, missing schema markup, and gaps competitors are already exploiting. You receive a written summary that shows exactly what&apos;s working, what&apos;s missing, and what&apos;s actively holding you back in Farmingdale search results. This process typically takes 3-5 business days from start to delivery.</p>

          <h2>Step 2: Strategy</h2>
          <p>Once the audit is done, the plan gets built around your specific ZIP code and the businesses actually competing with you in it — not a generic template applied to every client. We look at who&apos;s ranking for your core services in 11735 right now, what their profiles and websites have that yours doesn&apos;t, and where the fastest realistic wins are. Priorities get sequenced: usually Google Business Profile completeness and citation cleanup first, since those tend to move the needle quickest, followed by on-page and content work. You see this plan before anything is touched.</p>

          <h2>Step 3: Implementation</h2>
          <p>&quot;You approve the plan, we execute it&quot; means exactly that. Once you sign off, the work gets done — profile updates, citation corrections, on-page changes — without you needing to manage any of it day to day. You&apos;re not left wondering what&apos;s happening behind the scenes; updates come as work is completed, not on a rigid schedule that leaves you guessing for weeks. Because this is one person handling your account directly, there&apos;s no handoff between a salesperson and a separate execution team — the person doing the strategy is the person doing the work, and they&apos;re reachable if you have a question.</p>

          <h2>Step 4: Ongoing Monitoring</h2>
          <p>Local SEO isn&apos;t a one-time fix. After implementation, rankings, review activity, and Google Business Profile performance are checked on a regular basis to catch anything that slips — a competitor making a move, a listing reverting, a ranking drop tied to a Google update. If something changes in a way that affects your visibility, that triggers a review of the approach and, if needed, a conversation with you about next steps. You&apos;re not paying for a report that sits unread; you&apos;re paying for someone watching your actual results.</p>

          <p>If you want to see where your business currently stands, request a free audit and you&apos;ll get a straight answer about what&apos;s working and what isn&apos;t — no pressure, no obligation.</p>
        </div>
      </section>

      <CTABand
        title="Ready to start the process?"
        subtitle="Request your free audit today."
        buttonText="Get Your Free Audit"
        href="/#contact"
      />

      <ContactSection />
    </div>
  );
}
