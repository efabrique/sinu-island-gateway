
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CourseCard, { Course } from '@/components/catalog/CourseCard';
import FilterSidebar from '@/components/catalog/FilterSidebar';
import CoursePagination from '@/components/catalog/CoursePagination';
import CourseSearchHero from '@/components/catalog/CourseSearchHero';
import StudyAreaTabs from '@/components/catalog/StudyAreaTabs';
import { FilterState } from '@/components/catalog/FilterSection';

const SAMPLE_COURSES: Course[] = [
  {
    id: 1,
    title: "Bachelor of Education (Primary)",
    level: "Bachelor",
    duration: "4 years",
    faculty: "Faculty of Education & Humanities",
    description: "Prepare to become a primary school teacher with a comprehensive understanding of curriculum, teaching methodologies, and child development.",
    career: "Primary School Teacher, Education Administrator",
    code: "BED-PRI"
  },
  {
    id: 2,
    title: "Diploma in Business Management",
    level: "Diploma",
    duration: "2 years",
    faculty: "Faculty of Business & Tourism Studies",
    description: "Develop essential business skills including management, accounting, marketing, and entrepreneurship.",
    career: "Business Administrator, Office Manager, Small Business Owner",
    code: "DBM"
  },
  {
    id: 3,
    title: "Certificate III in Agriculture",
    level: "Certificate",
    duration: "1 year",
    faculty: "Faculty of Agriculture, Forestry & Fisheries",
    description: "Learn practical skills in crop production, livestock management, and sustainable farming practices.",
    career: "Farm Hand, Agricultural Technician",
    code: "CERT3-AGR"
  },
  {
    id: 4,
    title: "Bachelor of Nursing",
    level: "Bachelor",
    duration: "4 years",
    faculty: "Faculty of Nursing, Medicine & Health Sciences",
    description: "Gain the knowledge and clinical skills required to become a registered nurse in the Solomon Islands.",
    career: "Registered Nurse, Community Health Worker",
    code: "BN"
  },
  {
    id: 5,
    title: "Diploma in Information Technology",
    level: "Diploma",
    duration: "2 years",
    faculty: "Faculty of Science & Technology",
    description: "Develop expertise in computer systems, networking, programming, and IT support.",
    career: "IT Support Technician, Network Administrator",
    code: "DIT"
  },
  {
    id: 6,
    title: "Bachelor of Science in Marine Biology",
    level: "Bachelor",
    duration: "3 years",
    faculty: "Faculty of Science & Technology",
    description: "Study the marine ecosystems of the Solomon Islands and develop skills in marine conservation and research.",
    career: "Marine Biologist, Conservation Officer, Research Assistant",
    code: "BSC-MB"
  }
];

const CourseCatalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    faculty: [],
    level: [],
    studyArea: [],
    studyMode: []
  });
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const clearFilters = () => {
    setSelectedFilters({
      faculty: [],
      level: [],
      studyArea: [],
      studyMode: []
    });
  };

  // In a real application, we would filter based on the selected filters
  const filteredCourses = SAMPLE_COURSES;
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      
      <main className="flex-grow">
        <CourseSearchHero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <FilterSidebar 
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              onClearFilters={clearFilters}
            />
            
            {/* Course Listings */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <div className="mb-4 sm:mb-0">
                    <h2 className="text-lg font-bold text-[#0b2c55]">
                      {filteredCourses.length} courses found
                    </h2>
                    <p className="text-sm text-[#023047]">
                      Showing {startIndex + 1}-{Math.min(endIndex, filteredCourses.length)} of {filteredCourses.length} courses
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <div className="flex items-center">
                      <span className="text-sm text-[#023047] mr-2">Sort by:</span>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Relevance" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="relevance">Relevance</SelectItem>
                          <SelectItem value="a-z">Name (A-Z)</SelectItem>
                          <SelectItem value="z-a">Name (Z-A)</SelectItem>
                          <SelectItem value="duration">Duration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-sm text-[#023047] mr-2">View:</span>
                      <div className="flex rounded-md border shadow-sm">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`px-3 py-1 ${viewMode === 'grid' ? 'bg-[#8ecae6]/20' : ''}`}
                          onClick={() => setViewMode('grid')}
                        >
                          Grid
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`px-3 py-1 ${viewMode === 'list' ? 'bg-[#8ecae6]/20' : ''}`}
                          onClick={() => setViewMode('list')}
                        >
                          List
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' : 'grid-cols-1'} gap-6`}>
                  {currentCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>

                <CoursePagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
              
              <StudyAreaTabs />
            </div>
          </div>
        </div>
      </main>
      
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default CourseCatalog;
