import { Card } from "@/components/ui/card";
import { Mountain, Tent, Target, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const activities = [
  {
    icon: Mountain,
    title: "Hike",
    description: "Trail-tested gear for every terrain",
    href: "/shop?activity=hiking",
    image: "bg-gradient-to-br from-primary/90 to-primary/70"
  },
  {
    icon: Tent,
    title: "Camp",
    description: "Sleep under stars in comfort",
    href: "/shop?activity=camping",
    image: "bg-gradient-to-br from-secondary/90 to-secondary/70"
  },
  {
    icon: Target,
    title: "Golf",
    description: "Weather-ready performance apparel",
    href: "/shop?activity=golf",
    image: "bg-gradient-to-br from-accent/90 to-accent/70"
  },
  {
    icon: Dumbbell,
    title: "Activewear",
    description: "Move, train, and recover in style",
    href: "/shop?activity=activewear",
    image: "bg-gradient-to-br from-muted-foreground/90 to-muted-foreground/70"
  }
];

const ActivityBlocks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Shop by Adventure
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            Curated gear collections for every New Zealand adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <Link key={index} to={activity.href}>
                <Card className="group relative overflow-hidden border-0 shadow-card hover:shadow-premium transition-all duration-220 cursor-pointer hover-lift">
                  <div className={`${activity.image} h-64 relative`}>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-220" />
                    
                    <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                      <IconComponent className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform duration-220" />
                      
                      <h3 className="text-2xl font-heading font-bold mb-2 tracking-wide">
                        {activity.title}
                      </h3>
                      
                      <p className="text-white/90 font-sans text-sm leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivityBlocks;