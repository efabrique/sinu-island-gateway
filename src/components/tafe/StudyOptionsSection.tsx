
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Monitor, Calendar } from 'lucide-react';

const StudyOptionsSection = () => {
  const studyOptions = [
    {
      icon: Clock,
      title: "Full-time Study",
      description: "Intensive programs completed in shorter timeframes",
      duration: "6 months - 2 years",
      schedule: "Monday to Friday, 8:00 AM - 4:00 PM"
    },
    {
      icon: Calendar,
      title: "Part-time Study",
      description: "Flexible scheduling for working professionals",
      duration: "1 - 3 years",
      schedule: "Evenings and weekends available"
    },
    {
      icon: MapPin,
      title: "Block Release",
      description: "Intensive study blocks combined with workplace training",
      duration: "Varies by program",
      schedule: "2-4 week intensive blocks"
    },
    {
      icon: Monitor,
      title: "Blended Learning",
      description: "Combination of online theory and practical workshops",
      duration: "Flexible completion",
      schedule: "Online + scheduled practicals"
    }
  ];

  return (
    <section className="py-8 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Study Options
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Choose the study mode that fits your lifestyle and career goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studyOptions.map((option, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-[#219ebc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-[#082952]">{option.title}</CardTitle>
                <CardDescription className="text-[#082952]">{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-[#219ebc]">Duration: {option.duration}</div>
                  <div className="text-sm text-[#082952]">{option.schedule}</div>
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
