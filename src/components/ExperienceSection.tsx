import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Web Development Intern",
    company: "Future Interns",
    period: "March 2026 – April 2026",
    location: "Remote",
    points: [
      "Worked on end-to-end full stack web development across frontend and backend technologies.",
      "Built and deployed responsive web applications, sharpening problem-solving and debugging skills.",
      "Collaborated remotely using GitHub for version control and iterative delivery.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground"
      >
        <span className="text-gradient">Experience</span>
      </motion.h2>

      <div className="mt-12 relative border-l-2 border-accent/30 pl-8 space-y-10">
        {experiences.map((e, i) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative"
          >
            <span className="absolute -left-[42px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Briefcase size={16} />
            </span>
            <div className="rounded-xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading font-semibold text-foreground">{e.role}</h3>
                <span className="text-xs text-muted-foreground">{e.period} · {e.location}</span>
              </div>
              <p className="text-sm text-accent font-medium mt-1">{e.company}</p>
              <ul className="mt-4 space-y-2">
                {e.points.map((p) => (
                  <li key={p} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-accent mt-0.5">▸</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
