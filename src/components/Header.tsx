import { Button } from "@/components/ui/button";
import { ShoppingBag, Search, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-display font-bold text-primary tracking-wider">
              BACK COUNTRY
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">Shop</a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">Explore</a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">Brands</a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">Private Label</a>
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">Sustainability</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;