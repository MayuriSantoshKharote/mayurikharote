import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import photo from "@/assets/mayuri-photo.jpeg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20">
      <div className="container grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Available for opportunities
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Mayuri</span>
            <br />
            <span className="text-foreground/90">Santosh Kharote</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-4 font-medium">
            Aspiring Software Engineer · DSA & AI Enthusiast
          </p>

          <p className="text-base text-muted-foreground/80 max-w-xl mb-10 leading-relaxed">
            I craft real-world tech solutions that blend clean code, intelligent
            systems, and thoughtful design — turning ideas into products people
            actually use.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow transition-smooth"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/Mayuri_Kharote_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass font-semibold hover:border-primary/40 transition-smooth"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </div>

          <div className="mt-14 flex gap-8">
            {[
              { n: "58", l: "Rank / 55K+" },
              { n: "4+", l: "Projects" },
              { n: "2", l: "Happy Clients" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-bold text-gradient">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-6 bg-gradient-primary rounded-full opacity-30 blur-3xl animate-pulse-glow" />
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-[2.5rem] overflow-hidden glass-strong p-2 animate-float">
            <img
              src={photo}
              alt="Mayuri Santosh Kharote portrait"
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-4 py-3"
          >
            <div className="text-xs text-muted-foreground">Currently</div>
            <div className="text-sm font-semibold">B.Tech CSE Student</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3"
          >
            <div className="text-xs text-muted-foreground">IIT Gandhinagar</div>
            <div className="text-sm font-semibold">Campus Ambassador</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
