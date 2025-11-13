import { Trophy, TrendingUp, Award, Zap } from "lucide-react";

const achievements = [
  {
    icon: TrendingUp,
    title: "Automation Excellence",
    description: "Automated cloud log analysis with Python, reducing incident review efforts significantly",
    metric: "30%",
    subtitle: "Efficiency Boost",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Award,
    title: "AWS Reliability Champion",
    description: "Recognized for achieving the highest AWS uptime and reliability improvement",
    metric: "99.9%",
    subtitle: "System Uptime",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Time Optimization",
    description: "Implemented monitoring automation that saved significant engineering hours monthly",
    metric: "15+ hrs",
    subtitle: "Saved Monthly",
    gradient: "from-cyan-500 to-pink-500",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Key</span>{" "}
              <span className="text-foreground">Achievements</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Delivering measurable impact through automation, reliability, and operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.title}
                  className="bg-white/60 backdrop-blur-glass rounded-3xl p-8 border border-white/20 shadow-glass hover:shadow-glow transition-all duration-300 hover:scale-105 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className={`bg-gradient-to-r ${achievement.gradient} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <Trophy className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground">{achievement.title}</h3>
                      <div className={`inline-block bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                        <div className="text-5xl font-bold">{achievement.metric}</div>
                        <div className="text-sm font-semibold">{achievement.subtitle}</div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
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
