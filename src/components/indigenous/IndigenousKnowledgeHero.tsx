import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';
import heroImage from '@/assets/indigenous-knowledge-hero.jpg';

const IndigenousKnowledgeHero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#082952]/90 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-8 w-8 text-[#ffb703]" />
            <span className="text-[#ffb703] font-semibold text-lg">Research Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Indigenous Knowledge
            <span className="block text-[#8ecae6]">Research Network</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Supporting and promoting the unique perspectives, knowledge and contributions 
            of Aboriginal and Torres Strait Islander people through Indigenous-led research.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold px-8 py-4 text-lg"
            >
              Explore Our Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#082952] px-8 py-4 text-lg"
            >
              Research Partnerships
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndigenousKnowledgeHero;