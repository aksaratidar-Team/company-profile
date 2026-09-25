import { EmptyState } from "@/components/shared/empty-state";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionIds } from "@/config/site";
import { ProjectsShowcase } from "@/features/projects/components/projects-showcase";
import type { Project } from "@/features/projects/types";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id={sectionIds.projects} labelledBy="projects-heading" className="bg-white">
      <SectionHeading
        id="projects-heading"
        eyebrow="Proyek"
        title="Portofolio & Proyek Kami"
        description="Pilih salah satu proyek di daftar untuk melihat detail lengkapnya."
      />

      {projects.length === 0 ? (
        <EmptyState message="Belum ada proyek untuk ditampilkan." />
      ) : (
        <ProjectsShowcase projects={projects} />
      )}
    </Section>
  );
}
