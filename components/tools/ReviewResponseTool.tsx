'use client';

import { useState } from 'react';

const TEMPLATES: Record<number, string[]> = {
  5: [
    'Thank you so much for the 5-star review! We really appreciate you taking the time to share your experience. It was a pleasure working with you, and we\'re here whenever you need us again.',
    'Thank you for the kind words! We\'re thrilled you had a great experience with us. Reviews like yours help other Farmingdale customers know what to expect, and we truly appreciate it.',
    'We\'re so grateful for your review! Thank you for choosing us and for taking the time to share your feedback. Looking forward to helping you again in the future.',
  ],
  4: [
    'Thank you for the review and for choosing us! We\'re glad you had a positive experience. If there\'s anything we could have done to make it a 5-star visit, please let us know — we\'re always looking to improve.',
    'Thank you for your feedback! We appreciate you taking the time to share your experience. We\'re glad we met your expectations and hope to exceed them next time.',
  ],
  3: [
    'Thank you for taking the time to leave a review. We appreciate your honest feedback and take it seriously. If there\'s anything specific we could have done better, we\'d love to hear from you directly — please reach out anytime.',
    'Thank you for your review. We\'re always working to improve, and feedback like yours helps us do that. If you\'d like to discuss your experience further, please don\'t hesitate to reach out.',
  ],
  2: [
    'Thank you for your feedback. We\'re sorry your experience didn\'t meet expectations, and we take that seriously. We\'d like to make it right — please reach out to us directly so we can understand what happened and how we can improve.',
    'We appreciate you sharing your experience, and we\'re sorry we fell short. Your feedback helps us identify where we need to do better. Please contact us directly if you\'d be willing to give us another chance.',
  ],
  1: [
    'We\'re genuinely sorry your experience was a negative one. That\'s not the standard we hold ourselves to, and we take your feedback seriously. Please reach out to us directly so we can understand what went wrong and work to make it right.',
    'Thank you for sharing this feedback, even though it\'s hard to hear. We take every review seriously and want to understand what happened. Please contact us directly — we\'d appreciate the opportunity to make things right.',
  ],
};

export function ReviewResponseTool() {
  const [rating, setRating] = useState(5);
  const [businessName, setBusinessName] = useState('');
  const [variant, setVariant] = useState(0);

  const template = businessName
    ? TEMPLATES[rating][variant].replace(/us/g, businessName).replace(/we/g, businessName)
    : TEMPLATES[rating][variant];

  return (
    <div style={{ padding: '1.5rem 1rem' }}>
      <div className="fg" style={{ marginBottom: '1rem' }}>
        <label>Review Star Rating</label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => { setRating(n); setVariant(0); }}
              className="btn"
              style={{
                flex: 1,
                minHeight: '44px',
                fontSize: '1rem',
                background: rating === n ? 'var(--rust)' : 'transparent',
                color: rating === n ? '#fff' : 'var(--ink)',
                border: rating === n ? 'none' : '1.5px solid var(--border)',
              }}
            >
              {'★'.repeat(n)}
            </button>
          ))}
        </div>
      </div>
      <div className="fg" style={{ marginBottom: '1.5rem' }}>
        <label>Your Business Name (optional)</label>
        <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="e.g. Smith HVAC" style={{ width: '100%', padding: '0.8rem 1rem', background: 'var(--pale)', border: '1.5px solid var(--border)', borderRadius: '2px', fontSize: '16px', minHeight: '48px', boxSizing: 'border-box' }} />
      </div>
      <div>
        <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid)', marginBottom: '0.5rem' }}>Response Template</div>
        <div style={{ background: 'var(--cream)', padding: '1.5rem', borderRadius: '2px', fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--ink)' }}>{template}</div>
        {TEMPLATES[rating].length > 1 && (
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            {TEMPLATES[rating].map((_, i) => (
              <button key={i} onClick={() => setVariant(i)} className="btn" style={{ flex: 1, minHeight: '36px', fontSize: '0.72rem', background: variant === i ? 'var(--sage)' : 'transparent', color: variant === i ? '#fff' : 'var(--ink)', border: variant === i ? 'none' : '1.5px solid var(--border)' }}>
                Option {i + 1}
              </button>
            ))}
          </div>
        )}
        <button onClick={() => navigator.clipboard.writeText(template)} className="btn btn-k" style={{ marginTop: '1rem', width: '100%' }}>Copy Response</button>
      </div>
    </div>
  );
}
