import { BookOpen, Users, Globe, Heart, Handshake } from 'lucide-react';

export function ProgramOverview() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Program Overview
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            The Solomon Islands National University Study Abroad Program provides international students with an exciting opportunity to add a Pacific Island perspective to their education at a university with a strong reputation for academic excellence and cultural diversity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderTop: '4px solid #ffb703' }}>
            <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
              <Globe className="h-8 w-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
              International Perspective
            </h3>
            <p style={{ color: '#082952' }}>
              Gain unique insights into Pacific Island culture, sustainability practices, and regional development while studying alongside local and international students.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderTop: '4px solid #219ebc' }}>
            <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
              <BookOpen className="h-8 w-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
              Academic Excellence
            </h3>
            <p style={{ color: '#082952' }}>
              Choose from a wide range of undergraduate and postgraduate courses across various faculties, designed to meet international academic standards.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderTop: '4px solid #d7a12c' }}>
            <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
              <Handshake className="h-8 w-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
              Cultural Immersion
            </h3>
            <p style={{ color: '#082952' }}>
              Immerse yourself in the rich Melanesian culture and traditions while building lifelong friendships with students from across the Pacific region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}