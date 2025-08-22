import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCinematic from "@/components/shared/HeroCinematic";
import FilterChips from "@/components/shared/FilterChips";
import { Target, Cloud, Plane, ArrowRight } from "lucide-react";

const filterOptions = ["Men", "Women", "Polos", "Layers", "Rain", "Accessories"];

const golfKits = [
  {
    title: "Wet-Weather Kit",
    slug: "wet-weather",
    image: "/images/kits/golf-wet.jpg",
    description: "Waterproof layers and gear for New Zealand's unpredictable weather",
    price: "$699",
    products: 6
  },
  {
    title: "Travel Light Kit",
    slug: "travel-light",
    image: "/images/kits/golf-travel.jpg",
    description: "Packable essentials for golf travel and tournaments",
    price: "$549",
    products: 5
  }
];

const editorialCards = [
  {
    title: "Layering for Four Seasons",
    slug: "golf-layering",
    image: "/images/editorial/golf-layering.jpg",
    excerpt: "Stay dry and swing free in shifting weather.",
    cta_label: "Learn",
    cta_href: "/explore/journal/golf-layering"
  }
];

const Golf = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (chip: string) => {
    setSelectedFilters(prev => 
      prev.includes(chip) 
        ? prev.filter(f => f !== chip)
        : [...prev, chip]
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroCinematic
        image="/images/lifestyle/golf-hero.jpg"
        title="Play Through Any Weather"
        subtitle="Technical polos, rain shells, and accessories tuned for NZ conditions."
        primary_cta={{ label: "Shop Golf", href: "/shop?activity=golf" }}
        secondary_cta={{ label: "Build Your Course Kit", href: "#kits" }}
        overlay={{ opacity: 0.18 }}
      />

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Intro */}
          <div className="text-center mb-16">
            <p className="text-xl text-muted-foreground font-sans max-w-4xl mx-auto leading-relaxed">
              Performance apparel that moves, breathes, and stays sharp—on the links and off.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="mb-16">
            <FilterChips 
              chips={filterOptions}
              selected={selectedFilters}
              onChange={handleFilterChange}
            />
          </div>

          {/* Golf Kits Section */}
          <section id="kits" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Course Kits
              </h2>
              <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
                Weather-ready golf apparel for New Zealand conditions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {golfKits.map((kit, index) => {
                const IconComponent = index === 0 ? Cloud : Plane;
                return (
                  <Card 
                    key={index}
                    className="group relative overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-premium transition-all duration-500 cursor-pointer hover-lift"
                  >
                    <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 h-96 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <IconComponent className="h-10 w-10 text-primary" />
                          <Badge variant="outline" className="border-primary text-primary">
                            {kit.products} ITEMS
                          </Badge>
                        </div>
                        
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                          {kit.title}
                        </h3>
                        
                        <p className="text-foreground/80 font-sans leading-relaxed mb-6">
                          {kit.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-heading font-bold text-primary">
                            {kit.price}
                          </span>
                          <span className="text-sm text-muted-foreground ml-2">
                            Complete kit
                          </span>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          className="text-primary hover:bg-primary/10 p-0 h-auto font-accent group"
                        >
                          VIEW KIT
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Editorial Cards */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Guides
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
              {editorialCards.map((card, index) => (
                <Card 
                  key={index}
                  className="group relative overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-premium transition-all duration-500 cursor-pointer hover-lift"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 h-64 flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <Target className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                        {card.title}
                      </h3>
                      
                      <p className="text-foreground/80 font-sans leading-relaxed">
                        {card.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Button 
                        variant="ghost" 
                        className="text-primary hover:bg-primary/10 p-0 h-auto font-accent group"
                        asChild
                      >
                        <a href={card.cta_href}>
                          {card.cta_label}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Sustainability Highlights */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Sustainable Materials
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="border-accent text-accent">
                  Recycled Polyester
                </Badge>
                <Badge variant="outline" className="border-accent text-accent">
                  Repair & Care
                </Badge>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Golf;