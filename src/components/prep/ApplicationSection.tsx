
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, CreditCard, GraduationCap, ArrowRight, Phone, Mail } from 'lucide-react';

const ApplicationSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete our online application form and upload required documents"
    },
    {
      icon: CreditCard,
      title: "Pay Application Fee",
      description: "Pay the non-refundable application fee of $50 SBD"
    },
    {
      icon: Calendar,
      title: "Interview",
      description: "Attend a brief interview (in-person or online) to discuss your goals"
    },
    {
      icon: GraduationCap,
      title: "Start Your Journey",
      description: "Receive your offer letter and begin your preparatory studies"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            How to Apply
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Getting started is easy. Follow these simple steps to begin your university preparation journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow relative">
              <CardHeader>
                <div className="bg-[#8ecae6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="h-8 w-8 text-[#082952]" />
                  <div className="absolute -top-2 -right-2 bg-[#ffb703] text-[#082952] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <CardTitle className="text-lg text-[#082952]">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#082952]">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#edf4ff] rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#082952] mb-6">
                Ready to Start Your Application?
              </h3>
              <p className="text-[#082952] mb-6">
                Take the first step towards your university education. Our admissions team is here 
                to guide you through the process and answer any questions you may have.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#219ebc] hover:bg-[#219ebc]/90 text-white px-6 py-3">
                  Apply Online Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-[#082952] text-[#082952] hover:bg-[#082952] hover:text-white px-6 py-3">
                  Download Application Form
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#082952] mb-6">
                Need Help?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#219ebc] mr-3" />
                  <div>
                    <p className="font-semibold text-[#082952]">Phone</p>
                    <p className="text-[#082952]">+677 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#219ebc] mr-3" />
                  <div>
                    <p className="font-semibold text-[#082952]">Email</p>
                    <p className="text-[#082952]">prep@sinu.edu.sb</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-[#082952] mb-2">Application Deadlines</h4>
                <ul className="space-y-1 text-[#082952] text-sm">
                  <li>• February intake: December 15</li>
                  <li>• July intake: May 15</li>
                  <li>• October intake: August 15</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
