const SistaSection = () => {
  return (
    <section id="sista" className="bg-foreground text-background pt-8 pb-12 px-8">
      <div className="max-w-5xl mx-auto"> 
        <div className="border-b border-background/20 mb-16"></div>

        <div className="grid md:grid-cols-2 gap-16 mb-4">
          
          {/* Vänster kolumn: Faser */}
          {/* Vi använder flex och items-center på kolumnen för att centrera den inre boxen */}
          <div className="flex flex-col items-center">
            {/* Denna inre div har en fast max-bredd och mx-auto för att centrera sig själv, men text-left för innehållet */}
            <div className="max-w-sm w-full text-left space-y-5">
              <div>
                <h3 className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-2">
                  Expertis
                </h3>
              </div>
              <p className="font-body text-medium">
                Premises verkar i alla faser av fastighetsutveckling – antingen för egen utveckling eller på uppdrag för externa fastighetsutvecklare.
              </p>
              <ul className="grid grid-cols-1 gap-3 font-body text-medium">
                {[
                  "Affärsutveckling", "Fastighetsförvärv", "Projektutveckling", 
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
          </div>

          {/* Höger kolumn: Områden */}
          <div className="flex flex-col items-center">
            <div className="max-w-sm w-full text-left space-y-5">
              <div>
                <h3 className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-2">
                  Områden
                </h3>
              </div>
              <p className="font-body text-medium">
                Vi är verksamma inom nyproduktion och omvandling av följande fastigheter.
              </p>
              <ul className="grid grid-cols-1 gap-3 font-body text-medium">
                {[
                  "Bostäder", 
                  "Brf lokaler, lager, lättindustri", 
                  "Omsorgsfastigheter",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 group">
                    <span className="h-1.5 w-1.5 bg-accent rounded-full flex-shrink-0" /> 
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SistaSection;