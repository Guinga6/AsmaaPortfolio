import Navigation from "@/components/Navigation";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="pt-16 flex-1">
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}
