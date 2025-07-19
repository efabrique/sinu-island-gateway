import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const ApplicationInfoSection = () => {
  const applicationSteps = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Ensure you meet the academic and language requirements for exchange",
      icon: CheckCircle
    },
    {
      step: 2,
      title: "Research Partners",
      description: "Use our Global Programs System to explore available partner universities",
      icon: FileText
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Complete your exchange application through the online portal",
      icon: Calendar
    },
    {
      step: 4,
      title: "Prepare for Exchange",
      description: "Complete pre-departure requirements and prepare for your journey",
      icon: AlertCircle
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
              How to Apply for Exchange
            </h2>
            <p className="text-lg" style={{ color: '#082952' }}>
              Follow these simple steps to begin your international exchange journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {applicationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#edf4ff' }}>
                  <CardHeader>
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: '#ffb703' }}
                    >
                      <IconComponent className="w-8 h-8" style={{ color: '#082952' }} />
                    </div>
                    <CardTitle className="text-lg" style={{ color: '#082952' }}>
                      Step {step.step}
                    </CardTitle>
                    <h3 className="font-semibold" style={{ color: '#219ebc' }}>
                      {step.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm" style={{ color: '#082952' }}>
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg" style={{ backgroundColor: '#8ecae6' }}>
              <CardHeader>
                <CardTitle style={{ color: '#082952' }}>
                  Application Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span style={{ color: '#082952' }}>Semester 1 Exchange</span>
                    <span className="font-semibold" style={{ color: '#219ebc' }}>August 31</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span style={{ color: '#082952' }}>Semester 2 Exchange</span>
                    <span className="font-semibold" style={{ color: '#219ebc' }}>March 31</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span style={{ color: '#082952' }}>Full Year Exchange</span>
                    <span className="font-semibold" style={{ color: '#219ebc' }}>August 31</span>
                  </div>
                </div>
                <p className="text-sm mt-4" style={{ color: '#082952' }}>
                  * Deadlines may vary by partner university. Check specific requirements in the Global Programs System.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg" style={{ backgroundColor: '#082952' }}>
              <CardHeader>
                <CardTitle className="text-white">
                  Need Help with Your Application?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-6">
                  Our International Programs team is here to support you throughout the application process. 
                  Get guidance on partner selection, application requirements, and pre-departure preparation.
                </p>
                <div className="space-y-3">
                  <Button 
                    className="w-full"
                    style={{ 
                      backgroundColor: '#ffb703', 
                      color: '#082952',
                      fontWeight: '600'
                    }}
                  >
                    Schedule Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-white border-white hover:bg-white hover:text-[#082952]"
                  >
                    Download Application Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationInfoSection;