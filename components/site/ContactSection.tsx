import { ContactForm } from './ContactForm';
import { AGENCY } from '@/lib/agency';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

export function ContactSection({ subject }: { subject?: string }) {
  return (
    <section className="contact-sec" id="contact">
      <div className="contact-l">
        <span className="s-label">Get In Touch</span>
        <h2>Let&apos;s talk about your Farmingdale business.</h2>
        <p>
          No sales call, no pressure. Tell us what you do and what you&apos;re trying to improve — you&apos;ll hear back directly from the person who&apos;ll actually be doing the work.
        </p>
        <div>
          <div className="ci">
            <MapPin size={18} style={{ color: 'var(--rust)', flexShrink: 0 }} />
            <span>{AGENCY.address}</span>
          </div>
          <div className="ci">
            <Phone size={18} style={{ color: 'var(--rust)', flexShrink: 0 }} />
            <a href={`tel:${AGENCY.phoneRaw}`}>{AGENCY.phone}</a>
          </div>
          <div className="ci">
            <MessageCircle size={18} style={{ color: 'var(--rust)', flexShrink: 0 }} />
            <a href={`https://wa.me/${AGENCY.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>
          <div className="ci">
            <Clock size={18} style={{ color: 'var(--rust)', flexShrink: 0 }} />
            <span>Mon–Fri, 9am–6pm ET</span>
          </div>
        </div>
      </div>
      <div className="contact-r" style={{ flex: 1 }}>
        <ContactForm subject={subject} />
      </div>
    </section>
  );
}
