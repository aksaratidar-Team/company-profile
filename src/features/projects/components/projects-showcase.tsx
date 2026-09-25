"use client";

import { useRef, useState } from "react";

import { ProjectDetail } from "@/features/projects/components/project-detail";
import { ProjectList } from "@/features/projects/components/project-list";
import type { Project } from "@/features/projects/types";

type ProjectsShowcaseProps = {
  // Non-empty.
  projects: Project[];
};

/** Project index on the left, details of the selected project on the right. */
export function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const [activeId, setActiveId] = useState(projects[0].id);
  const detailRef = useRef<HTMLDivElement>(null);

  const active = projects.find((project) => project.id === activeId) ?? projects[0];

  function handleSelect(id: number) {
    setActiveId(id);
    // On desktop the list is sticky beside the details; on mobile jump down to them.
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      detailRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }
  }

  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[18rem_1fr] lg:gap-12">
      <ProjectList projects={projects} activeId={active.id} onSelect={handleSelect} />
      <div ref={detailRef} aria-live="polite" className="scroll-mt-24">
        <ProjectDetail project={active} />
      </div>
    </div>
  );
}
