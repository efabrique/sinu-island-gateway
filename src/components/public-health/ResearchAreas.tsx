import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Baby, Heart, Globe, Leaf, Shield, Users } from "lucide-react";

export function ResearchAreas() {
  const researchAreas = [
    {
      icon: Baby,
      title: "Child Health & Development",
      description: "Early influences on health, maternal health, and developmental research focusing on the Pacific region's unique challenges.",
      highlights: ["Nutrition studies", "Early childhood development", "Maternal health programs"]
    },
    {
      icon: Heart,
      title: "Women's Health",
      description: "Comprehensive research on women's health issues across different life stages, with emphasis on Pacific Islander women.",
      highlights: ["Reproductive health", "Maternal mortality", "Gender-based health disparities"]
    },
    {
      icon: Globe,
      title: "Global Health",
      description: "International collaborations addressing health equity and sustainable development goals in the Pacific region.",
      highlights: ["Health equity research", "Cross-cultural studies", "Pacific health networks"]
    },
    {
      icon: Leaf,
      title: "Environmental Health",
      description: "Climate change impacts, environmental contaminants, and One Health approaches in island nations.",
      highlights: ["Climate change adaptation", "Water quality studies", "Air pollution research"]
    },
    {
      icon: Shield,
      title: "Health Services Research",
      description: "Evidence-based research to improve health service delivery and workforce development in remote areas.",
      highlights: ["Health technology assessment", "Service delivery models", "Workforce training"]
    },
    {
      icon: Users,
      title: "Social Determinants",
      description: "Research on social, cultural, and economic factors affecting health outcomes in Pacific communities.",
      highlights: ["Health promotion", "Policy analysis", "Community engagement"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-6">
            Our Research Areas
          </h2>
          <p className="text-lg text-[#082952]/80 max-w-3xl mx-auto">
            Exploring diverse fields of public health research with a focus on Pacific Island 
            communities and global health challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-[#8ecae6]/30 hover:border-[#219ebc]/50 bg-white"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-[#8ecae6]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#219ebc]/20 transition-colors">
                  <area.icon className="w-6 h-6 text-[#219ebc]" />
                </div>
                <CardTitle className="text-xl text-[#082952] group-hover:text-[#219ebc] transition-colors">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-[#082952]/70 mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="space-y-2 mb-6">
                  {area.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-[#082952]/60">
                      <div className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2" />
                      {highlight}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-[#219ebc] hover:text-[#082952] hover:bg-[#8ecae6]/10 p-0"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="bg-[#219ebc] hover:bg-[#082952] text-white px-8 py-4"
          >
            View All Research Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}