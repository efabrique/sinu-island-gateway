import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, BookOpen } from 'lucide-react';

const ResearchNetworkActivities = () => {
  const activities = [
    {
      type: "Research Symposium",
      title: "Pacific Indigenous Knowledge Systems",
      date: "March 15-17, 2024",
      location: "SINU Campus",
      participants: "50+ Researchers",
      description: "Annual symposium bringing together Indigenous researchers, community leaders, and knowledge keepers.",
      status: "upcoming"
    },
    {
      type: "Workshop Series",
      title: "Traditional Ecological Knowledge Methods",
      date: "Ongoing",
      location: "Multiple Communities",
      participants: "Community Members",
      description: "Hands-on workshops documenting traditional ecological practices and environmental knowledge.",
      status: "ongoing"
    },
    {
      type: "Research Project",
      title: "Cultural Mapping Initiative",
      date: "January - December 2024",
      location: "Solomon Islands",
      participants: "15 Communities",
      description: "Collaborative mapping of cultural sites, traditional territories, and sacred places.",
      status: "active"
    },
    {
      type: "Publication",
      title: "Indigenous Knowledge Journal",
      date: "Quarterly",
      location: "Digital Platform",
      participants: "Global Contributors",
      description: "Peer-reviewed journal featuring Indigenous research and traditional knowledge studies.",
      status: "ongoing"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-[#ffb703] text-[#082952]';
      case 'ongoing': return 'bg-[#8ecae6] text-[#082952]';
      case 'active': return 'bg-[#219ebc] text-white';
      default: return 'bg-[#d7a12c] text-[#082952]';
    }
  };

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Network Activities
          </h2>
          <p className="text-xl text-[#219ebc] max-w-4xl mx-auto leading-relaxed">
            Our research network is actively engaged in various initiatives that promote 
            Indigenous knowledge sharing, preservation, and application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <Card 
              key={index} 
              className="bg-white border-[#8ecae6] hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Badge className={`${getStatusColor(activity.status)} font-semibold`}>
                    {activity.type}
                  </Badge>
                  <Badge variant="outline" className="border-[#219ebc] text-[#219ebc]">
                    {activity.status}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold text-[#082952] mb-4">
                  {activity.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-[#219ebc]">
                    <Calendar className="h-5 w-5" />
                    <span className="font-medium">{activity.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#219ebc]">
                    <MapPin className="h-5 w-5" />
                    <span className="font-medium">{activity.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#219ebc]">
                    <Users className="h-5 w-5" />
                    <span className="font-medium">{activity.participants}</span>
                  </div>
                </div>
                
                <p className="text-[#082952] leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchNetworkActivities;