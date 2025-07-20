import React from 'react';
import { Phone, AlertTriangle, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

export const EmergencyServices = () => {
  const emergencyContacts = [
    {
      title: "Campus Emergency",
      number: "(677) 999",
      description: "24/7 campus security and emergency response"
    },
    {
      title: "Medical Emergency",
      number: "(677) 123-4567",
      description: "Immediate medical assistance and ambulance services"
    },
    {
      title: "Mental Health Crisis",
      number: "(677) 123-4568",
      description: "Crisis counseling and psychological emergency support"
    },
    {
      title: "Student Safety",
      number: "(677) 123-4569",
      description: "Student safety concerns and campus security"
    }
  ];

  const procedures = [
    {
      icon: Phone,
      title: "Call Emergency Services",
      description: "Dial the appropriate emergency number immediately"
    },
    {
      icon: MapPin,
      title: "Provide Location",
      description: "Give clear location details and landmarks"
    },
    {
      icon: Heart,
      title: "Provide First Aid",
      description: "If trained, provide basic first aid while waiting for help"
    },
    {
      icon: Clock,
      title: "Stay Available",
      description: "Remain available to guide emergency responders"
    }
  ];

  return (
    <section style={{ backgroundColor: '#edf4ff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle style={{ color: '#d7a12c' }} className="w-12 h-12 mr-4" />
            <h2 style={{ color: '#082952' }} className="text-4xl font-bold">
              Emergency Services
            </h2>
          </div>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            Your safety is our priority. Know who to contact and what to do in case of emergencies. 
            Keep these important numbers saved and easily accessible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 style={{ color: '#082952' }} className="text-2xl font-semibold mb-8 text-center">
              Emergency Contact Numbers
            </h3>
            <div className="space-y-6">
              {emergencyContacts.map((contact, index) => (
                <div 
                  key={index} 
                  style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6' }}
                  className="border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <ShieldCheck style={{ color: '#d7a12c' }} className="w-6 h-6 mr-3" />
                    <h4 style={{ color: '#082952' }} className="text-xl font-semibold">
                      {contact.title}
                    </h4>
                  </div>
                  <div style={{ backgroundColor: '#ffb703' }} className="p-4 rounded-lg mb-3">
                    <p style={{ color: '#082952' }} className="text-2xl font-bold text-center">
                      {contact.number}
                    </p>
                  </div>
                  <p style={{ color: '#219ebc' }} className="text-center">
                    {contact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ color: '#082952' }} className="text-2xl font-semibold mb-8 text-center">
              Emergency Procedures
            </h3>
            <div className="space-y-6">
              {procedures.map((procedure, index) => (
                <div 
                  key={index} 
                  style={{ backgroundColor: '#ffffff' }}
                  className="rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div 
                      style={{ backgroundColor: '#8ecae6' }} 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                    >
                      <procedure.icon style={{ color: '#082952' }} className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 style={{ color: '#082952' }} className="text-lg font-semibold mb-2">
                        {procedure.title}
                      </h4>
                      <p style={{ color: '#219ebc' }} className="leading-relaxed">
                        {procedure.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff' }} className="rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin style={{ color: '#ffb703' }} className="w-12 h-12 mx-auto mb-4" />
              <h4 style={{ color: '#082952' }} className="text-xl font-semibold mb-4">
                Campus Locations
              </h4>
              <div className="space-y-2 text-sm">
                <p style={{ color: '#219ebc' }}>Health Center: Building A, Ground Floor</p>
                <p style={{ color: '#219ebc' }}>Security Office: Main Administration Building</p>
                <p style={{ color: '#219ebc' }}>Emergency Assembly Point: Main Quadrangle</p>
              </div>
            </div>

            <div>
              <Clock style={{ color: '#ffb703' }} className="w-12 h-12 mx-auto mb-4" />
              <h4 style={{ color: '#082952' }} className="text-xl font-semibold mb-4">
                Response Times
              </h4>
              <div className="space-y-2 text-sm">
                <p style={{ color: '#219ebc' }}>Campus Security: 2-5 minutes</p>
                <p style={{ color: '#219ebc' }}>Medical Response: 5-10 minutes</p>
                <p style={{ color: '#219ebc' }}>External Emergency: 10-15 minutes</p>
              </div>
            </div>

            <div>
              <Heart style={{ color: '#ffb703' }} className="w-12 h-12 mx-auto mb-4" />
              <h4 style={{ color: '#082952' }} className="text-xl font-semibold mb-4">
                First Aid Stations
              </h4>
              <div className="space-y-2 text-sm">
                <p style={{ color: '#219ebc' }}>Library: Reference Desk</p>
                <p style={{ color: '#219ebc' }}>Cafeteria: Information Booth</p>
                <p style={{ color: '#219ebc' }}>Sports Center: Main Reception</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#d7a12c' }} className="mt-8 p-6 rounded-lg text-center">
          <h3 style={{ color: '#082952' }} className="text-xl font-semibold mb-4">
            Download the SINU Safety App
          </h3>
          <p style={{ color: '#082952' }} className="mb-4">
            Quick access to emergency contacts, campus maps, and safety features right from your phone.
          </p>
          <button 
            style={{ backgroundColor: '#082952', color: '#ffffff' }}
            className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
          >
            Download Safety App
          </button>
        </div>
      </div>
    </section>
  );
};