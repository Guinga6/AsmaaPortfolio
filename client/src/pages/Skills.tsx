import Navigation from "@/components/Navigation";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="pt-16 flex-1">
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}
