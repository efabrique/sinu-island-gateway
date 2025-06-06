
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, Shield } from 'lucide-react';

const InternationalSupportHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#219ebc] to-[#8ecae6] text-white py-20 overflow-hidden">
      {/* Background Image with Dark Blue Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop)',
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
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            International Student Support
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-[#edf4ff]">
            Comprehensive support services to help you thrive as an international student at SINU
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-[#ffb703] text-[#082952] hover:bg-[#d7a12c] px-8 py-3 text-lg">
              Get Support Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#219ebc] px-8 py-3 text-lg">
              Emergency Contacts
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="h-8 w-8 mx-auto mb-3 text-[#ffb703]" />
              <h3 className="text-lg font-semibold mb-2">Academic Support</h3>
              <p className="text-[#edf4ff]">Get help with your studies and academic requirements</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Heart className="h-8 w-8 mx-auto mb-3 text-[#ffb703]" />
              <h3 className="text-lg font-semibold mb-2">Personal Wellbeing</h3>
              <p className="text-[#edf4ff]">Access counseling and mental health support services</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Shield className="h-8 w-8 mx-auto mb-3 text-[#ffb703]" />
              <h3 className="text-lg font-semibold mb-2">Legal & Immigration</h3>
              <p className="text-[#edf4ff]">Navigate visa requirements and legal processes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalSupportHero;
