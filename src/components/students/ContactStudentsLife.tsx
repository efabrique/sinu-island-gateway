import React from "react";
import { Phone, Mail, Search, Facebook, Twitter, Youtube } from "lucide-react";

const ContactStudentsLife: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#222222] mb-6">
          Connect to Students Life
                    <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>

        </h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <Facebook className="w-8 h-8" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800 transition"
          >
            <Youtube className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-sky-700 transition"
          >
            <Twitter className="w-8 h-8" />
          </a>
        </div>

        {/* Subtitle */}
        <h3 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-10">
          For more information
                    <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>

        </h3>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Call Card */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between">
            <h4 className="text-xl font-bold text-[#222222] mb-3">Call Us</h4>
            <p className="text-gray-600 mb-6 text-left">
              Reach out directly by phone for immediate support and inquiries.
            </p>
            <a
              href="tel:+61123456789"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <Phone className="w-5 h-5" /> +677-999999
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between">
            <h4 className="text-xl font-bold text-[#222222] mb-3">Email Us</h4>
            <p className="text-gray-600 mb-6 text-left">
              Send us your questions, and we’ll get back to you shortly.
            </p>
            <a
              href="mailto:info@studentslife.edu"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <Mail className="w-5 h-5" /> info@studentslife.edu
            </a>
          </div>

          {/* Website Search Card */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between">
            <h4 className="text-xl font-bold text-[#222222] mb-3">
              Search 
            </h4>
            <p className="text-gray-600 mb-6 text-left">
              Find information and resources quickly on our website.
            </p>
            <a
              href="/search"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <Search className="w-5 h-5" /> Search Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStudentsLife;
