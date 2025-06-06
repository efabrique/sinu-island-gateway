
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Calendar, MapPin, Star } from 'lucide-react';

const OrientationOverview = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "Comprehensive Program",
      description: "5-day intensive orientation covering all aspects of life in Solomon Islands"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Multiple sessions throughout the year to accommodate your arrival"
    },
    {
      icon: MapPin,
      title: "Campus & Community",
      description: "Explore both university facilities and local communities"
    },
    {
      icon: Star,
      title: "Cultural Mentors",
      description: "Paired with local students to guide your cultural journey"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              About Cultural Orientation
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Our Cultural Orientation program is designed to help international students understand, 
              appreciate, and integrate into Solomon Islands culture while building lasting connections 
              with the local community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80&auto=format&fit=crop"
                alt="Students participating in cultural orientation activities"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#082952] mb-6">Program Highlights</h3>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#219ebc] p-2 rounded-full mr-4 mt-1">
                      <highlight.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#082952] mb-2">{highlight.title}</h4>
                      <p className="text-[#082952]">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="border-[#219ebc] bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#082952] text-2xl">What You'll Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#082952] mb-3">Cultural Learning</h4>
                  <ul className="space-y-2 text-[#082952]">
                    <li>• Traditional customs and etiquette</li>
                    <li>• Language basics and key phrases</li>
                    <li>• Historical and cultural contexts</li>
                    <li>• Local festivals and celebrations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#082952] mb-3">Practical Support</h4>
                  <ul className="space-y-2 text-[#082952]">
                    <li>• Banking and financial services</li>
                    <li>• Healthcare system navigation</li>
                    <li>• Transportation options</li>
                    <li>• Shopping and daily essentials</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrientationOverview;
