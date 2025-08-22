import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Compass, Shield } from "lucide-react";

const collections = [
  {
    icon: Compass,
    name: "Explorer Series",
    description: "Tested in NZ's harshest conditions",
    badge: "NEW RELEASE",
    image: "bg-gradient-to-br from-primary via-primary/80 to-secondary"
  },
  {
    icon: Shield,
    name: "Urban Escape", 
    description: "City to trail in seamless style",
    badge: "BESTSELLER",
    image: "bg-gradient-to-br from-secondary via-secondary/80 to-accent/60"
  },
  {
    icon: Award,
    name: "Alpine Tested",
    description: "Professional-grade performance gear",
    badge: "PREMIUM",
    image: "bg-gradient-to-br from-accent via-accent/80 to-primary/60"
  }
];

const PrivateLabelSpotlight = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            BACK COUNTRY ORIGINALS
          </Badge>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 leading-tight">
            Back Country Originals
          </h2>
          <p className="text-2xl text-muted-foreground font-sans max-w-4xl mx-auto leading-relaxed">
            Designed in New Zealand. Alpine-tested. Crafted with sustainable materials.
          </p>
        </div>

        {/* Featured Story Block - Wide Image with Story */}
        <div className="relative mb-20">
          <div className="bg-gradient-to-r from-primary via-primary/90 to-secondary rounded-2xl overflow-hidden shadow-premium">
            <div className="relative h-80 md:h-96 flex items-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
              </div>
              
              <div className="relative z-10 container mx-auto px-8">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight">
                    Tested in New Zealand's harshest conditions
                  </h3>
                  <p className="text-lg text-white/90 font-sans leading-relaxed mb-6">
                    From alpine storms to coastal winds, every Back Country Original 
                    is proven in the field before it reaches your pack.
                  </p>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-220 font-accent px-6 py-3 hover-lift"
                  >
                    See Originals
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {collections.map((collection, index) => {
            const IconComponent = collection.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 shadow-card hover:shadow-premium transition-all duration-500"
              >
                <div className={`h-64 ${collection.image} relative`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      {collection.badge}
                    </Badge>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <IconComponent className="h-8 w-8 text-white mb-3 group-hover:scale-110 transition-bounce" />
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-white/90 font-serif">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PrivateLabelSpotlight;