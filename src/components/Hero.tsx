import { ArrowRight, Clock, Truck, ShieldCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-laundry.jpg";

const Bubble = ({ size, left, delay, duration }: { size: number; left: string; delay: string; duration: string }) => (
  <span
    className="absolute bottom-0 rounded-full bg-gradient-to-br from-primary-glow/40 to-primary/20 backdrop-blur-sm border border-white/40 animate-bubble-rise pointer-events-none"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left,
      animationDelay: delay,
      animationDuration: duration,
    }}
  />
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden gradient-hero">
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Bubble size={40} left="5%" delay="0s" duration="9s" />
        <Bubble size={20} left="15%" delay="2s" duration="7s" />
        <Bubble size={60} left="25%" delay="4s" duration="11s" />
        <Bubble size={30} left="40%" delay="1s" duration="8s" />
        <Bubble size={50} left="55%" delay="3s" duration="10s" />
        <Bubble size={25} left="70%" delay="5s" duration="9s" />
        <Bubble size={45} left="85%" delay="2.5s" duration="12s" />
        <Bubble size={35} left="92%" delay="6s" duration="8s" />
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6 text-foreground">
            Crisp clothes, <br />
            <span className="gradient-text">care you can feel.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Nepal's premium laundry & dry cleaning experts. From everyday wear to delicate sarees, lehengas, suits, jackets, and carpets — we treat every fabric with love.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild size="lg" className="gradient-primary text-primary-foreground shadow-glow hover:shadow-float hover:scale-105 transition-all duration-300 rounded-full text-base px-8 h-14 group">
              <a href="#contact">
                Book a Pickup
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base px-8 h-14 border-2 border-primary/30 hover:bg-primary/5 hover:border-primary transition-all">
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {[
              { icon: Clock, label: "24h Turnaround" },
              { icon: Truck, label: "Free Pickup" },
              { icon: ShieldCheck, label: "Fabric Safe" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="opacity-0 animate-fade-in-up flex flex-col items-center gap-2 p-3 rounded-2xl glass hover-lift"
                style={{ animationDelay: `${0.5 + i * 0.15}s` }}
              >
                <item.icon className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-center text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative opacity-0 animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <div className="absolute inset-0 gradient-primary rounded-[3rem] blur-2xl opacity-30 animate-float-slow" />
          <div className="relative rounded-[3rem] overflow-hidden shadow-float bg-card animate-float">
            <img
              src={heroImg}
              alt="Stack of freshly washed and folded laundry by Fresh and Clean Nepal"
              width={1280}
              height={1280}
              className="w-full h-auto"
            />
          </div>

          {/* Floating badges */}
          <div className="absolute -top-4 -left-4 sm:-left-8 glass rounded-2xl shadow-card p-4 animate-float" style={{ animationDelay: "1s" }}>
            <div className="text-2xl font-display font-bold gradient-text">5★</div>
            <div className="text-xs text-muted-foreground">Top Rated</div>
          </div>
          <div className="absolute -bottom-4 -right-4 sm:-right-8 glass rounded-2xl shadow-card p-4 animate-float" style={{ animationDelay: "2s" }}>
            <div className="text-2xl font-display font-bold gradient-text">10K+</div>
            <div className="text-xs text-muted-foreground">Happy Customers</div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/977XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-float"
        style={{ animationDuration: "3s" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </section>
  );
};

export default Hero;
