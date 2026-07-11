import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTABand({
  title,
  subtitle,
  buttonText = 'Get Started',
  href = '/#contact',
}: {
  title: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
}) {
  return (
    <div className="cta-band">
      <div className="cta-band-t">
        {title}
        {subtitle && <span>{subtitle}</span>}
      </div>
      <Link href={href} className="btn btn-w">
        {buttonText} <ArrowRight size={16} />
      </Link>
    </div>
  );
}
