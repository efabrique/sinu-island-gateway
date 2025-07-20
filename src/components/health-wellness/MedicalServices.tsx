import React from 'react';
import { Stethoscope, Clock, UserCheck, Thermometer, Pill, Heart } from 'lucide-react';

export const MedicalServices = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Medical Care",
      description: "Comprehensive primary healthcare services for routine checkups and medical consultations."
    },
    {
      icon: Thermometer,
      title: "Health Screenings",
      description: "Regular health screenings and preventive care to maintain optimal wellness."
    },
    {
      icon: Pill,
      title: "Pharmacy Services",
      description: "On-campus pharmacy providing prescription medications and health supplies."
    },
    {
      icon: Heart,
      title: "Emergency Care",
      description: "24/7 emergency medical response and first aid services on campus."
    },
    {
      icon: UserCheck,
      title: "Health Education",
      description: "Workshops and seminars on health awareness and wellness practices."
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Flexible clinic hours to accommodate student schedules and urgent needs."
    }
  ];

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 style={{ color: '#082952' }} className="text-4xl font-bold mb-6">
            Medical Services
          </h2>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            Our on-campus medical clinic provides comprehensive healthcare services with qualified medical professionals 
            dedicated to maintaining your health and well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              style={{ borderColor: '#8ecae6' }}
              className="border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div 
                style={{ backgroundColor: '#ffb703' }} 
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

        <div style={{ backgroundColor: '#edf4ff' }} className="mt-12 p-8 rounded-lg">
          <div className="text-center">
            <h3 style={{ color: '#082952' }} className="text-2xl font-semibold mb-4">
              Book Your Appointment Today
            </h3>
            <p style={{ color: '#219ebc' }} className="mb-6">
              Schedule a consultation with our healthcare professionals for personalized medical care.
            </p>
            <button 
              style={{ backgroundColor: '#d7a12c', color: '#082952' }}
              className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};