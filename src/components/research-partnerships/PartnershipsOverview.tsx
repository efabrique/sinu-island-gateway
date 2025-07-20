import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Globe, Target } from "lucide-react";

export const PartnershipsOverview = () => {
  const partnershipTypes = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Industry Partnerships",
      description: "Collaborate with leading companies to drive innovation and solve real-world challenges"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Government Collaboration",
      description: "Work with government agencies to inform policy and support national development"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "International Alliances",
      description: "Partner with global institutions to advance research and knowledge exchange"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Community Engagement",
      description: "Connect with local communities to ensure research has meaningful social impact"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Building Partnerships for Impact
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            At SINU, we believe that meaningful partnerships drive innovation, foster knowledge exchange, 
            and create lasting positive change for our communities and the Pacific region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnershipTypes.map((type, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-lg transition-all duration-300"
              style={{ 
                borderColor: '#8ecae6',
                backgroundColor: '#ffffff'
              }}
            >
              <CardContent className="p-6 text-center">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ backgroundColor: '#ffb703', color: '#ffffff' }}
                >
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
                  {type.title}
                </h3>
                <p style={{ color: '#082952' }}>
                  {type.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};