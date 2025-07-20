import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, CreditCard, Key, Clock, AlertCircle } from 'lucide-react';

export const ApplicationProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Submit Application",
      description: "Complete the online accommodation application form with your preferences and requirements.",
      icon: FileText,
      color: '#ffb703'
    },
    {
      number: 2,
      title: "Application Review",
      description: "Our accommodation team reviews your application and checks availability for your preferred options.",
      icon: Calendar,
      color: '#219ebc'
    },
    {
      number: 3,
      title: "Offer & Payment",
      description: "Receive your accommodation offer and complete the payment process to secure your place.",
      icon: CreditCard,
      color: '#8ecae6'
    },
    {
      number: 4,
      title: "Move-In Ready",
      description: "Receive your room allocation details and move-in instructions. Welcome home!",
      icon: Key,
      color: '#d7a12c'
    }
  ];

  const importantDates = [
    { term: "Semester 1", deadline: "December 31st (previous year)", note: "Priority deadline for new students" },
    { term: "Semester 2", deadline: "May 31st", note: "Subject to availability" },
    { term: "Late Applications", deadline: "Ongoing", note: "Considered based on availability" }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#082952' }}>
              Application Process
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
              Follow these simple steps to secure your place in SINU accommodation.
            </p>
          </div>

          {/* Application Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300" style={{ borderColor: step.color }}>
                  <CardHeader>
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>
                    <div 
                      className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}20` }}
                    >
                      <IconComponent className="h-6 w-6" style={{ color: step.color }} />
                    </div>
                    <CardTitle className="text-lg" style={{ color: '#082952' }}>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm" style={{ color: '#082952' }}>{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Important Dates & Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card style={{ borderColor: '#219ebc' }}>
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: '#082952' }}>
                  <Clock className="h-5 w-5 mr-2" style={{ color: '#219ebc' }} />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {importantDates.map((date, index) => (
                    <div key={index} className="border-l-4 pl-4" style={{ borderColor: '#219ebc' }}>
                      <h4 className="font-semibold" style={{ color: '#082952' }}>{date.term}</h4>
                      <p className="text-sm font-medium" style={{ color: '#219ebc' }}>{date.deadline}</p>
                      <p className="text-xs" style={{ color: '#082952' }}>{date.note}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card style={{ borderColor: '#ffb703' }}>
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: '#082952' }}>
                  <AlertCircle className="h-5 w-5 mr-2" style={{ color: '#ffb703' }} />
                  Application Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm" style={{ color: '#082952' }}>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#ffb703' }}></div>
                    Apply early to secure your preferred accommodation type
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#ffb703' }}></div>
                    Have all required documents ready before starting your application
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#ffb703' }}></div>
                    Consider multiple accommodation options to increase your chances
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#ffb703' }}></div>
                    Contact our team if you need assistance with your application
                  </li>
                </ul>
                
                <Button 
                  className="w-full mt-6 hover:shadow-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: '#ffb703',
                    color: '#082952',
                    border: 'none'
                  }}
                >
                  Start Your Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};