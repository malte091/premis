import { useState } from "react";
import { Menu, X } from "lucide-react";

const projects = [
  { id: "strandpark", label: "Strandpark" },
  { id: "centrumhuset", label: "Centrumhuset" },
  { id: "hamngatan", label: "Hamngatan" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5">
      {/* Logo */}
      <button
        onClick={() => scrollTo("hero")}
        className="font-display text-2xl md:text-3xl font-semibold tracking-widest uppercase text-primary-foreground mix-blend-difference"
      >
        <img 
          src="/src/assets/helalogga.png" 
          alt="Logo"
          className="h-8 md:h-10" // justera storlek efter behov
        />
      </button>

      {/* Menu button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-primary-foreground mix-blend-difference z-50"
        aria-label="Toggle menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Overlay menu */}
      <div
        className={`fixed inset-0 bg-foreground/95 flex items-center justify-center transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-body mb-4">
            Projekt
          </span>
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => scrollTo(p.id)}
              className="font-display text-4xl md:text-6xl font-light text-background hover:text-accent transition-colors duration-300"
            >
              {p.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("kontakt")}
            className="mt-8 text-sm uppercase tracking-[0.3em] text-muted-foreground hover:text-accent font-body transition-colors duration-300"
          >
            Kontakt
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
