import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

import CursorGlow from "@/components/CursorGlow";
import FunFactPopup from "@/components/FunFactPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CursorGlow />
      <FunFactPopup />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
