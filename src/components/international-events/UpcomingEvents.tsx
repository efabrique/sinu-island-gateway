export const UpcomingEvents = () => {
  const events = [
    {
      title: "SINU Info Session - Papua New Guinea",
      location: "Port Moresby, PNG",
      date: "March 15, 2024",
      time: "2:00 PM - 4:00 PM",
      type: "In-Person",
      summary: "Learn about undergraduate and postgraduate programs available at SINU. Meet with academic staff and current students.",
      registrationLink: "#"
    },
    {
      title: "Virtual Open Day - Pacific Region",
      location: "Online",
      date: "March 22, 2024",
      time: "10:00 AM - 12:00 PM",
      type: "Virtual",
      summary: "Join our virtual campus tour and information sessions from anywhere in the Pacific region.",
      registrationLink: "#"
    },
    {
      title: "Meet SINU in Suva",
      location: "Suva, Fiji",
      date: "April 5, 2024",
      time: "1:00 PM - 5:00 PM",
      type: "In-Person",
      summary: "Connect with our regional experts and explore your study options at Solomon Islands National University.",
      registrationLink: "#"
    },
    {
      title: "Scholarship Information Session",
      location: "Online",
      date: "April 12, 2024",
      time: "6:00 PM - 7:30 PM",
      type: "Virtual",
      summary: "Discover scholarship opportunities for international students and learn about the application process.",
      registrationLink: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Upcoming Events
          </h2>
          <p className="text-lg text-[#082952]/80 max-w-3xl mx-auto">
            Join us at our upcoming events to learn more about SINU's academic programs, 
            application processes, and student life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-[#edf4ff] rounded-xl p-8 border border-[#8ecae6]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.type === 'Virtual' 
                        ? 'bg-[#219ebc] text-white' 
                        : 'bg-[#ffb703] text-[#082952]'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#082952] mb-2">{event.title}</h3>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#219ebc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[#082952]/80">{event.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#219ebc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[#082952]/80">{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#219ebc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[#082952]/80">{event.time}</span>
                </div>
              </div>

              <p className="text-[#082952]/70 mb-6">{event.summary}</p>

              <button className="w-full bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};