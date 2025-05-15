
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, BookOpen, GraduationCap, Calendar } from 'lucide-react';
import ErrorBoundary from '@/components/common/ErrorBoundary';

const CourseFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedFaculty, setSelectedFaculty] = useState('all');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    console.log('Level:', selectedLevel);
    console.log('Faculty:', selectedFaculty);
    // In a real app, this would search the courses database
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-[#0b2c55] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Find Your Course
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Discover programs that will help you achieve your academic and career goals at SINU
              </p>
            </div>
          </div>
        </div>
        
        {/* Search Section */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="shadow-lg border-none">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSearch}>
                    <div className="grid gap-6">
                      {/* Search Input */}
                      <div>
                        <div className="flex items-center border-2 border-[#0b2c55] rounded-md overflow-hidden">
                          <Input
                            type="text"
                            placeholder="Search by course name or keyword"
                            className="border-none text-lg flex-grow focus-visible:ring-0 focus-visible:ring-offset-0"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          <Button 
                            type="submit" 
                            className="bg-[#0b2c55] hover:bg-[#d7a12c] rounded-none h-14 px-6"
                          >
                            <Search className="mr-2" />
                            Search
                          </Button>
                        </div>
                      </div>
                      
                      {/* Filters */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Course Level</label>
                          <select
                            className="w-full border border-gray-300 rounded-md p-3 text-base"
                            value={selectedLevel}
                            onChange={(e) => setSelectedLevel(e.target.value)}
                          >
                            <option value="all">All Levels</option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="postgraduate">Postgraduate</option>
                            <option value="tafe">TAFE & TVET</option>
                            <option value="preparatory">University Preparatory</option>
                            <option value="short">Short Courses</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Faculty/School</label>
                          <select
                            className="w-full border border-gray-300 rounded-md p-3 text-base"
                            value={selectedFaculty}
                            onChange={(e) => setSelectedFaculty(e.target.value)}
                          >
                            <option value="all">All Faculties</option>
                            <option value="education">Education & Humanities</option>
                            <option value="science">Science & Technology</option>
                            <option value="business">Business & Economics</option>
                            <option value="nursing">Nursing & Health Sciences</option>
                            <option value="agriculture">Agriculture & Fisheries</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Browse by Category */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-10 text-[#0b2c55]">
                Browse by Category
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Undergraduate Programs */}
                <Card className="bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-16 w-16 bg-[#8ecae6] rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Undergraduate Programs</h3>
                    <p className="text-gray-600 mb-4">
                      Explore our bachelor's degrees and diplomas across various disciplines
                    </p>
                    <Button variant="outline" className="mt-auto border-[#0b2c55] text-[#0b2c55] hover:bg-[#0b2c55] hover:text-white">
                      View Programs
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Postgraduate Programs */}
                <Card className="bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-16 w-16 bg-[#219ebc] rounded-full flex items-center justify-center mb-4">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Postgraduate Programs</h3>
                    <p className="text-gray-600 mb-4">
                      Advance your career with our master's degrees and graduate certificates
                    </p>
                    <Button variant="outline" className="mt-auto border-[#0b2c55] text-[#0b2c55] hover:bg-[#0b2c55] hover:text-white">
                      View Programs
                    </Button>
                  </CardContent>
                </Card>
                
                {/* TAFE & TVET */}
                <Card className="bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-16 w-16 bg-[#d7a12c] rounded-full flex items-center justify-center mb-4">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">TAFE & TVET Programs</h3>
                    <p className="text-gray-600 mb-4">
                      Gain practical skills with our vocational education and training courses
                    </p>
                    <Button variant="outline" className="mt-auto border-[#0b2c55] text-[#0b2c55] hover:bg-[#0b2c55] hover:text-white">
                      View Programs
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* How to Apply */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8 text-[#0b2c55]">
                How to Apply
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="h-12 w-12 bg-[#0b2c55] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h3 className="font-semibold mb-2">Find Your Course</h3>
                  <p className="text-gray-600">
                    Use our course finder to browse available programs
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="h-12 w-12 bg-[#0b2c55] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h3 className="font-semibold mb-2">Check Entry Requirements</h3>
                  <p className="text-gray-600">
                    Review admission criteria and prerequisites
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="h-12 w-12 bg-[#0b2c55] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h3 className="font-semibold mb-2">Submit Application</h3>
                  <p className="text-gray-600">
                    Apply online through our application portal
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-[#d7a12c] hover:bg-[#0b2c55] text-white px-8">
                  Apply Now
                </Button>
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

export default CourseFinder;
