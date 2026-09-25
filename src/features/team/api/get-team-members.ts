import { apiGet } from "@/lib/api/client";
import { apiResourceSchema } from "@/lib/api/types";
import { teamMemberSchema, type TeamMember } from "@/features/team/types";

const teamListSchema = apiResourceSchema(teamMemberSchema.array());

export async function getTeamMembers(): Promise<TeamMember[]> {
  const response = await apiGet("teams", {
    schema: teamListSchema,
    tags: ["team"],
  });

  return response.data;
}
