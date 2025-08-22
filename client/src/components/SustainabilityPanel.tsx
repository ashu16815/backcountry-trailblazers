import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Recycle, Wrench, ArrowRight } from "lucide-react";

const sustainabilityBadges = [
  {
    icon: Recycle,
    title: "Recycled Materials",
    description: "Products made from recycled nylon, polyester, and other sustainable materials",
    badge: "60% OF PRODUCTS"
  },
  {
    icon: Leaf,
    title: "PFAS-free DWR",
    description: "Water-repellent treatments without harmful forever chemicals",
    badge: "100% COMPLIANT"
  },
  {
    icon: Wrench,
    title: "Repair Service",
    description: "Professional repair services to extend the life of your gear",
    badge: "LIFETIME SUPPORT"
  }
];

const SustainabilityPanel = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            RESPONSIBLE ADVENTURE
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Built for the Long Haul
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
            Every piece of gear is chosen for durability, repairability, and minimal environmental impact. 
            Because the best gear is gear that lasts.
          </p>
        </div>

        {/* Sustainability Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sustainabilityBadges.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border border-border hover:border-accent/30 shadow-card hover:shadow-premium transition-all duration-220 cursor-pointer hover-lift text-center p-8"
              >
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-220">
                  <IconComponent className="h-8 w-8 text-accent" />
                </div>
                
                <Badge variant="outline" className="border-accent text-accent mb-4">
                  {item.badge}
                </Badge>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                
                <p className="text-foreground/80 font-sans leading-relaxed text-sm">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="font-accent tracking-wide hover-lift border-accent text-accent hover:bg-accent hover:text-white"
          >
            Learn About Our Impact
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityPanel;