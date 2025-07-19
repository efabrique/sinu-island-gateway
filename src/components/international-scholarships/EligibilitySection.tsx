export function EligibilitySection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#082952' }}>
          Eligibility Criteria
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderTop: '4px solid #ffb703' }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              General Requirements
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full mr-4 mt-1 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-sm font-bold" style={{ color: '#082952' }}>1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Academic Excellence</h4>
                  <p style={{ color: '#082952' }}>
                    Minimum GPA of 3.0 on a 4.0 scale or equivalent in your most recent qualification
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full mr-4 mt-1 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-sm font-bold" style={{ color: '#082952' }}>2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>International Status</h4>
                  <p style={{ color: '#082952' }}>
                    Must be an international student paying international student fees
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full mr-4 mt-1 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-sm font-bold" style={{ color: '#082952' }}>3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Course Admission</h4>
                  <p style={{ color: '#082952' }}>
                    Must have received an offer to study an eligible course at SINU
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderTop: '4px solid #219ebc' }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              English Language Requirements
            </h3>
            <div className="space-y-6">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-3" style={{ color: '#082952' }}>IELTS Academic</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p style={{ color: '#082952' }}><strong>Overall:</strong> 6.5</p>
                  </div>
                  <div>
                    <p style={{ color: '#082952' }}><strong>Each band:</strong> 6.0</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-3" style={{ color: '#082952' }}>TOEFL iBT</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p style={{ color: '#082952' }}><strong>Overall:</strong> 79</p>
                  </div>
                  <div>
                    <p style={{ color: '#082952' }}><strong>Writing:</strong> 21</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-3" style={{ color: '#082952' }}>PTE Academic</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p style={{ color: '#082952' }}><strong>Overall:</strong> 58</p>
                  </div>
                  <div>
                    <p style={{ color: '#082952' }}><strong>Each section:</strong> 50</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-8" style={{ color: '#082952' }}>
            Additional Requirements by Scholarship Type
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#8ecae6' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#082952' }}>Excellence Scholarships</h4>
              <ul className="space-y-2 text-sm">
                <li style={{ color: '#082952' }}>• GPA 3.8+ required</li>
                <li style={{ color: '#082952' }}>• Leadership experience</li>
                <li style={{ color: '#082952' }}>• Personal statement</li>
                <li style={{ color: '#082952' }}>• References required</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#ffb703' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#082952' }}>Regional Scholarships</h4>
              <ul className="space-y-2 text-sm">
                <li style={{ color: '#082952' }}>• Pacific Island citizenship</li>
                <li style={{ color: '#082952' }}>• Community involvement</li>
                <li style={{ color: '#082952' }}>• Development commitment</li>
                <li style={{ color: '#082952' }}>• Interview required</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#219ebc' }}>
              <h4 className="font-semibold mb-3 text-white">Research Scholarships</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-white">• Research proposal</li>
                <li className="text-white">• Supervisor agreement</li>
                <li className="text-white">• Publications (preferred)</li>
                <li className="text-white">• Research experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}