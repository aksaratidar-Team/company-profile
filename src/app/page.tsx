import type { Metadata } from "next";

import { getActivities } from "@/features/activities/api/get-activities";
import { ActivitiesSection } from "@/features/activities/components/activities-section";
import { mockActivities } from "@/features/activities/mock-data";
import { getProjects } from "@/features/projects/api/get-projects";
import { ProjectsSection } from "@/features/projects/components/projects-section";
import { mockProjects } from "@/features/projects/mock-data";
import { getSiteSettings } from "@/features/site-settings/api/get-site-settings";
import { AboutSection } from "@/features/site-settings/components/about-section";
import { FaqSection } from "@/features/site-settings/components/faq-section";
import { HeroSection } from "@/features/site-settings/components/hero-section";
import { ServicesSection } from "@/features/site-settings/components/services-section";
import { getTeamMembers } from "@/features/team/api/get-team-members";
import { TeamSection } from "@/features/team/components/team-section";
import { mockTeamMembers } from "@/features/team/mock-data";
import { getTestimonials } from "@/features/testimonials/api/get-testimonials";
import { TestimonialsSection } from "@/features/testimonials/components/testimonials-section";
import { mockTestimonials } from "@/features/testimonials/mock-data";
import { withDevFallback } from "@/lib/api/with-dev-fallback";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const [settings, activities, projects, members, testimonials] = await Promise.all([
    getSiteSettings(),
    withDevFallback("activities", getActivities, mockActivities),
    withDevFallback("projects", getProjects, mockProjects),
    withDevFallback("team", getTeamMembers, mockTeamMembers),
    withDevFallback("testimonials", getTestimonials, mockTestimonials),
  ]);

  return (
    <main>
      <HeroSection />
      <AboutSection aboutText={settings?.about_us_text ?? null} />
      <ServicesSection />
      <ActivitiesSection activities={activities} />
      <ProjectsSection projects={projects} />
      <TeamSection members={members} />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection />
    </main>
  );
}
