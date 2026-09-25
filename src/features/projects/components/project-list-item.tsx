import type { Project } from "@/features/projects/types";
import { getProjectSubtitle } from "@/features/projects/utils";
import { cn } from "@/lib/utils";

type ProjectListItemProps = {
  project: Project;
  index: number;
  active: boolean;
  onSelect: (id: number) => void;
};

export function ProjectListItem({ project, index, active, onSelect }: ProjectListItemProps) {
  const subtitle = getProjectSubtitle(project);
  const number = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      onClick={() => onSelect(project.id)}
      aria-current={active ? "true" : undefined}
      className={cn(
        "flex w-full cursor-pointer items-center gap-4 rounded-2xl px-5 py-5 text-left transition outline-none focus-visible:ring-3 focus-visible:ring-tech-blue/50",
        active
          ? "bg-gradient-hero text-white shadow-lg shadow-tech-cyan/20"
          : "text-tech-dark hover:bg-tech-light",
      )}
    >
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
          active ? "bg-white/15 text-white" : "text-tech-blue",
        )}
      >
        {number}
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="truncate font-semibold">{project.title}</span>
        {subtitle && (
          <span className={cn("truncate text-xs", active ? "text-white/75" : "text-slate-500")}>
            {subtitle}
          </span>
        )}
      </span>
    </button>
  );
}
