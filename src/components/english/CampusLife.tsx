
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Coffee, Music, Camera, Volleyball } from 'lucide-react';

const CampusLife = () => {
  const activities = [
    {
      icon: Calendar,
      title: "Cultural Events",
      description: "Monthly cultural celebrations, festivals, and traditional performances",
      color: "#ffb703"
    },
    {
      icon: Coffee,
      title: "Conversation Clubs",
      description: "Weekly English conversation practice sessions with local students",
      color: "#219ebc"
    },
    {
      icon: Music,
      title: "Arts & Music",
      description: "Music clubs, art workshops, and creative expression activities",
      color: "#8ecae6"
    },
    {
      icon: Volleyball,
      title: "Sports & Recreation",
      description: "Beach volleyball, swimming, hiking, and fitness activities",
      color: "#d7a12c"
    }
  ];

  const highlights = [
    "Beautiful tropical campus setting",
    "Modern learning facilities and technology",
    "Diverse international student community",
    "Close to beaches and natural attractions",
    "Rich cultural heritage and traditions",
    "Warm and welcoming local community"
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Campus Life & Activities
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Experience the vibrant campus life at SINU while immersing yourself in the unique culture of Solomon Islands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {activities.map((activity, index) => (
              <Card key={index} className="border-2 bg-white shadow-lg" style={{ borderColor: activity.color }}>
                <CardHeader>
                  <div className="flex items-center">
                    <div 
                      className="p-3 rounded-full mr-4"
                      style={{ backgroundColor: activity.color }}
                    >
                      <activity.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-[#082952]">{activity.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952]">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-[#082952] mb-6">Why Study in Solomon Islands?</h3>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Camera className="h-5 w-5 text-[#219ebc] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-[#082952]">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&q=80&auto=format&fit=crop"
                alt="Students enjoying campus life and cultural activities"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <Card className="border-[#ffb703] bg-[#ffb703]/10 text-center">
            <CardHeader>
              <CardTitle className="text-[#082952] flex items-center justify-center">
                <MapPin className="mr-2 h-5 w-5 text-[#ffb703]" />
                Explore Solomon Islands
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#082952] mb-6">
                While studying English, you'll have the opportunity to explore pristine beaches, coral reefs, 
                historical sites, and experience the warm hospitality of the Solomon Islands people.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-[#082952] mb-2">Weekend Excursions</h4>
                  <p className="text-sm text-[#082952]">Organized trips to local attractions and cultural sites</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-[#082952] mb-2">Community Engagement</h4>
                  <p className="text-sm text-[#082952]">Volunteer opportunities and local community projects</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-[#082952] mb-2">Adventure Activities</h4>
                  <p className="text-sm text-[#082952]">Snorkeling, diving, hiking, and nature exploration</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
