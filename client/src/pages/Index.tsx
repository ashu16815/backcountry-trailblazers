import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ActivityBlocks from "@/components/ActivityBlocks";
import PrivateLabelSpotlight from "@/components/PrivateLabelSpotlight";
import BestsellersShowcase from "@/components/BestsellersShowcase";
import KitsSection from "@/components/KitsSection";
import ExploreEditorial from "@/components/ExploreEditorial";
import UGCBand from "@/components/UGCBand";
import SustainabilityPanel from "@/components/SustainabilityPanel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ActivityBlocks />
      <PrivateLabelSpotlight />
      <BestsellersShowcase />
      <KitsSection />
      <ExploreEditorial />
      <UGCBand />
      <SustainabilityPanel />
      <Footer />
    </div>
  );
};

export default Index;
