
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wifi, Utensils, Dumbbell, BookOpen, Shirt, Car, Shield, Phone } from 'lucide-react';

const FacilitiesSection = () => {
  const facilities = [
    {
      category: "Study & Learning",
      icon: BookOpen,
      color: "#ffb703",
      items: ["Quiet study rooms", "Computer labs", "Library access", "High-speed WiFi", "Printing facilities"]
    },
    {
      category: "Recreation & Fitness",
      icon: Dumbbell,
      color: "#219ebc",
      items: ["Fitness center", "Sports courts", "Recreation rooms", "TV lounges", "Outdoor spaces"]
    },
    {
      category: "Dining & Kitchen",
      icon: Utensils,
      color: "#8ecae6",
      items: ["Community kitchens", "Dining areas", "Vending machines", "Refrigerator space", "Cooking utensils"]
    },
    {
      category: "Practical Services",
      icon: Shirt,
      color: "#d7a12c",
      items: ["Laundry facilities", "Mail services", "Parking spaces", "Bike storage", "24/7 maintenance"]
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Facilities & Amenities
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Enjoy access to a wide range of modern facilities designed to support your academic success 
              and enhance your university experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {facilities.map((facility, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow bg-white" style={{ borderColor: facility.color }}>
                <CardHeader>
                  <div className="flex items-center">
                    <div 
                      className="p-3 rounded-full mr-4"
                      style={{ backgroundColor: facility.color }}
                    >
                      <facility.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-[#082952]">{facility.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {facility.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-[#082952]">
                        <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: facility.color }}></span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80&auto=format&fit=crop"
                alt="Modern accommodation facilities and common areas"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <Card className="border-[#082952] bg-white">
              <CardHeader>
                <CardTitle className="text-[#082952] flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Safety & Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[#082952]">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#082952] mr-3 mt-2"></span>
                    <span className="text-sm">24/7 security personnel and CCTV monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#082952] mr-3 mt-2"></span>
                    <span className="text-sm">Secure access card entry system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#082952] mr-3 mt-2"></span>
                    <span className="text-sm">Emergency contact and response procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#082952] mr-3 mt-2"></span>
                    <span className="text-sm">Fire safety systems and regular drills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#082952] mr-3 mt-2"></span>
                    <span className="text-sm">Well-lit pathways and common areas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
