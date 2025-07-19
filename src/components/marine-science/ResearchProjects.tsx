import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Target } from 'lucide-react';

const ResearchProjects: React.FC = () => {
  const projects = [
    {
      title: "Pacific Coral Reef Resilience Study",
      status: "Active",
      duration: "2023-2026",
      team: "15 researchers",
      description: "Investigating coral adaptation mechanisms to climate change and developing restoration strategies for Pacific reef systems.",
      objectives: [
        "Assess coral heat tolerance",
        "Develop restoration protocols",
        "Monitor ecosystem recovery"
      ],
      impact: "High"
    },
    {
      title: "Marine Biodiversity Assessment",
      status: "Active",
      duration: "2022-2025",
      team: "12 researchers",
      description: "Comprehensive survey of marine species diversity in Solomon Islands waters to inform conservation strategies.",
      objectives: [
        "Species identification and cataloging",
        "Population assessment",
        "Habitat mapping"
      ],
      impact: "High"
    },
    {
      title: "Ocean Acidification Monitoring",
      status: "Ongoing",
      duration: "2021-2024",
      team: "8 researchers",
      description: "Long-term monitoring of ocean pH levels and impacts on marine life in the Pacific region.",
      objectives: [
        "pH level tracking",
        "Species impact assessment",
        "Predictive modeling"
      ],
      impact: "Medium"
    },
    {
      title: "Sustainable Fisheries Management",
      status: "Planning",
      duration: "2024-2027",
      team: "10 researchers",
      description: "Developing science-based approaches for sustainable fishing practices in Pacific Island communities.",
      objectives: [
        "Stock assessment",
        "Community engagement",
        "Policy development"
      ],
      impact: "High"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-[#219ebc] text-white';
      case 'Ongoing': return 'bg-[#ffb703] text-[#082952]';
      case 'Planning': return 'bg-[#8ecae6] text-[#082952]';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-[#d7a12c] text-white';
      case 'Medium': return 'bg-[#8ecae6] text-[#082952]';
      default: return 'bg-gray-400 text-white';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            Current Research Projects
          </h2>
          <p className="text-lg text-[#219ebc] max-w-3xl mx-auto">
            Explore our ongoing research initiatives that are advancing marine science 
            and conservation in the Pacific region
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-[#8ecae6] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-xl text-[#082952] flex-1 pr-4">
                    {project.title}
                  </CardTitle>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-[#219ebc]">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {project.team}
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 mr-2" />
                    <Badge className={getImpactColor(project.impact)}>
                      {project.impact} Impact
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-[#082952] mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-[#082952] mb-3">Key Objectives:</h4>
                  <div className="space-y-2">
                    {project.objectives.map((objective, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-[#ffb703] rounded-full mr-3"></div>
                        <span className="text-[#082952]">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchProjects;