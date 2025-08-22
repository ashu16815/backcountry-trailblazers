import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mountain, Tent, Plane, Coffee } from "lucide-react";

const activities = [
  {
    icon: Mountain,
    title: "HIKE",
    description: "Trail-tested gear for every terrain",
    color: "bg-primary",
    gradient: "from-primary to-primary/80"
  },
  {
    icon: Tent,
    title: "CAMP",
    description: "Sleep under stars in comfort",
    color: "bg-secondary", 
    gradient: "from-secondary to-secondary/80"
  },
  {
    icon: Plane,
    title: "TRAVEL",
    description: "Adventure-ready travel essentials",
    color: "bg-accent",
    gradient: "from-accent to-accent/80"
  },
  {
    icon: Coffee,
    title: "LIFESTYLE",
    description: "Outdoor living for everyday",
    color: "bg-muted-foreground",
    gradient: "from-muted-foreground to-muted-foreground/80"
  }
];

const ActivityBlocks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            SHOP BY ADVENTURE
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            Whether you're conquering peaks or exploring your backyard, 
            we have the gear to fuel your passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 shadow-card hover:shadow-premium transition-all duration-500 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-90`} />
                
                <div className="relative z-10 p-8 text-center h-64 flex flex-col justify-center items-center">
                  <IconComponent className="h-12 w-12 text-white mb-4 group-hover:scale-110 transition-bounce" />
                  
                  <h3 className="text-2xl font-heading font-bold text-white mb-3 tracking-wider">
                    {activity.title}
                  </h3>
                  
                  <p className="text-white/90 font-serif mb-6">
                    {activity.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary transition-smooth font-accent"
                  >
                    SHOP NOW
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivityBlocks;