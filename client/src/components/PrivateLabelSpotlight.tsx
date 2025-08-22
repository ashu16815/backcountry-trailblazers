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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            BACK COUNTRY ORIGINALS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            DESIGNED FOR 
            <span className="gradient-accent bg-clip-text text-transparent block">
              NEW ZEALAND
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
            Our private label collections are born from the rugged beauty of Aotearoa. 
            Each piece is designed, tested, and perfected in New Zealand's diverse landscapes.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
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

        {/* CTA */}
        <div className="text-center">
          <Button variant="adventure" size="lg" className="group font-accent">
            DISCOVER OUR STORY
            <Compass className="ml-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PrivateLabelSpotlight;