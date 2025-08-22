import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold tracking-wider">
              BACK COUNTRY
            </h3>
            <p className="font-serif text-primary-foreground/80">
              Curating the finest outdoor gear for New Zealand's adventurous spirit.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">SHOP</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Hiking</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Camping</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Travel</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Lifestyle</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Private Label</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">EXPLORE</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Trail Guides</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Adventure Journal</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Brand Stories</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Community</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">STAY CONNECTED</h4>
            <p className="text-primary-foreground/80 font-serif">
              Join our community for trail updates and exclusive gear drops.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Your email address" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/60 text-sm">
            © 2024 Back Country Lifestyle. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-primary-foreground/60 text-sm">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Auckland, New Zealand</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>+64 9 123 4567</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;