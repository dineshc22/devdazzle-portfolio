import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, MapPin, Github, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9885338227",
    href: "tel:+919885338227",
  },
  {
    icon: Mail,
    label: "Email",
    value: "dk7774496@gmail.com",
    href: "mailto:dk7774496@gmail.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.iamdinesh.xyz",
    href: "https://www.iamdinesh.xyz",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: null,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">Get In</span> <span className="text-foreground">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Looking for a dedicated Site Reliability Engineer? Let's discuss how I can contribute 
              to your team's success.
            </p>
          </div>

          <Card className="bg-gradient-card border-border shadow-card p-8 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="bg-secondary/50 p-3 rounded-lg">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              target={info.href.startsWith("http") ? "_blank" : undefined}
                              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Call to Action */}
              <div className="space-y-6 flex flex-col justify-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Let's Connect</h3>
                  <p className="text-muted-foreground">
                    I'm currently open to new opportunities and would love to discuss how my 
                    expertise in AWS, monitoring, and automation can benefit your organization.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                    onClick={() => window.location.href = "mailto:dk7774496@gmail.com"}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-foreground hover:bg-primary/10"
                    onClick={() => window.location.href = "tel:+919885338227"}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Me
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Connect on social media</p>
                  <div className="flex gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      className="border-border hover:border-primary hover:bg-primary/10"
                      onClick={() => window.open("https://github.com", "_blank")}
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="border-border hover:border-primary hover:bg-primary/10"
                      onClick={() => window.open("https://linkedin.com", "_blank")}
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2025 Dinesh Challa. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
