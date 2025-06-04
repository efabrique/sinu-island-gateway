
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Volume2, VolumeX, Coffee, Wifi, Monitor } from 'lucide-react';
import OptimizedImage from '@/components/common/OptimizedImage';

const StudySpacesSection = () => {
  const studySpaces = [
    {
      title: "Silent Study Areas",
      description: "Quiet zones for individual study and concentration",
      features: ["No talking", "Individual desks", "Power outlets", "Natural lighting"],
      icon: VolumeX,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      capacity: "120 seats"
    },
    {
      title: "Group Study Rooms",
      description: "Bookable rooms for collaborative work and discussions",
      features: ["Whiteboards", "AV equipment", "Seating for 4-8", "Reservable online"],
      icon: Users,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      capacity: "12 rooms"
    },
    {
      title: "Discussion Areas",
      description: "Open spaces for conversation and group projects",
      features: ["Comfortable seating", "Moveable furniture", "Natural light", "Coffee nearby"],
      icon: Volume2,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      capacity: "60 seats"
    },
    {
      title: "Computer Lab",
      description: "Access to library computers and specialized software",
      features: ["40 workstations", "Office suite", "Research databases", "Printing access"],
      icon: Monitor,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      capacity: "40 computers"
    },
    {
      title: "Relaxation Zone",
      description: "Comfortable area for reading and informal study",
      features: ["Soft seating", "Magazines", "Natural light", "Quiet atmosphere"],
      icon: Coffee,
      image: "https://images.unsplash.com/photo-1555116505-38ab61800975",
      capacity: "30 seats"
    },
    {
      title: "24/7 Study Hall",
      description: "Always-open study space for late-night studying",
      features: ["Card access", "Security cameras", "Basic amenities", "Quiet environment"],
      icon: Wifi,
      image: "https://images.unsplash.com/photo-1568667256549-094345857637",
      capacity: "80 seats"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#082952] mb-4">Study Spaces</h2>
          <p className="text-lg text-[#082952] max-w-2xl mx-auto">
            Find the perfect environment for your learning style with our variety of study spaces designed for different needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studySpaces.map((space, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <OptimizedImage
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full"
                  objectFit="cover"
                  width={400}
                />
                <div className="absolute top-4 right-4 bg-[#ffb703] text-[#082952] px-2 py-1 rounded text-sm font-medium">
                  {space.capacity}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-[#219ebc] w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <space.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#082952]">{space.title}</h3>
                </div>
                <p className="text-[#082952] opacity-80 mb-4">{space.description}</p>
                <ul className="space-y-1 mb-6">
                  {space.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-[#082952] flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#219ebc] rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#219ebc] hover:bg-[#082952] text-white">
                  {space.title.includes('Group') ? 'Book Now' : 'View Availability'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudySpacesSection;
