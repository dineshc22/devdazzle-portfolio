import { Cloud, Code, Database, Monitor, Settings, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS (EC2, IAM, VPC, S3)", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Git", "Maven", "Microservices"],
    gradient: "from-purple-500 to-blue-500",
  },
  {
    title: "Monitoring & Observability",
    icon: Monitor,
    skills: ["Datadog", "Grafana", "Kibana", "New Relic", "Dynatrace", "Splunk"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Programming & Scripting",
    icon: Code,
    skills: ["Python (automation, log analytics)", "Java", "Shell Scripting"],
    gradient: "from-cyan-500 to-pink-500",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "PL/SQL"],
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "Frameworks",
    icon: GitBranch,
    skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Cloud", "Selenium WebDriver", "Postman"],
    gradient: "from-purple-500 to-blue-500",
  },
  {
    title: "Process & Tools",
    icon: Settings,
    skills: ["ITIL", "Incident Response", "JIRA", "Monitoring & Reporting Automation"],
    gradient: "from-blue-500 to-pink-500",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-secondary bg-clip-text text-transparent">Technical</span>{" "}
              <span className="text-foreground">Skills</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="bg-white/60 backdrop-blur-glass rounded-3xl p-6 border border-white/20 shadow-glass hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`bg-gradient-to-r ${category.gradient} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm bg-white/80 text-foreground rounded-full border border-white/40 hover:border-primary/40 hover:bg-white transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
