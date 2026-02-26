const OmSection = () => {
  return (
    <section 
      id="omoss" 
      className="bg-foreground text-background py-20 px-8"
    >
    <div className="max-w-4xl mx-auto"> 
      {/* Ditt innehåll här */}
      <h2 className="font-display text-5xl text-center tracking-wide text-white">
        OM OSS
      </h2>
    
    <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-body mb-4 text-center">
        Premises
      </h2>

      <p className="mt-6 font-body text-center text-base">
        Premises grundades 2026 och leds av ett team med mångårig bakgrund inom stadsplanering, fastighetsutveckling, bostadsbyggnation och infrautveckling. Med tusentals nyproducerade bostäder i Sverige bakom oss har vi en gedigen erfarenhet av att utveckla bostäder och samhälle. Premises är verksamma inom nyutveckling, vidareutveckling och återutveckling av fastigheter.
      </p>
    </div>
    </section>
  );
};

export default OmSection;
