export function PartnerInstitutions() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#082952' }}>
          Partner Institutions
        </h2>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#082952' }}>Australia & New Zealand</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>University of Queensland</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>James Cook University</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>University of Auckland</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>Victoria University</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#082952' }}>Pacific Region</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>University of South Pacific</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>University of Papua New Guinea</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>National University of Samoa</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>University of Fiji</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#082952' }}>Asia</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>National University Singapore</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>University of Tokyo</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>Seoul National University</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>Chinese University Hong Kong</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#082952' }}>International Organizations</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>WHO Regional Office</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>UNESCO Pacific</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>Pacific Islands Forum</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <p className="text-sm" style={{ color: '#082952' }}>SPREP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-8" style={{ color: '#082952' }}>
            Partnership Benefits
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#8ecae6' }}>
              <h4 className="font-semibold mb-4" style={{ color: '#082952' }}>For Researchers</h4>
              <ul className="space-y-2 text-sm">
                <li style={{ color: '#082952' }}>• Access to international funding</li>
                <li style={{ color: '#082952' }}>• Joint publication opportunities</li>
                <li style={{ color: '#082952' }}>• Cross-cultural research experience</li>
                <li style={{ color: '#082952' }}>• Global network expansion</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#ffb703' }}>
              <h4 className="font-semibold mb-4" style={{ color: '#082952' }}>For Students</h4>
              <ul className="space-y-2 text-sm">
                <li style={{ color: '#082952' }}>• Exchange programs</li>
                <li style={{ color: '#082952' }}>• Joint degree opportunities</li>
                <li style={{ color: '#082952' }}>• Research training abroad</li>
                <li style={{ color: '#082952' }}>• International scholarships</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#219ebc' }}>
              <h4 className="font-semibold mb-4 text-white">For Institutions</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-white">• Knowledge sharing</li>
                <li className="text-white">• Resource optimization</li>
                <li className="text-white">• Enhanced research capacity</li>
                <li className="text-white">• Global reputation building</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}