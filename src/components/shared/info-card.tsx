import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

/** Icon + label/value pair. Render inside a <dl>. */
export function InfoCard({ icon: Icon, label, value }: InfoCardProps) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-tech-cyan" />
      <div className="flex flex-col gap-0.5">
        <dt className="text-xs font-semibold tracking-wider text-slate-400 uppercase">{label}</dt>
        <dd className="text-sm font-semibold text-tech-dark">{value}</dd>
      </div>
    </div>
  );
}
