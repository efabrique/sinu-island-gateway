import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Globe, Leaf, Users } from "lucide-react";

export function ResearchOverview() {
  const highlights = [
    {
      icon: Heart,
      title: "Health & Development",
      description: "Early influences on health and women's health research"
    },
    {
      icon: Globe,
      title: "Global Health",
      description: "International collaborations and health equity initiatives"
    },
    {
      icon: Leaf,
      title: "Environmental Health",
      description: "Climate change, heat stress, and environmental contaminants"
    },
    {
      icon: Users,
      title: "Evidence-Based Policy",
      description: "Research informing health policy and practice"
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#219ebc] text-[#219ebc] px-4 py-2">
            Research Excellence
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-6">
            Advancing Public Health Through Innovation
          </h2>
          <p className="text-lg text-[#082952]/80 max-w-4xl mx-auto leading-relaxed">
            Our research spans the spectrum of health – from child health development and maternal health 
            through to end-of-life care. We conduct research on the social determinants of health and on 
            the factors that influence health promotion and health policy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-[#8ecae6]/30 hover:border-[#219ebc]/50 transition-all duration-300 hover:shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#8ecae6]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-[#219ebc]" />
                </div>
                <h3 className="text-lg font-semibold text-[#082952] mb-2">{highlight.title}</h3>
                <p className="text-sm text-[#082952]/70">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#8ecae6]/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#082952] mb-6">
                Real Impact on Community Health
              </h3>
              <p className="text-[#082952]/80 mb-6 leading-relaxed">
                We consider environmental factors influencing health, such as climate change, heat stress 
                and exposure to environmental contaminants, along with conducting research on One Health 
                and the interplay between human, animal and the environment.
              </p>
              <p className="text-[#082952]/80 leading-relaxed">
                Our research has real impact on the health of our community and on the health system 
                that supports it. We conduct health services research to inform better delivery of 
                health services and ensure evidence-based healthcare.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-[#8ecae6]/10 rounded-xl">
                <div className="text-3xl font-bold text-[#219ebc] mb-2">15+</div>
                <div className="text-sm text-[#082952]/70">Research Centers</div>
              </div>
              <div className="text-center p-6 bg-[#ffb703]/10 rounded-xl">
                <div className="text-3xl font-bold text-[#d7a12c] mb-2">200+</div>
                <div className="text-sm text-[#082952]/70">Researchers</div>
              </div>
              <div className="text-center p-6 bg-[#219ebc]/10 rounded-xl">
                <div className="text-3xl font-bold text-[#219ebc] mb-2">80%</div>
                <div className="text-sm text-[#082952]/70">Policy Impact</div>
              </div>
              <div className="text-center p-6 bg-[#8ecae6]/10 rounded-xl">
                <div className="text-3xl font-bold text-[#219ebc] mb-2">500K+</div>
                <div className="text-sm text-[#082952]/70">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}