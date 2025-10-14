import { Database, Code, Users, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Database,
    title: "Data Analysis & Entry",
    description: "Expert in data management, statistical analysis, and database administration using Excel, Oracle, and MySQL.",
  },
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description: "Building responsive web applications with modern frameworks including WordPress, Laravel, and React.",
  },
  {
    icon: Users,
    title: "Project Coordination & Management",
    description: "Strategic planning, budget management, and successful coordination of technical projects and teams.",
  },
  {
    icon: GraduationCap,
    title: "Technical Training & Teaching",
    description: "Experienced educator in programming, Arduino, digital media, and engineering fundamentals.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[120%] max-w-6xl rounded-3xl bg-white/70 dark:bg-background/70 blur-3xl opacity-60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center px-4 py-1 rounded-full border border-accent/30 bg-accent/10 text-sm font-medium text-accent">
            Areas of Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Technical Leadership Across Every Layer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From strategy to delivery, I transform complex challenges into polished, human-centered experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-background/80 backdrop-blur hover:-translate-y-2 transition-all duration-300 shadow-lg"
                data-testid={`card-service-${index}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
                <CardContent className="relative p-6 space-y-5">
                  <div className="w-14 h-14 mx-auto md:mx-0 rounded-2xl bg-accent/10 flex items-center justify-center shadow-inner">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground text-center md:text-left">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-center md:text-left">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-accent font-semibold uppercase tracking-widest justify-center md:justify-start">
                    <span className="block h-px w-6 bg-accent/40" />
                    <span>Core Strength</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
