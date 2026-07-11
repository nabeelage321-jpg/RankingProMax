const BEFORE_ITEMS = [
  'Primary category is vague or wrong',
  'Fewer than 10 photos, mostly outdated',
  'No posts in the last 30+ days',
  'Reviews go unanswered',
  'Business description is empty or generic',
  'Attributes and Q&A section left blank',
];

const AFTER_ITEMS = [
  'Primary + secondary categories matched to real search terms',
  '50+ geotagged photos of the business, team, and work',
  'Weekly posts keeping the profile active',
  'Every review answered within 48 hours',
  'Description written around what Farmingdale customers actually search',
  'Attributes, services, and Q&A fully filled out',
];

export function BeforeAfter() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5px',
        background: 'var(--border)',
        border: '1.5px solid var(--border)',
      }}
    >
      <div style={{ background: '#fff', padding: '1.5rem' }}>
        <div
          style={{
            fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif',
            fontSize: '1.1rem',
            letterSpacing: '0.04em',
            color: 'var(--mid)',
            marginBottom: '1rem',
          }}
        >
          BEFORE
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          {BEFORE_ITEMS.map((item, i) => (
            <li key={i} style={{ fontSize: '0.85rem', color: 'var(--mid)', display: 'flex', gap: '0.6rem' }}>
              <span style={{ color: '#c94a3a', flexShrink: 0 }}>✗</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ background: 'var(--ink)', padding: '1.5rem' }}>
        <div
          style={{
            fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif',
            fontSize: '1.1rem',
            letterSpacing: '0.04em',
            color: 'var(--gold)',
            marginBottom: '1rem',
          }}
        >
          AFTER
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          {AFTER_ITEMS.map((item, i) => (
            <li
              key={i}
              style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', display: 'flex', gap: '0.6rem' }}
            >
              <span style={{ color: '#4ade80', flexShrink: 0 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
