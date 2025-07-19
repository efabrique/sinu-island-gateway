import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, BookOpen, Users } from "lucide-react";

export function ResearchImpact() {
  const impacts = [
    {
      icon: TrendingUp,
      title: "Policy Influence",
      description: "Research findings directly informing national health policies across 8 Pacific nations",
      metric: "85%",
      metricLabel: "Policy Adoption Rate"
    },
    {
      icon: Award,
      title: "International Recognition",
      description: "Award-winning research excellence recognized by global health organizations",
      metric: "12",
      metricLabel: "International Awards"
    },
    {
      icon: BookOpen,
      title: "Scientific Publications",
      description: "High-impact publications in leading journals advancing Pacific health knowledge",
      metric: "150+",
      metricLabel: "Peer-reviewed Papers"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Active partnerships with local communities ensuring culturally appropriate research",
      metric: "50+",
      metricLabel: "Community Partners"
    }
  ];

  const outcomes = [
    {
      title: "Maternal Health Improvement",
      description: "30% reduction in maternal mortality rates through evidence-based interventions",
      color: "bg-[#ffb703]"
    },
    {
      title: "Environmental Health Action",
      description: "Climate adaptation strategies implemented across 15 island communities",
      color: "bg-[#8ecae6]"
    },
    {
      title: "Health Service Enhancement",
      description: "Improved healthcare delivery models adopted by regional health systems",
      color: "bg-[#219ebc]"
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#ffb703] text-[#d7a12c] px-4 py-2">
            Research Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-6">
            Transforming Health Outcomes
          </h2>
          <p className="text-lg text-[#082952]/80 max-w-3xl mx-auto">
            Our research creates measurable impact on health systems, policies, and communities 
            throughout the Pacific region and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <Card key={index} className="text-center border-[#8ecae6]/30 bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#8ecae6]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <impact.icon className="w-8 h-8 text-[#219ebc]" />
                </div>
                <div className="text-3xl font-bold text-[#219ebc] mb-2">{impact.metric}</div>
                <div className="text-sm text-[#082952]/60 mb-3">{impact.metricLabel}</div>
                <h3 className="text-lg font-semibold text-[#082952] mb-2">{impact.title}</h3>
                <p className="text-sm text-[#082952]/70">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#8ecae6]/20">
          <h3 className="text-2xl md:text-3xl font-bold text-[#082952] mb-8 text-center">
            Key Research Outcomes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="relative">
                <div className={`w-full h-2 ${outcome.color} rounded-full mb-4`} />
                <h4 className="text-lg font-semibold text-[#082952] mb-3">{outcome.title}</h4>
                <p className="text-[#082952]/70">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-xl shadow-lg border border-[#8ecae6]/20">
            <div className="text-4xl font-bold text-[#ffb703] mb-2">95%</div>
            <div className="text-[#082952]/70">Research Translation</div>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg border border-[#8ecae6]/20">
            <div className="text-4xl font-bold text-[#219ebc] mb-2">25</div>
            <div className="text-[#082952]/70">Countries Reached</div>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg border border-[#8ecae6]/20">
            <div className="text-4xl font-bold text-[#d7a12c] mb-2">2M+</div>
            <div className="text-[#082952]/70">Lives Impacted</div>
          </div>
        </div>
      </div>
    </section>
  );
}