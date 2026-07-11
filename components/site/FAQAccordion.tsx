'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-sec" id="faq">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span className="s-label">FAQ</span>
        <h2 className="s-h2" style={{ marginBottom: '2rem' }}>Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{faq.q}</span>
                <Plus className="faq-icon" size={20} />
              </div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
