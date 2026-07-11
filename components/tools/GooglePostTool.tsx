'use client';

import { useState } from 'react';

export function GooglePostTool() {
  const [businessName, setBusinessName] = useState('');
  const [postType, setPostType] = useState('update');
  const [offer, setOffer] = useState('');
  const [generated, setGenerated] = useState('');

  const generate = () => {
    if (!businessName) return;
    const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

    if (postType === 'offer' && offer) {
      setGenerated(`${businessName} — ${offer}\n\nThis ${date}, we're running a special offer for our Farmingdale customers. ${offer} — available for a limited time.\n\nCall us or visit our website to take advantage. Thank you for supporting a local Farmingdale business!`);
    } else if (postType === 'event') {
      setGenerated(`${businessName} — Upcoming Event\n\nWe're excited to share what's happening this ${date} at ${businessName} in Farmingdale, NY. Whether you're a regular or a first-time visitor, we'd love to see you.\n\nCheck our website for details and hours. See you soon!`);
    } else {
      setGenerated(`${businessName} — ${date} Update\n\nAt ${businessName}, we're proud to serve Farmingdale, NY. Whether you need our services or just have a question, we're here and ready to help.\n\nGive us a call or visit our website to learn more. Thank you for choosing local!`);
    }
  };

  return (
    <div style={{ padding: '1.5rem 1rem' }}>
      <div className="fg" style={{ marginBottom: '1rem' }}>
        <label>Business Name</label>
        <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="e.g. Smith HVAC" style={{ width: '100%', padding: '0.8rem 1rem', background: 'var(--pale)', border: '1.5px solid var(--border)', borderRadius: '2px', fontSize: '16px', minHeight: '48px', boxSizing: 'border-box' }} />
      </div>
      <div className="fg" style={{ marginBottom: '1rem' }}>
        <label>Post Type</label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['update', 'offer', 'event'].map((t) => (
            <button key={t} onClick={() => setPostType(t)} className="btn" style={{ flex: 1, minHeight: '40px', fontSize: '0.75rem', textTransform: 'capitalize', background: postType === t ? 'var(--rust)' : 'transparent', color: postType === t ? '#fff' : 'var(--ink)', border: postType === t ? 'none' : '1.5px solid var(--border)' }}>{t}</button>
          ))}
        </div>
      </div>
      {postType === 'offer' && (
        <div className="fg" style={{ marginBottom: '1.5rem' }}>
          <label>What's the offer?</label>
          <input type="text" value={offer} onChange={(e) => setOffer(e.target.value)} placeholder="e.g. $50 off AC tune-ups this month" style={{ width: '100%', padding: '0.8rem 1rem', background: 'var(--pale)', border: '1.5px solid var(--border)', borderRadius: '2px', fontSize: '16px', minHeight: '48px', boxSizing: 'border-box' }} />
        </div>
      )}
      <button onClick={generate} className="btn btn-r" style={{ width: '100%', marginBottom: '1.5rem' }}>Generate Post</button>

      {generated && (
        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid)', marginBottom: '0.5rem' }}>Your Google Post</div>
          <div style={{ background: 'var(--cream)', padding: '1.5rem', borderRadius: '2px', whiteSpace: 'pre-wrap', fontSize: '0.85rem', lineHeight: 1.7 }}>{generated}</div>
          <button onClick={() => navigator.clipboard.writeText(generated)} className="btn btn-k" style={{ marginTop: '1rem', width: '100%' }}>Copy Post</button>
        </div>
      )}
    </div>
  );
}
