
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, HandHeart, MessageCircle } from 'lucide-react';

const CommunityConnections = () => {
  const connections = [
    {
      icon: Users,
      title: "Student Buddy Program",
      description: "Get paired with a local student who will help you navigate campus life and local culture.",
      features: ["One-on-one mentorship", "Cultural guidance", "Academic support", "Friendship building"]
    },
    {
      icon: Heart,
      title: "Host Family Network",
      description: "Connect with local families who welcome international students into their homes and hearts.",
      features: ["Weekend visits", "Traditional meals", "Family celebrations", "Cultural immersion"]
    },
    {
      icon: HandHeart,
      title: "Community Volunteers",
      description: "Engage with local community organizations and contribute to meaningful social causes.",
      features: ["Environmental projects", "Education support", "Community events", "Social impact"]
    },
    {
      icon: MessageCircle,
      title: "Cultural Exchange Groups",
      description: "Join groups where locals and internationals share languages, cultures, and experiences.",
      features: ["Language exchange", "Cultural sharing", "Friendship groups", "Regular meetups"]
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Community Connections
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Build meaningful relationships with local students, families, and community members 
              who are excited to share their culture and welcome you to Solomon Islands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {connections.map((connection, index) => (
              <Card key={index} className="border-[#219ebc] bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-[#ffb703] p-3 rounded-full mr-4">
                      <connection.icon className="h-6 w-6 text-[#082952]" />
                    </div>
                    <CardTitle className="text-[#082952]">{connection.title}</CardTitle>
                  </div>
                  <p className="text-[#082952]">{connection.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {connection.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-[#082952]">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#219ebc]"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#219ebc] hover:bg-[#8ecae6] text-white">
                    Join Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8 border border-[#ffb703] shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#082952] mb-4">
                Success Stories
              </h3>
              <p className="text-[#082952] max-w-2xl mx-auto">
                Hear from international students who have found their home away from home in Solomon Islands.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#edf4ff] p-6 rounded-lg">
                <p className="text-[#082952] italic mb-4">
                  "My host family made me feel like I belonged here from day one. They taught me so much about local traditions."
                </p>
                <p className="text-[#219ebc] font-semibold">- Maria, Philippines</p>
              </div>
              
              <div className="bg-[#edf4ff] p-6 rounded-lg">
                <p className="text-[#082952] italic mb-4">
                  "The buddy program connected me with my best friend. We still meet weekly even after graduation."
                </p>
                <p className="text-[#219ebc] font-semibold">- James, Fiji</p>
              </div>
              
              <div className="bg-[#edf4ff] p-6 rounded-lg">
                <p className="text-[#082952] italic mb-4">
                  "Volunteering in the community helped me understand Solomon Islands culture on a deeper level."
                </p>
                <p className="text-[#219ebc] font-semibold">- Sarah, Vanuatu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityConnections;
