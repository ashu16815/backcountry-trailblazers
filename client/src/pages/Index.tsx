import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ActivityBlocks from "@/components/ActivityBlocks";
import PrivateLabelSpotlight from "@/components/PrivateLabelSpotlight";
import BrandShowcase from "@/components/BrandShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ActivityBlocks />
      <PrivateLabelSpotlight />
      <BrandShowcase />
      <Footer />
    </div>
  );
};

export default Index;
