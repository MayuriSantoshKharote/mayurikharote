import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight">
          <span className="text-gradient">Mayuri</span>
          <span className="text-foreground/60">.dev</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-primary group-hover:w-full transition-smooth" />
            </a>
          ))}
        </div>
        <a
          href="/Mayuri_Kharote_Resume.pdf"
          download
          className="hidden md:inline-flex items-center text-sm font-medium px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-smooth"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
};
