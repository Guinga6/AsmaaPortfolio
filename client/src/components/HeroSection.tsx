import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import resumePdf from "@assets/Asmaa Shaheen_1760470734409.pdf";

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
  const [accentRotation, setAccentRotation] = useState(0);

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
            setAccentRotation((prev) => prev + 60);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="absolute inset-0">
        <div
          className="absolute -inset-40 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_rgba(59,130,246,0)_60%)]"
          style={{ transform: `rotate(${accentRotation}deg)` }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="backdrop-blur-xl bg-white/70 dark:bg-background/70 rounded-3xl shadow-2xl border border-white/40 dark:border-white/10 p-10 sm:p-16">
          <div className="flex flex-col gap-12">
            <div className="space-y-6 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
                Transforming data into meaningful impact
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Asmaa Younis Khalil Younis
              </h1>

              <div className="h-12 sm:h-16 flex items-center justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-accent">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>

              <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Computer Systems Engineer with 6+ years of experience in data analysis,
                full-stack development, and technical coordination. Delivering integrated
                technical solutions with proven project management expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8 shadow-lg shadow-accent/20">
                <Link href="/projects" className="inline-flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 border-2"
              >
                <a href={resumePdf} download="Asmaa-Shaheen-CV.pdf" className="inline-flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {[{
                label: "Years Experience",
                value: "6+",
                detail: "Delivering end-to-end data and software solutions",
              },
              {
                label: "Technologies",
                value: "20+",
                detail: "Modern tools across data, web, and automation",
              },
              {
                label: "IEEE Publications",
                value: "3",
                detail: "Research focused on IoT & Cyber-Physical Systems",
              }].map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/70 dark:bg-background/70 backdrop-blur p-6 text-center shadow-lg"
                >
                  <div className="text-4xl sm:text-5xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm sm:text-base text-muted-foreground mt-2 font-semibold uppercase tracking-wide">
                    {stat.label}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground/80 mt-3 leading-relaxed">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
