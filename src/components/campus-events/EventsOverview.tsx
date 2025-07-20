import React from 'react';
import { Calendar, Users, Star, Globe } from 'lucide-react';

export const EventsOverview = () => {
  const features = [
    {
      icon: Calendar,
      title: "Year-Round Events",
      description: "Continuous calendar of engaging activities throughout the academic year."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Events that foster connections and build lasting friendships among students."
    },
    {
      icon: Star,
      title: "Excellence in Programming",
      description: "High-quality events featuring renowned speakers, performers, and activities."
    },
    {
      icon: Globe,
      title: "Cultural Diversity",
      description: "Celebrating the rich cultural heritage and diversity of our university community."
    }
  ];

  return (
    <section style={{ backgroundColor: '#edf4ff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 style={{ color: '#082952' }} className="text-4xl font-bold mb-6">
            Experience Campus Life to the Fullest
          </h2>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            At SINU, we believe that education extends beyond the classroom. Our vibrant events program 
            offers opportunities for learning, growth, celebration, and connection throughout your university journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div 
                style={{ backgroundColor: '#8ecae6' }} 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300"
              >
                <feature.icon style={{ color: '#082952' }} className="w-10 h-10" />
              </div>
              <h3 style={{ color: '#082952' }} className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p style={{ color: '#219ebc' }} className="leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};