import './globals.css';
import type { Metadata } from 'next';
import { Big_Shoulders_Display, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { Nav } from '@/components/site/Nav';
import { Footer } from '@/components/site/Footer';
import { MobileFAB } from '@/components/site/MobileFAB';

const SITE_URL = 'https://rankingpromax.com';

const bigShoulders = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ranking Pro Max — Local SEO Agency Farmingdale NY',
    template: '%s | Ranking Pro Max',
  },
  description:
    'Ranking Pro Max is the local SEO agency Farmingdale NY businesses call — providing Google Business Profile management, local SEO services, citations, AI chatbots, websites, and social media management. Based at 8 Carmans Ct, Farmingdale, NY 11735.',
  keywords: [
    'local SEO agency Farmingdale NY',
    'Google Business Profile management Farmingdale',
    'local SEO services Farmingdale NY',
    'citation building Farmingdale NY',
    'AI chatbot development Farmingdale',
    'website development Farmingdale NY',
    'social media management Farmingdale',
    'local SEO optimization Long Island',
    'Google Business Profile optimization NY',
    'local SEO near me Farmingdale',
  ],
  authors: [{ name: 'Ranking Pro Max' }],
  creator: 'Ranking Pro Max',
  publisher: 'Ranking Pro Max',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Ranking Pro Max',
    title: 'Ranking Pro Max — Local SEO Agency Farmingdale NY',
    description:
      'Local SEO agency in Farmingdale, NY — Google Business Profile management, citations, website development, AI chatbots, and full local SEO strategy. Published pricing. One town focus.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ranking Pro Max — Local SEO Agency in Farmingdale, NY',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ranking Pro Max — Local SEO Agency Farmingdale NY',
    description:
      'Local SEO agency in Farmingdale, NY — Google Business Profile management, citations, websites, AI chatbots, and full local SEO strategy.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'google-site-verification=YOUR_VERIFICATION_CODE',
  },
  other: {
    'geo.region': 'US-NY',
    'geo.placename': 'Farmingdale',
    'geo.position': '40.7326;-73.4453',
    ICBM: '40.7326, -73.4453',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bigShoulders.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body style={{ fontFamily: 'var(--font-sans), IBM Plex Sans, sans-serif' }}>
        <Nav />
        {children}
        <Footer />
        <MobileFAB />
      </body>
    </html>
  );
}
