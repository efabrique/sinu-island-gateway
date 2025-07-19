export function FundingOpportunities() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#082952' }}>
          Funding Opportunities
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderTop: '4px solid #ffb703' }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Research Grants
            </h3>
            <div className="space-y-6">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>International Collaborative Research Fund</h4>
                <p className="text-sm mb-2" style={{ color: '#082952' }}>Up to $500,000 for multi-institutional research projects</p>
                <p className="text-xs" style={{ color: '#082952' }}>Deadline: March 31 annually</p>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Pacific Research Excellence Awards</h4>
                <p className="text-sm mb-2" style={{ color: '#082952' }}>$50,000 - $200,000 for innovative regional research</p>
                <p className="text-xs" style={{ color: '#082952' }}>Deadline: Rolling applications</p>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Early Career Researcher Grants</h4>
                <p className="text-sm mb-2" style={{ color: '#082952' }}>$25,000 - $75,000 for emerging researchers</p>
                <p className="text-xs" style={{ color: '#082952' }}>Deadline: June 30 annually</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderTop: '4px solid #219ebc' }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Partnership Support
            </h3>
            <div className="space-y-6">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Institutional Partnership Development</h4>
                <p className="text-sm mb-2" style={{ color: '#082952' }}>Seed funding for new international partnerships</p>
                <p className="text-xs" style={{ color: '#082952' }}>Up to $100,000 over 2 years</p>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Student Exchange Support</h4>
                <p className="text-sm mb-2" style={{ color: '#082952' }}>Travel and living allowances for international exchange</p>
                <p className="text-xs" style={{ color: '#082952' }}>$5,000 - $15,000 per student</p>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Conference and Workshop Grants</h4>
                <p className="text-sm mb-2" style={{ color: '#082952' }}>Support for international academic events</p>
                <p className="text-xs" style={{ color: '#082952' }}>$10,000 - $50,000 per event</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-8" style={{ color: '#082952' }}>
            External Funding Sources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#8ecae6' }}>
              <h4 className="font-semibold mb-4" style={{ color: '#082952' }}>Government Agencies</h4>
              <ul className="space-y-2 text-sm">
                <li style={{ color: '#082952' }}>• Australian Research Council</li>
                <li style={{ color: '#082952' }}>• New Zealand MBIE</li>
                <li style={{ color: '#082952' }}>• Pacific Island Forum</li>
                <li style={{ color: '#082952' }}>• ACIAR</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#ffb703' }}>
              <h4 className="font-semibold mb-4" style={{ color: '#082952' }}>International Organizations</h4>
              <ul className="space-y-2 text-sm">
                <li style={{ color: '#082952' }}>• World Bank</li>
                <li style={{ color: '#082952' }}>• Asian Development Bank</li>
                <li style={{ color: '#082952' }}>• UNESCO</li>
                <li style={{ color: '#082952' }}>• WHO</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#219ebc' }}>
              <h4 className="font-semibold mb-4 text-white">Private Foundations</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-white">• Gates Foundation</li>
                <li className="text-white">• Wellcome Trust</li>
                <li className="text-white">• Ford Foundation</li>
                <li className="text-white">• Regional Foundations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-white rounded-lg p-6 shadow-lg inline-block">
            <h4 className="font-semibold mb-4" style={{ color: '#082952' }}>Need Help with Grant Applications?</h4>
            <p className="mb-4" style={{ color: '#082952' }}>Our research support team provides assistance with:</p>
            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <div style={{ color: '#082952' }}>• Proposal writing</div>
              <div style={{ color: '#082952' }}>• Budget development</div>
              <div style={{ color: '#082952' }}>• Partnership facilitation</div>
              <div style={{ color: '#082952' }}>• Grant administration</div>
            </div>
            <button 
              className="px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#d7a12c' }}
            >
              Contact Research Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}