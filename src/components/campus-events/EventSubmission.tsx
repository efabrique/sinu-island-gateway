import React from 'react';
import { Plus, Send, Calendar, Users, CheckCircle, AlertCircle } from 'lucide-react';

export const EventSubmission = () => {
  const submissionSteps = [
    {
      step: 1,
      title: "Submit Proposal",
      description: "Complete the event proposal form with all required details and documentation.",
      timeline: "Submit 4-6 weeks before event"
    },
    {
      step: 2,
      title: "Review Process",
      description: "Our events committee reviews your proposal for approval and provides feedback.",
      timeline: "Review takes 1-2 weeks"
    },
    {
      step: 3,
      title: "Planning Support",
      description: "Receive guidance on logistics, promotion, and resources to ensure success.",
      timeline: "Ongoing support provided"
    },
    {
      step: 4,
      title: "Event Execution",
      description: "Host your event with our support team available throughout the process.",
      timeline: "Day of event support"
    }
  ];

  const eventTypes = [
    "Academic conferences & seminars",
    "Cultural celebrations & festivals",
    "Student organization meetings",
    "Professional development workshops",
    "Arts & entertainment performances",
    "Sports competitions & recreation",
    "Community service projects",
    "Social gatherings & networking"
  ];

  const requirements = [
    "Event must align with SINU values and mission",
    "Minimum 2 weeks advance notice required",
    "Appropriate venue and insurance coverage",
    "Safety and accessibility considerations",
    "Marketing and promotional support needed",
    "Budget and financial planning details"
  ];

  return (
    <section style={{ backgroundColor: '#edf4ff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Plus style={{ color: '#ffb703' }} className="w-8 h-8 mr-3" />
            <h2 style={{ color: '#082952' }} className="text-4xl font-bold">
              Submit Your Event
            </h2>
          </div>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            Have an event idea? We're here to help you bring it to life! Submit your event proposal 
            and receive support throughout the planning and execution process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Submission Process */}
          <div>
            <h3 style={{ color: '#082952' }} className="text-2xl font-semibold mb-8">
              Submission Process
            </h3>
            <div className="space-y-6">
              {submissionSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div 
                    style={{ backgroundColor: '#219ebc' }} 
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                  >
                    <span style={{ color: '#ffffff' }} className="text-sm font-bold">
                      {step.step}
                    </span>
                  </div>
                  <div style={{ backgroundColor: '#ffffff' }} className="flex-1 p-4 rounded-lg">
                    <h4 style={{ color: '#082952' }} className="font-semibold mb-2">
                      {step.title}
                    </h4>
                    <p style={{ color: '#219ebc' }} className="text-sm mb-2">
                      {step.description}
                    </p>
                    <span 
                      style={{ backgroundColor: '#8ecae6', color: '#082952' }}
                      className="text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {step.timeline}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Types & Requirements */}
          <div className="space-y-8">
            <div>
              <h3 style={{ color: '#082952' }} className="text-2xl font-semibold mb-6">
                Event Types We Support
              </h3>
              <div style={{ backgroundColor: '#ffffff' }} className="p-6 rounded-lg">
                <div className="space-y-3">
                  {eventTypes.map((type, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle style={{ color: '#ffb703' }} className="w-4 h-4 mr-3 flex-shrink-0" />
                      <span style={{ color: '#082952' }} className="text-sm">
                        {type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ color: '#082952' }} className="text-2xl font-semibold mb-6">
                Submission Requirements
              </h3>
              <div style={{ backgroundColor: '#ffffff' }} className="p-6 rounded-lg">
                <div className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <AlertCircle style={{ color: '#d7a12c' }} className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                      <span style={{ color: '#082952' }} className="text-sm">
                        {requirement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Form */}
        <div style={{ backgroundColor: '#ffffff' }} className="rounded-lg p-8">
          <div className="flex items-center mb-8">
            <Send style={{ color: '#219ebc' }} className="w-8 h-8 mr-3" />
            <h3 style={{ color: '#082952' }} className="text-2xl font-semibold">
              Event Proposal Form
            </h3>
          </div>

          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                Event Title *
              </label>
              <input 
                type="text" 
                style={{ borderColor: '#8ecae6' }}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
                placeholder="Enter your event title"
              />
            </div>

            <div>
              <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                Event Type *
              </label>
              <select 
                style={{ borderColor: '#8ecae6' }}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
              >
                <option>Select event type</option>
                <option>Academic</option>
                <option>Cultural</option>
                <option>Professional</option>
                <option>Arts & Entertainment</option>
                <option>Sports & Recreation</option>
                <option>Social</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                Proposed Date *
              </label>
              <input 
                type="date" 
                style={{ borderColor: '#8ecae6' }}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
              />
            </div>

            <div>
              <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                Expected Attendance *
              </label>
              <select 
                style={{ borderColor: '#8ecae6' }}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
              >
                <option>Select attendance range</option>
                <option>Under 50</option>
                <option>50-100</option>
                <option>100-300</option>
                <option>300-500</option>
                <option>500+</option>
              </select>
            </div>

            <div>
              <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                Organizer Name *
              </label>
              <input 
                type="text" 
                style={{ borderColor: '#8ecae6' }}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
                placeholder="Enter organizer name"
              />
            </div>

            <div>
              <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                Contact Email *
              </label>
              <input 
                type="email" 
                style={{ borderColor: '#8ecae6' }}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
                placeholder="Enter contact email"
              />
            </div>

            <div className="md:col-span-2">
              <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                Event Description *
              </label>
              <textarea 
                rows={4}
                style={{ borderColor: '#8ecae6' }}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
                placeholder="Provide a detailed description of your event, including objectives, target audience, and special requirements"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label style={{ color: '#082952' }} className="block text-sm font-medium mb-2">
                Additional Requirements or Comments
              </label>
              <textarea 
                rows={3}
                style={{ borderColor: '#8ecae6' }}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#219ebc]"
                placeholder="Any special requirements, equipment needs, or additional information"
              ></textarea>
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4">
              <button 
                type="submit"
                style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                className="flex-1 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Event Proposal
              </button>
              <button 
                type="button"
                style={{ backgroundColor: '#d7a12c', color: '#082952' }}
                className="flex-1 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
              >
                Save as Draft
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};