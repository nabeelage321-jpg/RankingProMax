import { PageHeader, Breadcrumb } from '@/components/site/PageHeader';
import { AGENCY } from '@/lib/agency';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ranking Pro Max',
  description: 'Privacy policy for Ranking Pro Max, a local SEO agency in Farmingdale, NY.',
};

export default function PrivacyPage() {
  return (
    <div style={{ marginTop: 'var(--nav-h)' }}>
      <div style={{ padding: '2.5rem 1.2rem 0', maxWidth: '900px', margin: '0 auto' }}>
        <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Privacy', href: '/privacy' }]} />
      </div>
      <PageHeader label="Legal" title="Privacy Policy" />

      <section style={{ padding: '1rem 1.2rem 3.5rem', maxWidth: '800px', margin: '0 auto' }}>
        <div className="prose-content">
          <p><strong>Last updated:</strong> January 2026</p>

          <p>{AGENCY.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates this website to provide information about our local SEO services to businesses in Farmingdale, NY. This Privacy Policy explains how we handle information collected through this website.</p>

          <h2>Information We Collect</h2>
          <p>When you contact us through our contact form, phone, or WhatsApp, we collect the information you provide: your name, business name, email address, phone number, and any details you share about your business and its current online presence. We use this information solely to respond to your inquiry and, if you become a client, to provide our services.</p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and provide requested services</li>
            <li>To send you audit results, reports, and service-related communications</li>
            <li>To improve our website and services based on your feedback</li>
          </ul>
          <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2>Cookies and Analytics</h2>
          <p>This website does not use tracking cookies or third-party analytics. We do not track your browsing behavior across other websites.</p>

          <h2>Data Retention</h2>
          <p>We retain information you provide through our contact form for as long as needed to respond to your inquiry and provide services. If you request deletion of your information, we will remove it from our active records within 30 days.</p>

          <h2>Your Rights</h2>
          <p>You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, contact us at {AGENCY.phone} or via WhatsApp.</p>

          <h2>Children&apos;s Privacy</h2>
          <p>This website is intended for business owners and does not knowingly collect information from children under 13.</p>

          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at:</p>
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
