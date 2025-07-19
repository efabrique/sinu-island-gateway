import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Building2, Users, Award } from 'lucide-react';

const Partnerships: React.FC = () => {
  const partnershipTypes = [
    {
      icon: Globe,
      title: "International Organizations",
      description: "Collaborating with global climate agencies and research institutions",
      partners: [
        "IPCC - Intergovernmental Panel on Climate Change",
        "UNEP - United Nations Environment Programme",
        "Pacific Island Climate Change Cooperative",
        "World Bank Climate Change Action Plan"
      ]
    },
    {
      icon: Building2,
      title: "Government Agencies",
      description: "Working with national and regional governments on policy development",
      partners: [
        "Solomon Islands Ministry of Environment",
        "Pacific Island Forum Secretariat",
        "Regional climate offices",
        "Local government councils"
      ]
    },
    {
      icon: Users,
      title: "Community Organizations",
      description: "Engaging with local communities and civil society organizations",
      partners: [
        "Traditional leader councils",
        "Environmental NGOs",
        "Community-based organizations",
        "Youth climate groups"
      ]
    },
    {
      icon: Award,
      title: "Academic Institutions",
      description: "Research partnerships with universities and research centers worldwide",
      partners: [
        "Australian National University",
        "University of the South Pacific",
        "Pacific Climate Change Research Network",
        "International climate research institutes"
      ]
    }
  ];

  const achievements = [
    {
      number: "40+",
      label: "Active Partnerships",
      description: "Across government, academia, and civil society"
    },
    {
      number: "15+",
      label: "Countries",
      description: "In our Pacific research network"
    },
    {
      number: "25+",
      label: "Joint Projects",
      description: "Collaborative climate adaptation initiatives"
    },
    {
      number: "100+",
      label: "Communities",
      description: "Engaged in adaptation planning"
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            Partnerships & Collaboration
          </h2>
          <p className="text-lg text-[#219ebc] max-w-3xl mx-auto">
            Building strong partnerships across sectors to enhance climate adaptation 
            research and implementation across the Pacific region
          </p>
        </div>

        {/* Partnership Stats */}
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
          {partnershipTypes.map((partnership, index) => (
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

        <div className="mt-16 bg-gradient-to-r from-[#8ecae6] to-[#219ebc] rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Collaborative Network</h3>
            <p className="text-lg leading-relaxed mb-6">
              We welcome new partnerships with organizations committed to climate adaptation research 
              and implementation. Together, we can build more resilient Pacific Island communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#082952] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Partnership Opportunities
              </button>
              <button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold px-8 py-3 rounded-lg transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;