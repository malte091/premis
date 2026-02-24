import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <footer
      id="kontakt"
      className="bg-foreground text-background py-20 px-8 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-light mb-12">
          Kontakt
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-start gap-4">
            <Mail size={20} className="mt-1 text-accent flex-shrink-0" />
            <div>
              <h3 className="font-body text-sm uppercase tracking-[0.2em] mb-2 text-background/60">
                E-post
              </h3>
              <p className="font-body text-background/90">info@premises.se</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone size={20} className="mt-1 text-accent flex-shrink-0" />
            <div>
              <h3 className="font-body text-sm uppercase tracking-[0.2em] mb-2 text-background/60">
                Telefon
              </h3>
              <p className="font-body text-background/90">08-123 456 78</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin size={20} className="mt-1 text-accent flex-shrink-0" />
            <div>
              <h3 className="font-body text-sm uppercase tracking-[0.2em] mb-2 text-background/60">
                Adress
              </h3>
              <p className="font-body text-background/90">
                Storgatan 1<br />
                111 23 Stockholm
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-xl tracking-widest uppercase">
            <img 
              src="/src/assets/premisesnamn.jpg" 
              alt="Logo"
              className="h-5" // justera storlek efter behov
            />
          </span>
          <span className="font-body text-xs text-background/40">
            © 2026 Premises. Alla rättigheter förbehållna.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
