import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-2 space-y-6">
            <span className="inline-flex items-center px-4 py-1 rounded-full border border-accent/30 bg-accent/10 text-sm font-medium text-accent">
              Let’s Collaborate
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Ready to build something impactful?
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you have a specific project in mind or want to explore opportunities, I'm excited to hear from you.
            </p>

            <div className="space-y-4">
              <Card className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-background/80 backdrop-blur">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:eng.asmaa.1995.2013@gmail.com"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      eng.asmaa.1995.2013@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-background/80 backdrop-blur">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-sm text-muted-foreground">+970592169381</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-background/80 backdrop-blur">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-sm text-muted-foreground">Deir Al-Balah, Gaza, Palestine</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="lg:col-span-3 rounded-3xl border border-white/50 dark:border-white/10 bg-white/90 dark:bg-background/90 backdrop-blur-xl shadow-2xl">
            <CardContent className="p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-name"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-email"
                  />
                </div>
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  data-testid="input-subject"
                />
                <Textarea
                  placeholder="Tell me about your project or idea"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  data-testid="input-message"
                />
                <Button type="submit" className="w-full text-base py-6" data-testid="button-send">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                {isSent && (
                  <div className="rounded-xl bg-accent/10 border border-accent/20 px-4 py-3 text-sm text-accent text-center">
                    Thank you for reaching out. I'll get back to you soon.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
