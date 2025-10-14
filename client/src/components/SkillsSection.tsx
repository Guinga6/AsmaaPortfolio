import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code, Briefcase, Heart } from "lucide-react";

const technicalSkills = [
  { category: "Languages", skills: ["C/C++/C#", "Java", "Python", "PHP", "JavaScript", "HTML/CSS", "MATLAB", "Assembly"] },
  { category: "Frameworks", skills: ["Laravel", "React", "WordPress", "jQuery", "Android"] },
  { category: "Databases", skills: ["MySQL", "Oracle", "PostgreSQL"] },
  { category: "Software", skills: ["Adobe Suite", "MATLAB", "Visual Studio", "Android Studio", "Git"] },
  { category: "Office", skills: ["Excel", "Word", "PowerPoint", "EndNote"] },
];

const professionalSkills = [
  "Data Analysis & Statistical Review",
  "Full-Stack Web Development",
  "Project Management & Coordination",
  "Technical Training & Teaching",
  "Report Writing & Documentation",
  "Strategic Planning & Event Organization",
  "Team Leadership",
  "Finance & Budget Management",
];

const softSkills = [
  "Strong Communication",
  "Problem-Solving",
  "Time Management",
  "Quick Learner",
  "Works Under Pressure",
  "Independent & Team Player",
  "Leadership Abilities",
  "Continuous Improvement",
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary">
            Skills & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Crafting Solutions with a Multi-Disciplinary Toolkit
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A blend of technical mastery, professional leadership, and human-centered soft skills drives every project forward.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="relative grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 rounded-full border border-white/40 dark:border-white/10 bg-white/70 dark:bg-background/70 backdrop-blur">
            <TabsTrigger value="technical" data-testid="tab-technical" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Code className="h-4 w-4 mr-2" />
              Technical
            </TabsTrigger>
            <TabsTrigger value="professional" data-testid="tab-professional" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Briefcase className="h-4 w-4 mr-2" />
              Professional
            </TabsTrigger>
            <TabsTrigger value="soft" data-testid="tab-soft" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Heart className="h-4 w-4 mr-2" />
              Soft Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((item, index) => (
                <Card
                  key={index}
                  className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-background/80 backdrop-blur hover:-translate-y-2 transition-transform shadow-lg"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.category}
                      </h3>
                      <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                        Core
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="bg-white/60 dark:bg-background/60 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="professional" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {professionalSkills.map((skill, index) => (
                <Card
                  key={index}
                  className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-background/80 backdrop-blur hover:-translate-y-1 transition-transform"
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="soft" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {softSkills.map((skill, index) => (
                <Card
                  key={index}
                  className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-background/80 backdrop-blur hover:-translate-y-1 transition-transform text-center"
                >
                  <CardContent className="p-6">
                    <span className="text-foreground font-medium text-sm tracking-wide">
                      {skill}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
