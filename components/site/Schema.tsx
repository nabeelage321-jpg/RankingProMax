import { AGENCY } from '@/lib/agency';

interface FAQItem {
  q: string;
  a: string;
}

export function BusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: AGENCY.name,
    telephone: AGENCY.phoneRaw,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8 Carmans Ct',
      addressLocality: 'Farmingdale',
      addressRegion: 'NY',
      postalCode: '11735',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: 'Farmingdale',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: AGENCY.name,
    url: 'https://rankingpromax.com/',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SpeakableSchema({ url }: { url: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.sub', '.faq-a'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  slug?: string;
  price?: string;
}

export function ServiceSchema({ name, description, slug, price }: ServiceSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'ProfessionalService',
      name: AGENCY.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '8 Carmans Ct',
        addressLocality: 'Farmingdale',
        addressRegion: 'NY',
        postalCode: '11735',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Farmingdale',
    },
    ...(slug ? { url: `https://rankingpromax.com/services/${slug}` } : {}),
    ...(price ? { offers: { '@type': 'Offer', price, priceCurrency: 'USD' } } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
