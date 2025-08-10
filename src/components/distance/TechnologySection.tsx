
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wifi, Smartphone, Monitor, Download } from 'lucide-react';

const TechnologySection = () => {
  const techRequirements = [
    {
      icon: Monitor,
      title: "Computer Access",
      requirements: ["Windows 10+ or macOS 10.14+", "4GB RAM minimum", "Webcam and microphone", "Up-to-date web browser"],
      alternatives: "Tablet or smartphone compatible for basic access"
    },
    {
      icon: Wifi,
      title: "Internet Connection",
      requirements: ["Minimum 1 Mbps download speed", "Stable connection for live sessions", "Data allowance recommendations", "Offline content available"],
      alternatives: "Learning centers provide free WiFi access"
    },
    {
      icon: Smartphone,
      title: "Mobile Learning",
      requirements: ["SINU Mobile App", "iOS 12+ or Android 8+", "Mobile-optimized content", "Offline sync capability"],
      alternatives: "SMS-based support for basic phones"
    },
    {
      icon: Download,
      title: "Software & Tools",
      requirements: ["Microsoft Office or free alternatives", "PDF reader", "Video conferencing tools", "Specialized program software"],
      alternatives: "Free alternatives and open-source options provided"
    }
  ];

  return (
    <section id="dfl-admission" className="py-10 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
            Technology Requirements
            <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>
          </h2>
          <p className="text-xl text-[#222222] max-w-3xl mx-auto">
            Ensure you have the right technology setup for successful distance learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {techRequirements.map((tech, index) => (
            <Card key={index} className="border-[#222222]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#219ebc] w-12 h-12 rounded-lg flex items-center justify-center">
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-[#222222]">{tech.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#222222] mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {tech.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-[#222222] text-sm">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#ffb703]"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-[#8ecae6]">
                    <h4 className="font-semibold text-[#222222] mb-1">Alternative Options:</h4>
                    <p className="text-sm text-[#222222]">{tech.alternatives}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
