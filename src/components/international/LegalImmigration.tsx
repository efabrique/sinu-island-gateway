
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Shield, Briefcase, AlertCircle } from 'lucide-react';

const LegalImmigration = () => {
  const services = [
    {
      icon: FileText,
      title: "Visa Support",
      description: "Assistance with visa applications, renewals, and compliance requirements.",
      features: ["Visa renewal guidance", "Application assistance", "Document verification", "Compliance updates"]
    },
    {
      icon: Shield,
      title: "Legal Rights Information",
      description: "Understanding your rights and responsibilities as an international student in Solomon Islands.",
      features: ["Student rights", "Legal obligations", "Consumer protection", "Emergency procedures"]
    },
    {
      icon: Briefcase,
      title: "Work Authorization",
      description: "Guidance on work rights, employment regulations, and application processes.",
      features: ["Work permit assistance", "Employment guidelines", "Tax obligations", "Workplace rights"]
    },
    {
      icon: AlertCircle,
      title: "Immigration Compliance",
      description: "Ensuring you meet all immigration requirements throughout your studies.",
      features: ["Compliance monitoring", "Reporting requirements", "Status updates", "Documentation help"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Legal & Immigration Support
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Navigate complex legal and immigration requirements with confidence. Our experts 
              provide guidance to ensure you remain compliant and informed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="border-[#8ecae6] bg-[#edf4ff] shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-[#219ebc] p-3 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-[#082952]">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952] mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-[#082952]">
                        <span className="w-2 h-2 bg-[#ffb703] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-[#ffb703] text-[#082952] hover:bg-[#d7a12c] w-full">
                    Get Assistance
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-[#219ebc] text-white rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Important Reminders</h3>
              <p className="text-[#edf4ff] max-w-3xl mx-auto">
                Stay informed about important deadlines and requirements to maintain your legal status.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h4 className="text-lg font-semibold mb-2">Visa Expiry</h4>
                <p className="text-[#edf4ff]">Check your visa expiry date and renew at least 3 months in advance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h4 className="text-lg font-semibold mb-2">Address Changes</h4>
                <p className="text-[#edf4ff]">Report any address changes within 7 days to immigration authorities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h4 className="text-lg font-semibold mb-2">Course Progress</h4>
                <p className="text-[#edf4ff]">Maintain satisfactory academic progress to comply with visa conditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalImmigration;
