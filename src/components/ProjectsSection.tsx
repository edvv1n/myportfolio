import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Cohession Africa",
    description: "A high-performance platform built with Next.js and React, focused on regional connectivity and seamless user interactions.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "https://cohesionafrica.com/",
    github: "https://github.com/edvv1n", 
  },
  {
    title: "Womenful Voice (WordPress)",
    description: "A professional non-profit website developed on WordPress, featuring custom CMS integration to manage community outreach and advocacy programs.",
    tags: ["Wix", "CMS", "Non-Profit"],
    link: "https://womenfulvoice.org/",
    platform: "wordpress", // Matches Wordpress-svgrepo-com.svg
  },
  {
    title: "Womenful Voice (Wix)",
    description: "A professional non-profit website developed on Wix, featuring custom CMS integration to manage community outreach and advocacy programs.",
    tags: ["Wix", "CMS", "Non-Profit"],
    link: "https://smjean.wixsite.com/mysite?rc=test-site",
    platform: "wix", // Matches Wix-svgrepo-com.svg
  },
  {
    title: "Global Women Cultural Exchange",
    description: "A WordPress-based non-profit site utilizing custom theme development to facilitate international cultural exchange and resource sharing.",
    tags: ["WordPress", "PHP", "Elementor"],
    link: "https://globalwomenculturalexchange.org/",
    platform: "wordpress", // Matches Wordpress-Logo.svg
  },
  {
    title: "Senska Portfolio",
    description: "A personalized portfolio application built with React, focusing on smooth animations, modular components, and modern UI design.",
    tags: ["React", "Framer Motion", "JavaScript"],
    link: "https://senska.vercel.app/",
    github: "https://github.com/edvv1n",
  },
  {
    title: "WeatherED",
    description: "A real-time weather dashboard that fetches data from OpenWeather APIs, providing users with snappy, location-based atmospheric insights.",
    tags: ["React", "REST API", "Tailwind CSS"],
    link: "https://weather-app-nine-mu-65.vercel.app",
    github: "https://github.com/edvv1n",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-2">
            Projects
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Selected work
          </h3>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 sm:p-8 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <div className="flex items-center gap-3">
                  
                  {/* Platform Specific Icons */}
                  {project.platform ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-100"
                      aria-label={project.platform}
                    >
                      <img 
                        src={project.platform === "wix" ? "/wix-svgrepo-com.svg" : "/Wordpress-Logo.svg"} 
                        alt={project.platform} 
                        className="w-[18px] h-[18px] dark:invert opacity-70 group-hover:opacity-100 transition-all object-contain"
                      />
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live link"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;