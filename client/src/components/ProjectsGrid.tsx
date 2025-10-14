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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Research publications and technical projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              data-testid={`button-filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all hover:-translate-y-2"
              data-testid={`card-project-${index}`}
            >
              <CardContent className="p-6 space-y-4">
                {project.publication && (
                  <Badge className="bg-chart-3 text-white">
                    <Award className="h-3 w-3 mr-1" />
                    {project.publication}
                  </Badge>
                )}
                <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-project-${index}`}
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      View Publication
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
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
