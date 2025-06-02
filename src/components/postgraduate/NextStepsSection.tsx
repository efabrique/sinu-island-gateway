
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, MessageCircle, Calendar, Phone } from 'lucide-react';

const NextStepsSection = () => {
  const nextSteps = [
    {
      icon: <FileText className="h-8 w-8 text-[#219ebc]" />,
      title: "Explore Programs",
      description: "Browse our postgraduate programs and find the one that matches your interests and career goals.",
      action: "View Programs",
      actionType: "primary"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-[#219ebc]" />,
      title: "Contact Admissions",
      description: "Get personalized advice about your application and program requirements.",
      action: "Contact Us",
      actionType: "secondary"
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#219ebc]" />,
      title: "Attend Information Session",
      description: "Join our regular information sessions to learn more about postgraduate study options.",
      action: "Book Session",
      actionType: "secondary"
    },
    {
      icon: <Phone className="h-8 w-8 text-[#219ebc]" />,
      title: "Schedule a Call",
      description: "Speak directly with our postgraduate advisors to discuss your study plans.",
      action: "Schedule Call",
      actionType: "secondary"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {nextSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-[#8ecae6]">
                <CardHeader>
                  <div className="mx-auto mb-4 bg-[#edf4ff] w-16 h-16 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg text-[#082952]">{step.title}</CardTitle>
                  <CardDescription className="text-[#082952]">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className={
                      step.actionType === 'primary'
                        ? "bg-[#219ebc] hover:bg-[#082952] text-white w-full"
                        : "bg-transparent border border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white w-full"
                    }
                  >
                    {step.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-[#8ecae6] rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-[#082952] mb-4">
              Start Your Application Today
            </h3>
            <p className="text-[#082952] mb-6 max-w-2xl mx-auto">
              Join the next generation of leaders, researchers, and professionals who are 
              shaping the future of the Solomon Islands and the Pacific region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#219ebc] hover:bg-[#082952] text-white px-8 py-3">
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                className="border-[#082952] text-[#082952] hover:bg-[#082952] hover:text-white px-8 py-3"
              >
                Download Application Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
