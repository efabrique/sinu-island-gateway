import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactSupport() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#082952' }}>
          Need Help with Your Application?
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Contact Our Scholarships Team
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full mr-4 mt-1 flex items-center justify-center" style={{ backgroundColor: '#ffb703' }}>
                  <Mail className="h-4 w-4" style={{ color: '#082952' }} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#082952' }}>Email</p>
                  <p style={{ color: '#082952' }}>scholarships@sinu.edu.sb</p>
                  <p className="text-sm mt-1" style={{ color: '#082952' }}>Response within 2 business days</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full mr-4 mt-1 flex items-center justify-center" style={{ backgroundColor: '#219ebc' }}>
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#082952' }}>Phone</p>
                  <p style={{ color: '#082952' }}>+677 30 760 (ext. 1234)</p>
                  <p className="text-sm mt-1" style={{ color: '#082952' }}>Monday-Friday, 8:00 AM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full mr-4 mt-1 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <MapPin className="h-4 w-4" style={{ color: '#082952' }} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#082952' }}>Office Location</p>
                  <p style={{ color: '#082952' }}>
                    Student Services Building<br />
                    Room 201, Level 2<br />
                    SINU Main Campus, Honiara
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>
                  Can I apply for multiple scholarships?
                </h4>
                <p className="text-sm" style={{ color: '#082952' }}>
                  Yes, you can apply for multiple scholarships, but you can only receive one SINU scholarship at a time.
                </p>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>
                  When will I know the outcome?
                </h4>
                <p className="text-sm" style={{ color: '#082952' }}>
                  Scholarship outcomes are typically announced 4-6 weeks after the application deadline.
                </p>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>
                  Are scholarships renewable?
                </h4>
                <p className="text-sm" style={{ color: '#082952' }}>
                  Most scholarships are renewable based on maintaining satisfactory academic progress and meeting ongoing eligibility criteria.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button 
                className="px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#ffb703' }}
              >
                Apply for Scholarships
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: '#082952' }}>
            Ready to Transform Your Future?
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Don't let financial barriers stop you from achieving your academic dreams. Our generous scholarship programs are designed to support talented international students like you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#219ebc', color: 'white' }}
            >
              Start Your Application
            </button>
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg border-2 hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: 'transparent', 
                borderColor: '#d7a12c', 
                color: '#d7a12c' 
              }}
            >
              Download Scholarship Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}