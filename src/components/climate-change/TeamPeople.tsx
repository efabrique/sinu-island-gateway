import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, GraduationCap, Award, Globe } from 'lucide-react';

const TeamPeople: React.FC = () => {
  const teamStats = [
    {
      number: "25+",
      label: "Research Staff",
      description: "Dedicated climate adaptation researchers"
    },
    {
      number: "40+",
      label: "Students",
      description: "Graduate and undergraduate researchers"
    },
    {
      number: "15+",
      label: "Partner Researchers",
      description: "International collaborators"
    },
    {
      number: "10+",
      label: "Disciplines",
      description: "Multi-disciplinary expertise"
    }
  ];

  const teamCategories = [
    {
      icon: User,
      title: "Core Research Team",
      description: "Our dedicated team of climate adaptation researchers and scientists",
      roles: [
        "Principal Investigators",
        "Research Fellows",
        "Climate Scientists",
        "Social Scientists"
      ],
      count: "25+ Members"
    },
    {
      icon: GraduationCap,
      title: "Students & Early Career",
      description: "Graduate students and early career researchers contributing to our research",
      roles: [
        "PhD Candidates",
        "Masters Students",
        "Research Assistants",
        "Visiting Scholars"
      ],
      count: "40+ Students"
    },
    {
      icon: Award,
      title: "Affiliate Members",
      description: "Expert advisors and specialists who contribute to our research activities",
      roles: [
        "Policy Advisors",
        "Community Leaders",
        "Technical Specialists",
        "International Experts"
      ],
      count: "20+ Affiliates"
    },
    {
      icon: Globe,
      title: "International Partners",
      description: "Collaborative researchers from partner institutions worldwide",
      roles: [
        "University Partners",
        "Research Institute Staff",
        "Government Scientists",
        "NGO Researchers"
      ],
      count: "50+ Partners"
    }
  ];

  const expertise = [
    "Climate Science & Modeling",
    "Coastal Engineering",
    "Environmental Economics",
    "Social Anthropology",
    "Public Policy & Governance",
    "Marine Science",
    "Agricultural Science",
    "Urban Planning",
    "Community Development",
    "Environmental Law"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            Our People
          </h2>
          <p className="text-lg text-[#219ebc] max-w-3xl mx-auto">
            Our multidisciplinary team brings together expertise from across the Pacific and beyond, 
            working collaboratively to co-produce climate adaptation research
          </p>
        </div>

        {/* Team Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <div key={index} className="text-center bg-[#edf4ff] rounded-lg p-6 border border-[#8ecae6]">
              <div className="text-3xl font-bold text-[#219ebc] mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-[#082952] mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-[#082952]">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Team Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamCategories.map((category, index) => (
            <Card key={index} className="border-[#8ecae6] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#8ecae6] w-12 h-12 rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-[#082952]" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-[#082952]">{category.title}</CardTitle>
                    <div className="text-sm text-[#219ebc] font-medium">{category.count}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] mb-6 leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#082952]">Team Roles:</h4>
                  {category.roles.map((role, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-[#ffb703] rounded-full mr-3"></div>
                      <span className="text-[#082952]">{role}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Areas of Expertise */}
        <div className="bg-gradient-to-r from-[#082952] to-[#219ebc] rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Areas of Expertise</h3>
            <p className="text-lg leading-relaxed">
              Our team combines diverse disciplinary backgrounds to provide comprehensive 
              climate adaptation research and solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((area, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                <span className="text-white font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold px-8 py-3 rounded-lg transition-colors">
              Meet Our Team Members
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPeople;