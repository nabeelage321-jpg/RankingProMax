'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { AGENCY } from '@/lib/agency';

export function MobileFAB() {
  return (
    <div className="mobile-fab">
      <a
        href={`https://wa.me/${AGENCY.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-wa"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a href={`tel:${AGENCY.phoneRaw}`} className="fab-call" aria-label="Call">
        <Phone size={24} />
      </a>
    </div>
  );
}
