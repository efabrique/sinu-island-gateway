
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Target, TrendingUp, Award } from 'lucide-react';

const StudyPathways = () => {
  const pathways = [
    {
      from: "General English",
      to: "Academic English",
      duration: "10-20 weeks",
      description: "Build foundational skills before moving to academic preparation",
      color: "#ffb703"
    },
    {
      from: "Academic English", 
      to: "University Programs",
      duration: "15-30 weeks",
      description: "Prepare for direct entry into undergraduate or postgraduate study",
      color: "#219ebc"
    },
    {
      from: "IELTS Preparation",
      to: "International Recognition",
      duration: "8-12 weeks",
      description: "Achieve required IELTS scores for global opportunities",
      color: "#8ecae6"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Clear Progression",
      description: "Structured pathway from basic to advanced English proficiency"
    },
    {
      icon: TrendingUp,
      title: "Skill Development",
      description: "Progressive building of language and academic skills"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Certificates recognized by SINU and partner institutions"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Study Pathways
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Our English Language Programs provide clear pathways to achieve your academic and professional goals.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {pathways.map((pathway, index) => (
              <Card key={index} className="border-2 bg-[#edf4ff] shadow-lg" style={{ borderColor: pathway.color }}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div 
                        className="px-4 py-2 rounded-lg text-[#082952] font-semibold"
                        style={{ backgroundColor: pathway.color }}
                      >
                        {pathway.from}
                      </div>
                      <ArrowRight className="mx-4 h-6 w-6 text-[#082952]" />
                      <div className="px-4 py-2 bg-[#082952] text-white rounded-lg font-semibold">
                        {pathway.to}
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-lg font-semibold text-[#082952]">{pathway.duration}</div>
                      <div className="text-sm text-[#082952]">Typical Duration</div>
                    </div>
                  </div>
                  <p className="text-[#082952] mt-4">{pathway.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-[#219ebc] bg-white text-center shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-2">
                    <div className="bg-[#219ebc] p-3 rounded-full inline-flex">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-[#082952]">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952]">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 border-[#d7a12c] bg-[#d7a12c]/10">
            <CardHeader>
              <CardTitle className="text-[#082952] text-center">
                Ready to Start Your English Language Journey?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-[#082952] mb-6">
                Our academic advisors will help you choose the right pathway based on your current level and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#d7a12c] text-[#082952] px-6 py-3 rounded-lg font-semibold hover:bg-[#ffb703] transition-colors">
                  Book a Consultation
                </button>
                <button className="border-2 border-[#d7a12c] text-[#082952] px-6 py-3 rounded-lg font-semibold hover:bg-[#d7a12c] hover:text-white transition-colors">
                  Take Placement Test
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudyPathways;
