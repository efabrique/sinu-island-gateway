
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Heart, Globe, GraduationCap, Home } from 'lucide-react';

const SupportServices = () => {
  const services = [
    {
      icon: Users,
      title: "Academic Support",
      description: "One-on-one tutoring, study groups, and academic writing workshops",
      color: "#ffb703"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access to digital libraries, language labs, and online learning platforms",
      color: "#219ebc"
    },
    {
      icon: Heart,
      title: "Personal Wellbeing",
      description: "Counseling services, health support, and wellness programs",
      color: "#8ecae6"
    },
    {
      icon: Globe,
      title: "Cultural Integration",
      description: "Orientation programs, cultural activities, and community connections",
      color: "#d7a12c"
    },
    {
      icon: GraduationCap,
      title: "Career Guidance",
      description: "Academic pathway advice and university preparation support",
      color: "#ffb703"
    },
    {
      icon: Home,
      title: "Accommodation Assistance",
      description: "Help finding suitable housing options both on and off campus",
      color: "#219ebc"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Student Support Services
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              We provide comprehensive support to help you succeed in your English language studies and adjust to life in Solomon Islands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="border-2 bg-[#edf4ff] text-center shadow-lg hover:shadow-xl transition-shadow" style={{ borderColor: service.color }}>
                <CardHeader>
                  <div className="mx-auto mb-2">
                    <div 
                      className="p-4 rounded-full inline-flex"
                      style={{ backgroundColor: service.color }}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-[#082952] text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952]">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80&auto=format&fit=crop"
                alt="International student receiving academic support"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            <Card className="border-[#219ebc] bg-[#edf4ff] shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#082952]">24/7 Support Available</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#082952] mb-2">Emergency Support</h4>
                    <p className="text-[#082952] text-sm">24/7 emergency contact line for urgent situations and immediate assistance.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#082952] mb-2">Online Resources</h4>
                    <p className="text-[#082952] text-sm">Access to online support portals, study materials, and virtual tutoring sessions.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#082952] mb-2">Peer Support Network</h4>
                    <p className="text-[#082952] text-sm">Connect with fellow international students and local student mentors.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#082952] mb-2">Regular Check-ins</h4>
                    <p className="text-[#082952] text-sm">Scheduled meetings with academic advisors to monitor progress and address concerns.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportServices;
