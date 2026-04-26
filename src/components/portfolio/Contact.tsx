import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "mayurikharote@example.com",
    href: "mailto:mayurikharote@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mayuri-kharote",
    href: "https://linkedin.com/in/mayuri-kharote",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/mayuri-kharote",
    href: "https://github.com/mayuri-kharote",
  },
];

export const Contact = () => (
  <Section
    id="contact"
    eyebrow="Contact"
    title="Let's |build something|"
    subtitle="Got a role, a project, or just want to chat tech? My inbox is always open."
  >
    <div className="grid md:grid-cols-3 gap-5">
      {channels.map((c, i) => (
        <motion.a
          key={c.label}
          href={c.href}
          target={c.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -4 }}
          className="group glass rounded-2xl p-6 hover:border-primary/40 transition-smooth"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <c.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-smooth" />
          </div>
          <div className="text-xs text-muted-foreground tracking-wider uppercase mb-1">
            {c.label}
          </div>
          <div className="font-medium truncate">{c.value}</div>
        </motion.a>
      ))}
    </div>
  </Section>
);
