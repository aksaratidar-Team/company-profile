import { apiGet } from "@/lib/api/client";
import { apiResourceSchema } from "@/lib/api/types";
import { testimonialSchema, type Testimonial } from "@/features/testimonials/types";

const testimonialListSchema = apiResourceSchema(testimonialSchema.array());

export async function getTestimonials(): Promise<Testimonial[]> {
  const response = await apiGet("testimonials", {
    schema: testimonialListSchema,
    tags: ["testimonials"],
  });

  return response.data;
}
