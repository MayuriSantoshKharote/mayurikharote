import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/50 py-10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-5">
      <div className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Mayuri Santosh Kharote · Crafted with care.
      </div>
      <div className="flex items-center gap-3">
        {[
          { icon: Github, href: "https://github.com/MayuriSantoshKharote", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/mayuri-kharote-7b485230a/", label: "LinkedIn" },
          { icon: Mail, href: "mailto:mayurikharote2006@gmail.com", label: "Email" },
        ].map((s) => (
          <a
            key={s.label}
            aria-label={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/40 hover:text-primary transition-smooth"
          >
            <s.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
