import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">About</span> <span className="text-foreground">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <Card className="bg-gradient-card border-border shadow-card p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Professional Summary</h3>
              <p className="text-foreground leading-relaxed text-lg">
                Site Reliability Engineer with 7 months of end-to-end experience supporting high-availability 
                enterprise and financial systems for global clients. Expert in observability, cloud infrastructure, 
                and automation, specializing in AWS deployments, Python scripting, and incident management using 
                ITIL and Agile best practices.
              </p>
              <p className="text-foreground leading-relaxed text-lg">
                Proven ability to optimize SLO/SLI performance, reduce downtime, and lead cross-functional 
                collaboration for operational stability. Passionate about building resilient systems and 
                automating operational workflows to enhance efficiency and reliability.
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-primary">Location</h4>
                  <p className="text-muted-foreground">Bengaluru, India</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-primary">Education</h4>
                  <p className="text-muted-foreground">MBA, JNTU Anantapur (2019)</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
