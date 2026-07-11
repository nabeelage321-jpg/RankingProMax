'use client';

import { SERVICES } from '@/lib/services';

export function Ticker() {
  const items = [...SERVICES, ...SERVICES];

  return (
    <div className="ticker-bar">
      <div className="ticker">
        {items.map((s, i) => (
          <span className="t-item" key={`${s.slug}-${i}`}>
            {s.title} <span className="t-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
