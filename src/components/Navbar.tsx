import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <div className="font-heading font-bold text-xl text-foreground">
          DevCamp<span className="text-accent">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#curriculum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Curriculum</a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Admissions</a>
          <Button size="sm" className="gradient-cta text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Apply Now
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          <a href="#curriculum" className="block text-sm text-muted-foreground hover:text-foreground">Curriculum</a>
          <a href="#testimonials" className="block text-sm text-muted-foreground hover:text-foreground">Testimonials</a>
          <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">Admissions</a>
          <Button size="sm" className="gradient-cta text-accent-foreground font-semibold rounded-lg w-full hover:opacity-90 transition-opacity">
            Apply Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
