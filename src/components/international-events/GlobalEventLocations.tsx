export const GlobalEventLocations = () => {
  const locations = [
    {
      region: "Papua New Guinea",
      cities: ["Port Moresby", "Lae", "Mount Hagen"],
      nextEvent: "March 15, 2024",
      eventsCount: 8
    },
    {
      region: "Fiji",
      cities: ["Suva", "Nadi", "Lautoka"],
      nextEvent: "April 5, 2024",
      eventsCount: 6
    },
    {
      region: "Vanuatu",
      cities: ["Port Vila", "Luganville"],
      nextEvent: "April 18, 2024",
      eventsCount: 4
    },
    {
      region: "New Caledonia",
      cities: ["Nouméa"],
      nextEvent: "May 2, 2024",
      eventsCount: 3
    },
    {
      region: "Samoa",
      cities: ["Apia"],
      nextEvent: "May 15, 2024",
      eventsCount: 2
    },
    {
      region: "Tonga",
      cities: ["Nuku'alofa"],
      nextEvent: "June 1, 2024",
      eventsCount: 2
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Where We'll Be
          </h2>
          <p className="text-lg text-[#082952]/80 max-w-3xl mx-auto">
            Find SINU representatives at events across the Pacific region. We're bringing 
            the university to your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-[#edf4ff] rounded-xl p-8 border border-[#8ecae6]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-[#082952]">{location.region}</h3>
                <span className="bg-[#ffb703] text-[#082952] text-sm font-medium px-3 py-1 rounded-full">
                  {location.eventsCount} events
                </span>
              </div>

              <div className="mb-6">
                <p className="text-[#082952]/70 mb-3">Cities we visit:</p>
                <div className="flex flex-wrap gap-2">
                  {location.cities.map((city, cityIndex) => (
                    <span key={cityIndex} className="bg-[#8ecae6]/20 text-[#082952] px-3 py-1 rounded-lg text-sm">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-[#219ebc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-[#082952]/80">Next Event</span>
                </div>
                <p className="font-medium text-[#082952]">{location.nextEvent}</p>
              </div>

              <button className="w-full bg-[#219ebc] hover:bg-[#082952] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                View {location.region} Events
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-[#edf4ff] rounded-xl p-8 border border-[#8ecae6]/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#082952] mb-4">Can't Find Your Location?</h3>
            <p className="text-[#082952]/70 mb-6">
              We're always expanding our reach. Let us know where you'd like to see SINU events, 
              or join our virtual sessions accessible from anywhere.
            </p>
            <button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              Request Event in Your Area
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};