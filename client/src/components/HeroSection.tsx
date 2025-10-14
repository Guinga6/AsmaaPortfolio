import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const roles = [
  "Data Analyst",
  "Full-Stack Developer",
  "Technical Coordinator",
  "Computer Systems Engineer",
];

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentRole.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Asmaa Younis Khalil Younis
          </h1>
          
          <div className="h-12 sm:h-16 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-accent">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground">
            Computer Systems Engineer with 6+ years of experience in data analysis,
            full-stack development, and technical coordination. Delivering integrated
            technical solutions with proven project management expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="text-base px-8" data-testid="button-view-work">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8" data-testid="button-download-cv">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-16">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent">6+</div>
              <div className="text-sm sm:text-base text-muted-foreground mt-2">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent">20+</div>
              <div className="text-sm sm:text-base text-muted-foreground mt-2">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent">3</div>
              <div className="text-sm sm:text-base text-muted-foreground mt-2">IEEE Publications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
