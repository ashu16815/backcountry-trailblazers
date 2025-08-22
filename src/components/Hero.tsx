import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-nz-mountains.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
            GEAR UP FOR YOUR
            <span className="block gradient-accent bg-clip-text text-transparent">
              NEXT ADVENTURE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8 text-primary-foreground/90">
            Discover curated outdoor gear from premium international brands, 
            plus our exclusive Back Country Originals collection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              EXPLORE COLLECTION
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="premium" size="lg" className="group">
              <Play className="mr-2 h-5 w-5" />
              WATCH OUR STORY
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;