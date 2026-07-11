'use client';

import { useState } from 'react';

export function ReviewRequestTool() {
  const [businessName, setBusinessName] = useState('');
  const [channel, setChannel] = useState('sms');
  const [generated, setGenerated] = useState(false);

  const message = businessName
    ? channel === 'sms'
      ? `Hi! Thanks for choosing ${businessName}. If you had a great experience, would you mind leaving us a quick Google review? It takes 30 seconds and means a lot to a small local business. Here's the link: [your Google review link]. Thank you!`
      : channel === 'email'
      ? `Subject: How was your experience with ${businessName}?\n\nHi there,\n\nThank you for choosing ${businessName}. We hope you had a great experience!\n\nIf you have a spare moment, we'd really appreciate a quick Google review. It helps other Farmingdale customers find us and know what to expect.\n\nLeave a review here: [your Google review link]\n\nThank you for your support!\n\n— The ${businessName} Team`
      : `Hi! Thanks for visiting ${businessName}! 😊 If you enjoyed your experience, we'd love it if you could leave us a quick Google review. Just tap here: [your Google review link]. Thanks for supporting local business in Farmingdale!`
    : '';

  return (
    <div style={{ padding: '1.5rem 1rem' }}>
      <div className="fg" style={{ marginBottom: '1rem' }}>
        <label>Your Business Name</label>
        <input type="text" value={businessName} onChange={(e) => { setBusinessName(e.target.value); setGenerated(false); }} placeholder="e.g. Smith HVAC" style={{ width: '100%', padding: '0.8rem 1rem', background: 'var(--pale)', border: '1.5px solid var(--border)', borderRadius: '2px', fontSize: '16px', minHeight: '48px', boxSizing: 'border-box' }} />
      </div>
      <div className="fg" style={{ marginBottom: '1.5rem' }}>
        <label>Channel</label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['sms', 'email', 'whatsapp'].map((ch) => (
            <button key={ch} onClick={() => { setChannel(ch); setGenerated(false); }} className="btn" style={{ flex: 1, minHeight: '40px', fontSize: '0.75rem', textTransform: 'capitalize', background: channel === ch ? 'var(--rust)' : 'transparent', color: channel === ch ? '#fff' : 'var(--ink)', border: channel === ch ? 'none' : '1.5px solid var(--border)' }}>
              {ch === 'sms' ? 'SMS' : ch === 'email' ? 'Email' : 'WhatsApp'}
            </button>
          ))}
        </div>
      </div>
      {businessName && (
        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid)', marginBottom: '0.5rem' }}>Generated Message</div>
          <div style={{ background: 'var(--cream)', padding: '1.5rem', borderRadius: '2px', whiteSpace: 'pre-wrap', fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--ink)' }}>
            {message}
          </div>
          <button onClick={() => navigator.clipboard.writeText(message)} className="btn btn-k" style={{ marginTop: '1rem', width: '100%' }}>
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
}
