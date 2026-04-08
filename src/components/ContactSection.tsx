import { Mail, Phone, MapPin } from "lucide-react";
import premisesn from "@/assets/premisesnamn.png";

const ContactSection = () => {
  return (
    <footer
      id="kontakt"
      className="bg-foreground text-background py-10 px-8 md:px-16 pt-1"
    >
      <div className="mt-20 text-center">
        <p className="font-body text-lg md:text-xl uppercase tracking-[0.3em] text-white pb-10">
          Vi söker mark - Kontakta oss
        </p>
      </div>

      {/* max-w-2xl räcker gott när allt ska centreras, det håller ihop texten snyggt */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl font-light mb-4">
          Kontakt
        </h2>
        
        {/* Nytt textfält under rubriken */}
        <p className="font-body mb-12 mt-10 max-w-md mx-auto">
          Tveka inte att höra av dig till oss om du har frågor om pågående investeringar, projekt eller framtida samarbeten. Vi ser fram emot att höra från dig!
        </p>

        {/* Personer - Horisontellt på desktop, centrerat innehåll */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Person 1 */}
          <div className="flex flex-col items-center space-y-2">
            <h3 className="font-display text-2xl text-white tracking-wide">
              Stefan Jansson
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-3">
                <p className="font-body text-background/90">Stefan@premises.se</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <p className="font-body text-background/90">072-317 90 00</p>
              </div>
            </div>
          </div>

          {/* Person 2 */}
          <div className="flex flex-col items-center space-y-2">
            <h3 className="font-display text-2xl text-white tracking-wide">
              Pontus Ringaby
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-3">
                <p className="font-body text-background/90">Pontus@premises.se</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <p className="font-body text-background/90">070-278 17 00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Adress - Centrerad utan linje ovanför */}
        <div className="pb-8">
          <div className="flex flex-col items-center">
            <h3 className="font-body text-sm uppercase tracking-[0.2em] mb-2 text-background/60">
              Adress
            </h3>
            <p className="font-body text-background/90 leading-relaxed">
              Premises AB i Sverige<br />
              Orgnr: 559573-0739<br />
              Kemistvägen 2A<br />
              183 79 Täby
            </p>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
        <div className="mt-10 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-xl tracking-widest uppercase">
            <img 
              src={premisesn}
              alt="Logo"
              className="h-5"
            />
          </span>
          <span className="font-body text-xs text-background/40">
            © 2026 Premises. Alla rättigheter förbehållna.
          </span>
        </div>
    </footer>
  );
};

export default ContactSection;