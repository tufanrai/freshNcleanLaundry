import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow group-hover:rotate-12 transition-transform duration-500">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-base text-foreground">Fresh & Clean</div>
            <div className="text-[10px] text-muted-foreground tracking-widest uppercase">Laundry • Dry Cleaning</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="story-link text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild className="gradient-primary text-primary-foreground shadow-glow hover:shadow-float hover:scale-105 transition-all duration-300 rounded-full px-6">
            <a href="#contact">Book Pickup</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass border-t border-border animate-fade-in">
          <ul className="container py-6 flex flex-col gap-4">
            {navItems.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <Button asChild className="gradient-primary text-primary-foreground rounded-full">
              <a href="#contact" onClick={() => setOpen(false)}>Book Pickup</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
