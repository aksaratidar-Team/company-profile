import type { ProjectStatus } from "@/features/projects/types";
import { cn } from "@/lib/utils";

type ProjectStatusBadgeProps = {
  status: ProjectStatus;
  className?: string;
};

export function ProjectStatusBadge({ status, className }: ProjectStatusBadgeProps) {
  const completed = status === "Completed";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border bg-white/95 px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur",
        completed ? "border-emerald-200 text-emerald-700" : "border-orange-200 text-orange-700",
        className,
      )}
    >
      {status}
    </span>
  );
}
