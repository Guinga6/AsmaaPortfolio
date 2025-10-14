import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { path: "/", label: "Home" },
  { path: "/education", label: "Education" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/certificates", label: "Certificates" },
  { path: "/resume", label: "Resume" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground flex items-center justify-center">
                <span className="text-xl font-bold text-primary">AS</span>
              </div>
              <span className="text-lg font-semibold">Asmaa Shaheen</span>
            </div>
            <p className="text-primary-foreground/80 text-sm italic">
              Built with passion in Palestine
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid={`link-footer-${link.label.toLowerCase()}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:eng.asmaa.1995.2013@gmail.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all" data-testid="link-email">
                  eng.asmaa.1995.2013@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">+970592169381</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">Deir Al-Balah, Gaza, Palestine</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/asmaa-shaheen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate"
                data-testid="link-linkedin"
              >
                <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-primary-foreground">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate"
                data-testid="link-github"
              >
                <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-primary-foreground">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/80">
            © 2025 Asmaa Shaheen. All rights reserved.
          </p>
          <Button
            size="icon"
            variant="ghost"
            onClick={scrollToTop}
            className="text-primary-foreground hover:text-primary-foreground"
            data-testid="button-scroll-top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
