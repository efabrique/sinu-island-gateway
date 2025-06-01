
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown, ChevronUp } from 'lucide-react';

export type FilterState = {
  faculty: string[];
  level: string[];
  studyArea: string[];
  studyMode: string[];
};

interface FilterSectionProps {
  title: string;
  options: string[];
  selectedFilters: FilterState;
  setSelectedFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  filterKey: keyof FilterState;
}

const FilterSection = ({ 
  title, 
  options, 
  selectedFilters, 
  setSelectedFilters, 
  filterKey 
}: FilterSectionProps) => {
  const [expanded, setExpanded] = useState(true);
  
  const handleFilterChange = (option: string) => {
    setSelectedFilters(prev => {
      const currentFilters = prev[filterKey];
      if (currentFilters.includes(option)) {
        return {
          ...prev,
          [filterKey]: currentFilters.filter(item => item !== option)
        };
      } else {
        return {
          ...prev,
          [filterKey]: [...currentFilters, option]
        };
      }
    });
  };

  return (
    <div className="mb-6 border-b pb-4">
      <div 
        className="flex justify-between items-center mb-3 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="font-bold text-[#023047]">{title}</h3>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-[#023047]" />
        ) : (
          <ChevronDown className="h-4 w-4 text-[#023047]" />
        )}
      </div>
      
      {expanded && (
        <div className="space-y-2">
          {options.map(option => (
            <div key={option} className="flex items-center">
              <Checkbox 
                id={`${filterKey}-${option.replace(/\s+/g, '-').toLowerCase()}`}
                checked={selectedFilters[filterKey].includes(option)}
                onCheckedChange={() => handleFilterChange(option)}
                className="mr-2"
              />
              <label 
                htmlFor={`${filterKey}-${option.replace(/\s+/g, '-').toLowerCase()}`}
                className="text-sm text-[#023047] cursor-pointer"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSection;
