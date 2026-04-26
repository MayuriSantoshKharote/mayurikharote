import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: Star,
    big: "58th",
    sub: "out of 55,000+",
    title: "CEO for a Day",
    desc: "Top-tier finish in a national leadership challenge against 55K+ applicants.",
  },
  {
    icon: Trophy,
    big: "IIT",
    sub: "Gandhinagar",
    title: "Campus Ambassador",
    desc: "Selected to represent and lead outreach for one of India's top tech institutes.",
  },
  {
    icon: Award,
    big: "2026",
    sub: "Global Stage",
    title: "Microsoft Imagine Cup",
    desc: "Participating in Microsoft's flagship student innovation competition.",
  },
];

export const Achievements = () => (
  <Section
    id="achievements"
    eyebrow="Achievements"
    title="Milestones I'm |proud of|"
    subtitle="Recognition that fuels the next build."
  >
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((it, i) => (
        <motion.div
          key={it.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="relative glass rounded-3xl p-7 overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-40 transition-smooth" />
          <div className="relative">
            <it.icon className="w-8 h-8 text-primary mb-6" />
            <div className="text-5xl font-bold text-gradient mb-1">{it.big}</div>
            <div className="text-xs text-muted-foreground mb-5 tracking-wider uppercase">
              {it.sub}
            </div>
            <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);
