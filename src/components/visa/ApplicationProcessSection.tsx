
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, CheckCircle, Clock, Send } from 'lucide-react';

const ApplicationProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Prepare Documents",
      description: "Gather all required documents including passport, academic transcripts, and financial proof",
      icon: FileText,
      color: "#ffb703"
    },
    {
      number: 2,
      title: "Complete Application",
      description: "Fill out the online visa application form accurately and completely",
      icon: CheckCircle,
      color: "#219ebc"
    },
    {
      number: 3,
      title: "Pay Fees",
      description: "Submit visa application fee and any additional charges",
      icon: Clock,
      color: "#8ecae6"
    },
    {
      number: 4,
      title: "Submit Application",
      description: "Lodge your application and attend any required interviews or appointments",
      icon: Send,
      color: "#d7a12c"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff] relative">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Application Process
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Follow these steps to successfully apply for your student visa. Each step is important for a smooth application process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white relative overflow-hidden">
                <CardHeader className="text-center relative z-10">
                  <div 
                    className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="h-8 w-8 text-[#082952]" />
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2"
                    style={{ backgroundColor: '#082952' }}
                  >
                    {step.number}
                  </div>
                  <CardTitle className="text-[#082952] text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-[#082952] text-center text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-[#219ebc] rounded-lg p-8 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Application Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#ffb703] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#082952] font-bold">3-4</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Months Before</h4>
                  <p className="text-[#8ecae6] text-sm">Start gathering documents and preparing your application</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#ffb703] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#082952] font-bold">6-8</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Weeks Processing</h4>
                  <p className="text-[#8ecae6] text-sm">Average processing time for complete applications</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#ffb703] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#082952] font-bold">1-2</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Weeks Before Travel</h4>
                  <p className="text-[#8ecae6] text-sm">Receive your visa decision and prepare for departure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;
