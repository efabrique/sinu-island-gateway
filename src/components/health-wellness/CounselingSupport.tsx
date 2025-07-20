import React from 'react';
import { MessageCircle, Users, Shield, Clock, Heart, Phone } from 'lucide-react';

export const CounselingSupport = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Individual Counseling",
      description: "One-on-one confidential sessions with qualified counselors for personal support."
    },
    {
      icon: Users,
      title: "Group Therapy",
      description: "Supportive group sessions addressing common student challenges and concerns."
    },
    {
      icon: Shield,
      title: "Crisis Support",
      description: "Immediate support for students experiencing mental health crises or emergencies."
    },
    {
      icon: Clock,
      title: "24/7 Helpline",
      description: "Round-the-clock telephone support for urgent mental health assistance."
    }
  ];

  const supportAreas = [
    "Academic stress and performance anxiety",
    "Relationship and family issues",
    "Depression and mood disorders",
    "Anxiety and panic disorders",
    "Grief and loss counseling",
    "Cultural adjustment support",
    "Substance abuse counseling",
    "Career and life transitions"
  ];

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 style={{ color: '#082952' }} className="text-4xl font-bold mb-6">
            Counseling & Psychological Support
          </h2>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            Professional, confidential counseling services to support your mental health and emotional well-being. 
            Our qualified counselors are here to help you navigate life's challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div 
                style={{ backgroundColor: '#8ecae6' }} 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300"
              >
                <service.icon style={{ color: '#082952' }} className="w-10 h-10" />
              </div>
              <h3 style={{ color: '#082952' }} className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p style={{ color: '#219ebc' }} className="leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 style={{ color: '#082952' }} className="text-2xl font-semibold mb-6">
              Areas of Support
            </h3>
            <p style={{ color: '#219ebc' }} className="mb-6 leading-relaxed">
              Our counseling services address a wide range of mental health and personal concerns 
              that students may face during their university journey.
            </p>
            
            <div className="space-y-3">
              {supportAreas.map((area, index) => (
                <div key={index} className="flex items-center">
                  <Heart style={{ color: '#ffb703' }} className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span style={{ color: '#082952' }} className="text-sm">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: '#edf4ff' }} className="p-8 rounded-lg">
            <div className="text-center mb-6">
              <Phone style={{ color: '#d7a12c' }} className="w-12 h-12 mx-auto mb-4" />
              <h3 style={{ color: '#082952' }} className="text-2xl font-semibold mb-4">
                Get Support Now
              </h3>
              <p style={{ color: '#219ebc' }} className="mb-6">
                If you're experiencing a mental health emergency or need immediate support, 
                don't hesitate to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <div style={{ backgroundColor: '#ffffff' }} className="p-4 rounded-lg">
                <h4 style={{ color: '#082952' }} className="font-semibold mb-2">Emergency Hotline</h4>
                <p style={{ color: '#219ebc' }} className="text-lg font-medium">24/7: (677) 123-4567</p>
              </div>
              
              <div style={{ backgroundColor: '#ffffff' }} className="p-4 rounded-lg">
                <h4 style={{ color: '#082952' }} className="font-semibold mb-2">Counseling Center</h4>
                <p style={{ color: '#219ebc' }}>Mon-Fri: 8:00 AM - 5:00 PM</p>
                <p style={{ color: '#219ebc' }}>Phone: (677) 123-4568</p>
              </div>

              <button 
                style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                className="w-full py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
              >
                Schedule Counseling Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};