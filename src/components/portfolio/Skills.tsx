import { Card } from "@/components/ui/card";
import { Cloud, Code, Database, Monitor, Settings, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS (EC2, IAM, VPC, S3)", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Git", "Maven", "Microservices"],
    color: "text-primary",
  },
  {
    title: "Monitoring & Observability",
    icon: Monitor,
    skills: ["Datadog", "Grafana", "Kibana", "New Relic", "Dynatrace", "Splunk"],
    color: "text-success-green",
  },
  {
    title: "Programming & Scripting",
    icon: Code,
    skills: ["Python (automation, log analytics)", "Java", "Shell Scripting"],
    color: "text-metric-blue",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "PL/SQL"],
    color: "text-primary",
  },
  {
    title: "Frameworks",
    icon: GitBranch,
    skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Cloud", "Selenium WebDriver", "Postman"],
    color: "text-success-green",
  },
  {
    title: "Process & Tools",
    icon: Settings,
    skills: ["ITIL", "Incident Response", "JIRA", "Monitoring & Reporting Automation"],
    color: "text-metric-blue",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">Technical</span> <span className="text-foreground">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className="bg-gradient-card border-border shadow-card p-6 hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`${category.color} bg-secondary/50 p-3 rounded-lg`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm bg-secondary/50 text-foreground rounded-full border border-border hover:border-primary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
