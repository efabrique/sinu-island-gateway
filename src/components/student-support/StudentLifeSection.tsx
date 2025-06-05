
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Home, Utensils, Activity } from 'lucide-react';

const StudentLifeSection = () => {
  const lifeSupport = [
    {
      icon: Heart,
      title: "Counselling & Mental Health",
      description: "Professional counselling services and mental health support to help you maintain wellbeing throughout your studies.",
      services: ["Individual counselling", "Group therapy", "Crisis support", "Wellness workshops"]
    },
    {
      icon: Home,
      title: "Accommodation Services",
      description: "Assistance with finding suitable accommodation options both on-campus and off-campus.",
      services: ["On-campus housing", "Off-campus listings", "Roommate matching", "Housing advice"]
    },
    {
      icon: Utensils,
      title: "Dining & Nutrition",
      description: "Campus dining options and nutrition support to maintain a healthy lifestyle during your studies.",
      services: ["Campus cafeterias", "Meal plans", "Nutrition counselling", "Special dietary needs"]
    },
    {
      icon: Activity,
      title: "Recreation & Wellness",
      description: "Sports facilities, fitness programs, and recreational activities to support your physical and mental health.",
      services: ["Fitness center", "Sports clubs", "Wellness programs", "Recreational activities"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Student Life Support
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Beyond academics, we provide comprehensive support for all aspects of student life to ensure your university experience is fulfilling and successful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lifeSupport.map((support, index) => (
            <Card key={index} className="border-[#8ecae6] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-[#d7a12c] p-3 rounded-lg mr-4">
                    <support.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#082952]">{support.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] mb-4">{support.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {support.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm text-[#082952]">
                      <span className="w-1.5 h-1.5 bg-[#219ebc] rounded-full mr-2"></span>
                      {service}
                    </div>
                  ))}
                </div>
                <Button className="bg-[#8ecae6] hover:bg-[#8ecae6]/90 text-[#082952]">
                  Get Support
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;
