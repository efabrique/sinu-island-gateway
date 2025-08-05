
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
      title: "Check Requirements",
      description: "Check requirements of your course before apply.",
      action: "Course Requirements",
      actionType: "secondary"
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#219ebc]" />,
      title: "Submit Application",
      description: "After careful consideration, submit your application with the required documents.",
      action: "Submit Application",
      actionType: "secondary"
    },
    {
      icon: <Phone className="h-8 w-8 text-[#219ebc]" />,
      title: "Join SINU",
      description: "Once you recieve your admission letter. Congratulation, you are coming to SINU",
      action: "Join SINU",
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
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
