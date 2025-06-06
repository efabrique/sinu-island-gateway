
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Globe, Calendar, Heart } from 'lucide-react';

const CommunityConnection = () => {
  const programs = [
    {
      icon: Users,
      title: "International Student Society",
      description: "Join a vibrant community of international students from around the world.",
      activities: ["Social events", "Cultural festivals", "Study groups", "Networking opportunities"]
    },
    {
      icon: Globe,
      title: "Cultural Exchange Programs",
      description: "Share your culture and learn about others through organized exchange activities.",
      activities: ["Language exchange", "Cultural presentations", "Traditional cooking", "Art workshops"]
    },
    {
      icon: Calendar,
      title: "Regular Events & Activities",
      description: "Participate in regular events designed to build friendships and connections.",
      activities: ["Movie nights", "Sports tournaments", "Beach trips", "City tours"]
    },
    {
      icon: Heart,
      title: "Buddy Program",
      description: "Get paired with a local student or senior international student for personalized support.",
      activities: ["One-on-one mentoring", "Local area exploration", "Academic guidance", "Friendship building"]
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Community Connection & Integration
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Build lasting friendships, explore local culture, and create a strong support network 
              through our community programs and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {programs.map((program, index) => (
              <Card key={index} className="bg-white border-[#8ecae6] shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-[#8ecae6] p-3 rounded-lg mr-4">
                      <program.icon className="h-6 w-6 text-[#082952]" />
                    </div>
                    <CardTitle className="text-xl text-[#082952]">{program.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952] mb-4">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center text-[#082952]">
                        <span className="w-2 h-2 bg-[#219ebc] rounded-full mr-3"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-[#219ebc] hover:bg-[#8ecae6] text-white w-full">
                    Join Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-[#8ecae6] shadow-lg">
              <h3 className="text-2xl font-bold text-[#082952] mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#ffb703] pl-4">
                  <h4 className="font-semibold text-[#082952]">International Food Festival</h4>
                  <p className="text-[#082952] text-sm">March 15, 2024 • Main Campus</p>
                </div>
                <div className="border-l-4 border-[#219ebc] pl-4">
                  <h4 className="font-semibold text-[#082952]">Cultural Night</h4>
                  <p className="text-[#082952] text-sm">March 22, 2024 • Student Center</p>
                </div>
                <div className="border-l-4 border-[#8ecae6] pl-4">
                  <h4 className="font-semibold text-[#082952]">Beach Cleanup & BBQ</h4>
                  <p className="text-[#082952] text-sm">March 29, 2024 • Bonegi Beach</p>
                </div>
              </div>
              <Button variant="outline" className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white w-full mt-6">
                View All Events
              </Button>
            </div>

            <div className="bg-[#ffb703] text-[#082952] rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
              <p className="mb-6">
                Ready to connect with the international student community? Join our programs 
                and start building lifelong friendships today.
              </p>
              <div className="space-y-4">
                <Button className="bg-[#082952] text-white hover:bg-[#219ebc] w-full">
                  Join Student Society
                </Button>
                <Button variant="outline" className="border-[#082952] text-[#082952] hover:bg-[#082952] hover:text-white w-full">
                  Sign Up for Buddy Program
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityConnection;
