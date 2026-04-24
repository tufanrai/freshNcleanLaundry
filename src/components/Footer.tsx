import { Sparkles, Facebook, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent opacity-5" />

      <div className="container relative">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">Fresh & Clean</div>
                <div className="text-[10px] text-background/60 tracking-widest uppercase">Laundry • Dry Cleaning</div>
              </div>
            </div>
            <p className="text-background/70 text-sm max-w-md leading-relaxed mb-5">
              Nepal's trusted laundry & dry cleaning service. Treating every garment with the care it deserves — from your daily wear to your most precious occasion outfits.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Phone].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:scale-110 transition-all duration-300 flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#services" className="hover:text-primary-glow transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-primary-glow transition-colors">How It Works</a></li>
              <li><a href="#why" className="hover:text-primary-glow transition-colors">Why Us</a></li>
              <li><a href="#contact" className="hover:text-primary-glow transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Open Hours</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Sunday – Saturday</li>
              <li className="text-primary-glow font-semibold">8:00 AM – 8:00 PM</li>
              <li className="pt-2">Kathmandu, Nepal</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-background/50">
          <p>© {new Date().getFullYear()} Fresh and Clean Laundry & Dry Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
