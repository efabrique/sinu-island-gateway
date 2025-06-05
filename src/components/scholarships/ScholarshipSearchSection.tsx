
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

const ScholarshipSearchSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#082952] text-center mb-8">
            Find Your Scholarship
          </h2>
          <div className="bg-[#8ecae6]/20 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Search scholarships..." 
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <select className="px-3 py-2 border border-gray-300 rounded-md">
                <option>Study Level</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
                <option>PhD</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-md">
                <option>Field of Study</option>
                <option>Arts & Humanities</option>
                <option>Business</option>
                <option>Science & Technology</option>
                <option>Education</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#219ebc] hover:bg-[#219ebc]/90 text-white">
                <Search className="mr-2 h-4 w-4" />
                Search Scholarships
              </Button>
              <Button variant="outline" className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc]/10">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipSearchSection;
