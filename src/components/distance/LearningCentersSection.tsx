
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';
import OptimizedImage from '@/components/common/OptimizedImage';

const LearningCentersSection = () => {
  const centers = [
    {
      name: "Honiara Learning Center",
      location: "Kukum Highway, Honiara",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      name: "Gizo Regional Center",
      location: "Gizo, Western Province",
      phone: "+677 60123456",
      email: "gizo@sinu.edu.sb",
      services: ["Study Rooms", "Internet Access", "Local Tutoring", "Printing Services"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      name: "Auki Learning Hub",
      location: "Auki, Malaita Province",
      phone: "+677 40123456",
      email: "auki@sinu.edu.sb",
      services: ["Video Conference", "Resource Center", "Study Groups", "Technical Support"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      name: "Lata Extension Center",
      location: "Lata, Temotu Province",
      phone: "+677 53123456",
      email: "lata@sinu.edu.sb",
      services: ["Mobile Lab", "Community Access", "Weekend Support", "Satellite Internet"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    }
  ];

  return (
    <section id="find-center" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Our Learning Centers
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Find support and resources at our strategically located learning centers 
            throughout the Solomon Islands
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {centers.map((center, index) => (
            <Card key={index} className="border-[#8ecae6] hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage
                  src={center.image}
                  alt={center.name}
                  className="w-full h-full"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-[#082952]/20"></div>
              </div>
              <CardHeader className="bg-[#8ecae6] text-[#082952]">
                <CardTitle className="text-lg">{center.name}</CardTitle>
                <CardDescription className="text-[#082952] flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {center.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-[#082952]">
                    <Phone className="h-4 w-4 mr-2 text-[#219ebc]" />
                    {center.phone}
                  </div>
                  <div className="flex items-center text-sm text-[#082952]">
                    <Mail className="h-4 w-4 mr-2 text-[#219ebc]" />
                    {center.email}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#082952] mb-2">Services Available:</h4>
                  <ul className="text-sm text-[#082952] space-y-1">
                    {center.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#219ebc]"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningCentersSection;
