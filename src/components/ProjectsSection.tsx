import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    description:
      "A desktop-based application that allows students to manage student records, attendance, and results efficiently.",
    tech: ["Java (Swing)", "JDBC", "MySQL"],
    github: "https://github.com/Siri09-hub",
  },
  {
    title: "Quiz Application",
    description:
      "A web-based quiz platform that presents multiple-choice questions, evaluates responses instantly, and displays scores with an interactive experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Siri09-hub",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-background">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground"
      >
        My <span className="text-gradient">Projects</span>
      </motion.h2>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group rounded-xl border border-border bg-background p-6 hover:border-accent/40 transition-all"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-accent transition-colors">
              {p.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
