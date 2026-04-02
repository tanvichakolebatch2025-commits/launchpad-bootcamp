import { Award, Briefcase, Code, GraduationCap } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "500+", label: "Graduates" },
  { icon: Briefcase, value: "92%", label: "Employment Rate" },
  { icon: Code, value: "12+", label: "Real Projects Built" },
  { icon: Award, value: "4.9/5", label: "Student Rating" },
];

const StatsSection = () => (
  <section className="py-16 bg-card border-y border-border">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center space-y-2">
            <stat.icon className="h-8 w-8 mx-auto text-accent" />
            <div className="text-3xl sm:text-4xl font-bold font-heading text-foreground">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
