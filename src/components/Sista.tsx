const SistaSection = () => {
  return (
    <section 
      id="sista" 
      className="bg-foreground text-background py-20 px-8"
    >
      <div className="max-w-5xl mx-auto"> 
        {/* Huvudrubrik */}
        <div className="border-b border-background/20 pb-12 mb-16">
          <h2 className="font-display text-3xl md:text-6xl text-center tracking-tight text-white uppercase leading-tight">
            Tillsammans formar vi <br className="hidden md:block" /> nästa generation av bostäder
          </h2>
        </div>

        {/* Grid för listinnehåll från bilden */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          
          {/* Vänster kolumn: Faser */}
          <div className="space-y-5">
            <div>
              <h3 className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-2">
                Expertis
              </h3>
              <h4 className="font-display text-3xl text-white uppercase">Våra Faser</h4>
            </div>
            <p className="font-body text-medium opacity-70 max-w-sm">
              Premises verkar i alla faser av fastighetsutveckling – antingen för egen utveckling eller på uppdrag för externa fastighetsutvecklare.
            </p>
            <ul className="grid grid-cols-1 gap-3 font-body text-medium">
              {[
                "Fastighetsförvärv", "Affärsutveckling", "Projektutveckling", 
                "Stadsutveckling", "Detaljplan", "Projektering", 
                "Projektledning", "Byggledning"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 group">
                  <span className="h-1.5 w-1.5 bg-accent rounded-full flex-shrink-0" /> 
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Höger kolumn: Lokalslag */}
          <div className="space-y-5">
            <div>
              <h3 className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-2">
                Områden
              </h3>
              <h4 className="font-display text-3xl text-white uppercase">Segment</h4>
            </div>
            <p className="font-body text-medium opacity-70 max-w-sm">
              Vi är verksamma inom flera olika lokalslag för att skapa bredd och hållbarhet i våra projekt.
            </p>
            <ul className="grid grid-cols-1 gap-3 font-body text-medium">
              {[
                "Bostäder", 
                "Samhällsfastigheter", 
                "Lager, lättindustri och logistik"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 group">
                  <span className="h-1.5 w-1.5 bg-accent rounded-full flex-shrink-0" /> 
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Avslutande call-out */}
        <div className="bg-white/5 p-12 text-center space-y-8 rounded-sm">

          <p className="font-display text-3xl md:text-4xl text-white uppercase tracking-wide">
            Vi bygger projekt som gör skillnad – <span className="text-accent">ekonomiskt, socialt och miljömässigt.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SistaSection;