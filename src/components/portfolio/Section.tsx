import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const Section = ({ id, eyebrow, title, subtitle, children }: Props) => (
  <section id={id} className="py-24 sm:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-16"
      >
        <div className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
          {eyebrow}
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          {title.split("|").map((part, i) =>
            i === 1 ? (
              <span key={i} className="text-gradient">
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-lg leading-relaxed">{subtitle}</p>
        )}
      </motion.div>
      {children}
    </div>
  </section>
);
