import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Leaf, Award } from "lucide-react";

const brands = [
  {
    name: "Fjällräven",
    country: "Sweden",
    story: "Timeless Swedish craftsmanship meets modern adventure",
    sustainability: "Arctic Fox Initiative",
    badge: "HERITAGE BRAND",
    image: "bg-gradient-to-br from-primary/20 to-primary/5"
  },
  {
    name: "Arc'teryx",
    country: "Canada", 
    story: "Uncompromising performance for the world's harshest conditions",
    sustainability: "Climate Positive by 2030",
    badge: "TECHNICAL LEADER",
    image: "bg-gradient-to-br from-secondary/20 to-secondary/5"
  },
  {
    name: "Patagonia",
    country: "USA",
    story: "Built to inspire and implement solutions to the environmental crisis",
    sustainability: "1% for the Planet Founder",
    badge: "ACTIVISM PIONEER",
    image: "bg-gradient-to-br from-accent/20 to-accent/5"
  },
  {
    name: "Icebreaker",
    country: "New Zealand",
    story: "Merino wool revolution from the Southern Alps",
    sustainability: "Ethical Wool Sourcing",
    badge: "KIWI INNOVATION",
    image: "bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/5"
  }
];

const BrandShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            CURATED GLOBAL 
            <span className="gradient-hero bg-clip-text text-transparent block">
              PARTNERS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
            We partner with pioneering brands that share our commitment to quality, 
            sustainability, and the spirit of adventure.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-premium transition-all duration-500 cursor-pointer"
            >
              <div className={`${brand.image} p-8`}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                      {brand.name}
                    </h3>
                    <div className="flex items-center text-muted-foreground mb-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="font-medium">{brand.country}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary text-primary">
                    {brand.badge}
                  </Badge>
                </div>

                <p className="text-foreground font-serif text-lg leading-relaxed mb-6">
                  {brand.story}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-accent">
                    <Leaf className="h-5 w-5 mr-2" />
                    <span className="font-medium text-sm">{brand.sustainability}</span>
                  </div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;