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
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic excellence with consistent high achievement
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent hidden lg:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:gap-12`}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="inline-block mb-4 lg:mb-0">
                    <div className="text-4xl font-bold text-accent">{edu.year}</div>
                  </div>
                </div>

                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-accent items-center justify-center z-10">
                  <GraduationCap className="h-10 w-10 text-accent-foreground" />
                </div>

                <div className="w-full lg:w-5/12">
                  <Card className="hover-elevate transition-transform hover:scale-105" data-testid={`card-education-${index}`}>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <h3 className="text-xl font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        {edu.gpa && (
                          <Badge variant="secondary" className="bg-chart-3 text-white">
                            GPA: {edu.gpa}
                          </Badge>
                        )}
                      </div>
                      <p className="text-base font-medium text-accent">{edu.field}</p>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
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
