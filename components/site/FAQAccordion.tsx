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
  );
}
