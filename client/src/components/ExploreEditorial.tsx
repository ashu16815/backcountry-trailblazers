import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, BookOpen, Utensils } from "lucide-react";

const editorialCards = [
  {
    title: "Tongariro Crossing Guide",
    excerpt: "Weather windows, gear checklist, and hut bookings for New Zealand's most famous day walk.",
    category: "TRAIL GUIDES",
    readTime: "8 min read",
    icon: MapPin,
    image: "bg-gradient-to-br from-primary/30 to-primary/10",
    href: "/explore/guides/tongariro"
  },
  {
    title: "Layering 101",
    excerpt: "Master base, mid, and shell layers for New Zealand's four-seasons-in-a-day weather.",
    category: "GEAR GUIDES", 
    readTime: "5 min read",
    icon: BookOpen,
    image: "bg-gradient-to-br from-secondary/30 to-secondary/10",
    href: "/explore/journal/layering-101"
  },
  {
    title: "Campfire Recipes",
    excerpt: "Simple, delicious meals with minimal cleanup—perfect for DOC campsites and freedom camping.",
    category: "OUTDOOR COOKING",
    readTime: "6 min read", 
    icon: Utensils,
    image: "bg-gradient-to-br from-accent/30 to-accent/10",
    href: "/explore/journal/campfire-recipes"
  }
];

const ExploreEditorial = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Explore
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            Guides, stories, and inspiration from New Zealand's outdoor community
          </p>
        </div>

        {/* Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editorialCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-premium transition-all duration-220 cursor-pointer hover-lift"
              >
                <div className={`${card.image} h-48 relative`}>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 bg-white/90 px-3 py-1 rounded-full">
                      <IconComponent className="h-3 w-3 text-primary" />
                      <span className="text-xs font-medium text-primary tracking-wide">
                        {card.category}
                      </span>
                    </div>
                  </div>

                  {/* Read Time */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                      {card.readTime}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-foreground/80 font-sans leading-relaxed mb-4 text-sm">
                    {card.excerpt}
                  </p>

                  <Button 
                    variant="ghost" 
                    className="text-primary hover:bg-primary/10 p-0 h-auto font-accent group"
                    asChild
                  >
                    <a href={card.href} className="flex items-center">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-220" />
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="font-accent tracking-wide hover-lift"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExploreEditorial;