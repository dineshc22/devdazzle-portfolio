import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-glow/5 rounded-full blur-3xl animate-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Status indicator */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full border border-primary/20">
            <div className="w-2 h-2 bg-success-green rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">DINESH CHALLA</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground font-semibold">
              Site Reliability Engineer
            </h2>
          </div>

          {/* Metrics display */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto py-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border shadow-card">
              <div className="text-3xl font-bold text-primary">7+</div>
              <div className="text-sm text-muted-foreground">Months Exp</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border shadow-card">
              <div className="text-3xl font-bold text-success-green">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border shadow-card">
              <div className="text-3xl font-bold text-metric-blue">AWS</div>
              <div className="text-sm text-muted-foreground">Cloud Expert</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              Get In Touch
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#experience");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-primary text-foreground hover:bg-primary/10"
            >
              View Experience
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  );
};
