import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { getNews, getEvents, urlFor } from '../../../sanity/lib/sanity';

// Utility to format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  console.log(day, month);
  return { day, month };
};

const ScrollableCardRow: React.FC<{ cards: any[] }> = ({ cards }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const delay = 30;
    const step = 1;

    const interval = setInterval(() => {
      if (!isPaused && el) {
        if (direction === 'right') {
          el.scrollLeft += step;
          if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
            setDirection('left');
          }
        } else {
          el.scrollLeft -= step;
          if (el.scrollLeft <= 0) {
            setDirection('right');
          }
        }
      }
    }, delay);

    return () => clearInterval(interval);
  }, [direction, isPaused]);

  const getImageSrc = (image: { sanityImage?: any; imageUrl?: string }) => {
    if (image?.sanityImage) {
      return urlFor(image.sanityImage).url();
    }
    if (image?.imageUrl) {
      return image.imageUrl;
    }
    return '';
  };

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-auto space-x-6 py-6 px-4 scroll-smooth scrollbar-hide"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {cards.map((card, index) => {
        const { day, month } = formatDate(card.date);

        return (
          <div
            key={index}
            className="min-w-[280px] max-w-[280px] shrink-0 bg-white rounded shadow hover:shadow-md transition duration-300 flex flex-col "
          >
            <img
              src={getImageSrc(card.image)}
              alt={card.title}
              className="h-44 w-full object-cover rounded-t"
            />

            {/* Stylized Date Block */}
            <div className="px-4 pt-4">
              <div className="inline-block text-center border border-blue-600 rounded-md px-3 py-1">
                <div className="text-lg font-bold text-blue-600 leading-tight">{day}</div>
                <div className="text-xs font-medium text-blue-600 tracking-wider">{month}</div>
              </div>
            </div>

            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
              <div className="mt-4">
                <a
                  href={card.link}
                  className="inline-flex items-center text-[#035ac5ff] hover:text-blue-800 font-medium"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const NewsEventsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');
  const [news, setNews] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    getNews().then(setNews);
    getEvents().then(setEvents);
  }, []);

  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {['news', 'events'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'news' | 'events')}
              className={`px-5 py-2 rounded font-medium transition-colors duration-200
                ${activeTab === tab
                  ? 'bg-[#035ac5ff]/90 text-white'
                  : 'bg-transparent text-blue-1200 hover:bg-blue-100'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Card Section */}
        {activeTab === 'news' ? (
          <ScrollableCardRow cards={news} />
        ) : (
          <ScrollableCardRow cards={events} />
        )}
      </div>
    </section>
  );
};

export default NewsEventsSection;
