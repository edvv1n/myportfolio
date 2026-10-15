import { useState, type CSSProperties } from "react";
import { ArrowUpRight, ImageOff } from "lucide-react";
import type { Project } from "@/data/projects";

const ProjectCover = ({ project }: { project: Project }) => {
  const [failed, setFailed] = useState(false);
  const hasSnapshot = Boolean(project.screenshot) && !failed;
  const visual = (
    <div
      className="project-preview"
      style={{ "--project-accent": project.accent } as CSSProperties}
    >
      <div className="project-browser-bar" aria-hidden="true">
        <div className="project-browser-dots">
          <i />
          <i />
          <i />
        </div>
        <span>{project.coverTitle}</span>
        <ArrowUpRight size={14} />
      </div>
      <div className="project-viewport">
        {hasSnapshot ? (
          <img
            src={project.screenshot}
            alt={`${project.title} website snapshot`}
            width={1365}
            height={935}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="project-preview-fallback">
            <span className="project-fallback-category">
              {project.category}
            </span>
            <span className="project-fallback-title">{project.coverTitle}</span>
            <span className="project-fallback-note">
              <ImageOff size={14} aria-hidden="true" /> Snapshot coming soon
            </span>
          </div>
        )}
      </div>
    </div>
  );
  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-preview-link"
      aria-label={`Open ${project.title} website (opens in a new tab)`}
    >
      {visual}
    </a>
  ) : (
    visual
  );
};

export default ProjectCover;
