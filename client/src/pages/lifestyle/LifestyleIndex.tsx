import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mountain, Tent, Target, Dumbbell, ArrowRight } from "lucide-react";

const lifestyleCategories = [
  {
    title: "Hiking",
    slug: "hiking",
    icon: Mountain,
    description: "Alpine-tested layers, boots, and packs for NZ's back country.",
    image: "bg-gradient-to-br from-primary/20 to-primary/5",
    featured: "Weekend Tramp Kit"
  },
  {
    title: "Camping",
    slug: "camping", 
    icon: Tent,
    description: "Shelters, sleep systems, and camp kitchens—easy, reliable, packable.",
    image: "bg-gradient-to-br from-secondary/20 to-secondary/5",
    featured: "Family Basecamp Kit"
  },
  {
    title: "Golf",
    slug: "golf",
    icon: Target,
    description: "Technical polos, rain shells, and accessories tuned for NZ conditions.",
    image: "bg-gradient-to-br from-accent/20 to-accent/5",
    featured: "Wet-Weather Kit"
  },
  {
    title: "Activewear",
    slug: "activewear",
    icon: Dumbbell,
    description: "Breathable layers and supportive fits for running, training, and recovery.",
    image: "bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/5",
    featured: "Training Kit"
  }
];

const LifestyleIndex = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary">
            LIFESTYLE COLLECTIONS
          </Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 leading-tight">
            Gear for Every Adventure
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
            Curated collections for hiking, camping, golf, and active living. 
            Each piece designed to perform in New Zealand conditions.
          </p>
        </div>
      </section>

      {/* Lifestyle Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lifestyleCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index}
                  className="group relative overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-premium transition-all duration-500 cursor-pointer hover-lift"
                >
                  <Link to={`/lifestyle/${category.slug}`}>
                    <div className={`${category.image} p-8 h-80 flex flex-col justify-between`}>
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <IconComponent className="h-12 w-12 text-primary group-hover:scale-110 transition-smooth" />
                          <Badge variant="outline" className="border-primary text-primary bg-background/80">
                            {category.featured}
                          </Badge>
                        </div>
                        
                        <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                          {category.title}
                        </h3>
                        
                        <p className="text-foreground/80 font-sans text-lg leading-relaxed mb-6">
                          {category.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Button 
                          variant="ghost" 
                          className="text-primary hover:bg-primary/10 p-0 h-auto font-accent"
                        >
                          EXPLORE COLLECTION
                        </Button>
                        
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="h-6 w-6 text-primary group-hover:translate-x-1 transition-smooth" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LifestyleIndex;