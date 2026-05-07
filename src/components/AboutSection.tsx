import { motion } from "framer-motion";
import { GraduationCap, Target } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
          Motivated Computer Science &amp; Engineering undergraduate with a strong foundation in programming, data structures, and software development. I build academic and personal projects across Java, Python, and modern web stacks, and I'm passionate about solving real-world problems with clean, scalable code. Actively seeking internship and entry-level opportunities to apply my skills and grow as a full stack developer.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-background p-6" style={{ boxShadow: "var(--shadow-card)" }}>
            <GraduationCap className="text-accent mb-3" size={28} />
            <h3 className="font-heading font-semibold text-foreground">Education</h3>
            <p className="text-sm text-muted-foreground mt-1">B.Tech in Computer Science & Engineering</p>
            <p className="text-sm font-semibold text-accent mt-1">CGPA: 9.44</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-6" style={{ boxShadow: "var(--shadow-card)" }}>
            <Target className="text-accent mb-3" size={28} />
            <h3 className="font-heading font-semibold text-foreground">Career Goal</h3>
            <p className="text-sm text-muted-foreground mt-1">Seeking internship & full-time roles in software development to build impactful solutions.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
