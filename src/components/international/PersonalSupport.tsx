
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Brain, Home, Coffee } from 'lucide-react';

const PersonalSupport = () => {
  const services = [
    {
      icon: Heart,
      title: "Counseling Services",
      description: "Professional counseling support for personal, emotional, and psychological wellbeing.",
      color: "bg-[#ffb703]"
    },
    {
      icon: Brain,
      title: "Mental Health Support",
      description: "Access to mental health resources, workshops, and crisis intervention services.",
      color: "bg-[#219ebc]"
    },
    {
      icon: Home,
      title: "Accommodation Assistance",
      description: "Help finding suitable housing options and resolving accommodation issues.",
      color: "bg-[#8ecae6]"
    },
    {
      icon: Coffee,
      title: "Social Integration",
      description: "Programs and events to help you connect with other students and the local community.",
      color: "bg-[#d7a12c]"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Personal Wellbeing & Support
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Your mental health and personal wellbeing are our priority. We provide comprehensive 
              support services to help you feel at home and thrive during your studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-[#8ecae6] text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`${service.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-[#082952]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952] text-sm mb-4">{service.description}</p>
                  <Button variant="outline" className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8 border border-[#8ecae6] shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#082952] mb-4">Crisis Support</h3>
                <p className="text-[#082952] mb-4">
                  If you're experiencing a mental health crisis or emergency, immediate support is available.
                </p>
                <ul className="space-y-2 text-[#082952] mb-6">
                  <li><strong>Emergency Crisis Line:</strong> +677 999-HELP</li>
                  <li><strong>24/7 Text Support:</strong> Text "HELP" to 123-456</li>
                  <li><strong>Online Chat:</strong> Available on student portal</li>
                </ul>
                <Button className="bg-[#ffb703] text-[#082952] hover:bg-[#d7a12c]">
                  Access Crisis Support
                </Button>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#082952] mb-4">Wellness Programs</h3>
                <p className="text-[#082952] mb-4">
                  Participate in wellness activities and programs designed to support your overall health.
                </p>
                <ul className="space-y-2 text-[#082952] mb-6">
                  <li>• Mindfulness and meditation sessions</li>
                  <li>• Stress management workshops</li>
                  <li>• Fitness and recreational activities</li>
                  <li>• Cultural exchange events</li>
                </ul>
                <Button variant="outline" className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white">
                  View Programs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSupport;
