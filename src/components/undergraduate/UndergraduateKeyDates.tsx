import React, { useState } from 'react';
import { getUGkeyDates, urlFor } from '../../../sanity/lib/sanity';

interface EventItem {
  day: string;
  month: string;
  title: string;
  description: string;
}

const KeyDatesSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [UGkeydates, setUGkeydates] = useState<EventItem[]>([]);

  React.useEffect(() => {
    getUGkeyDates().then((data) => {
      setUGkeydates(data);
    });
  }, []);

  const visibleEvents = showAll ? UGkeydates : UGkeydates.slice(0, 3);

  return (
    <section id="key-dates" className="w-full max-w-7xl mx-auto p-6 md:pt-40">
      <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4 text-center">Key Dates
       <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>

      </h2>

      {/* 3-column responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleEvents.map((event, index) => (
          <div
            key={index}
            className="grid grid-cols-[60px_1fr] gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-200 items-start"
          >
            {/* Date Block */}
            <div className="flex flex-col items-center justify-center bg-[#035ac5ff] text-white rounded-md p-2">
              <div className="text-xl font-bold leading-tight">{event.day}</div>
              <div className="text-xs uppercase">{event.month}</div>
            </div>

            {/* Content Block */}
            <div>
              <h3 className="text-base font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
       {!showAll && UGkeydates.length > 3 && (
        <div className="mt-6 pb-20 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="text-[#035ac5ff] hover:underline font-medium"
          >
            View More Dates
          </button>
        </div>
      )}
        <div className="bg-[#8ecae6] rounded-lg p-8 text-center md:mt-20">
          <h3 className="text-2xl font-bold text-[#023047] mb-4">
            Need Help with Your Application?
          </h3>
          <p className="text-[#023047] mb-6">
            Our admissions team is here to guide you through the application process. 
            Contact us for personalized support and advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-start sm:items-center">
  {/* Phone */}
  <div className="text-center">
    <p className="font-semibold text-[#023047] mb-2">Phone</p>
    <a
      href="tel:+67712345678"
      className="inline-block px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Call +677 12345678
    </a>
  </div>

  {/* Email Button */}
  <div className="text-center">
    <p className="font-semibold text-[#023047] mb-2">Email</p>
    <a
      href="mailto:admissions@sinu.edu.sb"
      className="inline-block px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-green-700 transition"
    >
      Send Email
    </a>
  </div>

  {/* Office Hours */}
  <div className="text-center">
    <p className="font-semibold text-[#023047]">Office Hours</p>
    <p className="text-[#023047]">Mon-Fri, 8:00 AM - 4:00 PM</p>
  </div>
</div>

        </div>
     
    </section>
  );
};

export default KeyDatesSection;
