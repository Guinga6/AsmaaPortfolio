import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Heart, Database } from "lucide-react";

const certificates = [
  {
    title: "PSEA – Protection from Sexual Exploitation and Abuse",
    issuer: "IASC / UN Online Learning",
    category: "Humanitarian",
    icon: Shield,
  },
  {
    title: "Child Safeguarding & Child Protection",
    issuer: "UNICEF / Save the Children",
    category: "Humanitarian",
    icon: Heart,
  },
  {
    title: "Gender-Based Violence Core Concepts",
    issuer: "GBVIMS / UNFPA",
    category: "Humanitarian",
    icon: Shield,
  },
  {
    title: "Safeguarding & Code of Conduct",
    issuer: "CHS Alliance / Humanitarian Academy",
    category: "Humanitarian",
    icon: Shield,
  },
  {
    title: "Humanitarian Principles & International Law",
    issuer: "ICRC / Humanitarian Leadership Academy",
    category: "Humanitarian",
    icon: Shield,
  },
  {
    title: "Psychological First Aid (PFA)",
    issuer: "WHO / IFRC",
    category: "Humanitarian",
    icon: Heart,
  },
  {
    title: "Personal Safety & Security in Conflict Zones",
    issuer: "DisasterReady.org",
    category: "Humanitarian",
    icon: Shield,
  },
  {
    title: "Community Engagement & Accountability",
    issuer: "Sphere / HLA",
    category: "Humanitarian",
    icon: Heart,
  },
  {
    title: "Full-stack Web Development",
    issuer: "Udemy, Lynda - 200hr",
    category: "Technical",
    icon: Award,
  },
  {
    title: "Freelance TOT for Academic",
    issuer: "Gaza Sky Geeks/Mercy Corps - 2020",
    category: "Technical",
    icon: Award,
  },
  {
    title: "Data Collection & KoboToolbox Basics",
    issuer: "Harvard Humanitarian Initiative",
    category: "Technical",
    icon: Database,
  },
  {
    title: "Monitoring & Evaluation Fundamentals",
    issuer: "Philanthropy University / Kaya Connect",
    category: "Technical",
    icon: Database,
  },
];

export default function CertificatesGrid() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary">
            Certifications & Training
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Continuous Learning, Humanitarian Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Blending humanitarian responsibility with technical mastery through an ongoing commitment to professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-7">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/50 dark:border-white/10 bg-white/80 dark:bg-background/80 backdrop-blur hover:-translate-y-2 transition-all duration-500 shadow-lg"
                data-testid={`card-certificate-${index}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
                <CardContent className="relative p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge
                      variant="secondary"
                      className={`text-xs font-semibold uppercase tracking-widest ${
                        cert.category === "Humanitarian"
                          ? "bg-chart-3 text-white"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {cert.category}
                    </Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground leading-tight line-clamp-3">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
