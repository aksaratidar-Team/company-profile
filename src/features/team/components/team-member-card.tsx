import { Sparkles } from "lucide-react";

import { PersonAvatar } from "@/components/shared/person-avatar";
import type { TeamMember } from "@/features/team/types";
import type { ParsedRole } from "@/features/team/utils";

type TeamMemberCardProps = {
  member: TeamMember;
  role: ParsedRole;
};

/** Visual body of the clickable team card. Only phrasing elements: it sits inside a <button>. */
export function TeamMemberCard({ member, role }: TeamMemberCardProps) {
  return (
    <span className="block overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-slate-100">
      <span className="relative block overflow-hidden">
        <PersonAvatar
          name={member.name}
          photo={member.photo}
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          className="aspect-square w-full transition-transform duration-500 group-hover:scale-105"
        />
        {role.code && (
          <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-sky-700 shadow-sm">
            {role.code}
          </span>
        )}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-linear-to-t from-tech-dark/70 to-transparent pt-10 pb-3 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <Sparkles className="size-3.5" />
          Lihat Detail
        </span>
      </span>

      <span className="flex flex-col gap-0.5 px-4 py-4">
        <span className="font-bold text-tech-dark transition-colors group-hover:text-tech-blue">
          {member.name}
        </span>
        <span className="text-sm text-slate-500">{role.title}</span>
      </span>
    </span>
  );
}
