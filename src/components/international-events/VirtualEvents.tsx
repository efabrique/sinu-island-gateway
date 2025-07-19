export const VirtualEvents = () => {
  const virtualEvents = [
    {
      title: "Virtual Campus Tour",
      description: "Take a comprehensive tour of our Honiara campus from the comfort of your home",
      duration: "45 minutes",
      frequency: "Weekly",
      features: ["360° campus views", "Student testimonials", "Q&A session"]
    },
    {
      title: "Online Information Sessions",
      description: "Learn about our programs, admission requirements, and student support services",
      duration: "1 hour",
      frequency: "Bi-weekly",
      features: ["Program overviews", "Admission guidance", "Live chat support"]
    },
    {
      title: "Faculty Webinars",
      description: "Meet academic staff and learn about specific schools and departments",
      duration: "1.5 hours",
      frequency: "Monthly",
      features: ["Faculty presentations", "Research highlights", "Career pathways"]
    },
    {
      title: "Student Life Sessions",
      description: "Discover campus culture, accommodation options, and student activities",
      duration: "1 hour",
      frequency: "Monthly",
      features: ["Campus culture", "Accommodation tours", "Student clubs"]
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Virtual Events
          </h2>
          <p className="text-lg text-[#082952]/80 max-w-3xl mx-auto">
            Can't attend in person? Join our virtual events from anywhere in the world. 
            All you need is an internet connection to connect with SINU.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {virtualEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-[#8ecae6]/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#082952] mb-2">{event.title}</h3>
                  <p className="text-[#082952]/70 mb-4">{event.description}</p>
                </div>
                <div className="w-12 h-12 bg-[#219ebc] rounded-full flex items-center justify-center ml-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-sm text-[#082952]/60">Duration</span>
                  <p className="font-medium text-[#082952]">{event.duration}</p>
                </div>
                <div>
                  <span className="text-sm text-[#082952]/60">Frequency</span>
                  <p className="font-medium text-[#082952]">{event.frequency}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-[#082952] mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {event.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-[#082952]/70">
                      <svg className="w-4 h-4 text-[#ffb703]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                Join Next Session
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#219ebc] to-[#8ecae6] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Never Miss an Event
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to our event notifications and get reminders about upcoming virtual sessions, 
            registration deadlines, and exclusive online events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#ffb703] outline-none"
            />
            <button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};