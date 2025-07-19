export const EventsOverview = () => {
  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Connect with SINU Worldwide
          </h2>
          <p className="text-lg text-[#082952]/80 leading-relaxed">
            We hold events all over the world so you can get the information you need to make 
            Solomon Islands National University your educational destination. Speak to our staff 
            to get your questions answered and receive personalized course advice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-[#8ecae6]/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[#ffb703] rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#082952]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#082952] mb-4">Global Presence</h3>
            <p className="text-[#082952]/70">
              Meet our representatives at events across the Pacific region and beyond to learn about study opportunities.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-[#8ecae6]/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[#219ebc] rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#082952] mb-4">Virtual Sessions</h3>
            <p className="text-[#082952]/70">
              Join our online information sessions and webinars from anywhere in the world at your convenience.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-[#8ecae6]/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[#8ecae6] rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#082952]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-1a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#082952] mb-4">Personal Guidance</h3>
            <p className="text-[#082952]/70">
              Get one-on-one advice from our admissions experts about courses, applications, and university life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};