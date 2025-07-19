import { Mail, Phone, Calendar, Globe, Users, Headphones, Clock } from 'lucide-react';

export const EventsSupport = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Event Support & Resources
          </h2>
          <p className="text-lg text-[#082952]/80 max-w-3xl mx-auto">
            Get the most out of your event experience with our comprehensive support and resources
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ffb703] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#082952]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#082952] mb-2">Pre-Event Preparation</h3>
                <p className="text-[#082952]/70">
                  Download event guides, prepare your questions, and learn what to expect at each type of event.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#219ebc] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#082952] mb-2">Live Support</h3>
                <p className="text-[#082952]/70">
                  Get real-time assistance during events with our dedicated support team and live chat features.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#8ecae6] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#082952]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#082952] mb-2">Follow-Up Resources</h3>
                <p className="text-[#082952]/70">
                  Access event recordings, additional materials, and personalized follow-up sessions after events.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#d7a12c] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-1a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#082952] mb-2">Personal Consultation</h3>
                <p className="text-[#082952]/70">
                  Book one-on-one sessions with our admissions counselors for personalized guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#edf4ff] rounded-xl p-8 border border-[#8ecae6]/30">
            <h3 className="text-2xl font-bold text-[#082952] mb-6">Ready to Get Started?</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ffb703] rounded-full flex items-center justify-center text-[#082952] font-bold text-sm">1</div>
                <p className="text-[#082952]/80">Browse our upcoming events</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ffb703] rounded-full flex items-center justify-center text-[#082952] font-bold text-sm">2</div>
                <p className="text-[#082952]/80">Register for events that interest you</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ffb703] rounded-full flex items-center justify-center text-[#082952] font-bold text-sm">3</div>
                <p className="text-[#082952]/80">Prepare using our event guides</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ffb703] rounded-full flex items-center justify-center text-[#082952] font-bold text-sm">4</div>
                <p className="text-[#082952]/80">Attend and engage with our team</p>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-[#219ebc] hover:bg-[#082952] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                View All Events
              </button>
              <button className="w-full bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                Contact Event Team
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-[#8ecae6]/30">
              <h4 className="font-bold text-[#082952] mb-3">Contact Information</h4>
              <div className="space-y-2 text-sm text-[#082952]/70">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>events@sinu.edu.sb</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+677 30100 (International Events)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Monday - Friday, 8:00 AM - 5:00 PM (SBT)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};