import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { QUICK_WINS as QUICK_WIN_ITEMS } from '@/lib/quickWins';
import { PageHeader, Breadcrumb } from '@/components/site/PageHeader';
import { CTABand } from '@/components/site/CTABand';
import { ContactSection } from '@/components/site/ContactSection';
import { AGENCY } from '@/lib/agency';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quick Wins — Affordable Digital Marketing Services Farmingdale NY',
  description:
    '30 affordable digital marketing tools for Farmingdale, NY small businesses — priced at $30 or $50 each. No contract, no sales call. Order what you need on WhatsApp.',
};

const FAQS = [
  { q: 'How do I actually order one of these?', a: 'You message us on WhatsApp and tell us which tool you want by name. We\'ll confirm the price, ask a couple quick questions if we need any details from you, and get started. There\'s no form to fill out and no sales call — just a message and a straightforward yes or no on the details.' },
  { q: 'How long does a one-time tool take to complete?', a: 'Most one-time tools are finished within a few business days of us having what we need from you, like login access or a few pieces of content. Some smaller items, like a template pack or bio writing, can be done even faster. We\'ll always give you a specific timeframe when you order.' },
  { q: 'Do these count toward a bigger package later?', a: 'If you decide to move into a full monthly package down the road, we\'ll take into account what you\'ve already ordered here and won\'t have you pay twice for overlapping work. It\'s a good low-risk way to get a feel for working with us first.' },
  { q: 'Do these come with a guarantee or revisions?', a: 'Every tool includes a round of revisions if something isn\'t quite right, since these are meant to work for your business, not just be delivered and forgotten. We don\'t guarantee specific rankings or results, since no honest business can promise that, but we do guarantee the work is done correctly.' },
  { q: 'What\'s the difference between one-time tools and monthly ones?', a: 'One-time tools are set up once and then they\'re yours to keep using, like a landing page or a report. Monthly tools, like auto-reply bots or rank tracking, involve ongoing work on our end, so they\'re billed month to month and can be cancelled anytime with no lock-in.' },
];

export default function QuickWinsPage() {
  const $30Items = QUICK_WIN_ITEMS.filter((item) => item.price === 30);
  const $50Items = QUICK_WIN_ITEMS.filter((item) => item.price === 50);

  return (
    <>
      <div style={{ marginTop: 'var(--nav-h)' }}>
        <div style={{ padding: '2.5rem 1.2rem 0', maxWidth: '900px', margin: '0 auto' }}>
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Quick Wins', href: '/quick-wins' }]} />
        </div>
        <PageHeader
          label="Quick Wins"
          title="Affordable digital marketing services for Farmingdale small businesses."
          subtitle="Not every business is ready to jump into a full monthly marketing package. Everything below is priced at $30 or $50 — pick one thing, see how it works for your business, and order more whenever you're ready. No pressure either way."
        />

        {/* $30 Tools */}
        <section style={{ padding: '2rem 1.2rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '2rem', letterSpacing: '0.03em' }}>$30 Tools</h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--mid)' }}>Single tools and one-time setups</span>
          </div>
          <div className="grid-border qw-grid" style={{ gridTemplateColumns: '1fr' }}>
            {$30Items.map((item) => (
              <div className="card" key={item.num}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono), IBM Plex Mono, monospace', fontSize: '0.65rem', color: 'var(--rust)' }}>
                        {String(item.num).padStart(2, '0')}
                      </span>
                      {item.monthly && (
                        <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--sage)', background: 'rgba(61,90,128,0.1)', padding: '0.15rem 0.5rem', borderRadius: '2px' }}>
                          Monthly
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '1.05rem', letterSpacing: '0.02em', marginBottom: '0.3rem' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--mid)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '1.5rem', color: 'var(--rust)' }}>${item.price}</div>
                    <a
                      href={`https://wa.me/${AGENCY.whatsapp}?text=I%20want%20to%20order%20%23${item.num}%20${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-r"
                      style={{ fontSize: '0.7rem', padding: '0.4rem 0.8rem', minHeight: '36px', marginTop: '0.5rem' }}
                    >
                      <MessageCircle size={14} /> Order
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* $50 Tools */}
        <section style={{ padding: '2rem 1.2rem 3.5rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '2rem', letterSpacing: '0.03em' }}>$50 Tools</h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--mid)' }}>Booking, payments, and lead capture</span>
          </div>
          <div className="grid-border qw-grid" style={{ gridTemplateColumns: '1fr' }}>
            {$50Items.map((item) => (
              <div className="card" key={item.num}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono), IBM Plex Mono, monospace', fontSize: '0.65rem', color: 'var(--rust)' }}>
                        {String(item.num).padStart(2, '0')}
                      </span>
                      {item.monthly && (
                        <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--sage)', background: 'rgba(61,90,128,0.1)', padding: '0.15rem 0.5rem', borderRadius: '2px' }}>
                          Monthly
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '1.05rem', letterSpacing: '0.02em', marginBottom: '0.3rem' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--mid)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '1.5rem', color: 'var(--rust)' }}>${item.price}</div>
                    <a
                      href={`https://wa.me/${AGENCY.whatsapp}?text=I%20want%20to%20order%20%23${item.num}%20${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-r"
                      style={{ fontSize: '0.7rem', padding: '0.4rem 0.8rem', minHeight: '36px', marginTop: '0.5rem' }}
                    >
                      <MessageCircle size={14} /> Order
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-sec">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="s-label">FAQ</span>
            <h2 className="s-h2" style={{ marginBottom: '2rem' }}>Questions about Quick Wins.</h2>
            <div>
              {FAQS.map((faq, i) => (
                <div className="faq-item" key={i}>
                  <div className="faq-q" style={{ cursor: 'pointer' }}>
                    <span>{faq.q}</span>
                    <span style={{ fontSize: '1.1rem', color: 'var(--rust)' }}>+</span>
                  </div>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABand
          title="Ready when you are."
          subtitle="Message us on WhatsApp with the name of the tool you want."
          buttonText="Message on WhatsApp"
          href={`https://wa.me/${AGENCY.whatsapp}`}
        />

        <ContactSection />
      </div>
    </>
  );
}
