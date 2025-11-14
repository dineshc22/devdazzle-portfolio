import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-mesh">
      {/* Floating gradient orbs with slow motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "7s" }} />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "14s" }} />
        <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "10s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
        <br></br>
          {/* Main heading with gradient */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                DINESH CHALLA
              </span>
            </h1>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                Java Developer & Site Reliability Engineer
              </h2>
              <div className="h-1.5 w-32 bg-gradient-primary rounded-full" />
            </div>
          </div>

          {/* Glass metrics cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto py-8">
            <div className="bg-white/60 backdrop-blur-glass rounded-2xl p-6 border border-white/20 shadow-glass hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in">
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">7+</div>
              <div className="text-sm font-medium text-muted-foreground mt-2">Months Experience</div>
            </div>
            <div className="bg-white/60 backdrop-blur-glass rounded-2xl p-6 border border-white/20 shadow-glass hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent">99.9%</div>
              <div className="text-sm font-medium text-muted-foreground mt-2">System Uptime</div>
            </div>
            <div className="bg-white/60 backdrop-blur-glass rounded-2xl p-6 border border-white/20 shadow-glass hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">Java</div>
              <div className="text-sm font-medium text-muted-foreground mt-2">Backend Expertise</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-primary text-white border-0 shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg px-8"
            >
              Let's Connect
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#experience");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white/60 backdrop-blur-glass border-white/20 hover:bg-white/80 text-foreground text-lg px-8"
            >
              View Experience
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      
    </section>
  );
};
