'use client';

import { useState } from 'react';

const QUESTIONS = [
  { q: 'Is your Google Business Profile claimed and verified?', pts: 10 },
  { q: 'Do you have a primary category selected?', pts: 8 },
  { q: 'Do you have 2+ secondary categories selected?', pts: 6 },
  { q: 'Does your business description use keywords customers search for?', pts: 8 },
  { q: 'Do you have 10+ real photos on your profile?', pts: 8 },
  { q: 'Were any photos added in the last 90 days?', pts: 6 },
  { q: 'Are your business hours accurate and up to date?', pts: 6 },
  { q: 'Have you published a Google Post in the last 30 days?', pts: 8 },
  { q: 'Is your Q&A section filled with at least 5 questions?', pts: 6 },
  { q: 'Are all applicable attributes filled in (accessibility, payments, etc.)?', pts: 6 },
  { q: 'Do you respond to reviews within 48 hours?', pts: 6 },
  { q: 'Do you have 20+ Google reviews?', pts: 6 },
  { q: 'Were any reviews received in the last 30 days?', pts: 6 },
  { q: 'Is your service area correctly configured?', pts: 5 },
  { q: 'Do you have a website link on your profile?', pts: 5 },
];

export function GBPAuditTool() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [score, setScore] = useState<number | null>(null);

  const totalPossible = QUESTIONS.reduce((sum, q) => sum + q.pts, 0);

  const calculate = () => {
    const total = QUESTIONS.reduce((sum, q, i) => sum + (answers[i] ? q.pts : 0), 0);
    setScore(Math.round((total / totalPossible) * 100));
  };

  const reset = () => {
    setAnswers({});
    setScore(null);
  };

  if (score !== null) {
    const grade = score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : score >= 40 ? 'Needs Work' : 'Critical';
    const color = score >= 80 ? '#3D5A80' : score >= 60 ? '#C97A2B' : score >= 40 ? '#F0C674' : '#c0392b';

    return (
      <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{
          fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif',
          fontSize: '4rem',
          color,
          lineHeight: 1,
          marginBottom: '0.5rem',
        }}>
          {score}<span style={{ fontSize: '1.5rem' }}>/100</span>
        </div>
        <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '1.5rem' }}>{grade}</div>
        <div style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
          {QUESTIONS.map((q, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.5rem 0',
              borderBottom: '1px solid var(--border)',
              fontSize: '0.82rem',
            }}>
              <span style={{ color: answers[i] ? 'var(--mid)' : 'var(--ink)', flex: 1 }}>{q.q}</span>
              <span style={{ fontWeight: 600, color: answers[i] ? '#3D5A80' : '#c0392b' }}>
                {answers[i] ? `+${q.pts}` : '0'}
              </span>
            </div>
          ))}
        </div>
        <button onClick={reset} className="btn btn-k" style={{ marginTop: '2rem' }}>Retake Audit</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '1.5rem 1rem' }}>
      {QUESTIONS.map((item, i) => (
        <div key={i} style={{
          padding: '1rem 0',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          <span style={{ fontSize: '0.88rem', flex: 1 }}>{item.q}</span>
          <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
            <button
              onClick={() => setAnswers({ ...answers, [i]: true })}
              className="btn"
              style={{
                minHeight: '36px',
                padding: '0.3rem 0.8rem',
                fontSize: '0.75rem',
                background: answers[i] === true ? 'var(--sage)' : 'transparent',
                color: answers[i] === true ? '#fff' : 'var(--ink)',
                border: answers[i] === true ? 'none' : '1.5px solid var(--border)',
              }}
            >Yes</button>
            <button
              onClick={() => setAnswers({ ...answers, [i]: false })}
              className="btn"
              style={{
                minHeight: '36px',
                padding: '0.3rem 0.8rem',
                fontSize: '0.75rem',
                background: answers[i] === false ? '#c0392b' : 'transparent',
                color: answers[i] === false ? '#fff' : 'var(--ink)',
                border: answers[i] === false ? 'none' : '1.5px solid var(--border)',
              }}
            >No</button>
          </div>
        </div>
      ))}
      <button onClick={calculate} className="btn btn-r" style={{ width: '100%', marginTop: '1.5rem' }}>
        Calculate My Score
      </button>
    </div>
  );
}
