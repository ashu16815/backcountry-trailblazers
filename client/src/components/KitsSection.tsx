import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye, Package } from "lucide-react";

const kits = [
  {
    name: "Weekend Tramp",
    description: "Essential gear for 2-3 day NZ tramping adventures",
    price: "$899",
    originalPrice: "$1,149",
    savings: "$250",
    items: 8,
    image: "bg-gradient-to-br from-primary/30 to-primary/10",
    badge: "MOST POPULAR"
  },
  {
    name: "Alpine Storm",
    description: "Weather-proof layers for high-altitude conditions", 
    price: "$1,299",
    originalPrice: "$1,599",
    savings: "$300",
    items: 6,
    image: "bg-gradient-to-br from-secondary/30 to-secondary/10",
    badge: "PREMIUM"
  },
  {
    name: "Family Basecamp",
    description: "Everything needed for comfortable family camping",
    price: "$1,599",
    originalPrice: "$1,999", 
    savings: "$400",
    items: 12,
    image: "bg-gradient-to-br from-accent/30 to-accent/10",
    badge: "BEST VALUE"
  },
  {
    name: "Wet-Weather Golf",
    description: "Complete protection for New Zealand's courses",
    price: "$699",
    originalPrice: "$849",
    savings: "$150",
    items: 6,
    image: "bg-gradient-to-br from-muted-foreground/30 to-muted-foreground/10",
    badge: ""
  }
];

const KitsSection = () => {
  return (
    <section id="kits" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Kits You Can Buy in One Click
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
            Curated gear collections tested together, priced to save you money and time
          </p>
        </div>

        {/* Kits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {kits.map((kit, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-premium transition-all duration-220 cursor-pointer hover-lift"
            >
              <div className={`${kit.image} p-6 h-80 flex flex-col justify-between`}>
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Package className="h-6 w-6 text-primary" />
                      <Badge variant="outline" className="border-primary text-primary bg-white/90">
                        {kit.items} ITEMS
                      </Badge>
                    </div>
                    {kit.badge && (
                      <Badge variant="secondary" className="bg-primary text-white">
                        {kit.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                    {kit.name}
                  </h3>
                  
                  <p className="text-foreground/80 font-sans leading-relaxed mb-4">
                    {kit.description}
                  </p>
                </div>

                {/* Pricing & Actions */}
                <div>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-3xl font-heading font-bold text-primary">
                        {kit.price}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        {kit.originalPrice}
                      </span>
                    </div>
                    <div className="text-sm text-accent font-medium">
                      Save {kit.savings} vs. individual items
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90 text-white font-accent tracking-wide hover-lift"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add Entire Kit
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="border-primary text-primary hover:bg-primary/10 hover-lift"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
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

export default KitsSection;