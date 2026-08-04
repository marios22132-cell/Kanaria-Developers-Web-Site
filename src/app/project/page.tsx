import ProjectHero from "../components/ProjectHero";
import ProjectOverviewSection from "../components/ProjectOverviewSection";
import ResidencesSection from "../components/ResidencesSection";
import SpecificationFeaturesSection from "../components/SpecificationFeaturesSection";
import ProjectSection from "../components/ProjectSection";
import LocationSection from "../components/LocationSection";


export default function ProjectPage() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ProjectHero />
      <ProjectOverviewSection />
      <ProjectSection />
      <ResidencesSection />
      <SpecificationFeaturesSection />
      <LocationSection />
    </main>
  );
}
