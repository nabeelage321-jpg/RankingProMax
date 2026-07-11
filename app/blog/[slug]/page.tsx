import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Calendar, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS, getBlogPostBySlug, getBlogSlugs } from '@/lib/blog';
import { Breadcrumb } from '@/components/site/PageHeader';
import { CTABand } from '@/components/site/CTABand';
import { ContactSection } from '@/components/site/ContactSection';
import { BreadcrumbSchema } from '@/components/site/Schema';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDesc,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      <article style={{ marginTop: 'var(--nav-h)' }}>
        <div style={{ padding: '2.5rem 1.2rem 0', maxWidth: '800px', margin: '0 auto' }}>
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }, { name: post.title.slice(0, 40) + '...', href: `/blog/${post.slug}` }]} />
        </div>

        <header style={{ padding: '1rem 1.2rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Calendar size={14} style={{ color: 'var(--rust)' }} />
            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono), IBM Plex Mono, monospace', color: 'var(--mid)', letterSpacing: '0.05em' }}>
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 className="s-h2" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', lineHeight: 1.05 }}>{post.title}</h1>
        </header>

        <section style={{ padding: '0 1.2rem 3rem', maxWidth: '800px', margin: '0 auto' }}>
          <div className="prose-content" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
        </section>

        {/* Other Posts */}
        {otherPosts.length > 0 && (
          <section style={{ padding: '2rem 1.2rem', background: 'var(--cream)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="s-label">Keep Reading</span>
              <div className="grid-border" style={{ gridTemplateColumns: '1fr' }}>
                {otherPosts.map((p) => (
                  <Link href={`/blog/${p.slug}`} key={p.slug} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '1.1rem', marginBottom: '0.3rem' }}>{p.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--mid)' }}>{p.excerpt}</p>
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="btn btn-k" style={{ marginTop: '1rem' }}>
                <ArrowLeft size={16} /> All Posts
              </Link>
            </div>
          </section>
        )}

        <CTABand
          title="Ready to put these insights into action?"
          subtitle="Free audit for your Farmingdale business."
          buttonText="Get Your Free Audit"
          href="/#contact"
        />

        <ContactSection />
      </article>
    </>
  );
}
