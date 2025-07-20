import React from 'react';
import { Calendar, Filter, Search, Download } from 'lucide-react';

export const EventCalendar = () => {
  const calendarViews = ["Month", "Week", "Day", "List"];
  const filterOptions = ["All Events", "Academic", "Cultural", "Sports", "Social", "Professional"];

  return (
    <section style={{ backgroundColor: '#edf4ff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Calendar style={{ color: '#d7a12c' }} className="w-8 h-8 mr-3" />
            <h2 style={{ color: '#082952' }} className="text-4xl font-bold">
              Events Calendar
            </h2>
          </div>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            Stay organized and never miss an event with our comprehensive calendar system. 
            Filter, search, and sync events to your personal calendar.
          </p>
        </div>

        <div style={{ backgroundColor: '#ffffff' }} className="rounded-lg p-8 shadow-lg">
          {/* Calendar Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Filter style={{ color: '#219ebc' }} className="w-5 h-5" />
                <select 
                  style={{ borderColor: '#8ecae6' }}
                  className="border-2 rounded-lg px-3 py-2 focus:outline-none focus:border-[#219ebc]"
                >
                  {filterOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <Search style={{ color: '#219ebc' }} className="w-5 h-5" />
                <input 
                  type="text"
                  placeholder="Search events..."
                  style={{ borderColor: '#8ecae6' }}
                  className="border-2 rounded-lg px-3 py-2 focus:outline-none focus:border-[#219ebc]"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex rounded-lg overflow-hidden" style={{ borderColor: '#8ecae6', border: '2px solid' }}>
                {calendarViews.map((view, index) => (
                  <button 
                    key={index}
                    style={{ 
                      backgroundColor: index === 0 ? '#219ebc' : '#ffffff',
                      color: index === 0 ? '#ffffff' : '#082952'
                    }}
                    className="px-4 py-2 text-sm font-medium hover:opacity-80 transition-opacity duration-300"
                  >
                    {view}
                  </button>
                ))}
              </div>

              <button 
                style={{ backgroundColor: '#d7a12c', color: '#082952' }}
                className="px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-300 flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Calendar Grid Placeholder */}
          <div style={{ backgroundColor: '#edf4ff' }} className="p-8 rounded-lg text-center">
            <Calendar style={{ color: '#8ecae6' }} className="w-24 h-24 mx-auto mb-6" />
            <h3 style={{ color: '#082952' }} className="text-xl font-semibold mb-4">
              Interactive Calendar Coming Soon
            </h3>
            <p style={{ color: '#219ebc' }} className="mb-6 max-w-md mx-auto">
              We're building an enhanced calendar experience with full interactive features, 
              personalized scheduling, and seamless integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                className="px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
              >
                View Current Events List
              </button>
              <button 
                style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6', color: '#082952' }}
                className="border-2 px-6 py-3 rounded-lg font-medium hover:shadow-md transition-all duration-300"
              >
                Subscribe to Updates
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div style={{ backgroundColor: '#edf4ff' }} className="p-6 rounded-lg text-center">
              <div 
                style={{ backgroundColor: '#ffb703' }} 
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Calendar style={{ color: '#082952' }} className="w-6 h-6" />
              </div>
              <h4 style={{ color: '#082952' }} className="font-semibold mb-2">
                Sync to Personal Calendar
              </h4>
              <p style={{ color: '#219ebc' }} className="text-sm mb-4">
                Add SINU events directly to your Google, Outlook, or Apple calendar.
              </p>
              <button 
                style={{ color: '#219ebc' }}
                className="text-sm font-semibold hover:underline"
              >
                Setup Sync →
              </button>
            </div>

            <div style={{ backgroundColor: '#edf4ff' }} className="p-6 rounded-lg text-center">
              <div 
                style={{ backgroundColor: '#8ecae6' }} 
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Filter style={{ color: '#082952' }} className="w-6 h-6" />
              </div>
              <h4 style={{ color: '#082952' }} className="font-semibold mb-2">
                Custom Notifications
              </h4>
              <p style={{ color: '#219ebc' }} className="text-sm mb-4">
                Get personalized alerts for events matching your interests.
              </p>
              <button 
                style={{ color: '#219ebc' }}
                className="text-sm font-semibold hover:underline"
              >
                Set Preferences →
              </button>
            </div>

            <div style={{ backgroundColor: '#edf4ff' }} className="p-6 rounded-lg text-center">
              <div 
                style={{ backgroundColor: '#d7a12c' }} 
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Download style={{ color: '#082952' }} className="w-6 h-6" />
              </div>
              <h4 style={{ color: '#082952' }} className="font-semibold mb-2">
                Mobile App
              </h4>
              <p style={{ color: '#219ebc' }} className="text-sm mb-4">
                Download the SINU Events app for on-the-go access and updates.
              </p>
              <button 
                style={{ color: '#219ebc' }}
                className="text-sm font-semibold hover:underline"
              >
                Download App →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};