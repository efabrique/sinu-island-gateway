import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, Users, Globe2, ArrowRight } from 'lucide-react';

const CommunityPartnerships = () => {
  const partnerships = [
    {
      icon: Users,
      title: "Community Elders Network",
      description: "Collaborative relationships with Indigenous elders and knowledge keepers across the Pacific region.",
      initiatives: ["Elder Advisory Council", "Knowledge Sharing Circles", "Cultural Mentorship Programs"]
    },
    {
      icon: Globe2,
      title: "International Indigenous Networks",
      description: "Partnerships with Indigenous research institutions and communities worldwide.",
      initiatives: ["Pacific Indigenous Research Alliance", "Global Indigenous Knowledge Exchange", "International Research Collaborations"]
    },
    {
      icon: Handshake,
      title: "Community-Based Research",
      description: "Research projects initiated and led by Indigenous communities to address their priorities.",
      initiatives: ["Community Research Grants", "Participatory Research Methods", "Cultural Protocol Development"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Community Partnerships
          </h2>
          <p className="text-xl text-[#219ebc] max-w-4xl mx-auto leading-relaxed">
            Our partnerships are built on respect, reciprocity, and shared commitment to 
            Indigenous knowledge sovereignty and community empowerment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {partnerships.map((partnership, index) => (
            <Card 
              key={index} 
              className="bg-[#edf4ff] border-[#8ecae6] hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#ffb703] rounded-full flex items-center justify-center mb-6">
                  <partnership.icon className="h-8 w-8 text-[#082952]" />
                </div>
                <h3 className="text-2xl font-bold text-[#082952] mb-4">
                  {partnership.title}
                </h3>
                <p className="text-[#219ebc] mb-6 leading-relaxed">
                  {partnership.description}
                </p>
                <ul className="space-y-2">
                  {partnership.initiatives.map((initiative, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[#082952]">
                      <ArrowRight className="h-4 w-4 text-[#d7a12c]" />
                      <span className="font-medium">{initiative}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-[#219ebc] hover:bg-[#8ecae6] text-white px-8 py-4 text-lg"
          >
            Join Our Network
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityPartnerships;