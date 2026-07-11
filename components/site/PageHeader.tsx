import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="pg-breadcrumb">
      {items.map((item, i) => (
        <span key={i}>
          {item.href ? <Link href={item.href}>{item.name}</Link> : <span>{item.name}</span>}
          {i < items.length - 1 && ' / '}
        </span>
      ))}
    </div>
  );
}

interface PageHeaderProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHeader({ label, title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section
      style={{
        padding: '5rem 1.2rem 4rem',
        background: 'var(--pale)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        {label && <div className="s-label">{label}</div>}
        <h1 className="s-h2" style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', marginTop: '0.4rem' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="sub" style={{ marginTop: '0.8rem', maxWidth: '560px' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
