import Link from 'next/link';

interface CTABandProps {
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;
}

export function CTABand({ title, subtitle, buttonText, href }: CTABandProps) {
  return (
    <div className="cta-band">
      <div className="cta-band-t">
        {title}
        <span>{subtitle}</span>
      </div>
      <Link href={href} className="btn btn-w">
        {buttonText}
      </Link>
    </div>
  );
}
