import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  ExternalLink,
  Video 
} from "lucide-react";

export const UpcomingSeminars = () => {
  const upcomingSeminars = [
    {
      date: "2024-08-15",
      time: "12:00 PM - 1:00 PM",
      title: "Climate Resilience in Pacific Island Communities",
      speaker: "Dr. Maria Taumalolo",
      affiliation: "University of the South Pacific",
      location: "Main Lecture Hall",
      virtual: true,
      category: "Climate Science",
      description: "Exploring community-based adaptation strategies and traditional knowledge systems for building climate resilience in Pacific Island nations.",
      image: "/lovable-uploads/49aaf3f8-456b-4260-8aa7-3110587fb521.png"
    },
    {
      date: "2024-08-22",
      time: "2:00 PM - 3:00 PM", 
      title: "Marine Biodiversity Conservation in the Coral Triangle",
      speaker: "Prof. James Henderson",
      affiliation: "Australian National University",
      location: "Marine Science Building",
      virtual: true,
      category: "Marine Science",
      description: "Latest research on coral reef ecosystems and innovative conservation approaches in the world's most biodiverse marine region.",
      image: "/lovable-uploads/552cc4eb-ec31-4319-85ea-55903c6fd74c.png"
    },
    {
      date: "2024-08-29",
      time: "11:00 AM - 12:00 PM",
      title: "Indigenous Knowledge Systems and Sustainable Development",
      speaker: "Dr. Sarah Wickham",
      affiliation: "SINU Centre for Indigenous Studies",
      location: "Cultural Centre",
      virtual: false,
      category: "Indigenous Studies",
      description: "Integrating traditional ecological knowledge with modern research approaches for sustainable resource management.",
      image: "/lovable-uploads/7284ab6b-b66f-44ea-be92-9f17dc726408.png"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Climate Science": "#219ebc",
      "Marine Science": "#8ecae6", 
      "Indigenous Studies": "#d7a12c"
    };
    return colors[category] || "#ffb703";
  };

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Upcoming Seminars
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Join us for these exciting upcoming presentations featuring leading researchers 
            and groundbreaking studies from across the Pacific region.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {upcomingSeminars.map((seminar, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-lg transition-all duration-300"
              style={{ 
                borderColor: '#8ecae6',
                backgroundColor: '#edf4ff'
              }}
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${seminar.image})` }}
              >
                <div className="absolute top-4 left-4">
                  <Badge 
                    style={{ 
                      backgroundColor: getCategoryColor(seminar.category),
                      color: '#ffffff'
                    }}
                  >
                    {seminar.category}
                  </Badge>
                </div>
                {seminar.virtual && (
                  <div className="absolute top-4 right-4">
                    <Badge 
                      style={{ 
                        backgroundColor: '#ffb703',
                        color: '#ffffff'
                      }}
                    >
                      <Video className="h-3 w-3 mr-1" />
                      Virtual
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <div className="flex items-center text-sm mb-2" style={{ color: '#219ebc' }}>
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(seminar.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <CardTitle className="line-clamp-2" style={{ color: '#082952' }}>
                  {seminar.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm" style={{ color: '#082952' }}>
                    <User className="h-4 w-4 mr-2" style={{ color: '#ffb703' }} />
                    <span className="font-medium">{seminar.speaker}</span>
                  </div>
                  <div className="text-sm" style={{ color: '#219ebc' }}>
                    {seminar.affiliation}
                  </div>
                </div>

                <div className="space-y-2 text-sm" style={{ color: '#082952' }}>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" style={{ color: '#d7a12c' }} />
                    {seminar.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" style={{ color: '#d7a12c' }} />
                    {seminar.location}
                  </div>
                </div>

                <p className="text-sm line-clamp-3" style={{ color: '#082952' }}>
                  {seminar.description}
                </p>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    style={{ 
                      borderColor: '#219ebc',
                      color: '#219ebc'
                    }}
                  >
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  {seminar.virtual && (
                    <Button 
                      size="sm"
                      style={{ 
                        backgroundColor: '#ffb703',
                        color: '#ffffff'
                      }}
                    >
                      Join Online
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            style={{ 
              backgroundColor: '#082952',
              color: '#ffffff'
            }}
          >
            View Full Schedule
            <Calendar className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};