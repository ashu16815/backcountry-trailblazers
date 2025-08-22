import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-nz-mountains.jpg";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {/* Subtle gradient for legibility – replaces any solid color bar */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/0 to-zinc-950/25" />
      
      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl font-heading">
          Premium outdoor gear, curated for NZ back country.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-200 font-sans leading-relaxed">
          International brands you won't find in-store + Back Country Originals, tested in NZ conditions.
        </p>
        <div className="mt-8 flex gap-4">
          <Button
            asChild
            className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold hover-lift hover:bg-primary/90 transition-all duration-220"
          >
            <a href="/shop">
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="inline-flex items-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-all duration-220 text-white"
          >
            <a href="#kits">
              Build Your Kit
            </a>
          </Button>
        </div>
        
        {/* Trust strip */}
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-zinc-300">
          <li className="flex items-center gap-2">
            <span>•</span>
            Free 30-day returns
          </li>
          <li className="flex items-center gap-2">
            <span>•</span>
            NZ customer support
          </li>
          <li className="flex items-center gap-2">
            <span>•</span>
            Carbon-aware delivery
          </li>
          <li className="flex items-center gap-2">
            <span>•</span>
            Secure checkout
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;