
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Heart, Laptop } from 'lucide-react';

const SupportServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Academic Support",
      description: "One-on-one tutoring, study groups, and academic workshops to help you excel"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access to library services, online databases, and specialized learning materials"
    },
    {
      icon: Heart,
      title: "Student Wellbeing",
      description: "Counseling services, health support, and programs to help you thrive"
    },
    {
      icon: Laptop,
      title: "Technology Support",
      description: "IT help desk, computer labs, and digital literacy training"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Student Support Services
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            We're committed to your success. Our comprehensive support services ensure you have 
            everything you need to succeed in your preparatory studies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-[#219ebc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-[#082952]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#082952]">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-[#082952] mb-6 text-center">
            Additional Support Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-[#219ebc] mb-4">Academic Services</h4>
              <ul className="space-y-2 text-[#082952]">
                <li>• Writing center and essay support</li>
                <li>• Mathematics learning support</li>
                <li>• Time management workshops</li>
                <li>• Exam preparation sessions</li>
                <li>• Academic planning and goal setting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#219ebc] mb-4">Personal Support</h4>
              <ul className="space-y-2 text-[#082952]">
                <li>• Career counseling and guidance</li>
                <li>• Financial aid assistance</li>
                <li>• Accommodation support</li>
                <li>• Cultural adaptation programs</li>
                <li>• Peer mentoring programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportServicesSection;
