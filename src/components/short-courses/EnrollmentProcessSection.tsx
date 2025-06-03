
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, FileText, CreditCard, BookOpen } from 'lucide-react';

const EnrollmentProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse & Select",
      description: "Explore our course catalog and find the perfect course for your needs and schedule"
    },
    {
      icon: FileText,
      title: "Apply Online",
      description: "Complete our simple online application form with your personal and professional details"
    },
    {
      icon: CreditCard,
      title: "Make Payment",
      description: "Secure your spot with flexible payment options including installments"
    },
    {
      icon: BookOpen,
      title: "Start Learning",
      description: "Receive course materials and begin your learning journey with expert guidance"
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
            Getting started with SINU Short Courses is simple and straightforward. 
            Follow these four easy steps to begin your learning journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-[#8ecae6]">
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
                <CardDescription className="text-[#082952]">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#219ebc] rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-6">
            Join thousands of professionals who have advanced their careers with SINU Short Courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#ffb703] text-[#082952] hover:bg-[#ffb703]/90 px-8 py-3 text-lg">
              Browse All Courses
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#219ebc] px-8 py-3 text-lg">
              Contact Admissions
            </Button>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-sm">
              Need help choosing the right course? Contact our admissions team at 
              <span className="font-semibold"> admissions@sinu.edu.sb</span> or call 
              <span className="font-semibold"> +677 12345678</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentProcessSection;
