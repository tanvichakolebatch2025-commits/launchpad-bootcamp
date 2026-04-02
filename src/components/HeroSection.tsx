import heroImage from "@/assets/hero-bootcamp.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Students collaborating at web development bootcamp"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
            <Calendar className="h-4 w-4" />
            Next Cohort Starts September 2026
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight text-primary-foreground">
            Launch Your Career in{" "}
            <span className="gradient-cta bg-clip-text text-transparent">
              Web Development
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl">
            Go from beginner to job-ready developer in 12 weeks. Learn modern
            technologies with hands-on projects and expert mentorship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gradient-cta text-accent-foreground font-semibold text-base px-8 py-6 rounded-xl hover:opacity-90 transition-opacity"
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold text-base px-8 py-6 rounded-xl"
            >
              Download Syllabus
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> 12 Weeks Full-Time
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4" /> 20 Students Per Cohort
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
