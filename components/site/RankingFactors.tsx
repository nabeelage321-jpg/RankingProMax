import { RANK_FACTORS } from '@/lib/agency';

export function RankingFactors() {
  return (
    <div className="factor-row">
      {RANK_FACTORS.map((f, i) => (
        <div className="factor-card" key={i}>
          <div
            className="factor-dial"
            style={{ '--fill': f.fill } as React.CSSProperties}
          >
            <span>{f.fill}</span>
          </div>
          <h4>{f.label}</h4>
          <p>{f.body}</p>
        </div>
      ))}
    </div>
  );
}
