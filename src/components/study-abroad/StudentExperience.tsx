export function StudentExperience() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2" style={{ color: '#222222' }}>
          Join SINU Experience
        </h2>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <p className="text-lg font-semibold text-center mb-8 text-[#082952]">
            We want to help you make the most of your study experience in Solomon Islands. You will learn from world-class teaching staff at innovative facilities. You will be able to interact with local and international students. You will get to experience Solomon Islands culture and way of life.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
              <p className="mb-4 italic" style={{ color: '#082952' }}>
                "Studying at SINU opened my eyes to sustainable development practices and marine conservation. The hands-on learning opportunities and cultural immersion made this experience unforgettable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full mr-3" style={{ backgroundColor: '#8ecae6' }}></div>
                <div>
                  <p className="font-semibold" style={{ color: '#082952' }}>Sarah Johnson</p>
                  <p className="text-sm" style={{ color: '#082952' }}>Environmental Science, SINU</p>
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
                  <p className="text-sm" style={{ color: '#082952' }}>Education Studies, SINU</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}