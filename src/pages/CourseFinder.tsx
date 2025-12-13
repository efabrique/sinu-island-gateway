import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, BookOpen, GraduationCap, Calendar } from 'lucide-react';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import OptimizedImage from '@/components/common/OptimizedImage';
import { useNavigate } from "react-router-dom";

const CourseFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedFaculty, setSelectedFaculty] = useState('all');
  const [scrolled, setScrolled] = useState(0);
  const [results, setResults] = useState([]); // Added results state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const API_BASE = "http://localhost:7000";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const trimmedQuery = searchQuery.trim();

      if (trimmedQuery.length === 4) {
        // Input is exactly 4 characters → search by programme code, ignore filters
        const res = await fetch(`${API_BASE}/programme_catalogue/code/${trimmedQuery}`);
        if (!res.ok) {
          setResults([]);
          setError('Programme not found');
        } else {
          const data = await res.json();
          console.log("Searching by code:", data.programme_code);
          setResults([data]);
        }

      } else {
        // Otherwise → normal name search with filters
        const params = new URLSearchParams({
          name: trimmedQuery || 'all',
          level: selectedLevel,
          faculty: selectedFaculty,
        });

        const res = await fetch(`${API_BASE}/programme_catalogue/search?${params.toString()}`);
        console.log("Search response status:", res.status);

        if (!res.ok) {
          setResults([]);
          setError('No programmes found');
        } else {
          const data = await res.json();
          setResults(data.data || []);
        }
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch programmes');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const maxPush = 200;
  const imagePush = Math.min(scrolled, maxPush);

  const imageSrc = '/lovable-uploads/DSC05873.jpg';
  const imageAlt = 'Beautiful coastal city at night with illuminated buildings and harbor';

  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative bg-[#023047] h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[98vh] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              transform: `translateY(${imagePush}px)`,
              transition: 'transform 0.2s',
            }}
          >
            <OptimizedImage
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover object-center transition-opacity duration-700"
              objectFit="cover"
              priority={true}
              width={1920}
              height={1080}
            />
          </div>
          {/* Banner Content */}
        </div>

        {/* Search Section */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="shadow-lg border-none">
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#222] mb-4 sm:mb-6">
                    Browse Our Programmes
                  </h2>
                  <form onSubmit={handleSearch}>
                    <div className="grid gap-6">
                      {/* Search Input */}
                      <div>
                        <div className="flex items-center border-2 border-[#0b2c55] rounded-md overflow-hidden">
                          <Input
                            type="text"
                            placeholder="Search by course name or code..."
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
                            <option value="technical_and_trade">Technical & Trade</option>
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
                            <option value="education_humanities">Education & Humanities</option>
                            <option value="science_technology">Science & Technology</option>
                            <option value="business_tourism">Business & Tourism Studies</option>
                            <option value="nursing_medicine_health_science">Nursing, Medicine & Health Sciences</option>
                            <option value="agriculture_forestry_fisheries">Agriculture & Fisheries</option>
                            <option value="tafe">TAFE & TVET</option>
                            <option value="maritime">Maritime</option>
                            <option value="distance_flexible_learning">Distance & Flexible Learning</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>

                  {/* Display Results */}
                  {loading && <p className="mt-4">Loading...</p>}
                  {error && <p className="mt-4 text-red-500">{error}</p>}
                  {results.length > 0 && (
                    <div className="mt-6 space-y-4">
                      {results.map((course, idx) => (
                        <Card
                          key={idx}
                          className="shadow cursor-pointer transition-colors hover:text-blue-600"
                          onClick={() =>
                            navigate(`/programme/${course.programme_code}`, {
                              state: {
                                programme_name: course.programme_name,
                                programme_code: course.programme_code,
                              },
                            })
                          }
                        >
                          <CardContent className="grid grid-cols-2 items-center gap-4">
                            {/* Left side */}
                            <div>
                              <h3 className="font-bold text-lg">
                                {course.programme_name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Program Code : {course.programme_code}
                              </p>
                            </div>

                            {/* Right side */}
                            <div className="text-right font-semibold">
                              {course.programme_credits} Credits
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
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
