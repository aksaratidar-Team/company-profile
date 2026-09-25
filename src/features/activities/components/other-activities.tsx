import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ActivityCard } from "@/features/activities/components/activity-card";
import type { Activity } from "@/features/activities/types";

// Desktop shows this many cards at once; navigation appears only beyond it.
const VISIBLE_ON_DESKTOP = 5;

const navButtonClass = "static size-9 translate-y-0 rounded-full border-slate-200 bg-white";

type OtherActivitiesProps = {
  activities: Activity[];
  onSelect: (id: number) => void;
};

export function OtherActivities({ activities, onSelect }: OtherActivitiesProps) {
  const showNavigation = activities.length > VISIBLE_ON_DESKTOP;

  return (
    <Carousel opts={{ align: "start" }} aria-label="Aktivitas lainnya" className="flex flex-col gap-6">
      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-tech-dark">Aktivitas Lainnya</h3>
          <p className="text-sm text-slate-500">{activities.length} kegiatan</p>
        </div>
        {showNavigation && (
          <div className="flex gap-2">
            <CarouselPrevious className={navButtonClass} />
            <CarouselNext className={navButtonClass} />
          </div>
        )}
      </div>

      <CarouselContent className="-ml-5 py-1">
        {activities.map((activity) => (
          <CarouselItem
            key={activity.id}
            className="basis-[70%] pl-5 sm:basis-1/3 lg:basis-1/5"
          >
            <ActivityCard activity={activity} onSelect={onSelect} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
