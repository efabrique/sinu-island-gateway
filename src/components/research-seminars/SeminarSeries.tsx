import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Waves, 
  Leaf, 
  Globe, 
  Heart, 
  Microscope, 
  Users,
  ArrowRight 
} from "lucide-react";

export const SeminarSeries = () => {
  const seminarSeries = [
    {
      icon: <Waves className="h-6 w-6" />,
      title: "Marine Science Seminar Series",
      description: "Monthly presentations focusing on marine conservation, fisheries management, and ocean research in the Pacific.",
      frequency: "Monthly",
      nextDate: "August 22, 2024",
      color: "#8ecae6"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Climate Change Research Forum",
      description: "Bi-weekly discussions on climate adaptation, resilience strategies, and environmental sustainability.",
      frequency: "Bi-weekly",
      nextDate: "August 15, 2024",
      color: "#219ebc"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Indigenous Knowledge Symposium",
      description: "Quarterly symposiums celebrating traditional knowledge systems and their integration with modern research.",
      frequency: "Quarterly",
      nextDate: "August 29, 2024",
      color: "#d7a12c"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Public Health Colloquium",
      description: "Monthly presentations on health challenges, solutions, and innovations relevant to Pacific Island communities.",
      frequency: "Monthly",
      nextDate: "September 5, 2024",
      color: "#ffb703"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Research Partnerships",
      description: "Showcase international collaborations and joint research initiatives with partner institutions.",
      frequency: "Bi-monthly",
      nextDate: "September 12, 2024",
      color: "#219ebc"
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "Student Research Showcase",
      description: "Platform for undergraduate and postgraduate students to present their research findings and projects.",
      frequency: "Monthly",
      nextDate: "September 19, 2024",
      color: "#8ecae6"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Seminar Series
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Our diverse range of seminar series provides regular opportunities for knowledge sharing 
            across different research disciplines and academic levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seminarSeries.map((series, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-lg transition-all duration-300 h-full"
              style={{ 
                borderColor: series.color,
                backgroundColor: '#ffffff'
              }}
            >
              <CardHeader>
                <div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                  style={{ backgroundColor: series.color, color: '#ffffff' }}
                >
                  {series.icon}
                </div>
                <CardTitle style={{ color: '#082952' }}>
                  {series.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="mb-4 flex-1" style={{ color: '#082952' }}>
                  {series.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium" style={{ color: '#d7a12c' }}>
                      Frequency:
                    </span>
                    <span style={{ color: '#082952' }}>
                      {series.frequency}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium" style={{ color: '#d7a12c' }}>
                      Next Session:
                    </span>
                    <span style={{ color: '#082952' }}>
                      {series.nextDate}
                    </span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="mt-auto"
                  style={{ 
                    borderColor: series.color,
                    color: series.color
                  }}
                >
                  Subscribe to Series
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card 
            className="inline-block border-2 p-8 max-w-2xl mx-auto"
            style={{ 
              borderColor: '#ffb703',
              backgroundColor: '#edf4ff'
            }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#082952' }}>
              Propose a Seminar Series
            </h3>
            <p className="text-lg mb-6" style={{ color: '#082952' }}>
              Have an idea for a new seminar series? We welcome proposals from faculty, 
              students, and research groups to establish new regular seminar programs.
            </p>
            <Button 
              size="lg"
              style={{ 
                backgroundColor: '#ffb703',
                color: '#ffffff'
              }}
            >
              Submit Proposal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};