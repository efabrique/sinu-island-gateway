
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Palette, Utensils, Mountain } from 'lucide-react';

const CulturalActivities = () => {
  const activities = [
    {
      icon: Music,
      title: "Traditional Music & Dance",
      description: "Learn traditional Solomon Islands music and participate in cultural dance workshops.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80&auto=format&fit=crop"
    },
    {
      icon: Palette,
      title: "Arts & Crafts Workshops",
      description: "Create traditional crafts and learn about local artistic traditions and techniques.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&q=80&auto=format&fit=crop"
    },
    {
      icon: Utensils,
      title: "Culinary Experiences",
      description: "Discover local cuisine through cooking classes and community food sharing events.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&q=80&auto=format&fit=crop"
    },
    {
      icon: Mountain,
      title: "Cultural Site Visits",
      description: "Explore historical and cultural landmarks with guided tours and local storytelling.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Cultural Activities & Experiences
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Immerse yourself in the rich culture of Solomon Islands through hands-on activities, 
              workshops, and authentic cultural experiences designed to deepen your understanding and appreciation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="border-[#219ebc] bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <div className="bg-[#ffb703] p-2 rounded-full mr-3">
                      <activity.icon className="h-5 w-5 text-[#082952]" />
                    </div>
                    <CardTitle className="text-[#082952]">{activity.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952]">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 border border-[#8ecae6] shadow-lg">
            <h3 className="text-2xl font-bold text-[#082952] mb-4 text-center">
              Weekly Cultural Calendar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-[#219ebc] mb-2">Monday - Wednesday</h4>
                <p className="text-[#082952]">Language exchange sessions and cultural workshops</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#219ebc] mb-2">Thursday - Friday</h4>
                <p className="text-[#082952]">Community visits and practical life skills</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#219ebc] mb-2">Weekends</h4>
                <p className="text-[#082952]">Cultural excursions and social activities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalActivities;
