export function ContactInformation() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#082952' }}>
          Contact & Apply
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center" style={{ backgroundColor: '#ffb703' }}>
                  <span className="text-xs" style={{ color: '#082952' }}>📧</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#082952' }}>Email</p>
                  <p style={{ color: '#082952' }}>studyabroad@sinu.edu.sb</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center" style={{ backgroundColor: '#219ebc' }}>
                  <span className="text-xs text-white">📞</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#082952' }}>Phone</p>
                  <p style={{ color: '#082952' }}>+677 30 760</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-xs" style={{ color: '#082952' }}>📍</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#082952' }}>Address</p>
                  <p style={{ color: '#082952' }}>
                    International Office<br />
                    Solomon Islands National University<br />
                    Honiara, Solomon Islands
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Ready to Apply?
            </h3>
            <p className="mb-6" style={{ color: '#082952' }}>
              Start your application today and take the first step towards an extraordinary educational experience in the Pacific.
            </p>
            <div className="space-y-4">
              <button 
                className="w-full py-4 px-6 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#ffb703' }}
              >
                Apply Online
              </button>
              <button 
                className="w-full py-4 px-6 rounded-lg font-semibold text-lg border-2 hover:opacity-90 transition-opacity"
                style={{ 
                  backgroundColor: 'transparent', 
                  borderColor: '#219ebc', 
                  color: '#219ebc' 
                }}
              >
                Download Brochure
              </button>
            </div>
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
              <p className="text-sm text-center" style={{ color: '#082952' }}>
                <strong>Need help with your application?</strong><br />
                Our international student advisors are here to guide you through every step of the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}