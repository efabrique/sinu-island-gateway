import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";
import heroImage from "@/assets/research-seminars-hero.jpg";

export const ResearchSeminarsHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Research Seminars
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
          Join our vibrant research community for cutting-edge presentations, knowledge sharing, and academic discourse
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3"
          >
            <Calendar className="mr-2 h-5 w-5" />
            View Schedule
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3"
          >
            <Users className="mr-2 h-5 w-5" />
            Join Community
          </Button>
        </div>
      </div>
    </section>
  );
};