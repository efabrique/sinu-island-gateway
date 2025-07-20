import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Microscope, 
  BookOpen, 
  Users, 
  Award, 
  Briefcase, 
  GraduationCap,
  ArrowRight 
} from "lucide-react";

export const CollaborationOpportunities = () => {
  const opportunities = [
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "Joint Research Projects",
      description: "Collaborate on cutting-edge research initiatives across various disciplines including marine science, climate change, and indigenous knowledge systems.",
      benefits: ["Shared expertise", "Co-funding opportunities", "Joint publications"]
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Student Exchange Programs",
      description: "Facilitate student and faculty exchanges to promote cross-cultural learning and knowledge transfer.",
      benefits: ["Cultural exchange", "Academic mobility", "Network expansion"]
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Knowledge Transfer",
      description: "Share expertise, technologies, and best practices to solve complex challenges facing the Pacific region.",
      benefits: ["Technology transfer", "Capacity building", "Innovation development"]
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Grant Partnerships",
      description: "Collaborate on grant applications and funding proposals for major research initiatives and infrastructure development.",
      benefits: ["Increased funding success", "Resource sharing", "Risk mitigation"]
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Industry Collaboration",
      description: "Partner with industry leaders to conduct applied research and develop practical solutions for real-world challenges.",
      benefits: ["Market relevance", "Commercial application", "Industry insights"]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Engagement",
      description: "Work together with local communities to ensure research addresses community needs and promotes sustainable development.",
      benefits: ["Community impact", "Local ownership", "Sustainable solutions"]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Collaboration Opportunities
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Discover the many ways you can partner with SINU to advance research, 
            education, and positive change in the Pacific region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-lg transition-all duration-300 h-full"
              style={{ 
                borderColor: '#8ecae6',
                backgroundColor: '#ffffff'
              }}
            >
              <CardHeader>
                <div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                  style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                >
                  {opportunity.icon}
                </div>
                <CardTitle style={{ color: '#082952' }}>
                  {opportunity.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="mb-4 flex-1" style={{ color: '#082952' }}>
                  {opportunity.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2" style={{ color: '#d7a12c' }}>
                    Key Benefits:
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {opportunity.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm" style={{ color: '#082952' }}>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  variant="outline" 
                  className="mt-auto"
                  style={{ 
                    borderColor: '#ffb703',
                    color: '#ffb703'
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};