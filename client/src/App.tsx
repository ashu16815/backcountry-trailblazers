import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LifestyleIndex from "./pages/lifestyle/LifestyleIndex";
import Hiking from "./pages/lifestyle/Hiking";
import Camping from "./pages/lifestyle/Camping";
import Golf from "./pages/lifestyle/Golf";
import Activewear from "./pages/lifestyle/Activewear";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Lifestyle Routes */}
          <Route path="/lifestyle" element={<LifestyleIndex />} />
          <Route path="/lifestyle/hiking" element={<Hiking />} />
          <Route path="/lifestyle/tramping" element={<Hiking />} />
          <Route path="/lifestyle/camping" element={<Camping />} />
          <Route path="/lifestyle/camp" element={<Camping />} />
          <Route path="/lifestyle/golf" element={<Golf />} />
          <Route path="/lifestyle/activewear" element={<Activewear />} />
          <Route path="/lifestyle/active-wear" element={<Activewear />} />
          <Route path="/lifestyle/athleisure" element={<Activewear />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
