import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen } from "lucide-react";
import publicHealthHero from "@/assets/public-health-hero.jpg";

export function PublicHealthHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${publicHealthHero})` }}
      />
      
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transformative Public Health
            <span className="text-[#8ecae6] block">Research Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Be surrounded by world-leading researchers making discoveries in fields including 
            early influences on health, global health, environmental health, and evidence-based policy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold px-8 py-4 text-lg"
            >
              Explore Research Areas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#082952] px-8 py-4 text-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Meet Our Researchers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}