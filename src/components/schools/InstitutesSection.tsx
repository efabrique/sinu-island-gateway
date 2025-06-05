
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const InstitutesSection = () => {
  const institutes = [
    {
      name: "Pacific Islands Development Institute",
      description: "Leading research and policy development for sustainable development across Pacific Island nations.",
      focus: ["Economic Development", "Policy Research", "Regional Cooperation", "Sustainable Development Goals"],
      link: "#"
    },
    {
      name: "Institute for Climate Change and Adaptation",
      description: "Addressing climate change impacts and developing adaptation strategies for island communities.",
      focus: ["Climate Science", "Adaptation Planning", "Disaster Risk Reduction", "Community Resilience"],
      link: "#"
    },
    {
      name: "Institute for Traditional Knowledge and Innovation",
      description: "Preserving and integrating traditional knowledge with modern innovation for community development.",
      focus: ["Traditional Medicine", "Indigenous Technologies", "Cultural Preservation", "Knowledge Systems"],
      link: "#"
    },
    {
      name: "Pacific Languages Institute",
      description: "Documenting, preserving, and revitalizing Pacific languages and promoting multilingual education.",
      focus: ["Language Documentation", "Language Revitalization", "Multilingual Education", "Cultural Linguistics"],
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Research Institutes
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Our research institutes drive innovation and address critical challenges facing the Pacific region through interdisciplinary collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {institutes.map((institute, index) => (
              <Card key={index} className="border-2 border-[#d7a12c] hover:border-[#ffb703] transition-colors">
                <CardHeader className="bg-[#d7a12c]">
                  <CardTitle className="text-xl text-white">{institute.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-[#082952] mb-4">{institute.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#082952] mb-2">Research Focus:</h4>
                    <ul className="list-disc list-inside text-[#082952] space-y-1">
                      {institute.focus.map((area, idx) => (
                        <li key={idx}>{area}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="bg-[#082952] hover:bg-[#219ebc] text-white">
                    View Research
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

export default InstitutesSection;
