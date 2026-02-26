import heroBg from "@/assets/hero-bg.jpg";
import premisesn from "@/assets/premisesnamn.png";


const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <img
        src={heroBg}
        alt="Byggprojekt under konstruktion"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <h1 className="font-display text-6xl md:text-9xl font-light tracking-[0.15em] uppercase text-background">
          <img 
            src= {premisesn}
            alt="Logo"
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
         />
        </h1>
        <p className="mt-4 text-sm md:text-base uppercase tracking-[0.4em] text-background/70 font-body">
          Fastigheter med framtiden i fokus
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.3em] text-background/50 font-body">
          Scrolla
        </span>
        <div className="w-px h-12 bg-background/30 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
