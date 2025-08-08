import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SuccessStories from "@/components/SuccessStories";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 ai-grid-bg relative overflow-hidden">
      <div className="matrix-rain"></div>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <SuccessStories />
      <Footer />
    </div>
  );
}
