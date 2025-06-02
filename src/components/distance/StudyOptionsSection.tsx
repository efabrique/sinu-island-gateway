
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop, Users, Calendar, BookOpen } from 'lucide-react';

const StudyOptionsSection = () => {
  const studyModes = [
    {
      icon: Laptop,
      title: "Fully Online",
      description: "Complete your studies entirely online with digital resources and virtual classrooms",
      features: ["24/7 Learning Platform", "Video Lectures", "Online Assessments", "Digital Library Access"],
      suitableFor: "Working professionals, Remote island residents"
    },
    {
      icon: Users,
      title: "Blended Learning",
      description: "Combine online study with regular face-to-face sessions at learning centers",
      features: ["Flexible Schedule", "Practical Workshops", "Peer Interaction", "Local Support"],
      suitableFor: "Students needing hands-on experience, Local community members"
    },
    {
      icon: Calendar,
      title: "Block Mode",
      description: "Intensive study periods followed by independent learning phases",
      features: ["Intensive Workshops", "Extended Projects", "Industry Placements", "Mentorship"],
      suitableFor: "Working adults, Career changers"
    },
    {
      icon: BookOpen,
      title: "Correspondence",
      description: "Traditional distance learning with printed materials and postal support",
      features: ["Study Guides", "Assignment Booklets", "Phone Tutorials", "Regional Exams"],
      suitableFor: "Areas with limited internet, Traditional learners"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Study Options & Delivery Modes
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Choose the learning format that best fits your lifestyle and circumstances
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studyModes.map((mode, index) => (
            <Card key={index} className="border-[#219ebc] hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-[#219ebc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <mode.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#082952]">{mode.title}</CardTitle>
                <CardDescription className="text-[#082952]">{mode.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#082952] mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {mode.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-[#082952]">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#ffb703]"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-[#8ecae6]">
                    <h4 className="font-semibold text-[#082952] mb-1">Suitable For:</h4>
                    <p className="text-sm text-[#082952]">{mode.suitableFor}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyOptionsSection;
