import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  FileText, 
  Users, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

export const HowToPartner = () => {
  const steps = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      step: "1",
      title: "Initial Contact",
      description: "Reach out to our partnerships team to discuss your collaboration ideas and objectives."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      step: "2", 
      title: "Proposal Development",
      description: "Work together to develop a detailed partnership proposal outlining goals, activities, and outcomes."
    },
    {
      icon: <Users className="h-6 w-6" />,
      step: "3",
      title: "Agreement Finalization",
      description: "Finalize partnership agreements including timelines, responsibilities, and resource allocation."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      step: "4",
      title: "Implementation",
      description: "Begin collaborative activities with ongoing support and regular progress reviews."
    }
  ];

  const resources = [
    "Partnership guidelines and policies",
    "Template agreements and MOUs",
    "Funding application support",
    "Research collaboration frameworks",
    "Community engagement protocols",
    "Impact measurement tools"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            How to Partner with SINU
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Our streamlined partnership process ensures smooth collaboration from initial 
            contact through successful project implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="text-center border-2 hover:shadow-lg transition-all duration-300"
              style={{ 
                borderColor: '#ffb703',
                backgroundColor: '#ffffff'
              }}
            >
              <CardHeader>
                <div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto"
                  style={{ backgroundColor: '#8ecae6', color: '#ffffff' }}
                >
                  {step.icon}
                </div>
                <div 
                  className="text-sm font-bold px-3 py-1 rounded-full inline-block mb-2"
                  style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                >
                  Step {step.step}
                </div>
                <CardTitle style={{ color: '#082952' }}>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: '#082952' }}>
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
              Partnership Resources
            </h3>
            <p className="mb-6" style={{ color: '#082952' }}>
              We provide comprehensive support and resources to ensure successful partnerships:
            </p>
            <ul className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle 
                    className="h-5 w-5 mr-3 flex-shrink-0"
                    style={{ color: '#219ebc' }}
                  />
                  <span style={{ color: '#082952' }}>{resource}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Card 
            className="border-2 p-8 text-center"
            style={{ 
              borderColor: '#d7a12c',
              backgroundColor: '#edf4ff'
            }}
          >
            <h4 className="text-xl font-bold mb-4" style={{ color: '#082952' }}>
              Ready to Start?
            </h4>
            <p className="mb-6" style={{ color: '#082952' }}>
              Contact our partnerships team today to explore collaboration opportunities 
              and begin your journey with SINU.
            </p>
            <Button 
              size="lg"
              style={{ 
                backgroundColor: '#ffb703',
                color: '#ffffff'
              }}
              className="hover:opacity-90"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};