import { CalendarCheck, Truck, Sparkles, PackageCheck } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Book Online", desc: "Schedule a pickup time that works for you, in seconds." },
  { icon: Truck, title: "We Pick Up", desc: "Our team collects your laundry from your doorstep — free." },
  { icon: Sparkles, title: "Care & Clean", desc: "Each item is sorted, treated, washed & finished with care." },
  { icon: PackageCheck, title: "Fresh Delivery", desc: "Delivered back folded, pressed and beautifully packed." },
];

const Process = () => {
  return (
    <section id="process" className="relative py-24 bg-secondary/40 overflow-hidden">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            How It Works
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mb-4 text-foreground">
            Four steps to <span className="gradient-text">freshness</span>
          </h2>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative text-center group"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative inline-flex mb-5">
                <div className="absolute inset-0 gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="relative w-20 h-20 rounded-full gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                  <step.icon className="w-9 h-9 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-card border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
