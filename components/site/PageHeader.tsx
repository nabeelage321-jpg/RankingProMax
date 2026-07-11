import Link from 'next/link';

export function Breadcrumb({ items }: { items: { name: string; href: string }[] }) {
  return (
    <div className="pg-breadcrumb light" style={{ marginBottom: '1.5rem' }}>
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span style={{ margin: '0 0.5rem', opacity: 0.4 }}>/</span>}
          {i === items.length - 1 ? (
            <span style={{ color: 'var(--rust)' }}>{item.name}</span>
          ) : (
            <Link href={item.href} style={{ textDecoration: 'none' }}>{item.name}</Link>
          )}
        </span>
      ))}
    </div>
  );
}

export function PageHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div style={{ padding: 'calc(var(--nav-h) + 2.5rem) 1.2rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <span className="s-label">{label}</span>
        <h1 className="s-h2" style={{ marginBottom: '0.8rem' }} dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && (
          <p className="sub" style={{ maxWidth: '700px', fontSize: '1rem' }}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}
