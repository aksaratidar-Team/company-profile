import { Quote } from "lucide-react";

import { PersonAvatar } from "@/components/shared/person-avatar";
import { StarRating } from "@/features/testimonials/components/star-rating";
import type { Testimonial } from "@/features/testimonials/types";
import { stripHtml } from "@/lib/strip-html";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col gap-6 rounded-3xl bg-white p-6 shadow-xl shadow-tech-dark/10 sm:p-8">
      <div className="flex items-center justify-between">
        <StarRating rating={testimonial.rating} />
        <Quote aria-hidden="true" className="size-8 text-tech-pink/30" />
      </div>

      <blockquote className="flex-1 text-base leading-relaxed text-slate-700 sm:text-lg">
        <p>&ldquo;{stripHtml(testimonial.content)}&rdquo;</p>
      </blockquote>

      <figcaption className="flex items-center gap-4 border-t border-slate-100 pt-6">
        <PersonAvatar
          name={testimonial.client_name}
          photo={testimonial.client_photo}
          sizes="56px"
          className="size-14 shrink-0 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-bold text-tech-dark">{testimonial.client_name}</span>
          {testimonial.client_company && (
            <span className="text-sm text-slate-500">{testimonial.client_company}</span>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
