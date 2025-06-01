import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { ChevronDown, ChevronUp, Search, Filter, BookOpen } from 'lucide-react';

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

const SAMPLE_COURSES = [
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

type FilterState = {
  faculty: string[];
  level: string[];
  studyArea: string[];
  studyMode: string[];
};

const CourseCard = ({ course }: { course: typeof SAMPLE_COURSES[0] }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-[#e0e0e0] hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-start">
      <h3 className="text-xl font-bold text-[#0b2c55] mb-2">{course.title}</h3>
      <span className="bg-[#8ecae6]/30 text-[#023047] text-xs font-medium px-2.5 py-1 rounded">{course.code}</span>
    </div>
    <div className="flex flex-wrap gap-2 mb-3">
      <span className="bg-[#ffb703]/20 text-[#023047] text-xs px-2.5 py-1 rounded">{course.level}</span>
      <span className="bg-[#219ebc]/20 text-[#023047] text-xs px-2.5 py-1 rounded">{course.duration}</span>
    </div>
    <p className="text-[#023047] mb-4 text-sm">{course.description}</p>
    <div className="border-t pt-3 mt-3">
      <p className="text-sm text-[#023047]">
        <strong>Faculty:</strong> {course.faculty}
      </p>
      <p className="text-sm text-[#023047]">
        <strong>Career Opportunities:</strong> {course.career}
      </p>
    </div>
    <Button className="mt-4 w-full bg-[#0b2c55] hover:bg-[#d7a12c]">
      View Course Details
    </Button>
  </div>
);

const FilterSection = ({ 
  title, 
  options, 
  selectedFilters, 
  setSelectedFilters, 
  filterKey 
}: { 
  title: string;
  options: string[];
  selectedFilters: FilterState;
  setSelectedFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  filterKey: keyof FilterState;
}) => {
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
    // In a real app, this would trigger a search request
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
  // For this demo, we're just showing all sample courses
  const filteredCourses = SAMPLE_COURSES;
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of courses section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-[#0b2c55] py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Course Catalog</h1>
            <p className="text-lg text-[#8ecae6] mb-8 max-w-3xl">
              Explore our comprehensive range of programs designed to prepare you for success in your chosen career.
            </p>
            <form onSubmit={handleSearch} className="max-w-2xl">
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
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold text-[#0b2c55]">Filters</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-[#219ebc] hover:text-[#023047] p-0 h-auto"
                    onClick={clearFilters}
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

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8 pt-6 border-t">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                            className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                          />
                        </PaginationItem>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => handlePageChange(page)}
                              isActive={currentPage === page}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                        
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </div>
              
              {/* Study Areas Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-[#0b2c55] mb-4">Browse by Study Area</h2>
                <Tabs defaultValue="all">
                  <TabsList className="grid grid-cols-3 md:grid-cols-6">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="undergrad">Undergraduate</TabsTrigger>
                    <TabsTrigger value="postgrad">Postgraduate</TabsTrigger>
                    <TabsTrigger value="research">Research</TabsTrigger>
                    <TabsTrigger value="vocational">Vocational</TabsTrigger>
                    <TabsTrigger value="short">Short Courses</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {STUDY_AREAS.map((area) => (
                        <div key={area} className="bg-[#8ecae6]/10 p-4 rounded-lg hover:bg-[#8ecae6]/20 transition-colors">
                          <a href="#" className="flex items-center group">
                            <BookOpen className="h-5 w-5 text-[#219ebc] mr-2" />
                            <span className="text-[#023047] group-hover:text-[#0b2c55] font-medium">{area}</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="undergrad" className="pt-6">
                    <p>Undergraduate courses will be shown here.</p>
                  </TabsContent>
                  <TabsContent value="postgrad" className="pt-6">
                    <p>Postgraduate courses will be shown here.</p>
                  </TabsContent>
                  <TabsContent value="research" className="pt-6">
                    <p>Research programs will be shown here.</p>
                  </TabsContent>
                  <TabsContent value="vocational" className="pt-6">
                    <p>Vocational courses will be shown here.</p>
                  </TabsContent>
                  <TabsContent value="short" className="pt-6">
                    <p>Short courses will be shown here.</p>
                  </TabsContent>
                </Tabs>
              </div>
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
