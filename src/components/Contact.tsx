import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please share your name and phone number.");
      return;
    }
    toast.success("Pickup request sent! We'll call you shortly. 🧺");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-background overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Get in Touch
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mb-4 text-foreground">
            Book a <span className="gradient-text">free pickup</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Drop us your details and we'll get back within minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Info side */}
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: Phone,
                title: "Call Us",
                value: "+977 9704524133",
                href: "tel:+9779704524133",
              },
              {
                icon: Mail,
                title: "Email",
                value: "query@freshandclean.com.np",
                href: "mailto:query@freshandclean.com.np",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Baluwakhani, Budhanilkantha",
                href: "https://maps.app.goo.gl/s411jnRn6QYRjAht7",
              },

              {
                icon: Clock,
                title: "Open Hours",
                value: "8:00 AM – 8:00 PM (All Week)",
              },
            ].map((item, i) => {
              const Wrap = item.href ? "a" : "div";
              return (
                <Wrap
                  key={item.title}
                  {...(item.href ? { href: item.href } : {})}
                  className="group flex gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-card hover-lift block"
                  style={{ animationDelay: `${i * 0.1}s` }}
                  target="_blank"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow group-hover:rotate-6 transition-transform">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                      {item.title}
                    </div>
                    <div className="text-foreground font-display font-semibold">
                      {item.value}
                    </div>
                  </div>
                </Wrap>
              );
            })}
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 bg-card rounded-3xl p-8 sm:p-10 shadow-float border border-border/50 space-y-5"
          >
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                Your Name
              </label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ramesh Sharma"
                className="h-12 rounded-xl border-border/70 focus-visible:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                Phone Number
              </label>
              <Input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+977 98XXXXXXXX"
                className="h-12 rounded-xl border-border/70 focus-visible:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                What do you need cleaned?
              </label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="e.g. 2 sarees, 1 blanket, 1 suit..."
                rows={4}
                className="rounded-xl border-border/70 focus-visible:ring-primary resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full gradient-primary text-primary-foreground shadow-glow hover:shadow-float hover:scale-[1.02] transition-all duration-300 rounded-xl h-14 text-base group"
            >
              Request Pickup
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
