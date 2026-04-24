import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarati Shrestha",
    role: "Kathmandu",
    text: "My silk saree came back looking brand new! The team is incredibly careful with delicate fabrics. Highly recommend for ethnic wear.",
    initials: "AS",
  },
  {
    name: "Bibek Karki",
    role: "Lalitpur",
    text: "Fast pickup, fast delivery, and my suits have never looked sharper. Best dry cleaning service I've used in Nepal.",
    initials: "BK",
  },
  {
    name: "Sushmita Rai",
    role: "Bhaktapur",
    text: "They cleaned our heavy galaicha and sofa covers beautifully. Very professional, polite staff. Will use again!",
    initials: "SR",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-24 gradient-hero overflow-hidden">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Testimonials
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mb-4 text-foreground">
            Loved by <span className="gradient-text">our customers</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 sm:p-12 shadow-float border border-border/50">
            <Quote className="absolute -top-6 left-8 w-12 h-12 text-primary fill-primary" />

            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            <p
              key={active}
              className="text-lg sm:text-xl text-foreground text-center leading-relaxed mb-8 font-medium animate-fade-in"
            >
              "{testimonials[active].text}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg shadow-glow">
                {testimonials[active].initials}
              </div>
              <div>
                <div className="font-display font-bold text-foreground">{testimonials[active].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[active].role}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === i ? "w-10 gradient-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
