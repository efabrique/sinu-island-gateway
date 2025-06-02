
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Calendar, FileText, CreditCard } from 'lucide-react';

const EnrollmentSection = () => {
  const enrollmentSteps = [
    {
      icon: FileText,
      title: "1. Check Requirements",
      description: "Review program prerequisites and ensure you meet entry requirements",
      action: "View Requirements"
    },
    {
      icon: Calendar,
      title: "2. Choose Your Schedule",
      description: "Select from our flexible start dates and delivery modes",
      action: "View Calendar"
    },
    {
      icon: CreditCard,
      title: "3. Apply & Pay",
      description: "Complete your application and arrange payment or financial aid",
      action: "Apply Now"
    },
    {
      icon: CheckCircle,
      title: "4. Get Started",
      description: "Attend orientation and begin your learning journey",
      action: "Learn More"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Follow these simple steps to enroll in our distance and flexible learning programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {enrollmentSteps.map((step, index) => (
            <Card key={index} className="border-[#8ecae6] text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-[#8ecae6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-lg text-[#082952]">{step.title}</CardTitle>
                <CardDescription className="text-[#082952]">{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white">
                  {step.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#edf4ff] rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#082952] mb-4">
                Still Have Questions?
              </h3>
              <p className="text-[#082952] mb-6">
                Our enrollment advisors are here to help you choose the right program 
                and understand your options for distance and flexible learning.
              </p>
              <div className="space-y-3 text-[#082952]">
                <div className="flex items-center">
                  <span className="font-medium mr-2">Phone:</span>
                  <span>+677 ENROLL-1 (367-6551)</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">Email:</span>
                  <span>distance@sinu.edu.sb</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">Hours:</span>
                  <span>Monday - Friday, 8:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-[#082952] mb-4">
                Get Started Today
              </h4>
              <div className="space-y-4">
                <Button className="bg-[#219ebc] hover:bg-[#082952] text-white px-8 py-3 w-full">
                  Start Your Application
                </Button>
                <Button variant="outline" className="border-[#082952] text-[#082952] hover:bg-[#082952] hover:text-white px-8 py-3 w-full">
                  Schedule a Call
                </Button>
                <Button variant="ghost" className="text-[#219ebc] hover:text-[#082952] w-full">
                  Download Information Pack
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
