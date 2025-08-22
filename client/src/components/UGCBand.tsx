import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Heart, MessageCircle, Upload } from "lucide-react";

const ugcPosts = [
  {
    image: "bg-gradient-to-br from-primary/40 to-primary/20",
    likes: 127,
    comments: 23,
    caption: "Summit success on Mt. Cook! This gear performed flawlessly.",
    username: "@adventurer_kiwi"
  },
  {
    image: "bg-gradient-to-br from-secondary/40 to-secondary/20", 
    likes: 89,
    comments: 15,
    caption: "Family camping at Lake Taupo. The kids love their new sleeping bags!",
    username: "@family_explorers"
  },
  {
    image: "bg-gradient-to-br from-accent/40 to-accent/20",
    likes: 203,
    comments: 41,
    caption: "Golf in the rain? No problem with this gear.",
    username: "@golf_enthusiast"
  },
  {
    image: "bg-gradient-to-br from-muted-foreground/40 to-muted-foreground/20",
    likes: 156,
    comments: 28,
    caption: "Training for the Routeburn Track. Ready for anything!",
    username: "@trail_runner_nz"
  },
  {
    image: "bg-gradient-to-br from-primary/40 to-primary/20",
    likes: 94,
    comments: 18,
    caption: "Perfect day hiking in Fiordland.",
    username: "@south_island_hiker"
  },
  {
    image: "bg-gradient-to-br from-secondary/40 to-secondary/20",
    likes: 176,
    comments: 33,
    caption: "Beach camping on the Coromandel Peninsula.",
    username: "@coastal_camper"
  }
];

const UGCBand = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            #BackCountryNZ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Share Your Adventure
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            Join the community of New Zealand adventurers sharing their Back Country moments
          </p>
        </div>

        {/* UGC Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {ugcPosts.map((post, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-card hover:shadow-premium transition-all duration-220 cursor-pointer hover-lift aspect-square"
            >
              <div className={`${post.image} h-full relative`}>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-220 flex items-center justify-center">
                  <div className="text-center text-white p-3">
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                    </div>
                    <p className="text-xs leading-tight mb-1">
                      {post.caption}
                    </p>
                    <p className="text-xs text-white/80">
                      {post.username}
                    </p>
                  </div>
                </div>

                {/* Camera Icon */}
                <div className="absolute bottom-2 right-2 bg-black/50 p-1 rounded">
                  <Camera className="h-3 w-3 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upload CTA */}
        <div className="text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white font-accent tracking-wide hover-lift"
            size="lg"
          >
            <Upload className="h-4 w-4 mr-2" />
            Share Your Photo
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Tag us with #BackCountryNZ to be featured
          </p>
        </div>
      </div>
    </section>
  );
};

export default UGCBand;