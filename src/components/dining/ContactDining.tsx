import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Users } from 'lucide-react';

const ContactDining = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+677 30120 (Main Office)", "+677 30121 (Catering Services)"],
      description: "Call us for meal plan inquiries and reservations"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["dining@sinu.edu.sb", "catering@sinu.edu.sb"],
      description: "Send us your questions or special requests"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Dining Services Office", "Student Center, 1st Floor"],
      description: "Stop by our office for in-person assistance"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      description: "Visit during these hours for administrative support"
    }
  ];

  const services = [
    {
      icon: Users,
      title: "Nutrition Consultation",
      description: "Meet with our nutritionist for personalized meal planning"
    },
    {
      icon: MessageCircle,
      title: "Feedback & Suggestions",
      description: "Share your ideas to help us improve our services"
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
              Contact Dining Services
            </h2>
            <p className="text-xl text-[#219ebc] max-w-3xl mx-auto leading-relaxed">
              Have questions about meal plans, special dietary needs, or catering services? 
              Our friendly team is here to help make your dining experience exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-[#ffb703] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <contact.icon className="w-8 h-8 text-[#082952]" />
                </div>
                <h3 className="text-xl font-bold text-[#082952] mb-3 text-center">
                  {contact.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {contact.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-[#219ebc] text-center font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-[#082952] text-center text-sm leading-relaxed">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-[#8ecae6] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#082952]">{service.title}</h3>
                </div>
                <p className="text-[#219ebc] leading-relaxed mb-6">{service.description}</p>
                <button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#082952] mb-4">
                Quick Contact Form
              </h3>
              <p className="text-[#219ebc] leading-relaxed">
                Send us a message and we'll get back to you within 24 hours.
              </p>
            </div>

            <form className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[#082952] font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-[#8ecae6]/30 rounded-lg focus:border-[#ffb703] focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-[#082952] font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-[#8ecae6]/30 rounded-lg focus:border-[#ffb703] focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-[#082952] font-semibold mb-2">Subject</label>
                <select className="w-full px-4 py-3 border-2 border-[#8ecae6]/30 rounded-lg focus:border-[#ffb703] focus:outline-none transition-colors">
                  <option>Meal Plan Inquiry</option>
                  <option>Special Dietary Needs</option>
                  <option>Catering Services</option>
                  <option>Feedback/Suggestions</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-[#082952] font-semibold mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-[#8ecae6]/30 rounded-lg focus:border-[#ffb703] focus:outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDining;