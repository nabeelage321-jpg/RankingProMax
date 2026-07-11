import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog';
import { PageHeader, Breadcrumb } from '@/components/site/PageHeader';
import { CTABand } from '@/components/site/CTABand';
import { ContactSection } from '@/components/site/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Local SEO Insights for Farmingdale NY | Ranking Pro Max',
  description:
    'Local SEO insights and how-to guides for Farmingdale, NY businesses. Understand the Google local 3-pack, Google Business Profile optimization, and how local search actually works.',
};

export default function BlogIndexPage() {
  return (
    <div style={{ marginTop: 'var(--nav-h)' }}>
      <div style={{ padding: '2.5rem 1.2rem 0', maxWidth: '900px', margin: '0 auto' }}>
        <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]} />
      </div>
      <PageHeader
        label="Blog"
        title="Local SEO insights for Farmingdale businesses."
        subtitle="Practical, no-fluff articles on how local search actually works — and what to do about it."
      />

      <section style={{ padding: '1rem 1.2rem 3.5rem', maxWidth: '800px', margin: '0 auto' }}>
        <div className="grid-border" style={{ gridTemplateColumns: '1fr' }}>
          {BLOG_POSTS.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                <Calendar size={14} style={{ color: 'var(--rust)' }} />
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono), IBM Plex Mono, monospace', color: 'var(--mid)', letterSpacing: '0.05em' }}>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '1.4rem', letterSpacing: '0.02em', lineHeight: 1.1, marginBottom: '0.6rem' }}>
                {post.title}
              </h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--mid)', lineHeight: 1.65 }}>{post.excerpt}</p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--rust)', marginTop: '0.8rem' }}>
                Read Article <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABand
        title="Want this kind of insight applied to your business?"
        subtitle="Free audit, no obligation."
        buttonText="Get Started"
        href="/#contact"
      />

      <ContactSection />
    </div>
  );
}
