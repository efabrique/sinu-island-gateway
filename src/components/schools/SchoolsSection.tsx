
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const SchoolsSection = () => {
  const schools = [
    {
      name: "School of Marine and Environmental Sciences",
      description: "Leading research and education in marine biology, environmental conservation, and sustainable resource management in the Pacific.",
      specializations: ["Marine Biology", "Environmental Science", "Climate Change Studies", "Fisheries Management"],
      link: "#"
    },
    {
      name: "School of Pacific Studies",
      description: "Dedicated to understanding and preserving Pacific cultures, languages, and traditional knowledge systems.",
      specializations: ["Pacific Languages", "Cultural Studies", "Indigenous Knowledge", "Pacific History"],
      link: "#"
    },
    {
      name: "School of Agriculture and Food Security",
      description: "Addressing food security challenges through sustainable agriculture and innovative farming practices.",
      specializations: ["Sustainable Agriculture", "Food Science", "Rural Development", "Crop Management"],
      link: "#"
    },
    {
      name: "School of Engineering and Built Environment",
      description: "Training engineers and planners to develop sustainable infrastructure for island communities.",
      specializations: ["Civil Engineering", "Environmental Engineering", "Urban Planning", "Renewable Energy"],
      link: "#"
    },
    {
      name: "School of Information and Communication Technology",
      description: "Advancing digital literacy and technological solutions for development challenges in the Pacific.",
      specializations: ["Computer Science", "Information Systems", "Digital Media", "Telecommunications"],
      link: "#"
    },
    {
      name: "School of Teacher Education",
      description: "Preparing teachers for primary and secondary education across diverse Pacific communities.",
      specializations: ["Primary Education", "Secondary Education", "Special Needs Education", "Educational Technology"],
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Schools
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Our schools focus on specific disciplines and professional areas, offering specialized programs and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school, index) => (
              <Card key={index} className="border-2 border-[#219ebc] hover:border-[#ffb703] transition-colors h-full">
                <CardHeader className="bg-[#219ebc]">
                  <CardTitle className="text-lg text-white">{school.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex flex-col h-full">
                  <p className="text-[#082952] mb-4 flex-grow">{school.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#082952] mb-2">Specializations:</h4>
                    <ul className="list-disc list-inside text-[#082952] space-y-1 text-sm">
                      {school.specializations.map((spec, idx) => (
                        <li key={idx}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] mt-auto">
                    Explore School
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;
