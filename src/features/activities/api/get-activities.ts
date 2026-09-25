import { apiGet } from "@/lib/api/client";
import { apiResourceSchema } from "@/lib/api/types";
import { activitySchema, type Activity } from "@/features/activities/types";

const activityListSchema = apiResourceSchema(activitySchema.array());

export async function getActivities(): Promise<Activity[]> {
  const response = await apiGet("activities", {
    schema: activityListSchema,
    tags: ["activities"],
  });

  return response.data;
}
