import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const links = [
  { icon: Mail, label: "rsiriharshinijesus143@gmail.com", href: "mailto:rsiriharshinijesus143@gmail.com" },
  { icon: Phone, label: "9618818339", href: "tel:9618818339" },
  { icon: Github, label: "GitHub", href: "https://github.com/Siri09-hub" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/siri-harshini-7a000a339/" },
  { icon: ExternalLink, label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/rsiriharshi3l1o" },
  { icon: ExternalLink, label: "LeetCode", href: "https://leetcode.com/u/Siri_1812/" },
];

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground"
      >
        Get in <span className="text-gradient">Touch</span>
      </motion.h2>
      <p className="text-center text-muted-foreground mt-4">
        I'm actively looking for internship and job opportunities. Feel free to reach out!
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-10 grid sm:grid-cols-2 gap-4"
      >
        {links.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-accent/40 hover:shadow-md transition-all"
          >
            <Icon size={20} className="text-accent shrink-0" />
            <span className="text-sm text-foreground font-medium truncate">{label}</span>
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
