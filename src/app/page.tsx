import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import ProjectDetailsSection from "./components/ProjectDetailsSection";
import AboutSection from "./components/AboutSection";
import ApproachSection from "./components/ApproachSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <ProjectDetailsSection />
      <AboutSection />
      <ApproachSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
