import { EmptyState } from "@/components/shared/empty-state";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { sectionIds } from "@/config/site";
import { TestimonialCard } from "@/features/testimonials/components/testimonial-card";
import type { Testimonial } from "@/features/testimonials/types";
import { cn } from "@/lib/utils";

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

const navButtonClass =
  "static size-11 translate-y-0 rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white disabled:opacity-40";

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <Section
      id={sectionIds.testimonials}
      labelledBy="testimonials-heading"
      className="bg-gradient-testimonial"
    >
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Testimoni"
        title="Apa kata klien kami"
        description="Kepercayaan klien adalah ukuran keberhasilan setiap proyek yang kami kerjakan."
        tone="dark"
      />

      {testimonials.length === 0 ? (
        <EmptyState message="Belum ada testimoni untuk ditampilkan." tone="dark" />
      ) : testimonials.length === 1 ? (
        // A single review needs no slider: centre it.
        <div className="mx-auto w-full max-w-2xl">
          <TestimonialCard testimonial={testimonials[0]} />
        </div>
      ) : (
        <Carousel opts={{ align: "start", loop: testimonials.length > 2 }} aria-label="Testimoni klien">
          <CarouselContent className="-ml-6 pb-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-6 md:basis-1/2">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Desktop shows two cards at once, so two reviews need no buttons there. */}
          <div
            className={cn(
              "mt-8 flex justify-center gap-3",
              testimonials.length <= 2 && "md:hidden",
            )}
          >
            <CarouselPrevious variant="outline" className={navButtonClass} />
            <CarouselNext variant="outline" className={navButtonClass} />
          </div>
        </Carousel>
      )}
    </Section>
  );
}
