import { Mail } from "lucide-react";

import { PersonAvatar } from "@/components/shared/person-avatar";
import { SocialLinks } from "@/components/shared/social-links";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TeamMemberCard } from "@/features/team/components/team-member-card";
import type { TeamMember } from "@/features/team/types";
import { formatRoleLabel, parseRole } from "@/features/team/utils";

type TeamMemberDialogProps = {
  member: TeamMember;
};

export function TeamMemberDialog({ member }: TeamMemberDialogProps) {
  const role = parseRole(member.role);
  const bio = member.bio?.trim();

  return (
    <Dialog>
      <DialogTrigger
        aria-label={`Lihat profil ${member.name}`}
        className="group block w-full cursor-pointer rounded-2xl transition duration-300 outline-none hover:-translate-y-1.5 hover:shadow-xl hover:shadow-tech-blue/10 focus-visible:ring-3 focus-visible:ring-tech-blue/50"
      >
        <TeamMemberCard member={member} role={role} />
      </DialogTrigger>

      <DialogContent className="gap-5 p-6 sm:max-w-md sm:p-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <PersonAvatar
            name={member.name}
            photo={member.photo}
            sizes="112px"
            className="size-28 rounded-2xl shadow-lg shadow-tech-dark/15"
          />
          <DialogTitle className="text-xl font-bold text-tech-dark">{member.name}</DialogTitle>
          <DialogDescription className="rounded-full border border-tech-blue/20 bg-tech-blue/10 px-3 py-1 text-xs font-semibold text-sky-700">
            {formatRoleLabel(role)}
          </DialogDescription>
          <p className="pt-1 text-sm leading-relaxed text-slate-600">
            {bio || "Profil lengkap akan segera tersedia."}
          </p>
        </div>

        {member.skills.length > 0 && (
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Keahlian</p>
            <ul className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-tech-dark"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        <SocialLinks
          links={member.social_links}
          className="justify-center"
          linkClassName="border-slate-200 text-tech-dark hover:border-tech-blue hover:text-tech-blue"
        />

        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-tech-light px-4 py-3 text-sm font-medium text-tech-dark transition-colors hover:bg-tech-blue/10 hover:text-sky-700"
          >
            <Mail aria-hidden="true" className="size-4" />
            {member.email}
          </a>
        )}
      </DialogContent>
    </Dialog>
  );
}
