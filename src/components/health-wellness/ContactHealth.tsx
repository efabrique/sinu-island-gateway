import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';

export const ContactHealth = () => {
  const departments = [
    {
      title: "Health Center",
      phone: "(677) 123-4567",
      email: "health@sinu.edu.sb",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      location: "Building A, Ground Floor"
    },
    {
      title: "Counseling Services",
      phone: "(677) 123-4568",
      email: "counseling@sinu.edu.sb",
      hours: "Mon-Fri: 9:00 AM - 4:00 PM",
      location: "Student Services Building, Room 201"
    },
    {
      title: "Accessibility Services",
      phone: "(677) 123-4569",
      email: "accessibility@sinu.edu.sb",
      hours: "Mon-Fri: 8:30 AM - 4:30 PM",
      location: "Administration Building, Room 105"
    },
    {
      title: "Fitness Center",
      phone: "(677) 123-4570",
      email: "fitness@sinu.edu.sb",
      hours: "Mon-Sun: 6:00 AM - 10:00 PM",
      location: "Recreation Complex"
    }
  ];

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 style={{ color: '#082952' }} className="text-4xl font-bold mb-6">
            Contact Health & Wellness Services
          </h2>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            Get in touch with our health and wellness teams. We're here to support you with 
            professional care, guidance, and resources for your well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {departments.map((dept, index) => (
            <div 
              key={index} 
              style={{ backgroundColor: '#edf4ff', borderColor: '#8ecae6' }}
              className="border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 style={{ color: '#082952' }} className="text-xl font-semibold mb-6">
                {dept.title}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone style={{ color: '#ffb703' }} className="w-5 h-5 mr-3" />
                  <span style={{ color: '#219ebc' }} className="text-sm">
                    {dept.phone}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <Mail style={{ color: '#ffb703' }} className="w-5 h-5 mr-3" />
                  <span style={{ color: '#219ebc' }} className="text-sm">
                    {dept.email}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <Clock style={{ color: '#ffb703' }} className="w-5 h-5 mr-3" />
                  <span style={{ color: '#219ebc' }} className="text-sm">
                    {dept.hours}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <MapPin style={{ color: '#ffb703' }} className="w-5 h-5 mr-3" />
                  <span style={{ color: '#219ebc' }} className="text-sm">
                    {dept.location}
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
                Send Us a Message
              </h3>
            </div>
            
            <form className="space-y-4">
              <div>
                <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  style={{ borderColor: '#8ecae6' }}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  style={{ borderColor: '#8ecae6' }}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                  Department
                </label>
                <select 
                  style={{ borderColor: '#8ecae6' }}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
                >
                  <option>Select a department</option>
                  <option>Health Center</option>
                  <option>Counseling Services</option>
                  <option>Accessibility Services</option>
                  <option>Fitness Center</option>
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
                  placeholder="How can we help you?"
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
                Quick Actions
              </h3>
            </div>
            
            <div className="space-y-4">
              <button 
                style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6', color: '#082952' }}
                className="w-full border-2 py-4 rounded-lg font-semibold hover:shadow-md transition-all duration-300"
              >
                Schedule Medical Appointment
              </button>
              
              <button 
                style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6', color: '#082952' }}
                className="w-full border-2 py-4 rounded-lg font-semibold hover:shadow-md transition-all duration-300"
              >
                Book Counseling Session
              </button>
              
              <button 
                style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6', color: '#082952' }}
                className="w-full border-2 py-4 rounded-lg font-semibold hover:shadow-md transition-all duration-300"
              >
                Request Accessibility Support
              </button>
              
              <button 
                style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6', color: '#082952' }}
                className="w-full border-2 py-4 rounded-lg font-semibold hover:shadow-md transition-all duration-300"
              >
                Register for Fitness Classes
              </button>
            </div>

            <div style={{ backgroundColor: '#ffffff' }} className="mt-8 p-6 rounded-lg text-center">
              <h4 style={{ color: '#082952' }} className="text-lg font-semibold mb-4">
                Need Immediate Help?
              </h4>
              <p style={{ color: '#219ebc' }} className="mb-4 text-sm">
                For urgent health concerns or emergencies
              </p>
              <div className="space-y-2">
                <p style={{ color: '#d7a12c' }} className="text-lg font-bold">
                  Emergency: (677) 999
                </p>
                <p style={{ color: '#219ebc' }} className="text-sm">
                  24/7 Campus Security & Medical Response
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};