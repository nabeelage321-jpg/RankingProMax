'use client';

import { useState } from 'react';

export function KeywordGeneratorTool() {
  const [businessType, setBusinessType] = useState('');
  const [city, setCity] = useState('Farmingdale');
  const [keywords, setKeywords] = useState<string[]>([]);

  const generate = () => {
    if (!businessType) return;
    const bt = businessType.toLowerCase();
    const c = city || 'Farmingdale';
    const list = [
      `${bt} ${c}`,
      `${bt} ${c} NY`,
      `${bt} near me`,
      `best ${bt} ${c}`,
      `affordable ${bt} ${c}`,
      `local ${bt} ${c}`,
      `${bt} ${c} reviews`,
      `${bt} ${c} prices`,
      `${bt} ${c} cost`,
      `emergency ${bt} ${c}`,
      `24 hour ${bt} ${c}`,
      `${bt} ${c} open now`,
      `${bt} ${c} open late`,
      `top rated ${bt} ${c}`,
      `${bt} ${c} 11735`,
      `hire ${bt} ${c}`,
      `professional ${bt} ${c}`,
      `licensed ${bt} ${c}`,
      `${bt} services ${c}`,
      `${bt} company ${c}`,
      `${bt} contractor ${c}`,
      `find ${bt} ${c}`,
      `${bt} in ${c} NY`,
      `${c} ${bt} expert`,
      `cheap ${bt} ${c}`,
      `reliable ${bt} ${c}`,
      `${bt} ${c} hours`,
      `${bt} ${c} phone number`,
      `${bt} ${c} address`,
      `${bt} ${c} directions`,
    ];
    setKeywords(list);
  };

  return (
    <div style={{ padding: '1.5rem 1rem' }}>
      <div className="f-row" style={{ marginBottom: '1.5rem' }}>
        <div className="fg">
          <label>Your Business Type</label>
          <input type="text" value={businessType} onChange={(e) => setBusinessType(e.target.value)} placeholder="e.g. HVAC, plumber, dentist" style={{ width: '100%', padding: '0.8rem 1rem', background: 'var(--pale)', border: '1.5px solid var(--border)', borderRadius: '2px', fontSize: '16px', minHeight: '48px', boxSizing: 'border-box' }} />
        </div>
        <div className="fg">
          <label>City</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} style={{ width: '100%', padding: '0.8rem 1rem', background: 'var(--pale)', border: '1.5px solid var(--border)', borderRadius: '2px', fontSize: '16px', minHeight: '48px', boxSizing: 'border-box' }} />
        </div>
      </div>
      <button onClick={generate} className="btn btn-r" style={{ width: '100%', marginBottom: '1.5rem' }}>Generate 30 Keywords</button>

      {keywords.length > 0 && (
        <div>
          <div className="grid-border" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5px' }}>
            {keywords.map((kw, i) => (
              <div key={i} className="card" style={{ padding: '0.8rem 1rem', fontSize: '0.82rem', fontFamily: 'var(--font-mono), IBM Plex Mono, monospace' }}>
                {kw}
              </div>
            ))}
          </div>
          <button onClick={() => navigator.clipboard.writeText(keywords.join('\n'))} className="btn btn-k" style={{ marginTop: '1rem', width: '100%' }}>
            Copy All Keywords
          </button>
        </div>
      )}
    </div>
  );
}
