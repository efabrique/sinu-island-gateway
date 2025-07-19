import { Trophy, Target, Users, DollarSign, Globe } from 'lucide-react';

export function ScholarshipsOverview() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            International Student Scholarships
          </h2>
          <p className="text-lg max-w-4xl mx-auto" style={{ color: '#082952' }}>
            We offer an exciting and generous range of scholarships to support international students coming to study at SINU from around the globe. Our scholarships reward high-achieving students with outstanding academic accomplishments and who demonstrate the potential to make a positive impact on the world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center" style={{ borderTop: '4px solid #ffb703' }}>
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
              <Trophy className="h-10 w-10" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
              Merit-Based Awards
            </h3>
            <p style={{ color: '#082952' }}>
              Recognizing academic excellence and outstanding achievements from international students worldwide.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-center" style={{ borderTop: '4px solid #219ebc' }}>
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
              <DollarSign className="h-10 w-10" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
              Financial Support
            </h3>
            <p style={{ color: '#082952' }}>
              Comprehensive financial assistance covering tuition fees, accommodation, and living expenses.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-center" style={{ borderTop: '4px solid #d7a12c' }}>
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
              <Globe className="h-10 w-10" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
              Global Opportunities
            </h3>
            <p style={{ color: '#082952' }}>
              Opening doors to world-class education and career opportunities in the Pacific region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}