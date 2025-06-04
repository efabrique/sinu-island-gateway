
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, BookOpen, Users, Clock } from 'lucide-react';

const LibraryHero = () => {
  return (
    <section className="bg-[#edf4ff] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            SINU Library Services
          </h1>
          <p className="text-lg text-[#082952] mb-8 max-w-2xl mx-auto">
            Discover our comprehensive collection of resources, study spaces, and support services 
            designed to enhance your academic journey at Solomon Islands National University.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex">
              <input
                type="text"
                placeholder="Search library catalog, databases, and resources..."
                className="flex-1 px-4 py-3 border border-[#8ecae6] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#219ebc]"
              />
              <Button className="bg-[#219ebc] hover:bg-[#082952] px-6 py-3 rounded-r-lg">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <BookOpen className="h-8 w-8 text-[#219ebc] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#082952]">50,000+</div>
                <div className="text-sm text-[#082952]">Books & Journals</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <Users className="h-8 w-8 text-[#219ebc] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#082952]">24/7</div>
                <div className="text-sm text-[#082952]">Online Access</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <Clock className="h-8 w-8 text-[#219ebc] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#082952]">Mon-Fri</div>
                <div className="text-sm text-[#082952]">8AM - 10PM</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <Search className="h-8 w-8 text-[#219ebc] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#082952]">100+</div>
                <div className="text-sm text-[#082952]">Databases</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryHero;
