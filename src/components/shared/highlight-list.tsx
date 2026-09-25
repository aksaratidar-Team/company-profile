import { CircleCheck } from "lucide-react";

type HighlightListProps = {
  title: string;
  items: string[];
};

export function HighlightList({ title, items }: HighlightListProps) {
  if (items.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
            <CircleCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-tech-cyan" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
