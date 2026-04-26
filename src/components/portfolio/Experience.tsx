import { motion } from "framer-motion";
import { ExternalLink, Briefcase } from "lucide-react";
import { Section } from "./Section";

const work = [
  {
    client: "Maungiri Fabrication",
    role: "Business Website",
    desc: "Designed and shipped a polished marketing site for a fabrication business — focused on conversions and credibility.",
    url: "https://maungiri-fabrication.vercel.app",
  },
  {
    client: "Camera Illusion",
    role: "Photography Portfolio",
    desc: "Built a cinematic, image-first portfolio that lets the photographer's work do the talking.",
    url: "https://cameraillusion-portfolio.netlify.app",
  },
];

export const Experience = () => (
  <Section
    id="experience"
    eyebrow="Client Work"
    title="Real projects, |real clients|"
    subtitle="Delivered production websites to 2 happy clients — from concept to launch."
  >
    <div className="grid md:grid-cols-2 gap-6">
      {work.map((w, i) => (
        <motion.a
          key={w.client}
          href={w.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          whileHover={{ y: -4 }}
          className="group glass rounded-3xl p-7 hover:border-primary/40 transition-smooth block"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3 mb-1">
                <h3 className="text-xl font-bold">{w.client}</h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth" />
              </div>
              <div className="text-sm text-primary font-medium mb-3">{w.role}</div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{w.desc}</p>
              <div className="text-xs text-muted-foreground/70 truncate">
                {w.url.replace("https://", "")}
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </Section>
);
