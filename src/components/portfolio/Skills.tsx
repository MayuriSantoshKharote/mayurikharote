import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, Braces, Palette, Brain, Server, Cloud, Github, Flame } from "lucide-react";

const groups = [
  {
    title: "Languages & Core",
    items: [
      { name: "C++", icon: Code2 },
      { name: "DSA", icon: Braces },
      { name: "HTML", icon: Code2 },
      { name: "CSS", icon: Palette },
    ],
  },
  {
    title: "Focus Areas",
    items: [
      { name: "AI Basics", icon: Brain },
      { name: "Backend", icon: Server },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Firebase", icon: Flame },
      { name: "Microsoft Azure", icon: Cloud },
      { name: "GitHub", icon: Github },
    ],
  },
];

export const Skills = () => (
  <Section
    id="skills"
    eyebrow="Skills"
    title="Tools I |build with|"
    subtitle="A growing toolkit grounded in fundamentals — from clean C++ to cloud platforms."
  >
    <div className="space-y-10">
      {groups.map((g, gi) => (
        <div key={g.title}>
          <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-5">
            {g.title}
          </h3>
          <div className="flex flex-wrap gap-3">
            {g.items.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (gi * 4 + i) * 0.05 }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="glass px-5 py-3 rounded-2xl flex items-center gap-3 hover:border-primary/40 transition-smooth cursor-default"
              >
                <s.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
