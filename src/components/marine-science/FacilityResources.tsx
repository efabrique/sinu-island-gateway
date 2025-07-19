import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Microscope, Database, MapPin } from 'lucide-react';

const FacilityResources: React.FC = () => {
  const facilities = [
    {
      icon: Building,
      title: "Marine Research Station",
      description: "State-of-the-art coastal research facility with direct ocean access",
      features: [
        "Wet and dry laboratories",
        "Equipment preparation areas",
        "Sample storage facilities",
        "Research vessel docking"
      ]
    },
    {
      icon: Microscope,
      title: "Advanced Laboratories",
      description: "Specialized labs equipped with cutting-edge analytical instruments",
      features: [
        "Molecular biology lab",
        "Chemistry analysis suite",
        "Microscopy facilities",
        "Specimen preparation areas"
      ]
    },
    {
      icon: Database,
      title: "Data Management Center",
      description: "Comprehensive data storage and analysis capabilities",
      features: [
        "High-performance computing",
        "Data visualization tools",
        "Remote sensing analysis",
        "Collaborative platforms"
      ]
    },
    {
      icon: MapPin,
      title: "Field Research Sites",
      description: "Access to diverse marine environments across the Pacific region",
      features: [
        "Coral reef monitoring sites",
        "Deep ocean access points",
        "Coastal ecosystem zones",
        "Protected marine areas"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            Facilities & Resources
          </h2>
          <p className="text-lg text-[#219ebc] max-w-3xl mx-auto">
            World-class facilities and resources supporting innovative marine research 
            and education in the heart of the Pacific
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="bg-white border-[#8ecae6] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#ffb703] w-12 h-12 rounded-lg flex items-center justify-center">
                    <facility.icon className="h-6 w-6 text-[#082952]" />
                  </div>
                  <CardTitle className="text-xl text-[#082952]">{facility.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] mb-6 leading-relaxed">
                  {facility.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#082952]">Key Features:</h4>
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-[#219ebc] rounded-full mr-3"></div>
                      <span className="text-[#082952]">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#219ebc] to-[#8ecae6] rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Research Infrastructure</h3>
            <p className="text-lg leading-relaxed">
              Our facilities are designed to support collaborative research, providing researchers 
              with access to the latest technology and equipment needed for groundbreaking marine science discoveries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityResources;