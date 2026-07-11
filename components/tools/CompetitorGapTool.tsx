'use client';

import { useState } from 'react';

const FACTORS = [
  'Google reviews count',
  'Average star rating',
  'Review recency (last 30 days)',
  'Profile completeness (categories, attributes)',
  'Number of photos',
  'Photo recency',
  'Google Posts in last 30 days',
  'Q&A section filled out',
  'Website quality & speed',
  'Citation consistency across directories',
  'Local backlinks',
  'Schema markup on website',
];

export function CompetitorGapTool() {
  const [you, setYou] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const betterCount = Object.values(you).filter((v) => v === 'better').length;
  const worseCount = Object.values(you).filter((v) => v === 'worse').length;
  const equalCount = Object.values(you).filter((v) => v === 'equal').length;

  return (
    <div style={{ padding: '1.5rem 1rem' }}>
      {showResults ? (
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '2.5rem', color: '#3D5A80' }}>{betterCount}</div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--mid)' }}>You&apos;re Ahead</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '2.5rem', color: 'var(--mid)' }}>{equalCount}</div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--mid)' }}>Tied</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '2.5rem', color: '#c0392b' }}>{worseCount}</div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--mid)' }}>Behind</div>
            </div>
          </div>
          <div style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
            {FACTORS.map((f, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.82rem' }}>
                <span>{f}</span>
                <span style={{ fontWeight: 600, color: you[i] === 'better' ? '#3D5A80' : you[i] === 'worse' ? '#c0392b' : 'var(--mid)' }}>
                  {you[i] === 'better' ? '✓ Ahead' : you[i] === 'worse' ? '✗ Behind' : '= Tied'}
                </span>
              </div>
            ))}
          </div>
          <button onClick={() => setShowResults(false)} className="btn btn-k" style={{ marginTop: '2rem' }}>Start Over</button>
        </div>
      ) : (
        <>
          <p style={{ fontSize: '0.85rem', color: 'var(--mid)', marginBottom: '1.5rem' }}>
            For each factor, select whether your business is ahead, tied, or behind your competitor.
          </p>
          {FACTORS.map((factor, i) => (
            <div key={i} style={{ padding: '0.8rem 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>{factor}</div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {(['better', 'equal', 'worse']).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setYou({ ...you, [i]: opt })}
                    className="btn"
                    style={{
                      flex: 1,
                      minHeight: '36px',
                      fontSize: '0.72rem',
                      textTransform: 'capitalize',
                      background: you[i] === opt ? (opt === 'better' ? '#3D5A80' : opt === 'worse' ? '#c0392b' : 'var(--mid)') : 'transparent',
                      color: you[i] === opt ? '#fff' : 'var(--ink)',
                      border: you[i] === opt ? 'none' : '1.5px solid var(--border)',
                    }}
                  >
                    {opt === 'better' ? 'Ahead' : opt === 'equal' ? 'Tied' : 'Behind'}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={() => setShowResults(true)} className="btn btn-r" style={{ width: '100%', marginTop: '1.5rem' }}>See Results</button>
        </>
      )}
    </div>
  );
}
