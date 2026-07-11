'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AGENCY } from '@/lib/agency';
import { SERVICES } from '@/lib/services';

export function ContactSection() {
  const [name, setName] = useState('');
  const [biz, setBiz] = useState('');
  const [area, setArea] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hi! I'm requesting a free audit.%0AName: ${name}%0ABusiness: ${biz}%0AArea: ${area}%0AService interested in: ${service}%0AMessage: ${message}`;
    window.open(`https://wa.me/${AGENCY.whatsapp}?text=${text}`, '_blank');
  }

  return (
    <>
      <section className="contact-sec" id="contact" style={{ padding: '5rem 1.2rem', background: 'var(--pale)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <span className="s-label">Get In Touch</span>
          <h2 className="s-h2" style={{ marginBottom: '0.6rem' }}>Get your free audit.</h2>
          <p className="sub" style={{ marginBottom: '2rem' }}>
            No pressure, no scripted sales call — just a clear look at where your business stands in Farmingdale search results right now.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="fg">
              <label>Your Name *</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
            </div>
            <div className="fg">
              <label>Business Name *</label>
              <input value={biz} onChange={(e) => setBiz(e.target.value)} placeholder="Your Business Name" required />
            </div>
            <div className="fg">
              <label>Your Area of Farmingdale</label>
              <input
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="e.g. Main Street, Route 109, Route 110..."
              />
            </div>
            <div className="fg">
              <label>Service(s) You Need *</label>
              <select value={service} onChange={(e) => setService(e.target.value)} required>
                <option value="">Select a service...</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="fg">
              <label>Anything Else?</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us a bit about your business..."
                rows={4}
              />
            </div>
            <button type="submit" className="btn btn-r" style={{ justifyContent: 'center' }}>
              Send via WhatsApp
            </button>
          </form>

          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--mid)' }}>
            <div>📞 <a href={`tel:${AGENCY.phoneRaw}`}>{AGENCY.phone}</a></div>
            <div style={{ marginTop: '0.4rem' }}>
              💬 <a href={`https://wa.me/${AGENCY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                WhatsApp: {AGENCY.phone}
              </a>
            </div>
            <div style={{ marginTop: '0.4rem' }}>📍 {AGENCY.address}</div>
          </div>
        </div>
      </section>

      <footer>
        <div className="f-brand">
          <span className="logo">
            Ranking<span style={{ color: 'var(--rust)' }}> Pro Max</span>
          </span>
          <p style={{ marginTop: '0.8rem' }}>
            Farmingdale, NY&apos;s local SEO specialists. Helping Farmingdale businesses rank #1 on Google.
          </p>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>More Services</h5>
          <ul>
            {SERVICES.slice(6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/process">Our Process</Link></li>
            <li><Link href="/tools">Free Tools</Link></li>
            <li><Link href="/quick-wins">Quick Wins</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
      </footer>
      <div className="f-bottom">
        <span>© 2026 Ranking Pro Max. All rights reserved. · {AGENCY.address}</span>
        <span>Serving Farmingdale, NY</span>
      </div>
    </>
  );
}
