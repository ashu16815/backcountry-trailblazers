import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star } from "lucide-react";

const products = [
  {
    name: "Alpine Storm Jacket",
    price: "$599",
    originalPrice: "$699",
    rating: 4.9,
    reviews: 127,
    badge: "BESTSELLER",
    sustainable: true,
    image: "bg-gradient-to-br from-primary/20 to-primary/5"
  },
  {
    name: "Merino Base Layer",
    price: "$189",
    rating: 4.8,
    reviews: 89,
    badge: "NEW",
    sustainable: true,
    image: "bg-gradient-to-br from-secondary/20 to-secondary/5"
  },
  {
    name: "Trail Runner Pack",
    price: "$329", 
    rating: 4.9,
    reviews: 156,
    badge: "TOP RATED",
    sustainable: false,
    image: "bg-gradient-to-br from-accent/20 to-accent/5"
  },
  {
    name: "Waterproof Hiking Boots",
    price: "$449",
    rating: 4.7,
    reviews: 203,
    badge: "",
    sustainable: true,
    image: "bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/5"
  },
  {
    name: "Insulated Camp Vest",
    price: "$279",
    rating: 4.8,
    reviews: 91,
    badge: "NEW",
    sustainable: true,
    image: "bg-gradient-to-br from-primary/20 to-primary/5"
  },
  {
    name: "Golf Performance Polo",
    price: "$149",
    rating: 4.6,
    reviews: 67,
    badge: "",
    sustainable: false,
    image: "bg-gradient-to-br from-secondary/20 to-secondary/5"
  },
  {
    name: "Training Shorts",
    price: "$99",
    rating: 4.7,
    reviews: 134,
    badge: "BESTSELLER",
    sustainable: true,
    image: "bg-gradient-to-br from-accent/20 to-accent/5"
  },
  {
    name: "Summit Softshell",
    price: "$399",
    rating: 4.9,
    reviews: 88,
    badge: "TOP RATED", 
    sustainable: true,
    image: "bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/5"
  }
];

const BestsellersShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Bestsellers & New Drops
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            Customer favorites and latest arrivals, tested in real conditions
          </p>
        </div>

        {/* Products Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border border-border hover:border-primary/30 shadow-card hover:shadow-premium transition-all duration-220 cursor-pointer hover-lift"
            >
              <div className={`${product.image} h-48 relative`}>
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.badge && (
                    <Badge variant="secondary" className="bg-white/90 text-primary text-xs">
                      {product.badge}
                    </Badge>
                  )}
                  {product.sustainable && (
                    <Badge variant="outline" className="border-accent text-accent bg-white/90 text-xs">
                      SUSTAINABLE
                    </Badge>
                  )}
                </div>

                {/* Wishlist */}
                <Button
                  variant="ghost" 
                  size="icon"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white h-8 w-8 opacity-0 group-hover:opacity-100 transition-all duration-220"
                >
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </Button>

                {/* Quick Add - appears on hover */}
                <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-220">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white h-8 text-xs hover-lift">
                    <ShoppingCart className="h-3 w-3 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>

              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 fill-current text-yellow-400" />
                    <span className="text-xs font-medium text-foreground ml-1">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Product Name */}
                <h3 className="font-heading font-semibold text-foreground mb-2 text-sm">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary text-lg">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="font-accent tracking-wide hover-lift"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestsellersShowcase;