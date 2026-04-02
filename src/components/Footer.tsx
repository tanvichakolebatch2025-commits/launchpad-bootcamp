const Footer = () => (
  <footer className="py-10 bg-card border-t border-border">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-heading font-bold text-xl text-foreground">
          DevCamp<span className="text-accent">.</span>
        </div>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">About</a>
          <a href="#" className="hover:text-foreground transition-colors">Curriculum</a>
          <a href="#" className="hover:text-foreground transition-colors">Admissions</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <p className="text-xs text-muted-foreground">
          © 2026 DevCamp. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
