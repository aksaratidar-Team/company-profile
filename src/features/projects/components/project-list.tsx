import { ProjectListItem } from "@/features/projects/components/project-list-item";
import type { Project } from "@/features/projects/types";

type ProjectListProps = {
  projects: Project[];
  activeId: number;
  onSelect: (id: number) => void;
};

/** Scrollable project index: horizontal on mobile, vertical and sticky on desktop. */
export function ProjectList({ projects, activeId, onSelect }: ProjectListProps) {
  return (
    <div aria-labelledby="project-list-heading" role="group" className="flex flex-col gap-4 lg:sticky lg:top-24">
      <div className="flex items-baseline justify-between gap-4">
        <h3 id="project-list-heading" className="text-lg font-bold text-tech-dark">
          Daftar Proyek
        </h3>
        <span className="text-xs text-slate-400">{projects.length} proyek</span>
      </div>

      <ul className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-2 [scrollbar-color:var(--color-tech-cyan)_transparent] [scrollbar-width:thin] lg:max-h-[30rem] lg:snap-y lg:flex-col lg:overflow-x-visible lg:overflow-y-auto lg:pr-3 lg:pb-0">
        {projects.map((project, index) => (
          <li key={project.id} className="w-64 shrink-0 snap-start lg:w-auto">
            <ProjectListItem
              project={project}
              index={index}
              active={project.id === activeId}
              onSelect={onSelect}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
