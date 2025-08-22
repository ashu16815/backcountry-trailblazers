import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingBag, Search, Menu, User, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-heading font-bold text-primary tracking-wider hover:text-primary/80 transition-smooth">
              BACK COUNTRY
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-foreground hover:text-primary transition-smooth font-medium">Shop</Link>
            <Link to="/explore" className="text-foreground hover:text-primary transition-smooth font-medium">Explore</Link>
            
            {/* Lifestyle Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-smooth font-medium focus:outline-none">
                Lifestyle
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/lifestyle/hiking" className="w-full">Hiking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/lifestyle/camping" className="w-full">Camping</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/lifestyle/golf" className="w-full">Golf</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/lifestyle/activewear" className="w-full">Activewear</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/brands" className="text-foreground hover:text-primary transition-smooth font-medium">Brands</Link>
            <Link to="/private-label" className="text-foreground hover:text-primary transition-smooth font-medium">Private Label</Link>
            <Link to="/sustainability" className="text-foreground hover:text-primary transition-smooth font-medium">Sustainability</Link>
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