import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCinematic from "@/components/shared/HeroCinematic";
import FilterChips from "@/components/shared/FilterChips";
import { Mountain, Compass, Backpack, ArrowRight } from "lucide-react";

const filterOptions = ["Men", "Women", "Layers", "Shells", "Boots", "Backpacks", "Sustainability"];

const hikingKits = [
  {
    title: "Weekend Tramp",
    slug: "weekend-tramp",
    image: "/images/kits/weekend-tramp.jpg",
    description: "Essential gear for 2-3 day New Zealand tramping adventures",
    price: "$899",
    products: 8
  },
  {
    title: "Alpine Storm",
    slug: "alpine-storm", 
    image: "/images/kits/alpine-storm.jpg",
    description: "Weather-proof layers for high-altitude conditions",
    price: "$1,299",
    products: 6
  }
];

const editorialCards = [
  {
    title: "Tongariro Crossing Guide",
    slug: "tongariro-guide",
    image: "/images/editorial/tongariro.jpg",
    excerpt: "Weather windows, gear checklist, and hut bookings.",
    cta_label: "Read Guide",
    cta_href: "/explore/guides/tongariro"
  },
  {
    title: "Layering 101",
    slug: "layering-101",
    image: "/images/editorial/layering.jpg", 
    excerpt: "Master base, mid, and shells for four seasons in a day.",
    cta_label: "Learn More",
    cta_href: "/explore/journal/layering-101"
  }
];

const Hiking = () => {
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
        image="/images/lifestyle/hiking-hero.jpg"
        title="Take the High Line"
        subtitle="Alpine-tested layers, boots, and packs for NZ's back country."
        primary_cta={{ label: "Shop Hiking", href: "/shop?activity=hiking" }}
        secondary_cta={{ label: "Build Your Tramping Kit", href: "#kits" }}
        overlay={{ opacity: 0.22 }}
      />

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Intro */}
          <div className="text-center mb-16">
            <p className="text-xl text-muted-foreground font-sans max-w-4xl mx-auto leading-relaxed">
              Curated gear for steep climbs, volatile weather, and long miles. 
              Designed and selected for real New Zealand terrain.
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

          {/* Hiking Kits Section */}
          <section id="kits" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Hiking Kits
              </h2>
              <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
                Curated collections tested on New Zealand's most demanding trails
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hikingKits.map((kit, index) => (
                <Card 
                  key={index}
                  className="group relative overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-premium transition-all duration-500 cursor-pointer hover-lift"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 h-96 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <Mountain className="h-10 w-10 text-primary" />
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
              ))}
            </div>
          </section>

          {/* Editorial Cards */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Guides & Stories
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {editorialCards.map((card, index) => (
                <Card 
                  key={index}
                  className="group relative overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-premium transition-all duration-500 cursor-pointer hover-lift"
                >
                  <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 h-64 flex flex-col justify-between">
                    <div>
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
                  Recycled Nylon
                </Badge>
                <Badge variant="outline" className="border-accent text-accent">
                  PFAS-free DWR
                </Badge>
                <Badge variant="outline" className="border-accent text-accent">
                  Repair Service
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

export default Hiking;