import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, HelpCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Student Life Office, Main Campus Building',
      detail: 'Room 201, Second Floor'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+677 30123',
      detail: 'Monday - Friday, 8:00 AM - 5:00 PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'studentlife@sinu.edu.sb',
      detail: 'We respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Monday - Friday: 8:00 AM - 5:00 PM',
      detail: 'Saturday: 9:00 AM - 1:00 PM'
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Club Support',
      description: 'Get help with club management and activities'
    },
    {
      icon: HelpCircle,
      title: 'General Inquiries',
      description: 'Questions about joining or starting clubs'
    }
  ];

  return (
    <section className="py-16 bg-[#082952]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#ffffff] mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-[#8ecae6] max-w-2xl mx-auto">
            Have questions about clubs and organizations? Our Student Life team is here to help you get connected.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#ffffff] mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ffb703] rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-[#082952]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#ffffff] mb-1">
                      {info.title}
                    </h4>
                    <p className="text-[#8ecae6] font-medium">
                      {info.content}
                    </p>
                    <p className="text-[#8ecae6] text-sm">
                      {info.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Options */}
          <div>
            <h3 className="text-2xl font-bold text-[#ffffff] mb-8">
              How Can We Help?
            </h3>
            
            <div className="space-y-6 mb-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-[#219ebc] rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#ffffff] rounded-full flex items-center justify-center flex-shrink-0">
                      <option.icon className="w-5 h-5 text-[#082952]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#ffffff] mb-2">
                        {option.title}
                      </h4>
                      <p className="text-[#ffffff] text-sm">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#edf4ff] rounded-lg p-6">
              <h4 className="text-xl font-bold text-[#082952] mb-4">
                Quick Links
              </h4>
              <div className="space-y-3">
                <a href="#" className="block text-[#219ebc] hover:text-[#082952] transition-colors">
                  • Club Directory A-Z
                </a>
                <a href="#" className="block text-[#219ebc] hover:text-[#082952] transition-colors">
                  • New Club Application Form
                </a>
                <a href="#" className="block text-[#219ebc] hover:text-[#082952] transition-colors">
                  • Club Executive Handbook
                </a>
                <a href="#" className="block text-[#219ebc] hover:text-[#082952] transition-colors">
                  • Event Booking Forms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;