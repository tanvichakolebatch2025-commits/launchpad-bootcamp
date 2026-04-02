import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import CurriculumSection from "@/components/CurriculumSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <div id="curriculum">
      <CurriculumSection />
    </div>
    <div id="testimonials">
      <TestimonialsSection />
    </div>
    <CTASection />
    <Footer />
  </div>
);

export default Index;
