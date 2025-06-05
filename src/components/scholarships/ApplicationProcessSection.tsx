
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileSearch, Send, Clock, Award } from 'lucide-react';

const ApplicationProcessSection = () => {
  const steps = [
    {
      icon: FileSearch,
      title: "1. Research & Prepare",
      description: "Browse available scholarships, check eligibility criteria, and gather required documents including transcripts, references, and personal statements."
    },
    {
      icon: Send,
      title: "2. Submit Application",
      description: "Complete the online application form with accurate information and upload all required supporting documents before the deadline."
    },
    {
      icon: Clock,
      title: "3. Review Process",
      description: "Applications are reviewed by our scholarship committee. You may be contacted for additional information or an interview."
    },
    {
      icon: Award,
      title: "4. Notification",
      description: "Successful applicants will be notified via email and letter. Scholarship funds are typically disbursed at the beginning of each semester."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Application Process
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Follow these steps to apply for scholarships at SINU. Our streamlined process makes it easy to submit your application.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 rounded-full bg-[#8ecae6] w-16 h-16 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-[#082952]" />
                  </div>
                  <CardTitle className="text-[#082952] text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#082952]">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-[#219ebc] rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="text-lg mb-6">
            Start your scholarship application today and take the first step towards funding your education at SINU.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#ffb703] hover:bg-[#ffb703]/90 text-[#082952] font-semibold">
              Start Application
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#219ebc]">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;
