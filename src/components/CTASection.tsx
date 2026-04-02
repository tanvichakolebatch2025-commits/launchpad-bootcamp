import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-20 gradient-hero">
    <div className="container text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary-foreground">
          Ready to Start Your Journey?
        </h2>
        <p className="text-primary-foreground/80 text-lg">
          Applications for the September 2026 cohort are now open. Limited seats available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
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
            Schedule a Call
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
