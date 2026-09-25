import { Mail, MapPin, Phone } from "lucide-react";

type FooterContactProps = {
  email: string | null;
  phone: string | null;
  address: string | null;
};

const rowClass = "flex items-start gap-3";
const iconClass = "mt-0.5 size-4 shrink-0 text-tech-cyan";

export function FooterContact({ email, phone, address }: FooterContactProps) {
  if (!email && !phone && !address) {
    return <p className="text-sm text-slate-400">Informasi kontak akan segera tersedia.</p>;
  }

  return (
    <address className="flex flex-col gap-4 text-sm not-italic text-slate-300">
      {address && (
        <p className={rowClass}>
          <MapPin aria-hidden="true" className={iconClass} />
          <span className="whitespace-pre-line">{address}</span>
        </p>
      )}
      {email && (
        <a href={`mailto:${email}`} className={`${rowClass} transition-colors hover:text-white`}>
          <Mail aria-hidden="true" className={iconClass} />
          <span className="break-all">{email}</span>
        </a>
      )}
      {phone && (
        <a
          href={`tel:${phone.replace(/[^\d+]/g, "")}`}
          className={`${rowClass} transition-colors hover:text-white`}
        >
          <Phone aria-hidden="true" className={iconClass} />
          <span>{phone}</span>
        </a>
      )}
    </address>
  );
}
