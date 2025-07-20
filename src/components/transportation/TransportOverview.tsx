import React from 'react';
import { Bus, Clock, Shield, DollarSign } from 'lucide-react';

const TransportOverview = () => {
  const features = [
    {
      icon: Bus,
      title: "Multiple Options",
      description: "Various transport modes including buses, shuttles, and campus services"
    },
    {
      icon: Clock,
      title: "Regular Services",
      description: "Frequent and reliable transport services throughout the day"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Well-maintained vehicles with experienced drivers for your safety"
    },
    {
      icon: DollarSign,
      title: "Student-Friendly",
      description: "Affordable rates and student discounts available"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#082952] mb-4">
            Transportation Overview
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            SINU provides comprehensive transportation services to help students, faculty, 
            and staff move around campus and the surrounding areas safely and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#8ecae6]/20"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#8ecae6] rounded-lg mb-4 mx-auto">
                <feature.icon className="h-8 w-8 text-[#082952]" />
              </div>
              <h3 className="text-xl font-semibold text-[#082952] mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-[#082952]/80 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransportOverview;