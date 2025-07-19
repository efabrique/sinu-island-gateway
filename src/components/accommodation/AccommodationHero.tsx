
import React from 'react';
import { Home, MapPin, Users, Shield } from 'lucide-react';

const AccommodationHero = () => {
  return (
    <section className="bg-[#082952] py-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Dark blue transparent overlay */}
      <div className="absolute inset-0 bg-[#082952]/85"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Student Accommodation
          </h1>
          <p className="text-lg md:text-xl text-[#8ecae6] mb-8 leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Find your home away from home at Solomon Islands National University. We offer comfortable, safe, and affordable accommodation options for international and domestic students.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-[#ffb703] p-4 rounded-full mb-4">
                <Home className="h-8 w-8 text-[#082952]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Comfortable Living</h3>
              <p className="text-[#8ecae6] text-center text-sm">Modern facilities and comfortable rooms</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#ffb703] p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-[#082952]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Prime Location</h3>
              <p className="text-[#8ecae6] text-center text-sm">Close to campus and city amenities</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#ffb703] p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-[#082952]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community Living</h3>
              <p className="text-[#8ecae6] text-center text-sm">Meet students from around the world</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#ffb703] p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-[#082952]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Safe & Secure</h3>
              <p className="text-[#8ecae6] text-center text-sm">24/7 security and support services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationHero;
