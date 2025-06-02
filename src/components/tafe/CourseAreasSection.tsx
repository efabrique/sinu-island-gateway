
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Stethoscope, Car, Cpu, Building, Users, ChefHat, Palette } from 'lucide-react';

const CourseAreasSection = () => {
  const courseAreas = [
    {
      icon: Wrench,
      title: "Trades & Construction",
      description: "Carpentry, plumbing, electrical work, and building construction",
      courses: ["Certificate III in Carpentry", "Electrical Installation", "Plumbing Services"],
      color: "#219ebc"
    },
    {
      icon: Stethoscope,
      title: "Health & Community Services",
      description: "Healthcare support, aged care, and community development",
      courses: ["Certificate III in Health Services", "Community Services", "Aged Care Support"],
      color: "#ffb703"
    },
    {
      icon: Car,
      title: "Automotive & Transport",
      description: "Vehicle maintenance, marine engineering, and logistics",
      courses: ["Automotive Servicing", "Marine Engineering", "Transport & Logistics"],
      color: "#8ecae6"
    },
    {
      icon: Cpu,
      title: "Information Technology",
      description: "Computer systems, networking, and digital media",
      courses: ["IT Support", "Computer Networks", "Digital Media Production"],
      color: "#d7a12c"
    },
    {
      icon: Building,
      title: "Business & Administration",
      description: "Office administration, accounting, and customer service",
      courses: ["Business Administration", "Accounting Fundamentals", "Customer Service"],
      color: "#219ebc"
    },
    {
      icon: Users,
      title: "Tourism & Hospitality",
      description: "Hotel management, tour operations, and event planning",
      courses: ["Hotel Operations", "Tour Guiding", "Event Management"],
      color: "#ffb703"
    },
    {
      icon: ChefHat,
      title: "Culinary Arts",
      description: "Commercial cookery, food safety, and kitchen management",
      courses: ["Commercial Cookery", "Food Safety", "Kitchen Operations"],
      color: "#8ecae6"
    },
    {
      icon: Palette,
      title: "Creative Arts",
      description: "Visual arts, design, and traditional crafts",
      courses: ["Visual Arts", "Graphic Design", "Traditional Crafts"],
      color: "#d7a12c"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Course Areas
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Discover your pathway to success with our comprehensive range of technical and vocational courses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: area.color }}>
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-[#082952]">{area.title}</CardTitle>
                <CardDescription className="text-[#082952]">{area.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-2 mb-4">
                  {area.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="text-sm text-[#082952] flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#219ebc]"></span>
                      {course}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white"
                  size="sm"
                >
                  View Courses
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseAreasSection;
