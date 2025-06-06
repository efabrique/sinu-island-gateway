
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Compass } from 'lucide-react';

const OrientationPrograms = () => {
  const programs = [
    {
      icon: Calendar,
      title: "Pre-Arrival Orientation",
      duration: "Online - 2 weeks before arrival",
      description: "Essential information about Solomon Islands culture, university policies, and practical preparations for your journey.",
      features: [
        "Cultural introduction videos",
        "Pre-departure checklist",
        "Virtual campus tour",
        "Connect with current students"
      ],
      color: "border-[#ffb703]"
    },
    {
      icon: Users,
      title: "Arrival Week Program",
      duration: "5 days - Upon arrival",
      description: "Intensive hands-on orientation program combining cultural immersion with practical life skills training.",
      features: [
        "Cultural ceremonies and traditions",
        "Campus and city tours",
        "Banking and documentation setup",
        "Social events and networking"
      ],
      color: "border-[#219ebc]"
    },
    {
      icon: Compass,
      title: "Ongoing Support Program",
      duration: "Throughout your studies",
      description: "Continuous cultural mentorship and community integration support during your academic journey.",
      features: [
        "Monthly cultural events",
        "Mentor matching program",
        "Community service opportunities",
        "Cultural celebration participation"
      ],
      color: "border-[#8ecae6]"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Orientation Programs
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Our comprehensive orientation consists of three interconnected programs designed to 
              support your cultural adaptation journey from before arrival through graduation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className={`${program.color} bg-[#edf4ff] shadow-lg hover:shadow-xl transition-shadow`}>
                <CardHeader className="text-center">
                  <div className="bg-[#ffb703] p-3 rounded-full w-fit mx-auto mb-4">
                    <program.icon className="h-8 w-8 text-[#082952]" />
                  </div>
                  <CardTitle className="text-[#082952] text-xl">{program.title}</CardTitle>
                  <p className="text-[#219ebc] font-semibold">{program.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952] mb-6">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-[#082952]">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#219ebc]"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#219ebc] hover:bg-[#8ecae6] text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrientationPrograms;
