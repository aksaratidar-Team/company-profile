import { EmptyState } from "@/components/shared/empty-state";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionIds } from "@/config/site";
import { ActivitiesShowcase } from "@/features/activities/components/activities-showcase";
import type { Activity } from "@/features/activities/types";

type ActivitiesSectionProps = {
  activities: Activity[];
};

export function ActivitiesSection({ activities }: ActivitiesSectionProps) {
  return (
    <Section id={sectionIds.activities} labelledBy="activities-heading" className="bg-tech-light">
      <SectionHeading
        id="activities-heading"
        eyebrow="Aktivitas"
        title="Aktivitas Perusahaan"
        description="Dokumentasi kegiatan, acara, dan momen penting dalam perjalanan Aksara Tidar."
      />

      {activities.length === 0 ? (
        <EmptyState message="Belum ada aktivitas untuk ditampilkan." />
      ) : (
        <ActivitiesShowcase activities={activities} />
      )}
    </Section>
  );
}
