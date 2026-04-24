import { Leaf, Award, HeartHandshake, Timer } from "lucide-react";

const features = [
  { icon: Leaf, title: "Eco-Friendly", desc: "Gentle, biodegradable detergents that care for fabric and the planet." },
  { icon: Award, title: "Premium Quality", desc: "Trusted by thousands across Nepal for spotless, lasting results." },
  { icon: Timer, title: "On-Time, Every Time", desc: "Reliable pickup & delivery — your time matters to us." },
  { icon: HeartHandshake, title: "Personal Care", desc: "Every garment treated as if it were our own family's." },
];

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "50K+", label: "Garments Cleaned" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24h", label: "Avg. Turnaround" },
];

const Why = () => {
  return (
    <section id="why" className="relative py-24 bg-background overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Why Choose Us
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl mb-6 text-foreground leading-tight">
              More than laundry — <span className="gradient-text">a promise of care.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Fresh & Clean, we combine modern equipment with traditional Nepali hospitality to give your wardrobe the love it deserves.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="group flex gap-4 p-4 rounded-2xl hover:bg-secondary/60 transition-all duration-300"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base mb-1 text-foreground">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 gradient-primary rounded-[3rem] blur-3xl opacity-20" />
            <div className="relative grid grid-cols-2 gap-5">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`bg-card rounded-3xl p-8 shadow-card hover-lift border border-border/50 ${i % 2 === 1 ? "mt-8" : ""}`}
                >
                  <div className="text-4xl sm:text-5xl font-display font-extrabold gradient-text mb-2">{s.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
