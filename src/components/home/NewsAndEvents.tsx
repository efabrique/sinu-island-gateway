import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

type CardItem = {
  title: string;
  description: string;
  image: string;
  date: string; //e.g. "2025-01-01"
  link?: string;
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return {
    day: date.getDate().toString().padStart(2, '0'),
    month: date.toLocaleString('default', { month: 'short' }).toUpperCase()
  };
};

const newsCards: CardItem[] = [
{
    title: "SINU Researcher Wins International Award",
    date: "May 8, 2025",
    description: "Dr. Sarah Johnson's groundbreaking research on coral reef conservation receives global recognition.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    link: "#"
  },
  {
    title: "New Technology Center Opening Ceremony",
    date: "May 1, 2025",
    description: "The state-of-the-art technology center will enhance learning experiences for students across disciplines.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    link: "#"
  },
  {
    title: "SINU Hosts Pacific Islands Education Summit",
    date: "April 20, 2025",
    description: "Educational leaders from across the Pacific gathered to discuss regional collaboration and innovation.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    link: "#"
  },
  {
    title: 'Campus Renovation Completed',
    description: 'The north wing renovation brings new labs and smart classrooms.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
    date: '2025-01-01',
    link: '#',
  },
  {
    title: 'Scholarship Opportunities',
    description: 'New grants available for undergraduates starting this fall.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
        date: '2025-01-01',

    link: '#',
  },
  {
    title: 'Research Funding Doubled',
    description: 'University commits to supporting innovation and projects.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
        date: '2025-01-01',

    link: '#',
  },
  {
    title: 'Research Funding Doubled',
    description: 'University commits to supporting innovation and projects.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
        date: '2025-01-01',

    link: '#',
  },
  {
    title: 'Research Funding Doubled',
    description: 'University commits to supporting innovation and projects.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
        date: '2025-01-01',

    link: '#',
  },
  {
    title: 'Research Funding Doubled',
    description: 'University commits to supporting innovation and projects.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
        date: '2025-01-01',

    link: '#',
  }
];

const eventCards: CardItem[] = [
    {
    title: "Virtual Open Day",
    date: "2025-04-15",
    description: " 9:00 AM - 3:00 PM Online",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    link: "#"
  },
  {
    title: "Guest Lecture: Climate Change in the Pacific",
    date: "2025-04-20",
    description: " 2:00 PM - 4:00 PM Main Auditorium",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    link: "#"
  },
  {
    title: "Alumni Networking Evening",
    date: "2025-04-25",
    description: " 6:00 PM - 8:00 PM Student Center",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    link: "#"
  },
  {
    title: 'Open Day 2025',
    description: 'Join us to explore our campus, meet staff and attend mini-lectures.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
    date: '2025-01-01',
    link: '#',
  },
  {
    title: 'Annual Science Fair',
    description: 'Showcasing breakthrough student and faculty research.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
    date: '2025-01-01',
    link: '#',
  },
  {
    title: 'Graduation Ceremony',
    description: 'Celebrate the achievements of our latest graduating class.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
    date: '2025-01-01',
    link: '#',
  },
    {
    title: 'Graduation Ceremony',
    description: 'Celebrate the achievements of our latest graduating class.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
    date: '2025-01-01',
    link: '#',
  },
    {
    title: 'Graduation Ceremony',
    description: 'Celebrate the achievements of our latest graduating class.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
    date: '2025-01-01',
    link: '#',
  },
    {
    title: 'Graduation Ceremony',
    description: 'Celebrate the achievements of our latest graduating class.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
    date: '2025-01-01',
    link: '#',
  }
];

const ScrollableCardRow: React.FC<{ cards: CardItem[] }> = ({ cards }) => {
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
            <img src={card.image} alt={card.title} className="h-44 w-full object-cover rounded-t" />

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
                <a href={card.link} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
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
                  ? 'bg-[#082952]/90 text-white'
                  : 'bg-transparent text-blue-1200 hover:bg-blue-100'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Card Section */}
        {activeTab === 'news' ? (
          <ScrollableCardRow cards={newsCards} />
        ) : (
          <ScrollableCardRow cards={eventCards} />
        )}
      </div>
    </section>
  );
};

export default NewsEventsSection;
