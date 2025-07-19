import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, AlertTriangle, BarChart, Map } from 'lucide-react';

const ImpactAssessment: React.FC = () => {
  const assessmentAreas = [
    {
      icon: TrendingUp,
      title: "Temperature & Precipitation Changes",
      severity: "High",
      description: "Analyzing rising temperatures and changing rainfall patterns across Pacific Island regions",
      impacts: [
        "Increased heat stress on communities",
        "Agricultural productivity changes",
        "Water resource availability shifts",
        "Energy demand fluctuations"
      ],
      timeline: "Ongoing"
    },
    {
      icon: AlertTriangle,
      title: "Extreme Weather Events",
      severity: "Critical",
      description: "Assessing the frequency and intensity of cyclones, droughts, and flooding events",
      impacts: [
        "Infrastructure damage and disruption",
        "Economic losses in key sectors",
        "Displacement of communities",
        "Health and safety concerns"
      ],
      timeline: "Immediate"
    },
    {
      icon: BarChart,
      title: "Economic Impact Analysis",
      severity: "High",
      description: "Quantifying climate change effects on tourism, fisheries, and agricultural sectors",
      impacts: [
        "Tourism industry vulnerability",
        "Fisheries stock changes",
        "Agricultural yield variations",
        "Employment implications"
      ],
      timeline: "Medium-term"
    },
    {
      icon: Map,
      title: "Ecosystem & Biodiversity Changes",
      severity: "High",
      description: "Monitoring impacts on marine and terrestrial ecosystems and biodiversity loss",
      impacts: [
        "Coral reef degradation",
        "Species migration patterns",
        "Habitat loss and fragmentation",
        "Ecosystem service disruption"
      ],
      timeline: "Long-term"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-500 text-white';
      case 'High': return 'bg-[#d7a12c] text-white';
      case 'Medium': return 'bg-[#8ecae6] text-[#082952]';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getTimelineColor = (timeline: string) => {
    switch (timeline) {
      case 'Immediate': return 'bg-red-400 text-white';
      case 'Ongoing': return 'bg-[#219ebc] text-white';
      case 'Medium-term': return 'bg-[#ffb703] text-[#082952]';
      case 'Long-term': return 'bg-[#8ecae6] text-[#082952]';
      default: return 'bg-gray-400 text-white';
    }
  };

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            Climate Impact Assessment
          </h2>
          <p className="text-lg text-[#219ebc] max-w-3xl mx-auto">
            Comprehensive analysis of climate change impacts across environmental, 
            social, and economic dimensions in Pacific Island contexts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {assessmentAreas.map((area, index) => (
            <Card key={index} className="bg-white border-[#8ecae6] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#219ebc] w-12 h-12 rounded-lg flex items-center justify-center">
                      <area.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-[#082952] flex-1">
                      {area.title}
                    </CardTitle>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className={getSeverityColor(area.severity)}>
                      {area.severity} Impact
                    </Badge>
                    <Badge className={getTimelineColor(area.timeline)}>
                      {area.timeline}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-[#082952] mb-6 leading-relaxed">
                  {area.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-[#082952] mb-3">Key Impacts:</h4>
                  <div className="space-y-2">
                    {area.impacts.map((impact, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-[#ffb703] rounded-full mr-3"></div>
                        <span className="text-[#082952]">{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#219ebc] to-[#8ecae6] rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Integrated Assessment Framework</h3>
            <p className="text-lg leading-relaxed">
              Our impact assessments use cutting-edge climate models, socio-economic analysis, 
              and community engagement to provide comprehensive understanding of climate risks 
              and inform effective adaptation strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAssessment;