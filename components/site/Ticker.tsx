export function Ticker() {
  const items = [
    'Google Business Profile Management',
    'Citation Building & NAP Cleanup',
    'Local SEO Strategy',
    'AI Chatbots & Agents',
    'Website Development',
    'Social Media Management',
    'Branding & Identity',
    'Farmingdale, NY Only',
    'No Contracts Required',
    'Published Pricing',
  ];
  const doubled = [...items, ...items];

  return (
    <div className="ticker-bar">
      <div className="ticker">
        {doubled.map((item, i) => (
          <span className="t-item" key={i}>
            {item} <span className="t-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
