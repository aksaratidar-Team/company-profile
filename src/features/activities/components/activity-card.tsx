import { CalendarDays } from "lucide-react";

import { CoverImage } from "@/components/shared/cover-image";
import type { Activity } from "@/features/activities/types";

type ActivityCardProps = {
  activity: Activity;
  onSelect: (id: number) => void;
};

/** Compact card in "Aktivitas Lainnya"; clicking it features the activity above. */
export function ActivityCard({ activity, onSelect }: ActivityCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(activity.id)}
      aria-label={`Tampilkan detail ${activity.title}`}
      className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-slate-100 transition duration-300 outline-none hover:-translate-y-1 hover:shadow-lg hover:shadow-tech-blue/10 focus-visible:ring-3 focus-visible:ring-tech-blue/50"
    >
      <CoverImage
        src={activity.cover_image}
        alt=""
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 70vw"
        className="aspect-[4/3]"
        imageClassName="transition-transform duration-500 group-hover:scale-105"
      />
      <span className="flex flex-1 flex-col gap-2 p-4">
        {activity.date_formatted && (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-tech-blue">
            <CalendarDays aria-hidden="true" className="size-3.5" />
            {activity.date_formatted}
          </span>
        )}
        <span className="line-clamp-2 text-sm leading-snug font-bold text-tech-dark">
          {activity.title}
        </span>
      </span>
    </button>
  );
}
