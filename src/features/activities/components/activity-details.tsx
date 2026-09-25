import { CalendarDays, MapPin, Users } from "lucide-react";

import { HighlightList } from "@/components/shared/highlight-list";
import { InfoCard } from "@/components/shared/info-card";
import type { Activity } from "@/features/activities/types";
import { stripHtml } from "@/lib/strip-html";

type ActivityDetailsProps = {
  activity: Activity;
};

export function ActivityDetails({ activity }: ActivityDetailsProps) {
  const description = activity.description ? stripHtml(activity.description) : "";
  const hasInfo = Boolean(activity.location || activity.participants);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3">
        {activity.category && (
          <span className="rounded-full border border-tech-blue/20 bg-tech-blue/10 px-3 py-1 text-xs font-semibold text-sky-700">
            {activity.category}
          </span>
        )}
        {activity.date_formatted && (
          <p className="flex items-center gap-1.5 text-sm text-slate-500">
            <CalendarDays aria-hidden="true" className="size-4" />
            <time dateTime={activity.date ?? undefined}>{activity.date_formatted}</time>
          </p>
        )}
      </div>

      <h3 className="text-2xl leading-tight font-bold tracking-tight text-tech-dark sm:text-3xl">
        {activity.title}
      </h3>

      {description && <p className="leading-relaxed text-slate-600">{description}</p>}

      {hasInfo && (
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {activity.location && (
            <InfoCard icon={MapPin} label="Lokasi" value={activity.location} />
          )}
          {activity.participants && (
            <InfoCard icon={Users} label="Peserta" value={activity.participants} />
          )}
        </dl>
      )}

      <HighlightList title="Sorotan Kegiatan" items={activity.highlights} />
    </div>
  );
}
