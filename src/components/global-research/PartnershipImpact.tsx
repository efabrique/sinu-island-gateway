import { Waves, Leaf, GraduationCap, Hospital } from 'lucide-react';

export function PartnershipImpact() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#082952' }}>
          How Do Research Partnerships Create Impact?
        </h2>

        <div className="mb-12">
          <p className="text-lg text-center max-w-4xl mx-auto" style={{ color: '#082952' }}>
            International research partnerships make a difference to the lives of people around the world. They create knowledge that leads to better, healthier and more sustainable societies. Recent partnership discoveries include:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#ffb703' }}>
              <Waves className="h-8 w-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
              Marine Conservation Technology
            </h3>
            <p style={{ color: '#082952' }}>
              Developing innovative monitoring systems for coral reef preservation in collaboration with Pacific research institutions. This technology helps track ecosystem health and guides conservation efforts across the region.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#219ebc' }}>
              <Hospital className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
              Tropical Disease Research
            </h3>
            <p style={{ color: '#082952' }}>
              Joint research programs addressing malaria, dengue, and other tropical diseases affecting Pacific communities. Our partnerships with international health organizations have led to breakthrough treatments.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
              <Leaf className="h-8 w-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
              Climate Adaptation Strategies
            </h3>
            <p style={{ color: '#082952' }}>
              Collaborative studies on climate change impacts and adaptation strategies for small island developing states. This research informs policy decisions across the Pacific region.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: '#d7a12c' }}>
              <GraduationCap className="h-8 w-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#082952' }}>
              Indigenous Knowledge Systems
            </h3>
            <p style={{ color: '#082952' }}>
              Partnerships that integrate traditional Pacific knowledge with modern research methods, creating culturally appropriate solutions for community challenges.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-8" style={{ color: '#082952' }}>
            Research Impact Metrics
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#8ecae6' }}>
              <div className="text-3xl font-bold mb-2" style={{ color: '#082952' }}>50+</div>
              <p className="text-sm" style={{ color: '#082952' }}>International Partner Institutions</p>
            </div>
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#ffb703' }}>
              <div className="text-3xl font-bold mb-2" style={{ color: '#082952' }}>200+</div>
              <p className="text-sm" style={{ color: '#082952' }}>Joint Research Publications</p>
            </div>
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#219ebc' }}>
              <div className="text-3xl font-bold mb-2 text-white">15</div>
              <p className="text-sm text-white">Countries Involved</p>
            </div>
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#d7a12c' }}>
              <div className="text-3xl font-bold mb-2" style={{ color: '#082952' }}>$5M+</div>
              <p className="text-sm" style={{ color: '#082952' }}>Collaborative Research Funding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}