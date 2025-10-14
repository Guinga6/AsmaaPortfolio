import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

const projects = [
  {
    title: "Assets and Keys Management System Using NFC Technology",
    description: "Automated system for asset management and tracking using NFC technology and IoT integration.",
    technologies: ["NFC", "IoT", "Database Management", "Hardware Integration"],
    category: "Research",
    publication: "IEEE 2018",
    link: "https://ieeexplore.ieee.org/document/8531221",
  },
  {
    title: "NFC-Based System for Sharing Economy",
    description: "Automated tracking system for shared assets leveraging NFC technology for real-time management.",
    technologies: ["NFC", "Database", "Asset Tracking", "System Design"],
    category: "Research",
    publication: "IEEE 2019",
    link: "https://ieeexplore.ieee.org/document/8925320",
  },
  {
    title: "Master Program in Cyber Physical Systems",
    description: "Research and development of international master program curriculum with focus on CPS fundamentals.",
    technologies: ["Curriculum Development", "Research", "Project Management"],
    category: "Research",
    publication: "IEEE 2019",
    link: "https://ieeexplore.ieee.org/document/8925328",
  },
  {
    title: "Full-Stack Web Applications",
    description: "Multiple responsive web applications built using modern frameworks and best practices.",
    technologies: ["WordPress", "Laravel", "PHP", "MySQL", "JavaScript"],
    category: "Web Development",
    publication: null,
    link: null,
  },
  {
    title: "Arduino Projects Collection",
    description: "20+ practical Arduino projects covering various applications from basic circuits to advanced systems.",
    technologies: ["Arduino", "C++", "Electronics", "Proteus"],
    category: "Arduino",
    publication: null,
    link: null,
  },
  {
    title: "Data Analysis & Visualization",
    description: "Statistical analysis and data visualization projects for various organizations and research initiatives.",
    technologies: ["Excel", "Statistical Analysis", "Data Visualization", "Reporting"],
    category: "Data Analysis",
    publication: null,
    link: null,
  },
];

const categories = ["All", "Research", "Web Development", "Arduino", "Data Analysis"];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.12),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium">
            <Award className="h-4 w-4" />
            Signature Work
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Selected Projects & Research
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Exploring the intersection of data intelligence, cyber-physical systems, and human-centered digital experiences.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              data-testid={`button-filter-${category.toLowerCase()}`}
              className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-white/70 dark:bg-background/70 text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/50 dark:border-white/10 bg-white/80 dark:bg-background/80 backdrop-blur hover:-translate-y-3 transition-all duration-500 shadow-xl"
              data-testid={`card-project-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="relative p-7 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="secondary" className="uppercase tracking-wide text-xs">
                    {project.category}
                  </Badge>
                  {project.publication && (
                    <Badge className="bg-chart-3 text-white shadow-sm">
                      <Award className="h-3 w-3 mr-1" />
                      {project.publication}
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground leading-tight min-h-[56px]">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs bg-white/60 dark:bg-background/60">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs bg-white/60 dark:bg-background/60">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    data-testid={`link-project-${index}`}
                  >
                    View Publication
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
