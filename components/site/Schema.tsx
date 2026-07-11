import { AGENCY } from '@/lib/agency';

const SITE_URL = 'https://rankingpromax.com';

export function BusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: AGENCY.name,
    description:
      'Local SEO agency in Farmingdale, NY — Google Business Profile management, citations, website development, AI chatbots, and full local SEO strategy.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8 Carmans Ct',
      addressLocality: 'Farmingdale',
      addressRegion: 'NY',
      postalCode: '11735',
      addressCountry: 'US',
    },
    telephone: AGENCY.phone,
    url: SITE_URL,
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Farmingdale, NY',
    },
    foundingDate: '2026',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7326,
      longitude: -73.4453,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '15:00',
      },
    ],
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Local SEO Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Google Business Profile Claiming & Verification' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Google Business Profile Optimization' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Monthly GBP Management' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Citation Building' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Website Development' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Q&A Chatbot' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'AI Chatbot' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'AI Agent' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Local SEO Optimization' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Social Media Handle Setup' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Social Media Management' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Branding Services' },
        },
      ],
    },
    knowsAbout: [
      'Local SEO',
      'Google Business Profile optimization',
      'Citation building',
      'NAP consistency',
      'Local search ranking factors',
      'AI chatbot development',
      'Website development',
      'Social media management',
      'Brand identity design',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  areaServed = 'Farmingdale, NY',
}: {
  name: string;
  description: string;
  areaServed?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    areaServed: {
      '@type': 'City',
      name: areaServed,
    },
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
      telephone: AGENCY.phone,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function HowToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; desc: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.desc,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SpeakableSchema({ url, cssSelector }: { url: string; cssSelector?: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelector || ['#hero-title', '#hero-subtitle', '.s-h2', '.svc-card h3'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Ranking Pro Max',
    description:
      'Local SEO agency in Farmingdale, NY — Google Business Profile management, citations, websites, AI chatbots, and local SEO strategy.',
    publisher: { '@id': `${SITE_URL}/#business` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/tools?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
