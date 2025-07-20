import React from 'react';
import { Accessibility, BookOpen, Users, Settings, Eye, Ear } from 'lucide-react';

export const AccessibilitySupport = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Academic Accommodations",
      description: "Extended time for exams, alternative testing arrangements, and note-taking assistance."
    },
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "Screen readers, large print materials, and visual aid technologies for students with visual impairments."
    },
    {
      icon: Ear,
      title: "Hearing Support",
      description: "Sign language interpreters, assistive listening devices, and captioning services."
    },
    {
      icon: Settings,
      title: "Assistive Technology",
      description: "Specialized software and hardware to support students with various learning needs."
    },
    {
      icon: Users,
      title: "Personal Support",
      description: "Individual support planning and guidance for navigating university life with disabilities."
    },
    {
      icon: Accessibility,
      title: "Campus Accessibility",
      description: "Ensuring physical campus accessibility and mobility support for all students."
    }
  ];

  return (
    <section style={{ backgroundColor: '#edf4ff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 style={{ color: '#082952' }} className="text-4xl font-bold mb-6">
            Accessibility & Inclusion Support
          </h2>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            We are committed to creating an inclusive environment where all students can succeed. 
            Our accessibility services ensure equal opportunities and support for students with diverse needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6' }}
              className="border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div 
                style={{ backgroundColor: '#d7a12c' }} 
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <service.icon style={{ color: '#082952' }} className="w-8 h-8" />
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

        <div style={{ backgroundColor: '#ffffff' }} className="rounded-lg p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 style={{ color: '#082952' }} className="text-2xl font-semibold mb-6">
                Getting Started with Accessibility Services
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div 
                    style={{ backgroundColor: '#ffb703' }} 
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                  >
                    <span style={{ color: '#082952' }} className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 style={{ color: '#082952' }} className="font-semibold mb-2">Initial Consultation</h4>
                    <p style={{ color: '#219ebc' }} className="text-sm">
                      Schedule a confidential meeting to discuss your needs and available support options.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    style={{ backgroundColor: '#ffb703' }} 
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                  >
                    <span style={{ color: '#082952' }} className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 style={{ color: '#082952' }} className="font-semibold mb-2">Documentation Review</h4>
                    <p style={{ color: '#219ebc' }} className="text-sm">
                      Provide relevant documentation to help us understand your specific requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    style={{ backgroundColor: '#ffb703' }} 
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                  >
                    <span style={{ color: '#082952' }} className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 style={{ color: '#082952' }} className="font-semibold mb-2">Support Plan Development</h4>
                    <p style={{ color: '#219ebc' }} className="text-sm">
                      Work together to create a personalized accommodation plan tailored to your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#edf4ff' }} className="p-6 rounded-lg">
              <h4 style={{ color: '#082952' }} className="text-xl font-semibold mb-4 text-center">
                Contact Accessibility Services
              </h4>
              <div className="space-y-4">
                <div style={{ backgroundColor: '#ffffff' }} className="p-4 rounded-lg">
                  <h5 style={{ color: '#082952' }} className="font-semibold mb-2">Office Hours</h5>
                  <p style={{ color: '#219ebc' }} className="text-sm">Monday - Friday: 8:00 AM - 4:30 PM</p>
                </div>
                
                <div style={{ backgroundColor: '#ffffff' }} className="p-4 rounded-lg">
                  <h5 style={{ color: '#082952' }} className="font-semibold mb-2">Phone</h5>
                  <p style={{ color: '#219ebc' }} className="text-sm">(677) 123-4569</p>
                </div>
                
                <div style={{ backgroundColor: '#ffffff' }} className="p-4 rounded-lg">
                  <h5 style={{ color: '#082952' }} className="font-semibold mb-2">Email</h5>
                  <p style={{ color: '#219ebc' }} className="text-sm">accessibility@sinu.edu.sb</p>
                </div>

                <button 
                  style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                  className="w-full py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
                >
                  Request Accessibility Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};