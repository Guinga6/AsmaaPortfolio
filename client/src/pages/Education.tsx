import Navigation from "@/components/Navigation";
import EducationTimeline from "@/components/EducationTimeline";
import Footer from "@/components/Footer";

export default function Education() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="pt-16 flex-1">
        <EducationTimeline />
      </main>
      <Footer />
    </div>
  );
}
