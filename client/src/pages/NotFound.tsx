import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-8xl font-heading font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">Trail Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8 font-serif">
          Looks like you've wandered off the beaten path. Let's get you back to base camp.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero" className="font-accent">
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              BACK TO HOME
            </a>
          </Button>
          
          <Button variant="ghost" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            GO BACK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
