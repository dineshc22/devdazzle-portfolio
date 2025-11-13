import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">Professional</span> <span className="text-foreground">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />

            <Card className="bg-gradient-card border-border shadow-card p-8 relative animate-fade-in-up">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

              <div className="md:ml-12 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Site Reliability Engineer</h3>
                    <p className="text-xl text-primary font-semibold">Wipro Ltd</p>
                  </div>
                  <div className="flex flex-col gap-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Apr 2022 – Nov 2022</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Enterprise Solutions</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    Supporting mission-critical AWS environments for international enterprise clients, 
                    focusing on critical transaction platforms and high-availability systems.
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-3 text-foreground">
                      <li className="flex gap-3">
                        <span className="text-success-green mt-1">▸</span>
                        <span>Led monitoring enhancements and SLO/SLI optimization using Datadog and Grafana 
                        for mission-critical AWS environments serving international enterprise clients</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-success-green mt-1">▸</span>
                        <span>Created and deployed Python automation scripts for monitoring tasks and alert 
                        validation, boosting team efficiency by 30% and significantly reducing alert noise</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-success-green mt-1">▸</span>
                        <span>Analyzed system logs and cloud deployments to identify infrastructure improvement 
                        opportunities, driving down incident recurrence rates</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-success-green mt-1">▸</span>
                        <span>Coordinated onboarding and production readiness for new payment services, 
                        improving documentation and streamlining cross-team workflows</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-3 py-1 text-sm bg-secondary text-foreground rounded-full border border-primary">AWS</span>
                    <span className="px-3 py-1 text-sm bg-secondary text-foreground rounded-full border border-primary">Datadog</span>
                    <span className="px-3 py-1 text-sm bg-secondary text-foreground rounded-full border border-primary">Grafana</span>
                    <span className="px-3 py-1 text-sm bg-secondary text-foreground rounded-full border border-primary">Python</span>
                    <span className="px-3 py-1 text-sm bg-secondary text-foreground rounded-full border border-primary">ITIL</span>
                    <span className="px-3 py-1 text-sm bg-secondary text-foreground rounded-full border border-primary">SLO/SLI</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
