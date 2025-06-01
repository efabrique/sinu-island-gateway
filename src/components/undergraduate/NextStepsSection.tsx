
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Download, Calendar, Phone, Mail } from 'lucide-react';

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
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023047] mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-[#023047] max-w-3xl mx-auto">
            Take the next step towards your future. Follow these simple steps to begin your 
            undergraduate study at Solomon Islands National University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {nextSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#219ebc] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-[#8ecae6]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#023047] mb-4">Apply Now</h3>
              <p className="text-[#023047] mb-6">
                Ready to take the next step? Start your application today and join thousands of 
                students who have chosen SINU for their undergraduate education.
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-[#219ebc] hover:bg-[#023047] text-white">
                  <Calendar className="mr-2 h-4 w-4" />
                  Start Your Application
                </Button>
                <Button variant="outline" className="w-full border-[#023047] text-[#023047] hover:bg-[#023047] hover:text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Application Form
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#8ecae6]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#023047] mb-4">Get in Touch</h3>
              <p className="text-[#023047] mb-6">
                Have questions about our undergraduate programs? Our admissions team is here to help 
                you every step of the way.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#219ebc] mr-3" />
                  <div>
                    <p className="font-semibold text-[#023047]">Phone</p>
                    <p className="text-[#023047]">+677 12345678</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#219ebc] mr-3" />
                  <div>
                    <p className="font-semibold text-[#023047]">Email</p>
                    <p className="text-[#023047]">admissions@sinu.edu.sb</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white">
                  Schedule a Meeting
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
