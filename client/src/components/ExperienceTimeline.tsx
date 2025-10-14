import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Data Entry & Data Analyst",
    company: "Culture & free Thought Association",
    period: "07/2024 – 04/2025",
    location: "Gaza, Palestine",
    responsibilities: [
      "Data entry using Microsoft Office, especially Excel",
      "Provide technical support for information management program",
      "Monitor program outputs and ensure report accuracy",
      "Conduct data analysis and statistical review",
    ],
  },
  {
    title: "Data Entry Clerk",
    company: "MDM France",
    period: "12/2023 – 06/2024",
    location: "Gaza, Palestine",
    responsibilities: [
      "Accurately entering medical data into electronic systems",
      "Reviewing and verifying medical data for accuracy",
    ],
  },
  {
    title: "Data Entry & Data Analyst",
    company: "Ayzeen Company",
    period: "09/2022 – 10/2023",
    location: "Ramallah, Palestine",
    responsibilities: [
      "Data entry in Microsoft Office, particularly Excel",
      "Provide technical support and maintain information management program",
      "Monitor report accuracy and perform statistical analysis",
    ],
  },
  {
    title: "Freelancer",
    company: "Various Projects",
    period: "03/2018 – 10/2023",
    location: "Remote",
    responsibilities: [
      "Full-stack web development (WordPress, Blogger, Joomla)",
      "Project management and coordination",
      "Professional data entry and algorithm analysis",
      "Writing reports, proposals, and scientific papers",
    ],
  },
  {
    title: "Researcher & Technical Assistant",
    company: "Palestine Technical College",
    period: "07/2019 – 09/2022",
    location: "Deir Al Balah, Palestine",
    responsibilities: [
      "Project coordinator for MS@CPS program (Erasmus+ funded)",
      "Preparing financial and procurement documents",
      "Curriculum development and accreditation",
      "Writing scientific papers and organizing workshops",
    ],
  },
];

export default function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            6+ years of diverse experience across multiple roles
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent hidden md:block"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="hidden md:flex absolute left-8 transform -translate-x-1/2 w-16 h-16 rounded-full bg-accent items-center justify-center z-10">
                  <Briefcase className="h-8 w-8 text-accent-foreground" />
                </div>

                <Card className="md:ml-24 hover-elevate" data-testid={`card-experience-${index}`}>
                  <CardContent className="p-6">
                    <div
                      className="cursor-pointer"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-accent font-medium mt-1">{exp.company}</p>
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          data-testid={`button-toggle-${index}`}
                        >
                          {expandedIndex === index ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{exp.period}</Badge>
                        <Badge variant="outline">{exp.location}</Badge>
                      </div>
                    </div>

                    {expandedIndex === index && (
                      <div className="mt-4 pt-4 border-t border-border animate-in slide-in-from-top-2">
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" data-testid="button-download-resume">
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
