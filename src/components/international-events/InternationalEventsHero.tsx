import heroImage from "@/assets/international-events-hero.jpg";

export const InternationalEventsHero = () => {
  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            International Events
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Connect with SINU representatives worldwide and discover your pathway to studying at Solomon Islands National University
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105">
              View Upcoming Events
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#082952] font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300">
              Register for Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};