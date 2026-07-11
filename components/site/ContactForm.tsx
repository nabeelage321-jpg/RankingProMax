'use client';

import { useState } from 'react';
import { AGENCY } from '@/lib/agency';
import { SERVICES } from '@/lib/services';
import { Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function ContactForm({ subject }: { subject?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <CheckCircle size={48} style={{ color: 'var(--sage)', marginBottom: '1rem' }} />
        <h3 style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
          Thanks — message received.
        </h3>
        <p style={{ color: 'var(--mid)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          You&apos;ll hear back directly. In the meantime, feel free to explore our free tools or quick wins.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tools" className="btn btn-k">Free Tools</Link>
          <Link href="/quick-wins" className="btn btn-r">Quick Wins</Link>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {subject && (
        <input type="hidden" name="subject" value={subject} />
      )}
      <div className="f-row">
        <div className="fg">
          <label htmlFor="name">Your Name</label>
          <input id="name" name="name" type="text" required placeholder="John Smith" />
        </div>
        <div className="fg">
          <label htmlFor="business">Business Name</label>
          <input id="business" name="business" type="text" placeholder="Smith HVAC" />
        </div>
      </div>
      <div className="f-row">
        <div className="fg">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="john@smithhvac.com" />
        </div>
        <div className="fg">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="(516) 555-0000" />
        </div>
      </div>
      <div className="fg">
        <label htmlFor="service">What are you interested in?</label>
        <select id="service" name="service" defaultValue={subject || ''}>
          <option value="" disabled>Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Quick Wins">Quick Wins ($30/$50 tools)</option>
          <option value="Free Tools">Free Tools</option>
          <option value="General">General Inquiry</option>
        </select>
      </div>
      <div className="fg">
        <label htmlFor="message">Tell us about your business</label>
        <textarea id="message" name="message" placeholder="What do you do? What's your current online presence like? What are you trying to improve?" />
      </div>
      <button type="submit" className="btn btn-r" style={{ width: '100%' }}>
        <Send size={16} /> Send Message
      </button>
      <p style={{ fontSize: '0.72rem', color: 'var(--mid)', textAlign: 'center', marginTop: '0.5rem' }}>
        Or call <a href={`tel:${AGENCY.phoneRaw}`} style={{ color: 'var(--rust)' }}>{AGENCY.phone}</a> or message us on{' '}
        <a href={`https://wa.me/${AGENCY.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--rust)' }}>WhatsApp</a>
      </p>
    </form>
  );
}
