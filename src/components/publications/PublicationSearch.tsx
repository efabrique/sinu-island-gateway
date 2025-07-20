import React, { useState } from 'react';
import { Search, Filter, SortDesc, Calendar, User, Tag } from 'lucide-react';

const PublicationSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'marine', label: 'Marine Sciences' },
    { value: 'climate', label: 'Climate Change' },
    { value: 'health', label: 'Public Health' },
    { value: 'social', label: 'Social Sciences' },
    { value: 'education', label: 'Education' },
    { value: 'technology', label: 'Technology' }
  ];

  const years = [
    { value: 'all', label: 'All Years' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'title', label: 'Title A-Z' },
    { value: 'downloads', label: 'Most Downloaded' },
    { value: 'views', label: 'Most Viewed' }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Search Publications
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Find specific research publications using our advanced search and filtering options
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#082952' }} />
              <input
                type="text"
                placeholder="Search publications by title, author, keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-lg border focus:ring-2 focus:ring-opacity-50 focus:ring-[#219ebc]"
                style={{ 
                  backgroundColor: '#ffffff',
                  borderColor: '#8ecae6',
                  color: '#082952'
                }}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#082952' }}>
                <Tag className="w-4 h-4 inline mr-1" />
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-opacity-50"
                style={{ 
                  backgroundColor: '#ffffff',
                  borderColor: '#8ecae6',
                  color: '#082952'
                }}
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#082952' }}>
                <Calendar className="w-4 h-4 inline mr-1" />
                Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-opacity-50"
                style={{ 
                  backgroundColor: '#ffffff',
                  borderColor: '#8ecae6',
                  color: '#082952'
                }}
              >
                {years.map(year => (
                  <option key={year.value} value={year.value}>
                    {year.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#082952' }}>
                <SortDesc className="w-4 h-4 inline mr-1" />
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-opacity-50"
                style={{ 
                  backgroundColor: '#ffffff',
                  borderColor: '#8ecae6',
                  color: '#082952'
                }}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button 
                className="w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 hover:shadow-md"
                style={{ backgroundColor: '#ffb703', color: '#082952' }}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                Apply Filters
              </button>
            </div>
          </div>

          {/* Advanced Search Options */}
          <div className="rounded-lg p-6 mb-8" style={{ backgroundColor: '#ffffff', border: '1px solid #8ecae6' }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#082952' }}>
              Advanced Search Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#082952' }}>
                  <User className="w-4 h-4 inline mr-1" />
                  Author Name
                </label>
                <input
                  type="text"
                  placeholder="Enter author name..."
                  className="w-full p-3 rounded-lg border"
                  style={{ 
                    backgroundColor: '#ffffff',
                    borderColor: '#8ecae6',
                    color: '#082952'
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#082952' }}>
                  Journal/Conference
                </label>
                <input
                  type="text"
                  placeholder="Enter publication venue..."
                  className="w-full p-3 rounded-lg border"
                  style={{ 
                    backgroundColor: '#ffffff',
                    borderColor: '#8ecae6',
                    color: '#082952'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#082952' }}>
              Quick Access
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <button 
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md"
                style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
              >
                Latest Publications
              </button>
              <button 
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md"
                style={{ backgroundColor: '#8ecae6', color: '#082952' }}
              >
                Most Downloaded
              </button>
              <button 
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md"
                style={{ backgroundColor: '#d7a12c', color: '#082952' }}
              >
                Featured Research
              </button>
              <button 
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md"
                style={{ backgroundColor: '#ffb703', color: '#082952' }}
              >
                Open Access Only
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationSearch;