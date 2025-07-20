import React from 'react';
import { Utensils, Clock, Users, Star } from 'lucide-react';

const DiningOverview = () => {
  const highlights = [
    {
      icon: Utensils,
      title: "Fresh & Nutritious",
      description: "Daily prepared meals using fresh, quality ingredients"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Extended dining hours to fit your busy schedule"
    },
    {
      icon: Users,
      title: "Social Dining",
      description: "Connect with fellow students in our vibrant dining spaces"
    },
    {
      icon: Star,
      title: "Diverse Options",
      description: "International cuisines and dietary accommodations"
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
              Exceptional Dining Experience
            </h2>
            <p className="text-xl text-[#219ebc] max-w-3xl mx-auto leading-relaxed">
              At SINU, we believe great food brings people together. Our dining services offer 
              nutritious, delicious meals that fuel your academic journey and create lasting memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#8ecae6]/20">
                <div className="bg-[#ffb703] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <highlight.icon className="w-8 h-8 text-[#082952]" />
                </div>
                <h3 className="text-xl font-bold text-[#082952] mb-4 text-center">
                  {highlight.title}
                </h3>
                <p className="text-[#219ebc] text-center leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningOverview;