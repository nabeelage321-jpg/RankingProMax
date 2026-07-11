'use client';

import { useState } from 'react';

const QUESTIONS = [
  { q: 'Is your Google Business Profile claimed, verified, and fully filled out?', pts: 10 },
  { q: 'Do you have a mobile-friendly website?', pts: 10 },
  { q: 'Does your website have local SEO schema markup?', pts: 10 },
  { q: 'Are your business listings (NAP) consistent across all directories?', pts: 10 },
  { q: 'Do you have 20+ Google reviews?', pts: 10 },
  { q: 'Have you received new reviews in the last 30 days?', pts: 10 },
  { q: 'Do you respond to all reviews within 48 hours?', pts: 10 },
  { q: 'Do you publish Google Posts at least once a week?', pts: 10 },
  { q: 'Do you have local backlinks (chamber of commerce, local directories)?', pts: 10 },
  { q: 'Do you track your local search rankings monthly?', pts: 10 },
];

export function LocalSeoScoreTool() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [score, setScore] = useState<number | null>(null);

  const calculate = () => {
    const total = QUESTIONS.reduce((sum, q, i) => sum + (answers[i] ? q.pts : 0), 0);
    setScore(total);
  };

  const reset = () => {
    setAnswers({});
    setScore(null);
  };

  if (score !== null) {
    const grade = score >= 80 ? 'Strong' : score >= 60 ? 'Decent' : score >= 40 ? 'Needs Work' : 'Critical Gap';
    const color = score >= 80 ? '#3D5A80' : score >= 60 ? '#C97A2B' : score >= 40 ? '#F0C674' : '#c0392b';

    return (
      <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '4rem', color, lineHeight: 1, marginBottom: '0.5rem' }}>
          {score}<span style={{ fontSize: '1.5rem' }}>/100</span>
        </div>
        <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>{grade}</div>
        <div style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
          {QUESTIONS.map((q, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.82rem' }}>
              <span style={{ color: answers[i] ? 'var(--mid)' : 'var(--ink)', flex: 1 }}>{q.q}</span>
              <span style={{ fontWeight: 600, color: answers[i] ? '#3D5A80' : '#c0392b' }}>{answers[i] ? '✓' : '✗'}</span>
            </div>
          ))}
        </div>
        <button onClick={reset} className="btn btn-k" style={{ marginTop: '2rem' }}>Retake Check</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '1.5rem 1rem' }}>
      {QUESTIONS.map((item, i) => (
        <div key={i} style={{ padding: '1rem 0', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.88rem', flex: 1 }}>{item.q}</span>
          <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
            <button onClick={() => setAnswers({ ...answers, [i]: true })} className="btn" style={{ minHeight: '36px', padding: '0.3rem 0.8rem', fontSize: '0.75rem', background: answers[i] === true ? 'var(--sage)' : 'transparent', color: answers[i] === true ? '#fff' : 'var(--ink)', border: answers[i] === true ? 'none' : '1.5px solid var(--border)' }}>Yes</button>
            <button onClick={() => setAnswers({ ...answers, [i]: false })} className="btn" style={{ minHeight: '36px', padding: '0.3rem 0.8rem', fontSize: '0.75rem', background: answers[i] === false ? '#c0392b' : 'transparent', color: answers[i] === false ? '#fff' : 'var(--ink)', border: answers[i] === false ? 'none' : '1.5px solid var(--border)' }}>No</button>
          </div>
        </div>
      ))}
      <button onClick={calculate} className="btn btn-r" style={{ width: '100%', marginTop: '1.5rem' }}>Get My Score</button>
    </div>
  );
}
