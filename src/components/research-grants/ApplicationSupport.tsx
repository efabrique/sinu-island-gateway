import React from 'react';
import { FileText, Users, Calendar, Mail, Phone, MessageCircle, CheckCircle, Clock } from 'lucide-react';

const ApplicationSupport = () => {
  const supportServices = [
    {
      title: "Grant Writing Support",
      description: "Expert assistance with proposal development, writing, and review",
      icon: FileText,
      color: '#ffb703'
    },
    {
      title: "Research Collaboration",
      description: "Help finding research partners and building collaborative teams",
      icon: Users,
      color: '#8ecae6'
    },
    {
      title: "Application Management",
      description: "Support with submission processes and deadline management",
      icon: Calendar,
      color: '#219ebc'
    },
    {
      title: "Compliance & Ethics",
      description: "Guidance on ethical requirements and regulatory compliance",
      icon: CheckCircle,
      color: '#d7a12c'
    }
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Identify Opportunities",
      description: "Browse funding opportunities and assess eligibility requirements"
    },
    {
      step: "2",
      title: "Initial Consultation",
      description: "Meet with our research support team to discuss your proposal"
    },
    {
      step: "3",
      title: "Develop Proposal",
      description: "Work with our experts to craft a compelling research proposal"
    },
    {
      step: "4",
      title: "Review & Submit",
      description: "Final review and submission through appropriate channels"
    },
    {
      step: "5",
      title: "Post-Award Support",
      description: "Ongoing support for successful applications and project management"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Application Support & Services
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Comprehensive support to help you develop competitive grant applications
          </p>
        </div>

        {/* Support Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportServices.map((service, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg shadow-lg"
              style={{ 
                backgroundColor: '#ffffff',
                border: '1px solid #8ecae6'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: service.color }}
              >
                <service.icon className="w-8 h-8" style={{ color: '#082952' }} />
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#082952' }}>
                {service.title}
              </h3>
              <p className="text-sm" style={{ color: '#082952' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#082952' }}>
            Application Process
          </h3>
          <div className="relative">
            {applicationProcess.map((process, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                  style={{ backgroundColor: '#219ebc' }}
                >
                  <span className="text-white font-bold">{process.step}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#082952' }}>
                    {process.title}
                  </h4>
                  <p style={{ color: '#082952' }}>
                    {process.description}
                  </p>
                </div>
                {index < applicationProcess.length - 1 && (
                  <div 
                    className="absolute left-6 w-0.5 h-8 mt-12"
                    style={{ backgroundColor: '#8ecae6', top: `${index * 112 + 48}px` }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div 
          className="rounded-lg p-8 text-center"
          style={{ backgroundColor: '#ffffff', border: '1px solid #8ecae6' }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
            Get Support with Your Application
          </h3>
          <p className="text-lg mb-8" style={{ color: '#082952' }}>
            Our research support team is here to help you succeed. Contact us to get started.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" style={{ color: '#219ebc' }} />
              <span style={{ color: '#082952' }}>research.grants@sinu.edu.sb</span>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" style={{ color: '#219ebc' }} />
              <span style={{ color: '#082952' }}>+677 30123</span>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2" style={{ color: '#219ebc' }} />
              <span style={{ color: '#082952' }}>Mon-Fri 8:00-17:00</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#ffb703', color: '#082952' }}
            >
              <MessageCircle className="w-5 h-5 inline mr-2" />
              Schedule Consultation
            </button>
            <button 
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
            >
              <FileText className="w-5 h-5 inline mr-2" />
              Download Grant Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSupport;