import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Frontend Developer at TechCorp",
    text: "This bootcamp completely changed my career. I went from zero coding experience to landing a developer role in just 4 months.",
  },
  {
    name: "James L.",
    role: "Full-Stack Developer at StartupXYZ",
    text: "The hands-on projects and mentorship were incredible. I built a real portfolio that impressed every interviewer.",
  },
  {
    name: "Priya K.",
    role: "Software Engineer at CloudBase",
    text: "Best investment I've ever made. The instructors genuinely care and the community support is amazing.",
  },
];

const TestimonialsSection = () => (
  <section className="py-20">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
          Success Stories
        </h2>
        <p className="text-muted-foreground text-lg">
          Hear from our graduates who transformed their careers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-card rounded-xl p-6 border border-border shadow-sm flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm flex-1 mb-4">"{t.text}"</p>
            <div>
              <div className="font-semibold text-foreground text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
