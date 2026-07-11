export function LocalSeoGauge() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: '0.4rem',
        height: '90px',
        margin: '0 auto',
      }}
    >
      {[
        { label: 'Needs Work', height: '35%', color: '#c94a3a' },
        { label: 'Average', height: '65%', color: 'var(--gold)' },
        { label: 'Strong', height: '100%', color: '#4ade80' },
      ].map((bar, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              width: '54px',
              height: bar.height,
              background: bar.color,
              opacity: 0.85,
              borderRadius: '3px 3px 0 0',
            }}
          />
          <span
            style={{
              fontSize: '0.62rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--mid)',
            }}
          >
            {bar.label}
          </span>
        </div>
      ))}
    </div>
  );
}
