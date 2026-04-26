import { motion } from "framer-motion";
import { Shield, BookOpen, Calendar, Bot, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    icon: Shield,
    name: "SAKHI",
    tag: "Women Safety AI",
    desc: "An AI-powered safety assistant designed for women — combining real-time alerts, voice triggers, and intelligent guidance to create a smarter shield against danger.",
    tech: ["AI", "Mobile", "Firebase"],
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    icon: BookOpen,
    name: "Learning Buddies",
    tag: "EdTech Platform",
    desc: "A collaborative learning website that pairs students with study partners, curated resources, and progress tracking — making learning social and structured.",
    tech: ["Web", "Backend", "UX"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Calendar,
    name: "Timetable Generator",
    tag: "Productivity",
    desc: "An automated scheduling engine that builds conflict-free academic timetables in seconds — built to save admins hours of manual work.",
    tech: ["Algorithms", "Web"],
    color: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    icon: Bot,
    name: "LinkedIn AI Coach",
    tag: "AI Agent",
    desc: "An autonomous AI agent that audits, optimises, and coaches your LinkedIn presence — turning a static profile into a recruiter magnet.",
    tech: ["AI Agent", "LLM", "Automation"],
    color: "from-amber-500/20 to-pink-500/20",
  },
];

export const Projects = () => (
  <Section
    id="projects"
    eyebrow="Projects"
    title="Things I've |built|"
    subtitle="A handful of projects that mix curiosity, code, and real impact."
  >
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <motion.article
          key={p.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="group relative glass rounded-3xl p-7 overflow-hidden hover:border-primary/40 transition-smooth"
        >
          <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${p.color} blur-3xl opacity-60 group-hover:opacity-100 transition-smooth`} />

          <div className="relative">
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <p.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-smooth" />
            </div>

            <div className="text-xs font-semibold tracking-wider uppercase text-primary mb-2">
              {p.tag}
            </div>
            <h3 className="text-2xl font-bold mb-3">{p.name}</h3>
            <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/60 border border-border/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </Section>
);
