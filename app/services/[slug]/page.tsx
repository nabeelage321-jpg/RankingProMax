import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { SERVICES, getServiceBySlug, getServiceSlugs } from '@/lib/services';
import { getToolBySlug } from '@/lib/tools';
import { AGENCY } from '@/lib/agency';
import { Breadcrumb } from '@/components/site/PageHeader';
import { FAQAccordion } from '@/components/site/FAQAccordion';
import { CTABand } from '@/components/site/CTABand';
import { ContactSection } from '@/components/site/ContactSection';
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/site/Schema';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDesc,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedTool = getToolBySlug(service.relatedToolSlug);
  const relatedServices = (service.relatedServiceSlugs || [])
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <>
      <ServiceSchema name={service.h1} description={service.longDesc} />
      <FAQSchema faqs={service.faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.title, url: `/services/${service.slug}` },
        ]}
      />

      <div style={{ marginTop: 'var(--nav-h)' }}>
        {/* Service Hero */}
        <section className="svc-hero">
          <div style={{ flex: 1, maxWidth: '600px' }}>
            <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: service.title, href: `/services/${service.slug}` }]} />
            <span className="s-label">Service {service.num}</span>
            <h1 className="svc-h1" dangerouslySetInnerHTML={{ __html: service.h1 }} />
            <p className="svc-long">{service.longDesc}</p>
            <div className="btns">
              <a href={`tel:${AGENCY.phoneRaw}`} className="btn btn-r">
                <Phone size={16} /> {AGENCY.phone}
              </a>
              <a href={`https://wa.me/${AGENCY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-k">
                WhatsApp Us
              </a>
            </div>
          </div>
          <div style={{ flex: 1, maxWidth: '400px' }}>
            <div className="benefits-box">
              <h4>What You Get</h4>
              <ul className="benefits-list">
                {service.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Body Content */}
        <section style={{ padding: '3rem 1.2rem', maxWidth: '800px', margin: '0 auto' }}>
          <div className="prose-content" dangerouslySetInnerHTML={{ __html: service.bodyHtml }} />
        </section>

        {/* Pricing */}
        {service.tiers && service.tiers.length > 0 && (
          <section style={{ padding: '3rem 1.2rem', background: 'var(--cream)' }} id="pricing">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <span className="s-label">Pricing</span>
              <h2 className="s-h2" style={{ marginBottom: '2rem' }}>Choose your tier.</h2>
              <div className="pricing-grid">
                {service.tiers.map((tier, i) => (
                  <div className={`price-card ${i === 1 || (service.tiers!.length === 1) ? 'feat' : ''}`} key={i}>
                    {i === 1 && <span className="price-badge">Most Popular</span>}
                    <div className="price-plan">{tier.name}</div>
                    <div className="price-amt" style={{ fontSize: tier.price.length > 10 ? '1.8rem' : '2.8rem' }}>{tier.price}</div>
                    <div className="price-per">{tier.bestFor}</div>
                    <ul className="price-feats">
                      {tier.features.map((f, j) => (
                        <li key={j}>{f}</li>
                      ))}
                    </ul>
                    <a href={`tel:${AGENCY.phoneRaw}`} className={`btn ${i === 1 || service.tiers!.length === 1 ? 'btn-w' : 'btn-r'}`} style={{ width: '100%' }}>
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Tool Link */}
        {relatedTool && (
          <section style={{ padding: '3rem 1.2rem', background: 'var(--ink)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
              <span className="s-label gold">Free Tool</span>
              <h3 className="s-h2 light" style={{ fontSize: '1.8rem' }}>Try our free {relatedTool.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', maxWidth: '500px' }}>
                {relatedTool.shortDesc}
              </p>
              <Link href={`/tools/${relatedTool.slug}`} className="btn btn-w">
                Use Free Tool <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        )}

        {/* FAQ */}
        <FAQAccordion faqs={service.faqs} />

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section style={{ padding: '3rem 1.2rem', background: 'var(--cream)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <span className="s-label">Related Services</span>
              <h2 className="s-h2" style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>You might also need...</h2>
              <div className="grid-border" style={{ gridTemplateColumns: '1fr' }}>
                {relatedServices.map((svc) => svc && (
                  <Link href={`/services/${svc.slug}`} key={svc.slug} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '1.1rem', marginBottom: '0.3rem' }}>{svc.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--mid)' }}>{svc.shortDesc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTABand
          title={`Ready to improve your ${service.title.toLowerCase()}?`}
          subtitle="Call or message us — no sales pressure."
          buttonText="Get Started"
          href="/#contact"
        />

        <ContactSection subject={service.title} />
      </div>
    </>
  );
}
