import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Users, Building2, Award } from 'lucide-react';

const CollaborationPartnerships: React.FC = () => {
  const partnerships = [
    {
      icon: Globe,
      title: "International Research Networks",
      description: "Collaborative partnerships with leading marine research institutions worldwide",
      partners: [
        "Pacific Marine Science Organization",
        "International Coral Reef Initiative",
        "Global Ocean Observing System",
        "UNESCO Marine Programme"
      ]
    },
    {
      icon: Building2,
      title: "Regional Universities",
      description: "Academic partnerships across the Pacific region for joint research and education",
      partners: [
        "University of the South Pacific",
        "Australian National University",
        "University of Hawaii",
        "Victoria University of Wellington"
      ]
    },
    {
      icon: Users,
      title: "Community Partnerships",
      description: "Working directly with local communities on conservation and sustainable practices",
      partners: [
        "Local fishing communities",
        "Traditional knowledge holders",
        "Conservation organizations",
        "Government agencies"
      ]
    },
    {
      icon: Award,
      title: "Industry Collaboration",
      description: "Partnerships with industry leaders in marine technology and conservation",
      partners: [
        "Marine technology companies",
        "Environmental consultancies",
        "Sustainable tourism operators",
        "Renewable energy sector"
      ]
    }
  ];

  const achievements = [
    {
      number: "50+",
      label: "Active Partnerships",
      description: "International and regional collaborations"
    },
    {
      number: "25+",
      label: "Countries",
      description: "Represented in our research network"
    },
    {
      number: "100+",
      label: "Joint Publications",
      description: "Collaborative research outputs"
    },
    {
      number: "15+",
      label: "Funded Projects",
      description: "Multi-institutional research initiatives"
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            Collaborations & Partnerships
          </h2>
          <p className="text-lg text-[#219ebc] max-w-3xl mx-auto">
            Building bridges across institutions, communities, and nations to advance 
            marine science and conservation efforts
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-white rounded-lg p-6 border border-[#8ecae6]">
              <div className="text-3xl font-bold text-[#ffb703] mb-2">
                {achievement.number}
              </div>
              <div className="text-lg font-semibold text-[#082952] mb-1">
                {achievement.label}
              </div>
              <div className="text-sm text-[#219ebc]">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerships.map((partnership, index) => (
            <Card key={index} className="bg-white border-[#8ecae6] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#219ebc] w-12 h-12 rounded-lg flex items-center justify-center">
                    <partnership.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#082952]">{partnership.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] mb-6 leading-relaxed">
                  {partnership.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#082952]">Key Partners:</h4>
                  {partnership.partners.map((partner, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-[#ffb703] rounded-full mr-3"></div>
                      <span className="text-[#082952]">{partner}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#082952] to-[#219ebc] rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Research Network</h3>
            <p className="text-lg leading-relaxed mb-6">
              We welcome new partnerships and collaborations. Whether you're a researcher, 
              institution, or organization interested in marine science, let's work together 
              to protect our ocean ecosystems.
            </p>
            <div className="flex justify-center">
              <button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold px-8 py-3 rounded-lg transition-colors">
                Contact Us for Partnerships
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationPartnerships;