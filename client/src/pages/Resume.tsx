import Navigation from "@/components/Navigation";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="pt-16 flex-1">
        <ExperienceTimeline />
      </main>
      <Footer />
    </div>
  );
}
