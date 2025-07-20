import React from 'react';
import { Bus, Train, Bike, Car, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TransportServices = () => {
  const services = [
    {
      icon: Bus,
      title: "Campus Shuttle Bus",
      description: "Free shuttle service connecting different campus locations and student accommodation areas.",
      features: ["Runs every 15 minutes", "Multiple stops across campus", "Wheelchair accessible"],
      schedule: "Monday - Friday: 6:00 AM - 10:00 PM"
    },
    {
      icon: Bus,
      title: "City Bus Services",
      description: "Regular bus services connecting SINU campus to Honiara city center and surrounding areas.",
      features: ["Student discounts available", "Multiple routes", "Air-conditioned buses"],
      schedule: "Daily: 5:30 AM - 11:00 PM"
    },
    {
      icon: Car,
      title: "Taxi Services",
      description: "Reliable taxi services for convenient point-to-point transportation around the islands.",
      features: ["24/7 availability", "Airport transfers", "Competitive rates"],
      schedule: "Available 24/7"
    },
    {
      icon: Bike,
      title: "Bicycle Facilities",
      description: "Bike-friendly campus with dedicated cycling paths and secure bicycle parking areas.",
      features: ["Bike rental available", "Secure parking spots", "Maintenance services"],
      schedule: "Always available"
    },
    {
      icon: Train,
      title: "Inter-Island Transport",
      description: "Ferry and boat services for travel between different islands in Solomon Islands.",
      features: ["Scheduled services", "Student rates", "Cargo transport"],
      schedule: "Varies by destination"
    },
    {
      icon: MapPin,
      title: "Walking Paths",
      description: "Well-maintained pedestrian pathways connecting all major campus facilities safely.",
      features: ["Well-lit pathways", "Security patrols", "Weather protection"],
      schedule: "Always accessible"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#082952] mb-4">
            Transportation Services
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Explore our comprehensive range of transportation options designed to meet 
            the diverse needs of our university community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-[#8ecae6]/30 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#ffb703] rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-[#082952]" />
                  </div>
                  <CardTitle className="text-xl text-[#082952]">
                    {service.title}
                  </CardTitle>
                </div>
                <p className="text-[#082952]/80">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#082952] mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-[#082952]/80 flex items-center">
                          <div className="w-2 h-2 bg-[#219ebc] rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center text-sm text-[#082952]/80">
                    <Clock className="h-4 w-4 mr-2 text-[#219ebc]" />
                    {service.schedule}
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

export default TransportServices;