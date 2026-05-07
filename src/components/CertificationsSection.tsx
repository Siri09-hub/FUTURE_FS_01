import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

const certifications = [
  { name: "Java Skill Up", issuer: "GeeksForGeeks" },
  { name: "Programming Essentials in Python 1 & 2", issuer: "Cisco" },
  { name: "Programming Essentials in C++", issuer: "Cisco" },
  { name: "Introduction to Python", issuer: "Infosys Springboard" },
  { name: "Python for Data Science", issuer: "Infosys Springboard" },
];

const achievements = [
  "Recognized for active participation in Annushandham events with strong teamwork & leadership.",
  "Contributed to Smart India Hackathon (SIH), collaborating on innovative real-world solutions.",
  "Maintaining a CGPA of 9.44 in B.Tech CSE — consistent academic excellence.",
];

const CertificationsSection = () => (
  <section id="certifications" className="section-padding bg-background">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground"
      >
        Certifications & <span className="text-gradient">Achievements</span>
      </motion.h2>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border bg-card p-6"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <Award className="text-accent" size={24} />
            <h3 className="font-heading font-semibold text-foreground">Certifications</h3>
          </div>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-border bg-card p-6"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <Trophy className="text-accent" size={24} />
            <h3 className="font-heading font-semibold text-foreground">Achievements</h3>
          </div>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CertificationsSection;
