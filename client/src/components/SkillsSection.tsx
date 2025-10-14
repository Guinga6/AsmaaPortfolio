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
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set across multiple domains
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="technical" data-testid="tab-technical">
              <Code className="h-4 w-4 mr-2" />
              Technical
            </TabsTrigger>
            <TabsTrigger value="professional" data-testid="tab-professional">
              <Briefcase className="h-4 w-4 mr-2" />
              Professional
            </TabsTrigger>
            <TabsTrigger value="soft" data-testid="tab-soft">
              <Heart className="h-4 w-4 mr-2" />
              Soft Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((item, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {item.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {professionalSkills.map((skill, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                    <span className="text-foreground">{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="soft" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="p-4 text-center">
                    <span className="text-foreground font-medium">{skill}</span>
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
