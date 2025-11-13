import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, MapPin, Github, Linkedin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9885338227",
    href: "tel:+919885338227",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "dk7774496@gmail.com",
    href: "mailto:dk7774496@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.iamdinesh.xyz",
    href: "https://www.iamdinesh.xyz",
    gradient: "from-cyan-500 to-pink-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: null,
    gradient: "from-pink-500 to-purple-500",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-accent bg-clip-text text-transparent">Get In</span>{" "}
              <span className="text-foreground">Touch</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-accent mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Looking for a dedicated Site Reliability Engineer? Let's discuss how I can contribute 
              to your team's success.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-glass rounded-3xl p-8 md:p-12 border border-white/20 shadow-glass animate-scale-in">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.label} className="flex items-start gap-4 group">
                        <div className={`bg-gradient-to-r ${info.gradient} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-muted-foreground mb-1">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              target={info.href.startsWith("http") ? "_blank" : undefined}
                              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-foreground hover:text-primary transition-colors font-semibold text-lg"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-semibold text-lg">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Call to Action */}
              <div className="space-y-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">Let's Connect</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    I'm currently open to new opportunities and would love to discuss how my 
                    expertise in AWS, monitoring, and automation can benefit your organization.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-primary text-white border-0 shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                    onClick={() => window.location.href = "mailto:dk7774496@gmail.com"}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/80 backdrop-blur-glass border-white/40 hover:bg-white text-foreground text-lg"
                    onClick={() => window.location.href = "tel:+919885338227"}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Me
                  </Button>
                </div>

                <div className="pt-6 border-t border-white/40">
                  <p className="text-sm font-medium text-muted-foreground mb-4">Connect on social media</p>
                  <div className="flex gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      className="bg-white/80 border-white/40 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white hover:border-transparent transition-all duration-300"
                      onClick={() => window.open("https://github.com", "_blank")}
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="bg-white/80 border-white/40 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent transition-all duration-300"
                      onClick={() => window.open("https://linkedin.com", "_blank")}
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-white/40">
            <p className="text-muted-foreground">
              © 2025 Dinesh Challa. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
