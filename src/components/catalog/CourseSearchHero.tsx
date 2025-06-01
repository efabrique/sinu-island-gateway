
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface CourseSearchHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

const CourseSearchHero = ({ searchQuery, setSearchQuery, onSearch }: CourseSearchHeroProps) => {
  return (
    <div className="bg-[#0b2c55] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Course Catalog</h1>
        <p className="text-lg text-[#8ecae6] mb-8 max-w-3xl">
          Explore our comprehensive range of programs designed to prepare you for success in your chosen career.
        </p>
        <form onSubmit={onSearch} className="max-w-2xl">
          <div className="flex">
            <Input 
              type="text"
              placeholder="Search for courses by name, keyword, or code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-r-none border-r-0 bg-white/95 h-12"
            />
            <Button 
              type="submit"
              className="rounded-l-none bg-[#ffb703] hover:bg-[#d7a12c] text-[#023047] h-12"
            >
              <Search className="mr-1 h-4 w-4" />
              Search
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseSearchHero;
