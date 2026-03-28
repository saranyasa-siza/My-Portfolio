import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border mt-12 flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4">
      <p className="text-sm text-muted-foreground text-center sm:text-left">
        &copy; {new Date().getFullYear()} Saranya Sa.
      </p>
      <p className="text-sm text-primary italic text-center">
        I don't just build projects… I build impact.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};