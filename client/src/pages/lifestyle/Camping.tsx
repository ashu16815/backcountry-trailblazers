import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCinematic from "@/components/shared/HeroCinematic";
import FilterChips from "@/components/shared/FilterChips";
import { Tent, Home, Utensils, ArrowRight } from "lucide-react";

const filterOptions = ["Tents", "Sleeping", "Cooking", "Lighting", "Furniture", "Sustainability"];

const campingKits = [
  {
    title: "Family Basecamp",
    slug: "family-basecamp",
    image: "/images/kits/family-basecamp.jpg",
    description: "Everything needed for comfortable family camping adventures",
    price: "$1,599",
    products: 12
  },
  {
    title: "Ultralight Duo",
    slug: "ultralight-duo",
    image: "/images/kits/ultralight-duo.jpg", 
    description: "Minimalist shelter and sleep system for two",
    price: "$899",
    products: 8
  }
];

const editorialCards = [
  {
    title: "NZ Campsite Finder",
    slug: "doc-camps",
    image: "/images/editorial/campsites.jpg",
    excerpt: "Find DOC campsites and freedom camping rules.",
    cta_label: "Browse Tips",
    cta_href: "/explore/guides/camping-nz"
  },
  {
    title: "Campfire Recipes",
    slug: "camp-recipes",
    image: "/images/editorial/recipes.jpg",
    excerpt: "Simple meals, minimal cleanup, maximum smiles.",
    cta_label: "Cook These", 
    cta_href: "/explore/journal/campfire-recipes"
  }
];

const Camping = () => {
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
        image="/images/lifestyle/camping-hero.jpg"
        title="Nights Under Southern Skies"
        subtitle="Shelters, sleep systems, and camp kitchens—easy, reliable, packable."
        primary_cta={{ label: "Shop Camping", href: "/shop?activity=camping" }}
        secondary_cta={{ label: "See Family Camp Kit", href: "#kits" }}
        overlay={{ opacity: 0.22 }}
      />

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Intro */}
          <div className="text-center mb-16">
            <p className="text-xl text-muted-foreground font-sans max-w-4xl mx-auto leading-relaxed">
              From family holidays to remote DOC sites, build a campsite that's quick to pitch and a joy to use.
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

          {/* Camping Kits Section */}
          <section id="kits" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Camping Kits
              </h2>
              <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
                Complete setups for every style of New Zealand camping
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {campingKits.map((kit, index) => {
                const IconComponent = index === 0 ? Home : Tent;
                return (
                  <Card 
                    key={index}
                    className="group relative overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-premium transition-all duration-500 cursor-pointer hover-lift"
                  >
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 h-96 flex flex-col justify-between">
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
                Camp Skills
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
                        <Utensils className="h-8 w-8 text-primary" />
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
                  Bluesign Fabrics
                </Badge>
                <Badge variant="outline" className="border-accent text-accent">
                  Recyclable Packaging
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

export default Camping;