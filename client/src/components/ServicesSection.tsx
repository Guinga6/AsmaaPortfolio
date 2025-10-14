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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Areas of Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering comprehensive technical solutions across multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-transform hover:-translate-y-2 cursor-pointer"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
