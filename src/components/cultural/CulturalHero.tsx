
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Heart, Users } from 'lucide-react';

const CulturalHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#219ebc] to-[#8ecae6] text-white py-20 overflow-hidden">
      {/* Background Image with Dark Blue Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-[#082952]/70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-[#ffb703] p-4 rounded-full">
              <Heart className="h-12 w-12 text-[#082952]" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Cultural Orientation
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-[#edf4ff]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Welcome to Solomon Islands - Discover culture, build connections, and make SINU your home
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-[#ffb703] text-[#082952] hover:bg-[#d7a12c] px-8 py-3 text-lg">
              Register for Orientation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#219ebc] px-8 py-3 text-lg">
              Download Program Guide
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Globe className="h-8 w-8 mx-auto mb-3 text-[#ffb703]" />
              <h3 className="text-lg font-semibold mb-2">Cultural Immersion</h3>
              <p className="text-[#edf4ff]">Experience the rich culture and traditions of Solomon Islands</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="h-8 w-8 mx-auto mb-3 text-[#ffb703]" />
              <h3 className="text-lg font-semibold mb-2">Community Building</h3>
              <p className="text-[#edf4ff]">Connect with fellow international students and local communities</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Heart className="h-8 w-8 mx-auto mb-3 text-[#ffb703]" />
              <h3 className="text-lg font-semibold mb-2">Personal Support</h3>
              <p className="text-[#edf4ff]">Get personalized guidance for your journey at SINU</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalHero;
