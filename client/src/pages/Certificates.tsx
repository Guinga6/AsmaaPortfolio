import Navigation from "@/components/Navigation";
import CertificatesGrid from "@/components/CertificatesGrid";
import Footer from "@/components/Footer";

export default function Certificates() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="pt-16 flex-1">
        <CertificatesGrid />
      </main>
      <Footer />
    </div>
  );
}
