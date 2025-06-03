
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, BookOpen, Award } from 'lucide-react';

const ProgramOverviewSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Flexible Duration",
      description: "6-12 month programs designed to fit your schedule and learning pace"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with experienced instructors in supportive learning environments"
    },
    {
      icon: BookOpen,
      title: "Academic Skills",
      description: "Develop critical thinking, research, writing, and study skills for university success"
    },
    {
      icon: Award,
      title: "Guaranteed Pathway",
      description: "Successful completion guarantees entry into selected undergraduate programs"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Program Overview
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Our University Preparatory Courses are designed to bridge the gap between your current 
            qualifications and university study, providing you with the skills and knowledge needed to succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-[#8ecae6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-lg text-[#082952]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#082952]">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#edf4ff] rounded-lg p-8">
          <h3 className="text-2xl font-bold text-[#082952] mb-4">What You'll Study</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-[#219ebc] mb-3">Core Subjects</h4>
              <ul className="space-y-2 text-[#082952]">
                <li>• Academic English and Communication</li>
                <li>• Mathematics and Numeracy</li>
                <li>• Study Skills and Research Methods</li>
                <li>• Critical Thinking and Analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#219ebc] mb-3">Elective Options</h4>
              <ul className="space-y-2 text-[#082952]">
                <li>• Introduction to Science</li>
                <li>• Introduction to Business</li>
                <li>• Introduction to Social Sciences</li>
                <li>• Computer Literacy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverviewSection;
