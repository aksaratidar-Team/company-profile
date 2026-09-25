import { z } from "zod";

// Laravel JsonResource wraps every payload in `data`.
// List endpoints return the full collection without pagination meta.
export function apiResourceSchema<T extends z.ZodType>(item: T) {
  return z.object({ data: item });
}
