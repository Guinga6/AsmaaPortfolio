import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const educationData = [
  {
    year: "2025",
    degree: "Master's Degree",
    field: "Computer Systems Engineering",
    institution: "Yildiz Technical University",
    location: "Online",
    gpa: null,
  },
  {
    year: "2024",
    degree: "Diploma",
    field: "Computer and Technology Teacher",
    institution: "Al-Aqsa University",
    location: "Gaza, Palestine",
    gpa: null,
  },
  {
    year: "2018",
    degree: "Bachelor's Degree",
    field: "Computer Systems Engineering",
    institution: "Palestine Technical College",
    location: "Deir Al Balah, Gaza, Palestine",
    gpa: "92.28",
  },
  {
    year: "2013",
    degree: "General Secondary Certificate",
    field: "Tawjihi",
    institution: "Shohada Deir Al-Balah",
    location: "Deir Al Balah, Palestine",
    gpa: "94.8",
  },
];

export default function EducationTimeline() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-muted/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(59,130,246,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_90%,rgba(14,165,233,0.15),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-accent/30 bg-accent/10 text-sm font-medium text-accent">
            Education Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Academic Excellence & Lifelong Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of growth through rigorous study, interdisciplinary research, and teaching experience.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-accent via-accent/20 to-transparent" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:gap-14`}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="inline-flex flex-col items-center lg:items-end gap-3">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground/70">
                      {edu.field}
                    </span>
                    <div className="text-4xl font-bold text-accent drop-shadow-sm">{edu.year}</div>
                  </div>
                </div>

                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-white/80 dark:bg-background/80 border border-accent/30 items-center justify-center shadow-xl">
                  <GraduationCap className="h-10 w-10 text-accent" />
                </div>

                <div className="w-full lg:w-5/12">
                  <Card
                    className="rounded-3xl border border-white/50 dark:border-white/10 bg-white/80 dark:bg-background/80 backdrop-blur hover:-translate-y-2 transition-transform shadow-xl"
                    data-testid={`card-education-${index}`}
                  >
                    <CardContent className="p-8 space-y-4">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {edu.institution}
                          </p>
                        </div>
                        {edu.gpa && (
                          <Badge variant="secondary" className="bg-chart-3 text-white shadow">
                            GPA {edu.gpa}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {edu.location}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
