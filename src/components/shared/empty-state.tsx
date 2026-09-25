import { Inbox } from "lucide-react";

import { cn } from "@/lib/utils";

type EmptyStateProps = {
  message: string;
  tone?: "light" | "dark";
};

export function EmptyState({ message, tone = "light" }: EmptyStateProps) {
  const onDark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 rounded-2xl border border-dashed px-6 py-16 text-center",
        onDark ? "border-white/30 text-white/80" : "border-slate-300 text-slate-600",
      )}
    >
      <Inbox aria-hidden="true" className="size-10 opacity-70" />
      <p className="font-medium">{message}</p>
    </div>
  );
}
