import React from 'react';
import { Heart, Shield, Users, Target } from 'lucide-react';

export const HealthOverview = () => {
  const features = [
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "Comprehensive approach to physical, mental, and emotional health support for all students."
    },
    {
      icon: Shield,
      title: "Professional Care",
      description: "Qualified healthcare professionals providing quality medical and psychological services."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Peer support groups and wellness communities fostering connection and mutual care."
    },
    {
      icon: Target,
      title: "Preventive Focus",
      description: "Proactive wellness programs designed to prevent health issues and promote healthy lifestyles."
    }
  ];

  return (
    <section style={{ backgroundColor: '#edf4ff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 style={{ color: '#082952' }} className="text-4xl font-bold mb-6">
            Your Health & Wellness Matters
          </h2>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            At SINU, we are committed to supporting your complete well-being throughout your academic journey. 
            Our comprehensive health and wellness services ensure you have access to the care and support you need to thrive.
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