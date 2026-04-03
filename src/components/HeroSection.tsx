import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center section-padding pt-28">
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-accent font-semibold mb-2">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-extrabold font-heading leading-tight text-foreground">
          Siri Harshini Revu
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-md">
          Full Stack Developer &amp; CSE Student — Aspiring developer creating impactful digital solutions.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            Get in Touch
          </a>
          <a href="#projects" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
            View Projects
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5">
          {[
            { icon: Github, href: "https://github.com/Siri09-hub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/siri-harshini-7a000a339/" },
            { icon: Mail, href: "mailto:rsiriharshinijesus143@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* SHR Monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-accent/20 shadow-lg animate-float flex items-center justify-center bg-secondary">
            <span className="font-heading text-6xl md:text-8xl font-extrabold text-gradient select-none">SHR</span>
          </div>
          <div className="absolute -z-10 inset-0 rounded-full bg-accent/10 blur-3xl scale-125" />
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <ArrowDown size={24} />
    </motion.a>
  </section>
);

export default HeroSection;
