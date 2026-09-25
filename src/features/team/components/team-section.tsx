import { EmptyState } from "@/components/shared/empty-state";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionIds } from "@/config/site";
import { TeamMemberDialog } from "@/features/team/components/team-member-dialog";
import type { TeamMember } from "@/features/team/types";

type TeamSectionProps = {
  members: TeamMember[];
};

export function TeamSection({ members }: TeamSectionProps) {
  return (
    <Section
      id={sectionIds.team}
      labelledBy="team-heading"
      className="bg-tech-light"
      fullHeight={false}
    >
      <SectionHeading
        id="team-heading"
        eyebrow="Tim Kami"
        title="Anggota Tim"
        description="Orang-orang hebat di balik setiap produk yang kami kembangkan. Klik salah satu kartu untuk melihat informasi lengkapnya."
      />

      {members.length === 0 ? (
        <EmptyState message="Profil tim akan segera tersedia." />
      ) : (
        // Flex-wrap keeps an incomplete last row centred.
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {members.map((member) => (
            <li
              key={member.id}
              className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.2rem)]"
            >
              <TeamMemberDialog member={member} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
