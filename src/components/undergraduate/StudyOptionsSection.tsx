
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Globe, Users, Award } from 'lucide-react';

const StudyOptionsSection = () => {
  const studyOptions = [
    {
      title: "Bachelor's Degrees",
      description: "3-4 year comprehensive programs across various disciplines",
      icon: <Award className="h-6 w-6" />,
      features: ["Full-time and part-time options", "Industry placements", "Research opportunities"],
      programs: ["Business", "Education", "Science", "Arts", "Technology"]
    },
    {
      title: "Diploma Programs",
      description: "1-2 year focused programs for specific career paths",
      icon: <Clock className="h-6 w-6" />,
      features: ["Practical skills focus", "Fast-track to employment", "Pathway to degree programs"],
      programs: ["Nursing", "Teaching", "Tourism", "Marine Studies", "Agriculture"]
    },
    {
      title: "Foundation Studies",
      description: "Preparatory programs for university study",
      icon: <Users className="h-6 w-6" />,
      features: ["University preparation", "Academic skills development", "Guaranteed pathway"],
      programs: ["Science Foundation", "Arts Foundation", "Business Foundation"]
    },
    {
      title: "Distance Learning",
      description: "Flexible study options for working professionals",
      icon: <Globe className="h-6 w-6" />,
      features: ["Online resources", "Flexible scheduling", "Local support centers"],
      programs: ["Education", "Business", "Public Administration"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023047] mb-4">
            Your Study Options
          </h2>
          <p className="text-lg text-[#023047] max-w-3xl mx-auto">
            Choose from a wide range of undergraduate programs designed to meet your career goals 
            and learning preferences. All programs are tailored to the unique needs of Solomon Islands students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studyOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-[#8ecae6]">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#8ecae6] p-2 rounded-lg text-[#023047]">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl text-[#023047]">{option.title}</CardTitle>
                </div>
                <CardDescription className="text-[#023047]">
                  {option.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-[#023047] mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-[#023047]">
                        <ArrowRight className="h-4 w-4 mr-2 text-[#219ebc]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-[#023047] mb-2">Popular Programs:</h4>
                  <div className="flex flex-wrap gap-2">
                    {option.programs.map((program, idx) => (
                      <span key={idx} className="bg-[#8ecae6]/30 text-[#023047] text-xs px-2 py-1 rounded">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-[#219ebc] hover:bg-[#023047] text-white">
                  Explore Programs
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyOptionsSection;
