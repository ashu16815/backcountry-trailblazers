import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

interface CTAButton {
  label: string;
  href: string;
}

interface HeroCinematicProps {
  image: string;
  title: string;
  subtitle: string;
  primary_cta: CTAButton;
  secondary_cta: CTAButton;
  overlay?: {
    opacity: number;
  };
}

const HeroCinematic = ({ 
  image, 
  title, 
  subtitle, 
  primary_cta, 
  secondary_cta, 
  overlay = { opacity: 0.2 } 
}: HeroCinematicProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div 
          className="absolute inset-0 bg-primary"
          style={{ opacity: overlay.opacity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-8 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl font-sans leading-relaxed mb-12 text-white/90 max-w-4xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="default" 
              size="lg" 
              className="group font-accent bg-white text-primary hover:bg-white/90 transition-smooth px-8 py-4 text-base"
              asChild
            >
              <a href={primary_cta.href}>
                {primary_cta.label}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="group font-accent text-white border-white/30 hover:bg-white/10 transition-smooth px-8 py-4 text-base"
              asChild
            >
              <a href={secondary_cta.href}>
                <Play className="mr-2 h-5 w-5" />
                {secondary_cta.label}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroCinematic;