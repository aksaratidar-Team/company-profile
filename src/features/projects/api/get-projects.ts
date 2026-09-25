import { apiGet } from "@/lib/api/client";
import { apiResourceSchema } from "@/lib/api/types";
import { projectSchema, type Project } from "@/features/projects/types";

const projectListSchema = apiResourceSchema(projectSchema.array());

export async function getProjects(): Promise<Project[]> {
  const response = await apiGet("projects", {
    schema: projectListSchema,
    tags: ["projects"],
  });

  return response.data;
}
