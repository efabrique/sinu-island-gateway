import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Globe, 
  Lightbulb, 
  Shield, 
  Heart, 
  Zap 
} from "lucide-react";

export const PartnershipBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Enhanced Research Impact",
      description: "Amplify your research reach and influence through collaborative projects and shared resources."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Pacific Region Expertise",
      description: "Access unique insights into Pacific Island cultures, environments, and sustainable development challenges."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Acceleration",
      description: "Accelerate innovation through cross-disciplinary collaboration and diverse perspectives."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Mitigation",
      description: "Share project risks and costs while increasing the likelihood of successful outcomes."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community Connection",
      description: "Connect directly with Pacific Island communities to ensure research relevance and impact."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Capacity Building",
      description: "Develop local capacity and expertise while contributing to sustainable development goals."
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Why Partner with SINU?
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Partnering with Solomon Islands National University offers unique advantages 
            and opportunities for meaningful collaboration in the Pacific region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="text-center border-2 hover:shadow-lg transition-all duration-300"
              style={{ 
                borderColor: '#219ebc',
                backgroundColor: '#edf4ff'
              }}
            >
              <CardContent className="p-6">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ backgroundColor: '#d7a12c', color: '#ffffff' }}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#082952' }}>
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};