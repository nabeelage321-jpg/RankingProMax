'use client';

import { useState } from 'react';

export function SocialBioTool() {
  const [businessName, setBusinessName] = useState('');
  const [whatYouDo, setWhatYouDo] = useState('');
  const [location, setLocation] = useState('Farmingdale, NY');
  const [usp, setUsp] = useState('');
  const [generated, setGenerated] = useState(false);

  const bios: Record<string, string> = {
    Instagram: `${businessName} | ${whatYouDo}\n📍 ${location}\n${usp}\n👇 Book / Call / Visit`,
    Facebook: `${businessName} — ${whatYouDo} in ${location}. ${usp}. Call us or visit our website to book your next appointment.`,
    LinkedIn: `${businessName} | ${whatYouDo}\n${location}\n${usp}\nContact us to learn more about our services.`,
    Twitter: `${businessName} — ${whatYouDo} in ${location}. ${usp}.`,
    TikTok: `${businessName} 📍 ${location}\n${whatYouDo}\n${usp}\n👇 Link in bio`,
  };

  return (
    <div style={{ padding: '1.5rem 1rem' }}>
      <div className="fg" style={{ marginBottom: '1rem' }}>
        <label>Business Name</label>
        <input type="text" value={businessName} onChange={(e) => { setBusinessName(e.target.value); setGenerated(false); }} placeholder="e.g. Smith HVAC" style={inputStyle} />
      </div>
      <div className="fg" style={{ marginBottom: '1rem' }}>
        <label>What You Do</label>
        <input type="text" value={whatYouDo} onChange={(e) => { setWhatYouDo(e.target.value); setGenerated(false); }} placeholder="e.g. Residential HVAC repair & installation" style={inputStyle} />
      </div>
      <div className="f-row" style={{ marginBottom: '1rem' }}>
        <div className="fg">
          <label>Location</label>
          <input type="text" value={location} onChange={(e) => { setLocation(e.target.value); setGenerated(false); }} style={inputStyle} />
        </div>
        <div className="fg">
          <label>What Makes You Different</label>
          <input type="text" value={usp} onChange={(e) => { setUsp(e.target.value); setGenerated(false); }} placeholder="e.g. Same-day service, 20yr experience" style={inputStyle} />
        </div>
      </div>
      <button onClick={() => setGenerated(true)} className="btn btn-r" style={{ width: '100%', marginBottom: '1.5rem' }} disabled={!businessName || !whatYouDo}>Generate Bios</button>

      {generated && businessName && whatYouDo && (
        <div className="grid-border" style={{ gridTemplateColumns: '1fr' }}>
          {Object.entries(bios).map(([platform, bio]) => (
            <div className="card" key={platform} style={{ padding: '1.2rem 1rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '0.5rem' }}>{platform}</div>
              <div style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--ink)', whiteSpace: 'pre-wrap' }}>{bio}</div>
              <button onClick={() => navigator.clipboard.writeText(bio)} className="btn btn-k" style={{ marginTop: '0.8rem', fontSize: '0.7rem', padding: '0.3rem 0.8rem', minHeight: '32px' }}>Copy</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.8rem 1rem',
  background: 'var(--pale)',
  border: '1.5px solid var(--border)',
  borderRadius: '2px',
  fontSize: '16px',
  minHeight: '48px',
  boxSizing: 'border-box' as const,
};
