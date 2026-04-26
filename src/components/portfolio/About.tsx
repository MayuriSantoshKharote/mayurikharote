import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, Rocket } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  { icon: GraduationCap, title: "B.Tech Computer Science", desc: "Currently pursuing — focused on DSA, AI & full-stack development." },
  { icon: Rocket, title: "Campus Ambassador", desc: "Representing IIT Gandhinagar — driving student engagement & outreach." },
  { icon: Award, title: "Microsoft Imagine Cup 2026", desc: "Building innovative solutions for the world's premier student tech competition." },
  { icon: Trophy, title: "58th / 55,000+", desc: "Top-tier finish in the CEO for a Day national challenge." },
];

export const About = () => (
  <Section
    id="about"
    eyebrow="About"
    title="Curious mind, |relentless builder|"
    subtitle="I'm a Computer Science student who believes the best way to learn is to ship. From safety-tech for women to AI agents that mentor careers, I love turning hard problems into useful products."
  >
    <div className="grid sm:grid-cols-2 gap-5">
      {highlights.map((h, i) => (
        <motion.div
          key={h.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="glass rounded-2xl p-6 hover:border-primary/30 transition-smooth group"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-primary/20 bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
            <h.icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="font-semibold text-lg mb-1.5">{h.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);
