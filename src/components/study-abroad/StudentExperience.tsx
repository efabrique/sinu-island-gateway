export function StudentExperience() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#082952' }}>
          The SINU Experience
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderLeft: '4px solid #ffb703' }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Campus Life
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: '#8ecae6' }}></div>
                <span style={{ color: '#082952' }}>Modern campus facilities and libraries</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: '#8ecae6' }}></div>
                <span style={{ color: '#082952' }}>Student clubs and cultural organizations</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: '#8ecae6' }}></div>
                <span style={{ color: '#082952' }}>Sports and recreational activities</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: '#8ecae6' }}></div>
                <span style={{ color: '#082952' }}>On-campus accommodation options</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderLeft: '4px solid #219ebc' }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Cultural Activities
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: '#d7a12c' }}></div>
                <span style={{ color: '#082952' }}>Traditional dance and music workshops</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: '#d7a12c' }}></div>
                <span style={{ color: '#082952' }}>Island excursions and cultural tours</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: '#d7a12c' }}></div>
                <span style={{ color: '#082952' }}>Community engagement projects</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: '#d7a12c' }}></div>
                <span style={{ color: '#082952' }}>Language exchange programs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-8" style={{ color: '#082952' }}>
            Student Testimonials
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
              <p className="mb-4 italic" style={{ color: '#082952' }}>
                "Studying at SINU opened my eyes to sustainable development practices and marine conservation. The hands-on learning opportunities and cultural immersion made this experience unforgettable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full mr-3" style={{ backgroundColor: '#8ecae6' }}></div>
                <div>
                  <p className="font-semibold" style={{ color: '#082952' }}>Sarah Johnson</p>
                  <p className="text-sm" style={{ color: '#082952' }}>Environmental Science, University of Auckland</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
              <p className="mb-4 italic" style={{ color: '#082952' }}>
                "The Pacific perspective on education and community development has greatly influenced my career path. SINU provided me with a unique international experience that I'll treasure forever."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full mr-3" style={{ backgroundColor: '#ffb703' }}></div>
                <div>
                  <p className="font-semibold" style={{ color: '#082952' }}>Marcus Chen</p>
                  <p className="text-sm" style={{ color: '#082952' }}>Education Studies, University of Sydney</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}