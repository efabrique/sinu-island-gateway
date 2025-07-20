import React from 'react';
import { Activity, Brain, Leaf, Users2, Calendar, Trophy } from 'lucide-react';

export const WellnessPrograms = () => {
  const programs = [
    {
      icon: Activity,
      title: "Fitness & Exercise Programs",
      description: "Group fitness classes, personal training, and wellness challenges to keep you active.",
      features: ["Group fitness classes", "Personal training sessions", "Wellness challenges", "Sports programs"]
    },
    {
      icon: Brain,
      title: "Mental Health Workshops",
      description: "Educational sessions on stress management, mindfulness, and emotional well-being.",
      features: ["Stress management", "Mindfulness training", "Anxiety support", "Study skills"]
    },
    {
      icon: Leaf,
      title: "Nutrition & Healthy Living",
      description: "Nutrition counseling and healthy lifestyle programs for optimal wellness.",
      features: ["Nutrition counseling", "Meal planning", "Healthy cooking", "Lifestyle coaching"]
    }
  ];

  const events = [
    { title: "Wellness Week", date: "March 15-22", type: "Campus-wide Event" },
    { title: "Mental Health Awareness Day", date: "April 10", type: "Educational Workshop" },
    { title: "Fitness Challenge", date: "May 1-31", type: "Activity Program" },
    { title: "Stress Management Workshop", date: "June 5", type: "Skills Training" }
  ];

  return (
    <section style={{ backgroundColor: '#edf4ff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 style={{ color: '#082952' }} className="text-4xl font-bold mb-6">
            Wellness Programs
          </h2>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            Comprehensive wellness programs designed to support your physical fitness, mental health, 
            and overall well-being throughout your university experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div 
              key={index} 
              style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6' }}
              className="border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div 
                  style={{ backgroundColor: '#219ebc' }} 
                  className="w-14 h-14 rounded-lg flex items-center justify-center mr-4"
                >
                  <program.icon style={{ color: '#ffffff' }} className="w-7 h-7" />
                </div>
                <h3 style={{ color: '#082952' }} className="text-xl font-semibold">
                  {program.title}
                </h3>
              </div>
              
              <p style={{ color: '#219ebc' }} className="mb-6 leading-relaxed">
                {program.description}
              </p>
              
              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div 
                      style={{ backgroundColor: '#ffb703' }} 
                      className="w-2 h-2 rounded-full mr-3"
                    />
                    <span style={{ color: '#082952' }} className="text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#ffffff' }} className="rounded-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <Calendar style={{ color: '#ffb703' }} className="w-8 h-8 mr-3" />
            <h3 style={{ color: '#082952' }} className="text-2xl font-semibold">
              Upcoming Wellness Events
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <div 
                key={index} 
                style={{ borderColor: '#8ecae6' }}
                className="border rounded-lg p-4 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <Trophy style={{ color: '#d7a12c' }} className="w-5 h-5 mr-2" />
                  <span style={{ color: '#219ebc' }} className="text-sm font-medium">
                    {event.type}
                  </span>
                </div>
                <h4 style={{ color: '#082952' }} className="font-semibold mb-2">
                  {event.title}
                </h4>
                <p style={{ color: '#219ebc' }} className="text-sm">
                  {event.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};