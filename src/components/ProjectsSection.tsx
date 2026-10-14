import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectCover from "@/components/ProjectCover";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:flex sm:items-end sm:justify-between gap-8">
          <div>
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-2">Selected work</h2>
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tight">Ideas brought to life.</h3>
          </div>
          <p className="mt-4 text-muted-foreground max-w-sm leading-relaxed">From purpose-driven organizations to movie discovery. A selection of websites and experiences I’ve built.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card flex flex-col hover:border-primary/40 transition-colors"
            >
              <ProjectCover project={project} />
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{project.category}</p>
                  {project.status && <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">{project.status}</span>}
                </div>
                <h4 className="text-xl font-semibold leading-snug">{project.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3 mb-5">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-6" aria-label="Project technologies and focus">
                  {project.tags.map(tag => <li key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground border border-border/50">{tag}</li>)}
                </ul>
                <div className="mt-auto pt-4 border-t border-border">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors" aria-label={`${project.linkLabel || "Visit website"}: ${project.title} (opens in a new tab)`}>
                      {project.linkLabel || "Visit website"} <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  ) : <span className="text-sm text-muted-foreground">Project showcase</span>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
