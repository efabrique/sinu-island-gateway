export function FeatureScholarships() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#082952' }}>
          SINU Scholarships
        </h2>

        <div className="space-y-8">
          {/* Vice-Chancellor's International Excellence Scholarship */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#082952' }}>
                  Vice-Chancellor's International Excellence Scholarship
                </h3>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>About the scholarship</h4>
                  <p style={{ color: '#082952' }}>
                    SINU offers a limited number of scholarships for international students who have a record of academic excellence and high achievement in their previous studies.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>What you'll receive</h4>
                  <p style={{ color: '#082952' }}>
                    The scholarship covers 75% of tuition fees for undergraduate or postgraduate coursework degrees for the full duration of the course.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#8ecae6' }}>
                  <h4 className="font-semibold mb-4" style={{ color: '#082952' }}>Key Benefits</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center" style={{ color: '#082952' }}>
                      <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#ffb703' }}></span>
                      75% tuition fee coverage
                    </li>
                    <li className="flex items-center" style={{ color: '#082952' }}>
                      <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#ffb703' }}></span>
                      Full course duration
                    </li>
                    <li className="flex items-center" style={{ color: '#082952' }}>
                      <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#ffb703' }}></span>
                      Merit-based selection
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SINU Global Merit Scholarship */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#082952' }}>
                  SINU Global Merit Scholarship
                </h3>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>About the scholarship</h4>
                  <p style={{ color: '#082952' }}>
                    Available to new international undergraduate and postgraduate students who meet the academic criteria and commence their studies at SINU.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>What you'll receive</h4>
                  <p style={{ color: '#082952' }}>
                    The scholarship covers 50% of tuition fees for select courses and is automatically assessed - no application required.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#ffb703' }}>
                  <h4 className="font-semibold mb-4" style={{ color: '#082952' }}>Key Benefits</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center" style={{ color: '#082952' }}>
                      <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#219ebc' }}></span>
                      50% tuition fee reduction
                    </li>
                    <li className="flex items-center" style={{ color: '#082952' }}>
                      <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#219ebc' }}></span>
                      Automatic assessment
                    </li>
                    <li className="flex items-center" style={{ color: '#082952' }}>
                      <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#219ebc' }}></span>
                      No application required
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Development Scholarship */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#082952' }}>
                  Pacific Regional Development Scholarship
                </h3>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>About the scholarship</h4>
                  <p style={{ color: '#082952' }}>
                    Designed for students from Pacific Island nations who demonstrate commitment to contributing to regional development and sustainability initiatives.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>What you'll receive</h4>
                  <p style={{ color: '#082952' }}>
                    Full tuition fees, accommodation allowance, and living stipend for the duration of study.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#219ebc' }}>
                  <h4 className="font-semibold mb-4 text-white">Key Benefits</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-white">
                      <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#d7a12c' }}></span>
                      Full tuition coverage
                    </li>
                    <li className="flex items-center text-white">
                      <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#d7a12c' }}></span>
                      Accommodation support
                    </li>
                    <li className="flex items-center text-white">
                      <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#d7a12c' }}></span>
                      Living allowance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}