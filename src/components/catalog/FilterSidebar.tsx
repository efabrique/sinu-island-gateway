
import React from 'react';
import { Button } from '@/components/ui/button';
import FilterSection, { FilterState } from './FilterSection';

const FACULTIES = [
  "Faculty of Agriculture, Forestry & Fisheries",
  "Faculty of Business & Tourism Studies",
  "Faculty of Education & Humanities",
  "Faculty of Nursing, Medicine & Health Sciences",
  "Faculty of Science & Technology",
  "Faculty of Engineering & Technology"
];

const STUDY_LEVELS = ["Certificate", "Diploma", "Bachelor", "Graduate Certificate", "Graduate Diploma", "Master", "PhD"];

const STUDY_AREAS = [
  "Agriculture & Environmental Sciences",
  "Business & Economics",
  "Education & Teaching",
  "Engineering & Technology",
  "Health & Medicine",
  "Humanities & Social Sciences",
  "Law & Justice",
  "Science & Mathematics",
  "Tourism & Hospitality"
];

const STUDY_MODES = ["Face to face", "Online", "Blended", "Research"];

interface FilterSidebarProps {
  selectedFilters: FilterState;
  setSelectedFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onClearFilters: () => void;
}

const FilterSidebar = ({ selectedFilters, setSelectedFilters, onClearFilters }: FilterSidebarProps) => {
  return (
    <div className="lg:w-1/4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-[#0b2c55]">Filters</h2>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-[#219ebc] hover:text-[#023047] p-0 h-auto"
            onClick={onClearFilters}
          >
            Clear all
          </Button>
        </div>
        
        <FilterSection 
          title="Faculty" 
          options={FACULTIES} 
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          filterKey="faculty"
        />
        
        <FilterSection 
          title="Level of Study" 
          options={STUDY_LEVELS} 
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          filterKey="level"
        />
        
        <FilterSection 
          title="Study Area" 
          options={STUDY_AREAS} 
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          filterKey="studyArea"
        />
        
        <FilterSection 
          title="Study Mode" 
          options={STUDY_MODES} 
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          filterKey="studyMode"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
