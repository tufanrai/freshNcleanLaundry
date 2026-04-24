import { useEffect, useRef, useState } from "react";
import {
  Shirt,
  Snowflake,
  Footprints,
  ShoppingBag,
  Sparkles,
  Wind,
  Brush,
  Zap,
  Crown,
  type LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag?: string;
}

const services: Service[] = [
  { icon: Shirt, title: "Daily Wear Laundry", desc: "Shirts, t-shirts, kurthas & everyday clothes washed with care.", tag: "Popular" },
  { icon: Snowflake, title: "Down & Silicon Jackets", desc: "Specialized cleaning for puffer, down & silicon jackets — fluff restored." },
  { icon: Wind, title: "Blanket & Comforters", desc: "Deep wash for heavy blankets, duvets & comforters." },
  { icon: Crown, title: "Suit, Coat & Pant Set", desc: "Professional dry cleaning for two-piece sets, blazers & coats." },
  { icon: Footprints, title: "Shoe Cleaning", desc: "Sneakers, leather & casual shoes restored to like-new shine." },
  { icon: ShoppingBag, title: "Bag Cleaning", desc: "Handbags, backpacks & leather bags revived gently." },
  { icon: Sparkles, title: "Saree, Lehenga & Kurtha", desc: "Delicate ethnic wear handled with traditional care.", tag: "Specialty" },
  { icon: Brush, title: "Carpet, Galaicha & Sofa", desc: "Heavy-duty cleaning for carpets, galaichas & upholstery." },
  { icon: Zap, title: "Fast & Stain Wash", desc: "Same-day express service & stubborn stain removal.", tag: "Express" },
];

const ServiceCard = ({ s, index }: { s: Service; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative bg-card rounded-3xl p-6 sm:p-7 shadow-card hover-lift cursor-pointer overflow-hidden border border-border/50 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${index * 0.08}s` }}
    >
      {/* Gradient hover overlay */}
      <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {s.tag && (
        <span className="absolute top-4 right-4 z-10 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 text-accent group-hover:bg-white/20 group-hover:text-primary-foreground transition-colors">
          {s.tag}
        </span>
      )}

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 shadow-glow group-hover:bg-white group-hover:bg-none group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          <s.icon className="w-7 h-7 text-primary-foreground group-hover:text-primary transition-colors" />
        </div>
        <h3 className="font-display font-bold text-xl mb-2 text-foreground group-hover:text-primary-foreground transition-colors">
          {s.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-primary-foreground/90 transition-colors">
          {s.desc}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Our Services
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mb-4 text-foreground">
            Care for <span className="gradient-text">every fabric</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From your daily essentials to festive finery — one trusted home for every garment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
