"use client";

import { useRef, useState } from "react";

import { ImageGallery } from "@/components/shared/image-gallery";
import { ActivityDetails } from "@/features/activities/components/activity-details";
import { OtherActivities } from "@/features/activities/components/other-activities";
import type { Activity } from "@/features/activities/types";
import { getActivityImages } from "@/features/activities/utils";

type ActivitiesShowcaseProps = {
  // Non-empty, newest first.
  activities: Activity[];
};

/** Featured activity (gallery + details) with the rest in a carousel below. */
export function ActivitiesShowcase({ activities }: ActivitiesShowcaseProps) {
  const [featuredId, setFeaturedId] = useState(activities[0].id);
  const featuredRef = useRef<HTMLDivElement>(null);

  const featured = activities.find((item) => item.id === featuredId) ?? activities[0];
  const others = activities.filter((item) => item.id !== featured.id);

  function handleSelect(id: number) {
    setFeaturedId(id);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    featuredRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  return (
    <div className="flex flex-col gap-16">
      <div
        ref={featuredRef}
        aria-live="polite"
        className="grid scroll-mt-24 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12"
      >
        <ImageGallery
          key={featured.id}
          title={featured.title}
          images={getActivityImages(featured)}
          mainClassName="aspect-[4/3]"
          ringOffsetClassName="ring-offset-tech-light"
        />
        <ActivityDetails activity={featured} />
      </div>

      {others.length > 0 && <OtherActivities activities={others} onSelect={handleSelect} />}
    </div>
  );
}
