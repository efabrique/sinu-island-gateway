import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, University, Building, Heart } from "lucide-react";

export function Collaborations() {
  const partners = [
    {
      icon: University,
      title: "Academic Institutions",
      description: "Leading universities across the Pacific and internationally",
      count: "25+ Universities",
      color: "bg-[#8ecae6]/20 text-[#219ebc]"
    },
    {
      icon: Building,
      title: "Government Agencies",
      description: "Ministries of Health and public health departments",
      count: "12 Governments",
      color: "bg-[#ffb703]/20 text-[#d7a12c]"
    },
    {
      icon: Globe,
      title: "International Organizations",
      description: "WHO, UNICEF, and other global health bodies",
      count: "8 Organizations",
      color: "bg-[#219ebc]/20 text-[#219ebc]"
    },
    {
      icon: Heart,
      title: "Community Organizations",
      description: "Local NGOs and community health groups",
      count: "50+ Partners",
      color: "bg-[#8ecae6]/20 text-[#219ebc]"
    }
  ];

  const initiatives = [
    {
      title: "Pacific Health Research Network",
      description: "Collaborative research platform connecting institutions across 15 Pacific nations",
      status: "Active",
      participants: "45 Institutions"
    },
    {
      title: "Climate Health Initiative",
      description: "Multi-country research program addressing climate change impacts on health",
      status: "Ongoing",
      participants: "20 Countries"
    },
    {
      title: "Maternal Health Alliance",
      description: "Regional collaboration improving maternal health outcomes across the Pacific",
      status: "Expanding",
      participants: "30 Organizations"
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#ffb703] text-[#d7a12c] px-4 py-2">
            Global Partnerships
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-6">
            Collaborative Research Network
          </h2>
          <p className="text-lg text-[#082952]/80 max-w-3xl mx-auto">
            Building stronger health systems through strategic partnerships with academic institutions, 
            governments, and international organizations across the Pacific and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <Card key={index} className="text-center border-[#8ecae6]/30 bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${partner.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <partner.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-[#219ebc] mb-2">{partner.count}</div>
                <h3 className="text-lg font-semibold text-[#082952] mb-2">{partner.title}</h3>
                <p className="text-sm text-[#082952]/70">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#8ecae6]/20 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-[#082952] mb-8 text-center">
            Major Collaborative Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="border border-[#8ecae6]/30 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant="outline" 
                    className="border-[#ffb703] text-[#d7a12c] bg-[#ffb703]/10"
                  >
                    {initiative.status}
                  </Badge>
                  <span className="text-sm text-[#082952]/60">{initiative.participants}</span>
                </div>
                <h4 className="text-lg font-semibold text-[#082952] mb-3">{initiative.title}</h4>
                <p className="text-[#082952]/70 text-sm">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#219ebc]/10 to-[#8ecae6]/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#082952] mb-6">
            Join Our Research Community
          </h3>
          <p className="text-lg text-[#082952]/80 mb-8 max-w-2xl mx-auto">
            Collaborate with leading researchers and contribute to advancing public health 
            knowledge and practice in the Pacific region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#219ebc] hover:bg-[#082952] text-white px-8 py-4"
            >
              Partnership Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white px-8 py-4"
            >
              Research Proposals
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}