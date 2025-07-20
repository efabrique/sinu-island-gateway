import React from 'react';
import { GraduationCap, Palette, Trophy, Globe, Briefcase, Music } from 'lucide-react';

export const EventCategories = () => {
  const categories = [
    {
      icon: GraduationCap,
      title: "Academic Events",
      description: "Lectures, seminars, conferences, and academic celebrations",
      count: "25+ events",
      examples: ["Guest lectures", "Research presentations", "Award ceremonies", "Graduation events"]
    },
    {
      icon: Palette,
      title: "Arts & Culture",
      description: "Creative performances, exhibitions, and cultural celebrations",
      count: "20+ events",
      examples: ["Art exhibitions", "Theater performances", "Cultural festivals", "Music concerts"]
    },
    {
      icon: Trophy,
      title: "Sports & Recreation",
      description: "Athletic competitions, fitness programs, and recreational activities",
      count: "30+ events",
      examples: ["Intramural sports", "Fitness challenges", "Tournaments", "Outdoor adventures"]
    },
    {
      icon: Globe,
      title: "International Events",
      description: "Global perspectives, cultural exchange, and international programming",
      count: "15+ events",
      examples: ["International fairs", "Cultural exchanges", "Language events", "Global forums"]
    },
    {
      icon: Briefcase,
      title: "Professional Development",
      description: "Career-focused events, networking, and skill-building workshops",
      count: "18+ events",
      examples: ["Career fairs", "Networking events", "Skill workshops", "Industry panels"]
    },
    {
      icon: Music,
      title: "Social & Entertainment",
      description: "Fun social gatherings, entertainment, and community-building events",
      count: "40+ events",
      examples: ["Movie nights", "Dance parties", "Game tournaments", "Social mixers"]
    }
  ];

  return (
    <section style={{ backgroundColor: '#edf4ff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 style={{ color: '#082952' }} className="text-4xl font-bold mb-6">
            Event Categories
          </h2>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            Explore our diverse range of events designed to enrich your university experience 
            across academics, arts, sports, culture, and professional development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6' }}
              className="border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center mb-6">
                <div 
                  style={{ backgroundColor: '#219ebc' }} 
                  className="w-14 h-14 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <category.icon style={{ color: '#ffffff' }} className="w-7 h-7" />
                </div>
                <div>
                  <h3 style={{ color: '#082952' }} className="text-lg font-semibold">
                    {category.title}
                  </h3>
                  <span 
                    style={{ backgroundColor: '#ffb703', color: '#082952' }}
                    className="text-xs px-2 py-1 rounded-full font-medium"
                  >
                    {category.count}
                  </span>
                </div>
              </div>
              
              <p style={{ color: '#219ebc' }} className="mb-6 leading-relaxed">
                {category.description}
              </p>
              
              <div className="space-y-2">
                <h4 style={{ color: '#082952' }} className="text-sm font-semibold mb-3">
                  Examples:
                </h4>
                {category.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center">
                    <div 
                      style={{ backgroundColor: '#8ecae6' }} 
                      className="w-2 h-2 rounded-full mr-3"
                    />
                    <span style={{ color: '#082952' }} className="text-sm">
                      {example}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t" style={{ borderColor: '#8ecae6' }}>
                <button 
                  style={{ color: '#219ebc' }}
                  className="text-sm font-semibold hover:underline group-hover:translate-x-1 transition-transform duration-300"
                >
                  Browse {category.title} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};