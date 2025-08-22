import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCinematic from "@/components/shared/HeroCinematic";
import FilterChips from "@/components/shared/FilterChips";
import { Dumbbell, Zap, Heart, ArrowRight } from "lucide-react";

const filterOptions = ["Men", "Women", "Training", "Running", "Recovery", "Sustainability"];

const activewearKits = [
  {
    title: "Training Kit",
    slug: "training-kit",
    image: "/images/kits/training.jpg",
    description: "Performance essentials for gym sessions and outdoor workouts",
    price: "$449",
    products: 7
  },
  {
    title: "Recovery Kit",
    slug: "recovery-kit",
    image: "/images/kits/recovery.jpg",
    description: "Comfort wear for rest days and active recovery",
    price: "$329",
    products: 5
  }
];

const editorialCards = [
  {
    title: "Building a Capsule Activewear Wardrobe",
    slug: "capsule-activewear",
    image: "/images/editorial/activewear-capsule.jpg",
    excerpt: "Essential pieces that mix, match, and perform across activities.",
    cta_label: "Read Guide",
    cta_href: "/explore/journal/activewear-capsule"
  },
  {
    title: "Recovery Day Essentials",
    slug: "recovery-essentials",
    image: "/images/editorial/recovery.jpg",
    excerpt: "Comfort and movement for your most important training days.",
    cta_label: "Learn More",
    cta_href: "/explore/journal/recovery-essentials"
  }
];

const Activewear = () => {
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
        image="/images/lifestyle/active-hero.jpg"
        title="Move, Train, Repeat"
        subtitle="Breathable layers and supportive fits for running, training, and recovery."
        primary_cta={{ label: "Shop Activewear", href: "/shop?activity=activewear" }}
        secondary_cta={{ label: "Build Your Training Kit", href: "#kits" }}
        overlay={{ opacity: 0.25 }}
      />

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Intro */}
          <div className="text-center mb-16">
            <p className="text-xl text-muted-foreground font-sans max-w-4xl mx-auto leading-relaxed">
              From high-intensity training to recovery days, gear that moves with you and performs when it counts.
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

          {/* Activewear Kits Section */}
          <section id="kits" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Training Kits
              </h2>
              <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
                Performance collections for every type of movement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activewearKits.map((kit, index) => {
                const IconComponent = index === 0 ? Zap : Heart;
                return (
                  <Card 
                    key={index}
                    className="group relative overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-premium transition-all duration-500 cursor-pointer hover-lift"
                  >
                    <div className="bg-gradient-to-br from-muted-foreground/10 to-muted-foreground/5 p-8 h-96 flex flex-col justify-between">
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
                Performance Guides
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {editorialCards.map((card, index) => (
                <Card 
                  key={index}
                  className="group relative overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-premium transition-all duration-500 cursor-pointer hover-lift"
                >
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 h-64 flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <Dumbbell className="h-8 w-8 text-primary" />
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
                  Moisture-Wicking Tech
                </Badge>
                <Badge variant="outline" className="border-accent text-accent">
                  Durability Tested
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

export default Activewear;