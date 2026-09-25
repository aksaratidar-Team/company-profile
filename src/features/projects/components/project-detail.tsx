import { Building2, CalendarDays, ExternalLink } from "lucide-react";

import { HighlightList } from "@/components/shared/highlight-list";
import { ImageGallery } from "@/components/shared/image-gallery";
import { InfoCard } from "@/components/shared/info-card";
import { ProjectStatusBadge } from "@/features/projects/components/project-status-badge";
import type { Project } from "@/features/projects/types";
import { getProjectImages } from "@/features/projects/utils";
import { stripHtml } from "@/lib/strip-html";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const description = stripHtml(project.description);
  const hasInfo = Boolean(project.client || project.year);

  return (
    <article className="flex flex-col gap-8">
      <ImageGallery
        key={project.id}
        title={project.title}
        images={getProjectImages(project)}
        mainClassName="aspect-video"
        overlay={<ProjectStatusBadge status={project.status} className="absolute top-4 right-4" />}
      />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-2xl leading-tight font-bold tracking-tight text-tech-dark sm:text-3xl">
            {project.title}
          </h3>
          {project.project_url && (
            <a
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-tech-orange/30 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-tech-pink/30"
            >
              Kunjungi Proyek
              <ExternalLink aria-hidden="true" className="size-4" />
              <span className="sr-only">(membuka tab baru)</span>
            </a>
          )}
        </div>
        {description && <p className="leading-relaxed text-slate-600">{description}</p>}

        {hasInfo && (
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.client && <InfoCard icon={Building2} label="Klien" value={project.client} />}
            {project.year && <InfoCard icon={CalendarDays} label="Tahun" value={project.year} />}
          </dl>
        )}

        <HighlightList title="Sorotan Proyek" items={project.highlights} />

        {project.technologies.length > 0 && (
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Tech Stack</p>
            <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg bg-tech-blue/10 px-3 py-1.5 text-xs font-semibold text-sky-700"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
