
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Clock, CheckCircle, Send } from 'lucide-react';

const ApplicationProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Submit Application",
      description: "Complete the online accommodation application form with your preferences",
      icon: FileText,
      color: "#ffb703"
    },
    {
      number: 2,
      title: "Pay Deposit",
      description: "Pay the required accommodation deposit to secure your place",
      icon: Clock,
      color: "#219ebc"
    },
    {
      number: 3,
      title: "Confirmation",
      description: "Receive accommodation confirmation and move-in details",
      icon: CheckCircle,
      color: "#8ecae6"
    },
    {
      number: 4,
      title: "Move In",
      description: "Attend orientation and collect your keys on arrival",
      icon: Send,
      color: "#d7a12c"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Application Process
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Securing your accommodation is easy with our streamlined application process. 
              Follow these simple steps to find your new home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow bg-white" style={{ borderColor: step.color }}>
                <CardHeader className="text-center">
                  <div 
                    className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2"
                    style={{ backgroundColor: '#082952' }}
                  >
                    {step.number}
                  </div>
                  <CardTitle className="text-[#082952] text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952] text-center text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-[#219ebc] bg-white">
              <CardHeader>
                <CardTitle className="text-[#082952]">Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-[#082952]">
                  <li>• Completed accommodation application form</li>
                  <li>• Copy of passport and visa</li>
                  <li>• Proof of enrollment at SINU</li>
                  <li>• Emergency contact information</li>
                  <li>• Medical or dietary requirements (if any)</li>
                  <li>• Accommodation deposit payment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#ffb703] bg-white">
              <CardHeader>
                <CardTitle className="text-[#082952]">Important Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-[#082952]">
                  <div>
                    <h4 className="font-semibold">Semester 1 Applications</h4>
                    <p className="text-sm">Open: October 1st | Close: December 31st</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Semester 2 Applications</h4>
                    <p className="text-sm">Open: March 1st | Close: May 31st</p>
                  </div>
                  <div className="bg-[#ffb703]/10 p-3 rounded">
                    <p className="text-sm font-medium">Early applications recommended to secure preferred accommodation type.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;
