import { Card } from "@/components/ui/card";
import { Trophy, TrendingUp, Award } from "lucide-react";

const achievements = [
  {
    icon: TrendingUp,
    title: "Automation Excellence",
    description: "Automated cloud log analysis with Python, reducing incident review efforts by 30% at Wipro",
    metric: "30%",
    color: "text-success-green",
  },
  {
    icon: Award,
    title: "AWS Reliability Champion",
    description: "Recognized for achieving the highest AWS uptime and reliability improvement in Wipro review",
    metric: "99.9%",
    color: "text-primary",
  },
  {
    icon: Trophy,
    title: "Efficiency Improvement",
    description: "Implemented monitoring automation that saved 15+ engineer hours per month",
    metric: "15+ hrs",
    color: "text-metric-blue",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">Key</span> <span className="text-foreground">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={achievement.title}
                  className="bg-gradient-card border-border shadow-card p-6 hover:shadow-glow transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`${achievement.color} bg-secondary/50 p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className={`text-3xl font-bold ${achievement.color}`}>
                        {achievement.metric}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{achievement.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
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
