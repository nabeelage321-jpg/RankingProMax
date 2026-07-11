'use client';

import { useState } from 'react';

export function RoiCalculatorTool() {
  const [avgValue, setAvgValue] = useState('');
  const [monthlySearches, setMonthlySearches] = useState('');
  const [currentRank, setCurrentRank] = useState('10');
  const [targetRank, setTargetRank] = useState('3');
  const [result, setResult] = useState<{ potential: number; current: number; uplift: number } | null>(null);

  const calculate = () => {
    const value = parseFloat(avgValue) || 0;
    const searches = parseFloat(monthlySearches) || 0;

    const ctrByRank: Record<string, number> = {
      '1': 0.32, '2': 0.18, '3': 0.12, '4': 0.08, '5': 0.06,
      '6': 0.045, '7': 0.035, '8': 0.028, '9': 0.022, '10': 0.018,
    };

    const currentCTR = ctrByRank[currentRank] || 0.018;
    const targetCTR = ctrByRank[targetRank] || 0.12;

    const currentLeads = Math.round(searches * currentCTR);
    const potentialLeads = Math.round(searches * targetCTR);
    const currentRevenue = currentLeads * value;
    const potentialRevenue = potentialLeads * value;
    const uplift = potentialRevenue - currentRevenue;

    setResult({ potential: potentialRevenue, current: currentRevenue, uplift });
  };

  return (
    <div style={{ padding: '1.5rem 1rem' }}>
      {result ? (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--mid)', marginBottom: '0.5rem' }}>ESTIMATED MONTHLY REVENUE UPLIFT</div>
          <div style={{ fontFamily: 'var(--font-display), Big Shoulders Display, sans-serif', fontSize: '3.5rem', color: 'var(--rust)', lineHeight: 1, marginBottom: '0.5rem' }}>
            ${result.uplift.toLocaleString()}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--mid)', marginBottom: '2rem' }}>
            From ${result.current.toLocaleString()}/mo → ${result.potential.toLocaleString()}/mo
          </div>
          <div style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto', background: 'var(--cream)', padding: '1.5rem', borderRadius: '2px' }}>
            <p style={{ fontSize: '0.82rem', color: 'var(--mid)', lineHeight: 1.7 }}>
              This is an estimate based on typical local search click-through rates. Actual results depend on your industry, competition, and how well your profile and website convert visitors into customers.
            </p>
          </div>
          <button onClick={() => setResult(null)} className="btn btn-k" style={{ marginTop: '2rem' }}>Recalculate</button>
        </div>
      ) : (
        <>
          <div className="fg" style={{ marginBottom: '1rem' }}>
            <label>Average Customer Value ($)</label>
            <input type="number" value={avgValue} onChange={(e) => setAvgValue(e.target.value)} placeholder="e.g. 350" style={{ width: '100%', padding: '0.8rem 1rem', background: 'var(--pale)', border: '1.5px solid var(--border)', borderRadius: '2px', fontSize: '16px', minHeight: '48px', boxSizing: 'border-box' }} />
          </div>
          <div className="fg" style={{ marginBottom: '1rem' }}>
            <label>Monthly Local Searches for Your Service</label>
            <input type="number" value={monthlySearches} onChange={(e) => setMonthlySearches(e.target.value)} placeholder="e.g. 500" style={{ width: '100%', padding: '0.8rem 1rem', background: 'var(--pale)', border: '1.5px solid var(--border)', borderRadius: '2px', fontSize: '16px', minHeight: '48px', boxSizing: 'border-box' }} />
          </div>
          <div className="f-row" style={{ marginBottom: '1.5rem' }}>
            <div className="fg">
              <label>Current Rank Position</label>
              <select value={currentRank} onChange={(e) => setCurrentRank(e.target.value)} style={{ width: '100%', padding: '0.8rem 1rem', background: 'var(--pale)', border: '1.5px solid var(--border)', borderRadius: '2px', fontSize: '16px', minHeight: '48px', boxSizing: 'border-box' }}>
                {Array.from({ length: 10 }, (_, i) => <option key={i} value={String(i + 1)}>#{i + 1}</option>)}
              </select>
            </div>
            <div className="fg">
              <label>Target Rank Position</label>
              <select value={targetRank} onChange={(e) => setTargetRank(e.target.value)} style={{ width: '100%', padding: '0.8rem 1rem', background: 'var(--pale)', border: '1.5px solid var(--border)', borderRadius: '2px', fontSize: '16px', minHeight: '48px', boxSizing: 'border-box' }}>
                {Array.from({ length: 5 }, (_, i) => <option key={i} value={String(i + 1)}>#{i + 1}</option>)}
              </select>
            </div>
          </div>
          <button onClick={calculate} className="btn btn-r" style={{ width: '100%' }}>Calculate ROI</button>
        </>
      )}
    </div>
  );
}
