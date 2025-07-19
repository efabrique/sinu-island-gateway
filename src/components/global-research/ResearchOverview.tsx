import { Microscope, Globe, Handshake } from 'lucide-react';

export function ResearchOverview() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            International Research Partnerships
          </h2>
          <p className="text-lg max-w-4xl mx-auto" style={{ color: '#082952' }}>
            We value our partnerships with universities and research organisations around the world. They increase the quality, output and impact of our research. Supporting international collaboration is a strategic priority for SINU as we work with organizations whose research interests and values align with our own.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center" style={{ borderTop: '4px solid #ffb703' }}>
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
              <Microscope className="h-10 w-10" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
              Research Excellence
            </h3>
            <p style={{ color: '#082952' }}>
              Collaborative research that pushes boundaries and discovers new knowledge benefiting society at a global level.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-center" style={{ borderTop: '4px solid #219ebc' }}>
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
              <Globe className="h-10 w-10" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
              Global Impact
            </h3>
            <p style={{ color: '#082952' }}>
              Creating knowledge that leads to better, healthier, and more sustainable societies worldwide.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-center" style={{ borderTop: '4px solid #d7a12c' }}>
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
              <Handshake className="h-10 w-10" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
              Strategic Partnerships
            </h3>
            <p style={{ color: '#082952' }}>
              Long-term collaborations with leading institutions that share our commitment to high-quality research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}