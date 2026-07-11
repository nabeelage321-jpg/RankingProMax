import { PageHeader, Breadcrumb } from '@/components/site/PageHeader';
import { AGENCY } from '@/lib/agency';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Ranking Pro Max',
  description: 'Terms of service for Ranking Pro Max, a local SEO agency in Farmingdale, NY.',
};

export default function TermsPage() {
  return (
    <div style={{ marginTop: 'var(--nav-h)' }}>
      <div style={{ padding: '2.5rem 1.2rem 0', maxWidth: '900px', margin: '0 auto' }}>
        <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Terms', href: '/terms' }]} />
      </div>
      <PageHeader label="Legal" title="Terms of Service" />

      <section style={{ padding: '1rem 1.2rem 3.5rem', maxWidth: '800px', margin: '0 auto' }}>
        <div className="prose-content">
          <p><strong>Last updated:</strong> January 2026</p>

          <p>These Terms of Service (&quot;Terms&quot;) govern your use of this website operated by {AGENCY.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using this website, you agree to these Terms.</p>

          <h2>Services</h2>
          <p>We provide local SEO services to businesses in Farmingdale, NY. Specific service details, pricing, and deliverables are described on individual service pages. Any engagement for paid services is subject to a separate agreement between you and us.</p>

          <h2>Use of Website</h2>
          <p>You may use this website for informational purposes and to contact us about our services. You agree not to:</p>
          <ul>
            <li>Use this website for any unlawful purpose</li>
            <li>Attempt to disrupt, disable, or gain unauthorized access to any part of this website</li>
            <li>Scrape, copy, or republish content from this website without our permission</li>
          </ul>

          <h2>Free Tools</h2>
          <p>The free tools on this website are provided &quot;as is&quot; for informational purposes. Results from these tools are estimates based on the information you provide and are not guarantees of specific outcomes. No signup is required to use them, and we do not store the information you enter into them.</p>

          <h2>Intellectual Property</h2>
          <p>All content on this website — including text, graphics, logos, and design — is the property of {AGENCY.name} unless otherwise noted. You may not reproduce or distribute it without our written permission.</p>

          <h2>Disclaimer</h2>
          <p>The information on this website is provided for general informational purposes only. We make no guarantees about specific search engine rankings, traffic, or business outcomes. SEO results vary based on numerous factors including competition, industry, and search engine algorithm changes.</p>

          <h2>Limitation of Liability</h2>
          <p>{AGENCY.name} is not liable for any indirect, incidental, or consequential damages arising from your use of this website or our services. Our total liability for any paid service is limited to the amount you paid for that specific service.</p>

          <h2>Changes to These Terms</h2>
          <p>We may update these Terms from time to time. Changes will be posted on this page with an updated revision date.</p>

          <h2>Contact</h2>
          <p>
            {AGENCY.name}<br />
            {AGENCY.address}<br />
            {AGENCY.phone}
          </p>
        </div>
      </section>
    </div>
  );
}
