import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  Bell, 
  Calendar,
  Download,
  ExternalLink
} from "lucide-react";

export const SeminarResources = () => {
  const resources = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Seminar Recordings",
      description: "Access our complete library of recorded seminars and presentations",
      count: "250+ recordings",
      action: "Browse Library",
      color: "#219ebc"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Presentation Slides",
      description: "Download presentation materials and supplementary resources",
      count: "180+ slide decks",
      action: "View Collection",
      color: "#ffb703"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Reading Lists",
      description: "Curated reading materials and references from seminar topics",
      count: "50+ reading lists",
      action: "Explore Lists",
      color: "#8ecae6"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Speaker Profiles",
      description: "Learn more about our distinguished speakers and their research",
      count: "120+ profiles",
      action: "Meet Speakers",
      color: "#d7a12c"
    }
  ];

  const tools = [
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Seminar Notifications",
      description: "Get email reminders for upcoming seminars and events",
      action: "Subscribe Now"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Calendar Integration",
      description: "Add seminar schedules to your personal calendar",
      action: "Download Calendar"
    },
    {
      icon: <Download className="h-5 w-5" />,
      title: "Mobile App",
      description: "Access seminars on-the-go with our mobile application",
      action: "Download App"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Seminar Resources
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Enhance your learning experience with our comprehensive collection of seminar resources, 
            tools, and support materials.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-lg transition-all duration-300 text-center"
              style={{ 
                borderColor: resource.color,
                backgroundColor: '#ffffff'
              }}
            >
              <CardHeader>
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
                  style={{ backgroundColor: resource.color, color: '#ffffff' }}
                >
                  {resource.icon}
                </div>
                <CardTitle style={{ color: '#082952' }}>
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3" style={{ color: '#082952' }}>
                  {resource.description}
                </p>
                <div 
                  className="text-sm font-semibold mb-4"
                  style={{ color: resource.color }}
                >
                  {resource.count}
                </div>
                <Button 
                  variant="outline"
                  size="sm"
                  style={{ 
                    borderColor: resource.color,
                    color: resource.color
                  }}
                >
                  {resource.action}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools and Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
              Tools & Services
            </h3>
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <Card 
                  key={index}
                  className="border-2"
                  style={{ 
                    borderColor: '#8ecae6',
                    backgroundColor: '#edf4ff'
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full mr-4"
                          style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                        >
                          {tool.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold" style={{ color: '#082952' }}>
                            {tool.title}
                          </h4>
                          <p className="text-sm" style={{ color: '#082952' }}>
                            {tool.description}
                          </p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        style={{ 
                          borderColor: '#ffb703',
                          color: '#ffb703'
                        }}
                      >
                        {tool.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card 
            className="border-2 p-6"
            style={{ 
              borderColor: '#d7a12c',
              backgroundColor: '#ffffff'
            }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
              Presenter Guidelines
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#d7a12c' }}>
                  For Faculty & Researchers
                </h4>
                <p className="text-sm mb-3" style={{ color: '#082952' }}>
                  Guidelines for presenting your research and engaging with our academic community.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  style={{ 
                    borderColor: '#219ebc',
                    color: '#219ebc'
                  }}
                >
                  Faculty Guidelines
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#d7a12c' }}>
                  For Students
                </h4>
                <p className="text-sm mb-3" style={{ color: '#082952' }}>
                  Resources to help students prepare and deliver effective research presentations.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  style={{ 
                    borderColor: '#219ebc',
                    color: '#219ebc'
                  }}
                >
                  Student Guidelines
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#d7a12c' }}>
                  Technical Requirements
                </h4>
                <p className="text-sm mb-3" style={{ color: '#082952' }}>
                  Audio-visual requirements and technical specifications for presentations.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  style={{ 
                    borderColor: '#219ebc',
                    color: '#219ebc'
                  }}
                >
                  Tech Specs
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};