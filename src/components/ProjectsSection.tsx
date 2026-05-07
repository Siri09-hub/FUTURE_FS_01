import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "ExpenseFlow – Personal Expense Tracker",
    description:
      "A responsive expense tracking web app with category-wise tracking, interactive Chart.js visualizations, customizable themes, and multi-language support (English, Hindi, Telugu).",
    features: [
      "Add, delete & manage expenses",
      "Interactive Chart.js insights",
      "Theme switcher & i18n",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Chart.js"],
    github: "https://github.com/Siri09-hub",
  },
  {
    title: "Quiz Web Application",
    description:
      "A dynamic quiz platform that handles multiple-choice questions with an interactive UI and instant score evaluation, fully responsive across devices.",
    features: [
      "Dynamic question handling",
      "Instant score evaluation",
      "Mobile-first responsive UI",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Siri09-hub",
  },
  {
    title: "Student Management System",
    description:
      "A Java desktop application integrated with MySQL Workbench for managing student registration, updates, and record retrieval through a clean database-driven workflow.",
    features: [
      "CRUD on student records",
      "JDBC + MySQL integration",
      "Swing-based desktop UI",
    ],
    tech: ["Java", "Swing", "JDBC", "MySQL"],
    github: "https://github.com/Siri09-hub",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-background">
    <div className="container mx-auto max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground"
      >
        My <span className="text-gradient">Projects</span>
      </motion.h2>
      <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto">
        A selection of projects that reflect my problem-solving approach and full stack interests.
      </p>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 hover:border-accent/50 hover:-translate-y-1 transition-all"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors">
              {p.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

            <ul className="mt-4 space-y-1.5">
              {p.features.map((f) => (
                <li key={f} className="text-xs text-muted-foreground flex gap-2">
                  <span className="text-accent mt-0.5">▸</span> {f}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-medium">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-border flex gap-4">
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
