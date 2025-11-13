import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-accent bg-clip-text text-transparent">Professional</span>{" "}
              <span className="text-foreground">Experience</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-accent mx-auto rounded-full" />
          </div>

          <div className="relative animate-scale-in">
            <div className="bg-white/60 backdrop-blur-glass rounded-3xl p-8 md:p-12 border border-white/20 shadow-glass hover:shadow-glow transition-all duration-300">
              <div className="space-y-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-foreground">Site Reliability Engineer</h3>
                    <p className="text-2xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
                      Wipro Ltd
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 lg:text-right">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary/10 rounded-xl border border-primary/20">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">Apr 2022 – Nov 2022</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-secondary/10 rounded-xl border border-secondary/20">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span className="font-medium text-foreground">Enterprise Solutions</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-foreground leading-relaxed text-lg">
                    Supporting mission-critical AWS environments for international enterprise clients, 
                    focusing on critical transaction platforms and high-availability systems.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-primary" />
                      <h4 className="text-xl font-bold text-foreground">Key Achievements</h4>
                    </div>
                    <ul className="space-y-4">
                      {[
                        "Led monitoring enhancements and SLO/SLI optimization using Datadog and Grafana for mission-critical AWS environments",
                        "Created and deployed Python automation scripts, boosting team efficiency by 30% and reducing alert noise",
                        "Analyzed system logs and cloud deployments to identify infrastructure improvements, driving down incident recurrence",
                        "Coordinated onboarding and production readiness for new payment services with improved documentation",
                      ].map((achievement, i) => (
                        <li key={i} className="flex gap-4 items-start group">
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-6">
                    {["AWS", "Datadog", "Grafana", "Python", "ITIL", "SLO/SLI", "Automation"].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
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
