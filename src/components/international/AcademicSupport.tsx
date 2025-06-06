
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, FileText, Calculator } from 'lucide-react';

const AcademicSupport = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Study Skills Workshops",
      description: "Learn effective study techniques, time management, and exam preparation strategies tailored for international students.",
      features: ["Note-taking techniques", "Research methods", "Exam strategies", "Time management"]
    },
    {
      icon: Users,
      title: "Academic Mentoring",
      description: "Connect with senior students and academic staff for personalized guidance throughout your studies.",
      features: ["Peer mentoring", "Faculty advisors", "Study groups", "Academic planning"]
    },
    {
      icon: FileText,
      title: "Assignment Support",
      description: "Get help with academic writing, referencing, and understanding assignment requirements.",
      features: ["Writing workshops", "Referencing guides", "Plagiarism prevention", "Feedback sessions"]
    },
    {
      icon: Calculator,
      title: "Subject-Specific Tutoring",
      description: "Access specialized tutoring for challenging subjects and technical disciplines.",
      features: ["Mathematics support", "Science tutoring", "Language assistance", "One-on-one help"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Academic Support Services
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Comprehensive academic support designed to help international students succeed 
              in their studies and adapt to the Australian education system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-[#8ecae6] bg-[#edf4ff] shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-[#ffb703] p-3 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-[#082952]" />
                    </div>
                    <CardTitle className="text-xl text-[#082952]">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952] mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-[#082952]">
                        <span className="w-2 h-2 bg-[#219ebc] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-[#219ebc] hover:bg-[#8ecae6] text-white w-full">
                    Access Service
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

export default AcademicSupport;
