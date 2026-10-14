import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", category: "core" },
  { name: "CSS3", category: "core" },
  { name: "JavaScript", category: "core" },
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Headless CMS", category: "cms" },
  { name: "Tailwind CSS", category: "framework" },
  { name: "TypeScript", category: "framework" },
  { name: "WordPress", category: "cms" },
  { name: "Wix", category: "cms" },
  { name: "Responsive Design", category: "skill" },
  { name: "Git & GitHub", category: "tool" },
  { name: "Figma", category: "tool" },
  { name: "REST APIs", category: "skill" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-2">
            About Me
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Crafting digital experiences
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I’m a frontend developer based in Lagos, building responsive websites
            with React, Next.js, TypeScript, and Tailwind CSS. I care about clear
            interfaces, readable code, and making websites easy for the people
            who use and maintain them.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-12">
            My experience spans nonprofit websites, CMS migrations, and API-driven
            applications. I also build integrations, from
            registration emails to headless blogs and Gemini-powered chatbots.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <motion.span
              key={skill.name}
              variants={itemVariants}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                skill.category === "cms"
                  ? "bg-primary/10 border-primary/30 text-primary"
                  : "bg-secondary border-border text-foreground hover:border-primary/40"
              }`}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
