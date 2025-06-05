
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, BookOpen, Video, FileText } from 'lucide-react';

const ResourcesSection = () => {
  const resources = [
    {
      title: "Software Downloads",
      description: "Access licensed software, applications, and tools available to SINU students and staff.",
      icon: Download,
      items: ["Microsoft Office 365", "Adobe Creative Suite", "Statistical Software", "Development Tools"]
    },
    {
      title: "User Guides",
      description: "Step-by-step guides and documentation for using university ICT services and systems.",
      icon: BookOpen,
      items: ["Email Setup Guide", "WiFi Connection", "Portal Navigation", "Software Installation"]
    },
    {
      title: "Video Tutorials",
      description: "Watch instructional videos to learn how to use various ICT services and applications.",
      icon: Video,
      items: ["Getting Started Videos", "Software Tutorials", "Troubleshooting Tips", "Best Practices"]
    },
    {
      title: "Policies & Procedures",
      description: "Important policies, acceptable use guidelines, and procedures for ICT services.",
      icon: FileText,
      items: ["Acceptable Use Policy", "Data Protection", "Security Guidelines", "Access Procedures"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Resources & Downloads
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Access essential resources, documentation, and tools to help you make the most of SINU's ICT services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="border-[#8ecae6] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-[#8ecae6] p-3 rounded-lg mr-4">
                    <resource.icon className="h-6 w-6 text-[#082952]" />
                  </div>
                  <CardTitle className="text-xl text-[#082952]">{resource.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] mb-4">{resource.description}</p>
                <ul className="space-y-2 mb-6">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-[#082952]">
                      <span className="w-2 h-2 bg-[#219ebc] rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white"
                >
                  Access Resources
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-[#082952] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Something Not Listed?</h3>
          <p className="text-white mb-6">
            Can't find what you're looking for? Contact our ICT team for assistance with special software requests or custom solutions.
          </p>
          <Button className="bg-[#ffb703] text-[#082952] hover:bg-[#ffb703]/90">
            Make a Request
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
