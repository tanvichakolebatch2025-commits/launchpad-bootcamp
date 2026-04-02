import { CheckCircle } from "lucide-react";

const modules = [
  {
    week: "Weeks 1–3",
    title: "Frontend Foundations",
    topics: ["HTML5 & CSS3", "JavaScript ES6+", "Responsive Design", "Git & GitHub"],
  },
  {
    week: "Weeks 4–6",
    title: "Modern Frameworks",
    topics: ["React.js", "TypeScript", "State Management", "Component Architecture"],
  },
  {
    week: "Weeks 7–9",
    title: "Backend & Databases",
    topics: ["Node.js & Express", "PostgreSQL", "REST APIs", "Authentication"],
  },
  {
    week: "Weeks 10–12",
    title: "Capstone & Career Prep",
    topics: ["Full-Stack Project", "Deployment & CI/CD", "Technical Interviews", "Portfolio Building"],
  },
];

const CurriculumSection = () => (
  <section className="py-20 bg-section-alt">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
          What You'll Learn
        </h2>
        <p className="text-muted-foreground text-lg">
          A comprehensive, project-based curriculum designed with industry leaders.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {modules.map((mod) => (
          <div
            key={mod.title}
            className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              {mod.week}
            </span>
            <h3 className="text-xl font-bold font-heading text-foreground mt-2 mb-4">
              {mod.title}
            </h3>
            <ul className="space-y-2">
              {mod.topics.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CurriculumSection;
