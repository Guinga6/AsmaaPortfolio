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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Certifications & Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous professional development and specialized training
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-all hover:-translate-y-1"
                data-testid={`card-certificate-${index}`}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge
                      variant="secondary"
                      className={
                        cert.category === "Humanitarian"
                          ? "bg-chart-3 text-white"
                          : "bg-accent text-accent-foreground"
                      }
                    >
                      {cert.category}
                    </Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground line-clamp-2 leading-tight">
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
