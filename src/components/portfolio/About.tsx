import { GraduationCap, MapPin } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">About</span>{" "}
              <span className="text-foreground">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="bg-white/60 backdrop-blur-glass rounded-3xl p-8 md:p-12 border border-white/20 shadow-glass hover:shadow-glow transition-all duration-300 animate-scale-in">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
                  Professional Summary
                </h3>
                <p className="text-foreground leading-relaxed text-lg">
                  Site Reliability Engineer with <span className="font-semibold text-primary">7 months of end-to-end experience</span> supporting 
                  high-availability enterprise and financial systems for global clients. Expert in observability, cloud infrastructure, 
                  and automation, specializing in <span className="font-semibold text-primary">AWS deployments</span>, 
                  <span className="font-semibold text-primary"> Python scripting</span>, and incident management using 
                  ITIL and Agile best practices.
                </p>
                <p className="text-foreground leading-relaxed text-lg">
                  Proven ability to optimize <span className="font-semibold text-secondary">SLO/SLI performance</span>, 
                  reduce downtime, and lead cross-functional collaboration for operational stability. Passionate about building 
                  resilient systems and automating operational workflows to enhance efficiency and reliability.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-6">
                <div className="bg-gradient-primary/10 rounded-2xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary rounded-xl p-3">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">Bengaluru, India</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-secondary/10 rounded-2xl p-6 border border-secondary/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-secondary rounded-xl p-3">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">Education</h4>
                      <p className="text-muted-foreground">MBA, JNTU Anantapur (2019)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
