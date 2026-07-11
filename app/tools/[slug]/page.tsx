import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TOOLS, getToolBySlug, getToolSlugs } from '@/lib/tools';
import { getServiceBySlug } from '@/lib/services';
import { Breadcrumb } from '@/components/site/PageHeader';
import { FAQAccordion } from '@/components/site/FAQAccordion';
import { CTABand } from '@/components/site/CTABand';
import { ContactSection } from '@/components/site/ContactSection';
import { BreadcrumbSchema } from '@/components/site/Schema';
import type { Metadata } from 'next';

import { GBPAuditTool } from '@/components/tools/GBPAuditTool';
import { LocalSeoScoreTool } from '@/components/tools/LocalSeoScoreTool';
import { RoiCalculatorTool } from '@/components/tools/RoiCalculatorTool';
import { ReviewRequestTool } from '@/components/tools/ReviewRequestTool';
import { KeywordGeneratorTool } from '@/components/tools/KeywordGeneratorTool';
import { GooglePostTool } from '@/components/tools/GooglePostTool';
import { CitationChecklistTool } from '@/components/tools/CitationChecklistTool';
import { CompetitorGapTool } from '@/components/tools/CompetitorGapTool';
import { SocialBioTool } from '@/components/tools/SocialBioTool';
import { ReviewResponseTool } from '@/components/tools/ReviewResponseTool';

const TOOL_COMPONENTS: Record<string, React.ComponentType> = {
  GBPAuditTool,
  LocalSeoScoreTool,
  RoiCalculatorTool,
  ReviewRequestTool,
  KeywordGeneratorTool,
  GooglePostTool,
  CitationChecklistTool,
  CompetitorGapTool,
  SocialBioTool,
  ReviewResponseTool,
};

export function generateStaticParams() {
  return getToolSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};
  return {
    title: tool.metaTitle,
    description: tool.metaDesc,
  };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  const ToolComponent = TOOL_COMPONENTS[tool.component];
  const relatedService = getServiceBySlug(tool.relatedServiceSlug);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Free Tools', url: '/tools' },
          { name: tool.title, url: `/tools/${tool.slug}` },
        ]}
      />

      <div style={{ marginTop: 'var(--nav-h)' }}>
        {/* Tool Hero */}
        <section style={{ padding: '2.5rem 1.2rem 1.5rem', background: 'var(--pale)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Free Tools', href: '/tools' }, { name: tool.title, href: `/tools/${tool.slug}` }]} />
            <span className="s-label">Free Tool {tool.num}</span>
            <h1 className="s-h2" style={{ marginBottom: '0.8rem' }}>{tool.h1}</h1>
            <p className="sub" style={{ fontSize: '0.95rem', maxWidth: '600px' }}>{tool.shortDesc}</p>
          </div>
        </section>

        {/* Interactive Tool */}
        <section style={{ padding: '2rem 1.2rem', background: 'var(--cream)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', background: 'var(--pale)', border: '1.5px solid var(--border)', borderRadius: '2px' }}>
            {ToolComponent ? <ToolComponent /> : <div style={{ padding: '2rem' }}>Tool coming soon.</div>}
          </div>
        </section>

        {/* Why This Matters */}
        <section style={{ padding: '3rem 1.2rem', maxWidth: '800px', margin: '0 auto' }}>
          <span className="s-label">Why This Matters</span>
          <div className="prose-content">
            <p>{tool.whyText}</p>
          </div>
        </section>

        {/* FAQ */}
        <FAQAccordion faqs={tool.faqs} />

        {/* Next Step - Related Service */}
        {relatedService && (
          <section style={{ padding: '3rem 1.2rem', background: 'var(--ink)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <span className="s-label gold">Next Step</span>
              <h2 className="s-h2 light" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{tool.nextStep}</h2>
              <Link href={`/services/${relatedService.slug}`} className="btn btn-w">
                {relatedService.title} <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        )}

        {/* Other Tools */}
        <section style={{ padding: '3rem 1.2rem', background: 'var(--cream)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span className="s-label">More Tools</span>
            <h2 className="s-h2" style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Try another tool.</h2>
            <div className="grid-border" style={{ gridTemplateColumns: '1fr' }}>
              {TOOLS.filter((t) => t.slug !== tool.slug).slice(0, 5).map((t) => (
                <Link href={`/tools/${t.slug}`} key={t.slug} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <span style={{ fontFamily: 'var(--font-mono), IBM Plex Mono, monospace', fontSize: '0.65rem', color: 'var(--rust)' }}>{t.num}</span>
                  <h3 style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '1rem', marginTop: '0.3rem' }}>{t.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--mid)', marginTop: '0.2rem' }}>{t.shortDesc}</p>
                </Link>
              ))}
            </div>
            <Link href="/tools" className="btn btn-k" style={{ marginTop: '1.5rem' }}>View All Tools</Link>
          </div>
        </section>

        <CTABand
          title="Want help acting on what you found?"
          subtitle="We handle the work these tools surface."
          buttonText="See Services"
          href="/services"
        />

        <ContactSection />
      </div>
    </>
  );
}
