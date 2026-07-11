'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, ArrowRight, MapPin, Link2, Globe, Bot, BarChart3, CheckCircle2, Calendar, FileText, Phone, Share2, Palette } from 'lucide-react';
import { WHAT_WE_DO, RANK_FACTORS, WHO_FOR, TRUST_POINTS, HOME_FAQS, PROCESS_STEPS } from '@/lib/agency';
import { SERVICES } from '@/lib/services';
import { Ticker } from '@/components/site/Ticker';
import { CTABand } from '@/components/site/CTABand';
import { ContactSection } from '@/components/site/ContactSection';
import { FAQSchema, BusinessSchema, SpeakableSchema, WebsiteSchema } from '@/components/site/Schema';
import { AnimatedCounter } from '@/components/site/AnimatedCounter';
import { RankingFactors } from '@/components/site/RankingFactors';
import { BeforeAfter } from '@/components/site/BeforeAfter';
import { LocalSeoGauge } from '@/components/site/LocalSeoGauge';

const SVC_ICONS: Record<string, typeof MapPin> = {
  'gbp-claiming-verification': MapPin,
  'gbp-optimization': CheckCircle2,
  'gbp-monthly-management': Calendar,
  'citation-building-farmingdale-ny': Link2,
  'website-development': Globe,
  'qa-chatbot': FileText,
  'ai-chatbot': Bot,
  'ai-agent': Phone,
  'local-seo-optimization': BarChart3,
  'social-media-handle-setup': Share2,
  'social-media-management': Share2,
  'branding-services': Palette,
};

export default function HomePage() {
  const [wwdOpen, setWwdOpen] = useState<number | null>(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <>
      <BusinessSchema />
      <WebsiteSchema />
      <SpeakableSchema url="https://rankingpromax.com/" />
      <FAQSchema faqs={HOME_FAQS} />

      {/* HERO */}
      <section className="hero" style={{ marginTop: 'var(--nav-h)' }}>
        <div className="hero-l">
          <span className="tag">Local SEO Agency · Farmingdale, NY</span>
          <h1 className="h1" id="hero-title">
            We get Farmingdale<br />businesses <em>found.</em>
          </h1>
          <p className="sub" id="hero-subtitle" style={{ maxWidth: '520px' }}>
            Google Business Profile management, local SEO, citations, websites, and AI chatbots — built for businesses along Route 109, Route 110, and Main Street that need to show up when someone nearby searches &quot;near me.&quot;
          </p>
          <div className="btns">
            <Link href="/services" className="btn btn-r">See Services <ArrowRight size={16} /></Link>
            <Link href="/tools" className="btn btn-k">Free Tools</Link>
          </div>
          <div className="stats">
            <div>
              <div className="stat-n"><AnimatedCounter target={11} /></div>
              <div className="stat-l">Services</div>
            </div>
            <div>
              <div className="stat-n"><AnimatedCounter target={10} /></div>
              <div className="stat-l">Free Tools</div>
            </div>
            <div>
              <div className="stat-n"><AnimatedCounter target={30} /></div>
              <div className="stat-l">Quick Wins</div>
            </div>
          </div>
        </div>
        <div className="hero-r">
          <div className="hero-r-bg" />
          <div className="hero-r-content">
            <div className="rank-gauge">
              <div className="rank-ticks">
                {Array.from({ length: 20 }).map((_, i) => (
                  <span key={i} />
                ))}
              </div>
              <div className="rank-track">
                <div className="rank-zone">#100+</div>
                <div className="rank-zone">#50</div>
                <div className="rank-zone target">#1-3</div>
                <div className="rank-marker" style={{ left: '81%' }} />
              </div>
              <div className="rank-caption">Your Local Rank → 3-Pack</div>
            </div>
            <div className="hero-kpi">Estimated Monthly Searches</div>
            <div className="hero-kpi-n"><span>2,400</span></div>
            <div className="live-badge">
              <span className="dot" /> Live · Farmingdale, NY 11735
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* WHAT WE DO - ACCORDION */}
      <section className="services-sec">
        <div className="services-hdr">
          <div>
            <span className="s-label gold">What We Do</span>
            <h2 className="s-h2 light">Everything your business<br />needs to rank locally.</h2>
          </div>
          <Link href="/services" className="btn btn-w" style={{ flexShrink: 0 }}>
            All Services <ArrowRight size={16} />
          </Link>
        </div>
        <div className="wwd-list">
          {WHAT_WE_DO.map((item, i) => (
            <div className={`wwd-item ${wwdOpen === i ? 'open' : ''}`} key={i} onClick={() => setWwdOpen(wwdOpen === i ? null : i)}>
              <div className="wwd-head">
                <span className="wwd-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="wwd-em">{item.icon}</span>
                <span className="wwd-name">{item.name}</span>
                <Plus className="wwd-plus" size={20} />
              </div>
              <div className="wwd-body">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RANKING FACTORS — ANIMATED INFOGRAPHIC */}
      <section style={{ padding: '4rem 1.2rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span className="s-label">Ranking Factors</span>
          <h2 className="s-h2" style={{ marginBottom: '0.8rem' }}>What actually moves the needle.</h2>
          <p className="sub" style={{ maxWidth: '600px', marginBottom: '2.5rem' }}>
            These are the factors Google weighs for local 3-pack rankings. Most Farmingdale businesses are leaving points on the table in at least two or three of them.
          </p>
          <RankingFactors />
        </div>
      </section>

      {/* BEFORE / AFTER INFOGRAPHIC */}
      <section style={{ padding: '4rem 1.2rem', background: 'var(--pale)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="s-label">The Difference</span>
          <h2 className="s-h2" style={{ marginBottom: '0.8rem' }}>Before vs after<br />optimization.</h2>
          <p className="sub" style={{ maxWidth: '600px', marginBottom: '2.5rem' }}>
            What your Google Business Profile looks like before we start, and what it looks like when we&apos;re done.
          </p>
          <BeforeAfter />
        </div>
      </section>

      {/* LOCAL SEO SCORE GAUGE */}
      <section style={{ padding: '4rem 1.2rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <span className="s-label">Free Score</span>
          <h2 className="s-h2" style={{ marginBottom: '1.5rem' }}>Where does your<br />business stand?</h2>
          <LocalSeoGauge />
          <Link href="/tools/local-seo-score" className="btn btn-r" style={{ marginTop: '2rem' }}>
            Get Your Full Score <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* PERSONA GRID */}
      <section style={{ padding: '4rem 1.2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span className="s-label">Who This Is For</span>
          <h2 className="s-h2" style={{ marginBottom: '0.8rem' }}>Built for Farmingdale<br />businesses like yours.</h2>
          <div className="who-grid">
            {WHO_FOR.map((persona, i) => (
              <div className="who-card" key={i}>
                <span className="who-tag">{persona.tag}</span>
                <p>{persona.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="trust-sec">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span className="s-label gold">Why Ranking Pro Max</span>
          <h2 className="s-h2 light">Honest positioning, not<br />inflated claims.</h2>
          <div className="trust-grid">
            {TRUST_POINTS.map((point, i) => (
              <div className="trust-card" key={i}>
                <span className="t-icon">{point.icon}</span>
                <p>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-sec" id="services">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="services-hdr">
            <div>
              <span className="s-label gold">Our Services</span>
              <h2 className="s-h2 light" style={{ marginBottom: '0.8rem' }}>
                Eleven services.<br />One town.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '520px' }}>
                From Google Business Profile claiming to full local SEO strategy — every service is built for Farmingdale businesses, with published pricing and no &quot;book a call to find out&quot; nonsense.
              </p>
            </div>
            <Link href="/services" className="btn btn-w" style={{ flexShrink: 0 }}>
              All Services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid-border dark svc-grid">
            {SERVICES.map((svc) => {
              const Icon = SVC_ICONS[svc.slug] || CheckCircle2;
              return (
                <Link href={`/services/${svc.slug}`} key={svc.slug} className="card dark svc-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <span className="svc-num">{svc.num}</span>
                  <span className="svc-em" style={{ color: 'var(--rust)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '6px', background: 'rgba(199,74,44,0.12)', marginBottom: '1rem' }}>
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <h3 style={{ fontWeight: 700 }}>{svc.title}</h3>
                  <p>{svc.shortDesc}</p>
                  <span className="svc-arrow">Learn more <ArrowRight size={14} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="process-sec" id="process">
        <div className="process-hdr" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span className="s-label">Our Process</span>
          <h2 className="s-h2">How it works.</h2>
        </div>
        <div className="steps" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {PROCESS_STEPS.map((step, i) => (
            <div className="step" key={i}>
              <div className="step-c">
                {step.icon}
                <span className="step-n">{i + 1}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '1.15rem', letterSpacing: '0.03em', marginBottom: '0.4rem' }}>{step.name}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        title="Ready to show up when customers search?"
        subtitle="Free audit, no obligation, no sales call."
        buttonText="Get Your Free Audit"
        href="/#contact"
      />

      {/* FAQ */}
      <section className="faq-sec" id="faq">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="s-label">FAQ</span>
          <h2 className="s-h2" style={{ marginBottom: '2rem' }}>Questions, answered.</h2>
          <div>
            {HOME_FAQS.map((faq, i) => (
              <div className={`faq-item ${faqOpen === i ? 'open' : ''}`} key={i}>
                <div className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                  <span>{faq.q}</span>
                  <Plus className="faq-icon" size={20} />
                </div>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
