import React from 'react';
import { Shield, Clock, Smartphone, AlertTriangle, Umbrella, Map } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TransportTips = () => {
  const tips = [
    {
      icon: Clock,
      title: "Plan Your Journey",
      description: "Check schedules and allow extra time for potential delays, especially during peak hours and weather changes."
    },
    {
      icon: Shield,
      title: "Stay Safe",
      description: "Always wait at designated stops, keep belongings secure, and travel in groups during late hours."
    },
    {
      icon: Smartphone,
      title: "Use Transport Apps",
      description: "Download the SINU Transport app for real-time updates, route planning, and shuttle tracking."
    },
    {
      icon: Umbrella,
      title: "Weather Preparedness",
      description: "Tropical weather can affect transport. Carry rain protection and check for service updates during storms."
    },
    {
      icon: Map,
      title: "Know Your Routes",
      description: "Familiarize yourself with alternative routes and stops in case of service disruptions or changes."
    },
    {
      icon: AlertTriangle,
      title: "Emergency Contacts",
      description: "Save campus security and transport office numbers for emergencies or late-night assistance."
    }
  ];

  const importantInfo = [
    "All students must carry valid ID when using any SINU transportation services",
    "Campus shuttle services are free, but city transport requires payment or valid passes",
    "Report any safety concerns or incidents to campus security immediately",
    "During exam periods, additional shuttle services may be available",
    "International students should inquire about transportation orientation sessions"
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#082952] mb-4">
            Transportation Tips & Information
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Essential tips and information to help you make the most of SINU's 
            transportation services safely and efficiently.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tips.map((tip, index) => (
            <Card key={index} className="border-[#8ecae6]/30 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-lg mx-auto mb-4">
                  <tip.icon className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-xl text-[#082952]">
                  {tip.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#082952]/80">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Information */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-[#8ecae6]/30">
          <h3 className="text-2xl font-bold text-[#082952] mb-6 text-center">
            Important Information for Students
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-[#082952] mb-4">Key Reminders:</h4>
              <ul className="space-y-3">
                {importantInfo.map((info, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#219ebc] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-[#082952]/80">{info}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#082952] mb-4">Emergency Contacts:</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-[#edf4ff] rounded-lg">
                  <span className="text-[#082952] font-medium">Campus Security</span>
                  <span className="text-[#219ebc] font-semibold">24/7 Available</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#edf4ff] rounded-lg">
                  <span className="text-[#082952] font-medium">Transport Office</span>
                  <span className="text-[#219ebc] font-semibold">+677 123-4567</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#edf4ff] rounded-lg">
                  <span className="text-[#082952] font-medium">Student Services</span>
                  <span className="text-[#219ebc] font-semibold">+677 765-4321</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportTips;