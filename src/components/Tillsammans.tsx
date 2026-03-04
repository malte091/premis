const TillsammansSection = () => {
  return (
    <section 
      id="omoss" 
      className="bg-foreground text-background py-20 px-8"
    >
    <div className="mt-3 pt-1 border-b border-background"> 
      {/* Ditt innehåll här */}
      <h2 className="font-display text-5xl text-center tracking-wide text-white uppercase">
        Tillsammans formar vi nästa generation av bostäder
      </h2>
    
    <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-body mb-4 text-center">
        Premises
      </h2>

      <p className="mt-6 font-body text-center text-lg">
        När du samarbetar med oss får du en utvecklingspartner som tar ansvar, driver processen och levererar kvalitet i varje led.
      </p>
      <p className="mt-6 font-body text-3xl text-center text-lg mb-20">
        Vi bygger projekt som gör skillnad – ekonomiskt, socialt och miljömässigt.
      </p>
    </div>
    </section>
  );
};

export default TillsammansSection;
