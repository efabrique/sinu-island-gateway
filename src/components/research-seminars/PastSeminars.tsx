import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Play, 
  Download, 
  Calendar,
  User
} from "lucide-react";

export const PastSeminars = () => {
  const pastSeminars = [
    {
      date: "2024-07-25",
      title: "Sustainable Fisheries Management in the Pacific",
      speaker: "Dr. John Pacific",
      affiliation: "Pacific Fisheries Institute",
      category: "Marine Science",
      duration: "45 mins",
      views: 156,
      hasRecording: true,
      hasSlides: true
    },
    {
      date: "2024-07-18",
      title: "Traditional Medicine and Modern Healthcare Integration",
      speaker: "Prof. Mary Healing",
      affiliation: "SINU School of Medicine",
      category: "Public Health",
      duration: "52 mins",
      views: 203,
      hasRecording: true,
      hasSlides: true
    },
    {
      date: "2024-07-11",
      title: "Community-Based Climate Adaptation Strategies",
      speaker: "Dr. Climate Warrior",
      affiliation: "Regional Climate Centre",
      category: "Climate Science",
      duration: "38 mins",
      views: 189,
      hasRecording: false,
      hasSlides: true
    },
    {
      date: "2024-07-04",
      title: "Digital Preservation of Indigenous Languages",
      speaker: "Dr. Language Keeper",
      affiliation: "Cultural Heritage Institute",
      category: "Indigenous Studies",
      duration: "41 mins",
      views: 142,
      hasRecording: true,
      hasSlides: false
    },
    {
      date: "2024-06-27",
      title: "Coral Reef Restoration Technologies",
      speaker: "Dr. Reef Builder",
      affiliation: "Marine Conservation Society",
      category: "Marine Science",
      duration: "49 mins",
      views: 278,
      hasRecording: true,
      hasSlides: true
    },
    {
      date: "2024-06-20",
      title: "Youth Leadership in Sustainable Development",
      speaker: "Ms. Future Leader",
      affiliation: "Pacific Youth Council",
      category: "Social Development",
      duration: "35 mins",
      views: 167,
      hasRecording: true,
      hasSlides: true
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Marine Science": "#8ecae6",
      "Public Health": "#ffb703", 
      "Climate Science": "#219ebc",
      "Indigenous Studies": "#d7a12c",
      "Social Development": "#219ebc"
    };
    return colors[category] || "#ffb703";
  };

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Past Seminars Archive
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Access recordings, slides, and resources from our extensive collection of past seminars 
            and research presentations.
          </p>
        </div>

        {/* Search and Filter Section */}
        <Card 
          className="border-2 mb-8"
          style={{ 
            borderColor: '#8ecae6',
            backgroundColor: '#edf4ff'
          }}
        >
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search 
                  className="absolute left-3 top-3 h-4 w-4"
                  style={{ color: '#219ebc' }}
                />
                <Input 
                  placeholder="Search seminars by title, speaker, or topic..."
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <Filter 
                  className="absolute left-3 top-3 h-4 w-4"
                  style={{ color: '#219ebc' }}
                />
                <select 
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white"
                  style={{ color: '#082952' }}
                >
                  <option value="">All Categories</option>
                  <option value="marine">Marine Science</option>
                  <option value="climate">Climate Science</option>
                  <option value="health">Public Health</option>
                  <option value="indigenous">Indigenous Studies</option>
                  <option value="social">Social Development</option>
                </select>
              </div>
              <Button 
                style={{ 
                  backgroundColor: '#219ebc',
                  color: '#ffffff'
                }}
              >
                Search Archives
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Past Seminars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastSeminars.map((seminar, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-lg transition-all duration-300"
              style={{ 
                borderColor: '#8ecae6',
                backgroundColor: '#edf4ff'
              }}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    style={{ 
                      backgroundColor: getCategoryColor(seminar.category),
                      color: '#ffffff'
                    }}
                  >
                    {seminar.category}
                  </Badge>
                  <div className="text-sm" style={{ color: '#219ebc' }}>
                    {seminar.views} views
                  </div>
                </div>
                <CardTitle className="text-lg line-clamp-2" style={{ color: '#082952' }}>
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
                  <div className="flex items-center text-sm" style={{ color: '#082952' }}>
                    <Calendar className="h-4 w-4 mr-2" style={{ color: '#d7a12c' }} />
                    {new Date(seminar.date).toLocaleDateString()}
                    <span className="ml-2">• {seminar.duration}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  {seminar.hasRecording && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                      style={{ 
                        borderColor: '#219ebc',
                        color: '#219ebc'
                      }}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Watch
                    </Button>
                  )}
                  {seminar.hasSlides && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      style={{ 
                        borderColor: '#ffb703',
                        color: '#ffb703'
                      }}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Slides
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
            variant="outline"
            style={{ 
              borderColor: '#082952',
              color: '#082952'
            }}
          >
            Load More Archives
          </Button>
        </div>
      </div>
    </section>
  );
};