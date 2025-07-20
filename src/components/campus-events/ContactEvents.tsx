import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';

export const ContactEvents = () => {
  const contacts = [
    {
      title: "Events Coordination Office",
      phone: "(677) 123-4571",
      email: "events@sinu.edu.sb",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      location: "Student Services Building, Room 301"
    },
    {
      title: "Student Activities Center",
      phone: "(677) 123-4572",
      email: "studentactivities@sinu.edu.sb",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      location: "Campus Center, Ground Floor"
    },
    {
      title: "Event Technical Support",
      phone: "(677) 123-4573",
      email: "techsupport@sinu.edu.sb",
      hours: "Mon-Fri: 8:00 AM - 4:00 PM",
      location: "IT Services Building"
    }
  ];

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 style={{ color: '#082952' }} className="text-4xl font-bold mb-6">
            Contact Events Team
          </h2>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            Need help planning your event or have questions about campus activities? 
            Our experienced events team is here to support you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contacts.map((contact, index) => (
            <div 
              key={index} 
              style={{ backgroundColor: '#edf4ff', borderColor: '#8ecae6' }}
              className="border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 style={{ color: '#082952' }} className="text-lg font-semibold mb-6">
                {contact.title}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone style={{ color: '#ffb703' }} className="w-5 h-5 mr-3" />
                  <span style={{ color: '#219ebc' }} className="text-sm">
                    {contact.phone}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <Mail style={{ color: '#ffb703' }} className="w-5 h-5 mr-3" />
                  <span style={{ color: '#219ebc' }} className="text-sm">
                    {contact.email}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <Clock style={{ color: '#ffb703' }} className="w-5 h-5 mr-3" />
                  <span style={{ color: '#219ebc' }} className="text-sm">
                    {contact.hours}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <MapPin style={{ color: '#ffb703' }} className="w-5 h-5 mr-3" />
                  <span style={{ color: '#219ebc' }} className="text-sm">
                    {contact.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div style={{ backgroundColor: '#edf4ff' }} className="p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <MessageSquare style={{ color: '#d7a12c' }} className="w-8 h-8 mr-3" />
              <h3 style={{ color: '#082952' }} className="text-2xl font-semibold">
                Get Event Support
              </h3>
            </div>
            
            <form className="space-y-4">
              <div>
                <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input 
                  type="text" 
                  style={{ borderColor: '#8ecae6' }}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input 
                  type="email" 
                  style={{ borderColor: '#8ecae6' }}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                  Inquiry Type
                </label>
                <select 
                  style={{ borderColor: '#8ecae6' }}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
                >
                  <option>General Question</option>
                  <option>Event Proposal</option>
                  <option>Venue Booking</option>
                  <option>Technical Support</option>
                  <option>Funding Request</option>
                  <option>Marketing Support</option>
                </select>
              </div>
              
              <div>
                <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea 
                  rows={4}
                  style={{ borderColor: '#8ecae6' }}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
                  placeholder="How can we help with your event?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                className="w-full py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div style={{ backgroundColor: '#edf4ff' }} className="p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Calendar style={{ color: '#d7a12c' }} className="w-8 h-8 mr-3" />
              <h3 style={{ color: '#082952' }} className="text-2xl font-semibold">
                Quick Services
              </h3>
            </div>
            
            <div className="space-y-4">
              <button 
                style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6', color: '#082952' }}
                className="w-full border-2 py-4 rounded-lg font-semibold hover:shadow-md transition-all duration-300"
              >
                Check Venue Availability
              </button>
              
              <button 
                style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6', color: '#082952' }}
                className="w-full border-2 py-4 rounded-lg font-semibold hover:shadow-md transition-all duration-300"
              >
                Request Equipment & Setup
              </button>
              
              <button 
                style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6', color: '#082952' }}
                className="w-full border-2 py-4 rounded-lg font-semibold hover:shadow-md transition-all duration-300"
              >
                Event Marketing Package
              </button>
              
              <button 
                style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6', color: '#082952' }}
                className="w-full border-2 py-4 rounded-lg font-semibold hover:shadow-md transition-all duration-300"
              >
                Download Event Guidelines
              </button>
            </div>

            <div style={{ backgroundColor: '#ffffff' }} className="mt-8 p-6 rounded-lg text-center">
              <h4 style={{ color: '#082952' }} className="text-lg font-semibold mb-4">
                Emergency Event Support
              </h4>
              <p style={{ color: '#219ebc' }} className="mb-4 text-sm">
                Need immediate assistance during an event?
              </p>
              <div className="space-y-2">
                <p style={{ color: '#d7a12c' }} className="text-lg font-bold">
                  Emergency: (677) 999
                </p>
                <p style={{ color: '#219ebc' }} className="text-sm">
                  24/7 Campus Security & Event Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};