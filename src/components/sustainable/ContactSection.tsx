import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Contact Our Research Team
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Connect with our sustainable development researchers to explore collaboration opportunities, research partnerships, or learn more about our initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                     style={{ backgroundColor: '#8ecae6' }}>
                  <Mail className="w-5 h-5" style={{ color: '#082952' }} />
                </div>
                <div>
                  <div className="font-medium" style={{ color: '#082952' }}>Email</div>
                  <div style={{ color: '#219ebc' }}>sustainable.research@sinu.edu.sb</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                     style={{ backgroundColor: '#ffb703' }}>
                  <Phone className="w-5 h-5" style={{ color: '#082952' }} />
                </div>
                <div>
                  <div className="font-medium" style={{ color: '#082952' }}>Phone</div>
                  <div style={{ color: '#219ebc' }}>+677 30123 (ext. 4567)</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                     style={{ backgroundColor: '#d7a12c' }}>
                  <MapPin className="w-5 h-5" style={{ color: '#082952' }} />
                </div>
                <div>
                  <div className="font-medium" style={{ color: '#082952' }}>Location</div>
                  <div style={{ color: '#219ebc' }}>
                    Research Building, Level 3<br />
                    Solomon Islands National University<br />
                    Honiara, Solomon Islands
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                     style={{ backgroundColor: '#219ebc' }}>
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium" style={{ color: '#082952' }}>Office Hours</div>
                  <div style={{ color: '#219ebc' }}>
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg" 
               style={{ 
                 backgroundColor: '#edf4ff',
                 border: '1px solid #8ecae6'
               }}>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
              Research Collaboration
            </h3>
            <p className="mb-4" style={{ color: '#082952' }}>
              We welcome collaboration opportunities with researchers, institutions, and organizations committed to sustainable development.
            </p>
            <div className="space-y-3">
              <div>
                <div className="font-medium" style={{ color: '#219ebc' }}>Research Areas:</div>
                <div className="text-sm" style={{ color: '#082952' }}>
                  Climate adaptation, renewable energy, sustainable agriculture, water management
                </div>
              </div>
              <div>
                <div className="font-medium" style={{ color: '#219ebc' }}>Funding Opportunities:</div>
                <div className="text-sm" style={{ color: '#082952' }}>
                  Joint research proposals, student scholarships, equipment sharing
                </div>
              </div>
              <div>
                <div className="font-medium" style={{ color: '#219ebc' }}>Community Engagement:</div>
                <div className="text-sm" style={{ color: '#082952' }}>
                  Workshops, training programs, knowledge transfer initiatives
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;