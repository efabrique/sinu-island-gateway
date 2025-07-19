export function ContactCollaboration() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#082952' }}>
          Start a Collaboration
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              How to Partner with Us
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full mr-4 mt-1 flex items-center justify-center" style={{ backgroundColor: '#ffb703' }}>
                  <span className="text-sm font-bold" style={{ color: '#082952' }}>1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Initial Contact</h4>
                  <p style={{ color: '#082952' }}>
                    Reach out to our International Research Office with your collaboration proposal or research idea.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full mr-4 mt-1 flex items-center justify-center" style={{ backgroundColor: '#219ebc' }}>
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Consultation Meeting</h4>
                  <p style={{ color: '#082952' }}>
                    Schedule a consultation to discuss research alignment, goals, and potential collaboration models.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full mr-4 mt-1 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-sm font-bold" style={{ color: '#082952' }}>3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Partnership Development</h4>
                  <p style={{ color: '#082952' }}>
                    Work together to develop a formal partnership agreement and research framework.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full mr-4 mt-1 flex items-center justify-center" style={{ backgroundColor: '#d7a12c' }}>
                  <span className="text-sm font-bold" style={{ color: '#082952' }}>4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Implementation</h4>
                  <p style={{ color: '#082952' }}>
                    Begin collaborative research activities with ongoing support from our research office.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full mr-4 mt-1 flex items-center justify-center" style={{ backgroundColor: '#ffb703' }}>
                  <span className="text-sm" style={{ color: '#082952' }}>📧</span>
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#082952' }}>International Research Office</p>
                  <p style={{ color: '#082952' }}>research.partnerships@sinu.edu.sb</p>
                  <p className="text-sm mt-1" style={{ color: '#082952' }}>For general partnership inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full mr-4 mt-1 flex items-center justify-center" style={{ backgroundColor: '#219ebc' }}>
                  <span className="text-sm text-white">📞</span>
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#082952' }}>Phone</p>
                  <p style={{ color: '#082952' }}>+677 30 760 (ext. 2100)</p>
                  <p className="text-sm mt-1" style={{ color: '#082952' }}>Monday-Friday, 8:00 AM - 5:00 PM (GMT+11)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full mr-4 mt-1 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-sm" style={{ color: '#082952' }}>📍</span>
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#082952' }}>Address</p>
                  <p style={{ color: '#082952' }}>
                    International Research Office<br />
                    Research Building, Level 3<br />
                    SINU Main Campus<br />
                    Honiara, Solomon Islands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
            Ready to Collaborate?
          </h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Join our growing network of international research partners and help us create knowledge that makes a difference. Together, we can address the world's most pressing challenges and build a better future for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#ffb703' }}
            >
              Submit Partnership Proposal
            </button>
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg border-2 hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: 'transparent', 
                borderColor: '#219ebc', 
                color: '#219ebc' 
              }}
            >
              Download Partnership Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}