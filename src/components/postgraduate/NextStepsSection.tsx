
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, MessageCircle, Calendar, Phone, ArrowRight } from 'lucide-react';

const NextStepsSection = () => {
  const nextSteps = [
    {
      step: "1",
      title: "Explore Programs",
      description: "Browse our undergraduate programs and find the one that matches your interests and career goals."
    },
    {
      step: "2",
      title: "Check Requirements",
      description: "Review the entry requirements and ensure you meet the academic and other prerequisites."
    },
    {
      step: "3",
      title: "Submit Application",
      description: "Complete your online application and submit all required documents by the deadline."
    },
    {
      step: "4",
      title: "Join SINU",
      description: "Accept your offer, complete enrollment, and start your journey with us!"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Your postgraduate journey starts here. Take the next step towards advancing 
              your career and making a meaningful impact in your field.
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-2">
          {nextSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-[#023047] mb-2">{step.title}</h3>
              <p className="text-[#023047] text-sm">{step.description}</p>
              {index < nextSteps.length - 1 && (
                <div className="hidden md:block mt-4">
                  <ArrowRight className="h-6 w-6 text-[#8ecae6] mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
