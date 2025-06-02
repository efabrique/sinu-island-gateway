
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Calendar, FileText, Phone } from 'lucide-react';

const EnrollmentSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "1. Choose Your Course",
      description: "Browse our course areas and find the program that matches your interests and career goals."
    },
    {
      icon: CheckCircle,
      title: "2. Check Entry Requirements",
      description: "Review the prerequisites and ensure you meet the academic and practical requirements."
    },
    {
      icon: Calendar,
      title: "3. Apply Online",
      description: "Complete your application form and upload required documents through our online portal."
    },
    {
      icon: Phone,
      title: "4. Enroll & Start",
      description: "Confirm your enrollment, attend orientation, and begin your journey to success."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            How to Enroll
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Getting started is easy. Follow these simple steps to begin your TAFE & TVET journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-[#219ebc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-[#082952]">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#082952]">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#edf4ff] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-[#082952] mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-[#082952] mb-6 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through SINU TAFE & TVET programs. 
            Applications are now open for the next intake.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] px-8 py-3">
              Apply Now
            </Button>
            <Button variant="outline" className="border-[#082952] text-[#082952] hover:bg-[#082952] hover:text-white px-8 py-3">
              Download Prospectus
            </Button>
            <Button variant="outline" className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
