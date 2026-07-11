'use client';

import { useState } from 'react';

const DIRECTORIES = [
  'Google Business Profile', 'Yelp', 'Bing Places', 'Apple Maps Connect', 'YellowPages',
  'MapQuest', 'Facebook', 'Instagram', 'LinkedIn', 'Twitter/X',
  'Foursquare', 'Infogroup (Data Axle)', 'Factual', 'Neustar Localeze', 'Superpages',
  'Whitepages', 'Yellowbook', 'Citysearch', 'MerchantCircle', 'Manta',
  'Kudzu', 'Hotfrog', 'Brownbook', 'Tupalo', 'Cybo',
  'Cylex', 'LocalStack', 'Opendi', 'Find-Us-Here', 'Bizhwy',
  'HomeAdvisor', 'Angi (Angie\'s List)', 'Thumbtack', 'Porch', 'Houzz',
  'Zocdoc', 'Healthgrades', 'Vitals', 'RateMDs', 'Doctor.com',
  'Avvo', 'Martindale', 'Justia', 'TripAdvisor',
];

export function CitationChecklistTool() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((checkedCount / DIRECTORIES.length) * 100);

  return (
    <div style={{ padding: '1.5rem 1rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--mid)' }}>Citation Coverage</span>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--rust)' }}>{checkedCount}/{DIRECTORIES.length}</span>
        </div>
        <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: 'var(--rust)', transition: 'width 0.3s' }} />
        </div>
      </div>
      <div className="grid-border" style={{ gridTemplateColumns: '1fr' }}>
        {DIRECTORIES.map((dir, i) => (
          <label key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', padding: '0.8rem 1rem' }}>
            <input
              type="checkbox"
              checked={checked[i] || false}
              onChange={() => setChecked({ ...checked, [i]: !checked[i] })}
              style={{ width: '20px', height: '20px', accentColor: 'var(--rust)' }}
            />
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono), IBM Plex Mono, monospace' }}>{dir}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
