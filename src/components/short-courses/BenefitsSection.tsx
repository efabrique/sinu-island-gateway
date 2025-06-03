
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Users, Clock, Briefcase, Star, Globe } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Trophy,
      title: "Industry Recognition",
      description: "Earn certificates valued by employers across the Solomon Islands and Pacific region"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals and experienced academics with real-world expertise"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Evening, weekend, and online options to fit your work and family commitments"
    },
    {
      icon: Briefcase,
      title: "Career Advancement",
      description: "Develop skills that directly translate to promotion opportunities and career growth"
    },
    {
      icon: Star,
      title: "Practical Learning",
      description: "Hands-on activities and real-world projects that you can apply immediately"
    },
    {
      icon: Globe,
      title: "Networking Opportunities",
      description: "Connect with professionals from diverse industries and build valuable relationships"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Why Choose SINU Short Courses?
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Our short courses are designed to provide maximum value and impact for busy professionals 
            looking to advance their careers and expand their skill sets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-[#8ecae6]">
              <CardHeader>
                <div className="bg-[#ffb703] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-lg text-[#082952]">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#082952]">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-[#8ecae6] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-[#082952] mb-4">
            Join Over 2,000 Professionals
          </h3>
          <p className="text-lg text-[#082952] mb-4">
            Who have advanced their careers through SINU Short Courses
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#219ebc]">95%</div>
              <div className="text-[#082952]">Course Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#219ebc]">88%</div>
              <div className="text-[#082952]">Career Advancement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#219ebc]">4.8/5</div>
              <div className="text-[#082952]">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
