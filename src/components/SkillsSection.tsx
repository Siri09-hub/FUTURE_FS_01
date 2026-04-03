import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Databases",
    skills: ["MySQL"],
  },
  {
    title: "Tools",
    skills: ["GitHub", "Jupyter Notebook", "VS Code", "Google Colab"],
  },
  {
    title: "Core Concepts",
    skills: ["OOPJ", "Data Structures", "ADSAA", "DBMS", "Operating Systems"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground"
      >
        My <span className="text-gradient">Skills</span>
      </motion.h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="font-heading font-semibold text-foreground mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
