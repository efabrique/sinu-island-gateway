
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wifi, Car, Utensils, Book, Shield, Users } from 'lucide-react';

const OnCampusSection = () => {
  const facilities = [
    { icon: Wifi, title: "High-Speed Internet", description: "Complimentary WiFi throughout all buildings" },
    { icon: Car, title: "Parking", description: "Secure parking spaces for residents" },
    { icon: Utensils, title: "Dining Options", description: "On-site cafeteria and kitchen facilities" },
    { icon: Book, title: "Study Areas", description: "Quiet study rooms and common areas" },
    { icon: Shield, title: "24/7 Security", description: "Round-the-clock security and access control" },
    { icon: Users, title: "Community Programs", description: "Regular social events and activities" }
  ];

  return (
    <section className="py-16 bg-[#8ecae6]/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              On-Campus Living
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Experience the convenience and community of living on campus. Our residential facilities are designed 
              to support your academic success and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&q=80&auto=format&fit=crop"
                alt="Modern university residential building"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#082952] mb-6">Campus Residential Halls</h3>
              <p className="text-[#082952] mb-6">
                Our modern residential halls provide a safe, comfortable, and inclusive environment where 
                students can focus on their studies while building lifelong friendships and connections.
              </p>
              
              <Card className="border-[#ffb703] bg-[#ffb703]/10">
                <CardHeader>
                  <CardTitle className="text-[#082952]">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-[#082952]">
                    <li>• Fully furnished room with study desk</li>
                    <li>• Bed linen and towels provided</li>
                    <li>• All utilities (electricity, water, internet)</li>
                    <li>• Access to common areas and facilities</li>
                    <li>• Regular cleaning of common areas</li>
                    <li>• 24/7 maintenance support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="text-center">
                  <div className="bg-[#219ebc] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <facility.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-[#082952] text-lg">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952] text-center text-sm">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnCampusSection;
