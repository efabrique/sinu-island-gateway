import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/research-partnerships-hero.jpg";

export const ResearchPartnershipsHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Research Partnerships
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
          Driving innovation through collaboration - partner with SINU to create lasting impact and advance knowledge together
        </p>
        <Button 
          size="lg" 
          className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3"
        >
          Partner With Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};