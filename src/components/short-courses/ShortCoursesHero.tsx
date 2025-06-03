
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Award } from 'lucide-react';
import OptimizedImage from '@/components/common/OptimizedImage';

const ShortCoursesHero = () => {
  return (
    <section className="bg-[#edf4ff] py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Professional development workshop"
          className="w-full h-full"
          objectFit="cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#ffb703] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-10 w-10 text-[#082952]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Short Courses at SINU
          </h1>
          
          <p className="text-xl text-[#082952] mb-8 max-w-3xl mx-auto">
            Advance your career and expand your knowledge with our flexible short courses. 
            Learn new skills, gain professional certifications, and stay ahead in your field 
            with courses designed for working professionals and lifelong learners.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <Clock className="h-8 w-8 text-[#219ebc] mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-[#082952] mb-1">Flexible Duration</h3>
              <p className="text-[#082952] text-sm">From 1 day to 12 weeks</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <Award className="h-8 w-8 text-[#219ebc] mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-[#082952] mb-1">Certification</h3>
              <p className="text-[#082952] text-sm">Industry-recognized credentials</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <BookOpen className="h-8 w-8 text-[#219ebc] mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-[#082952] mb-1">Expert-Led</h3>
              <p className="text-[#082952] text-sm">Taught by industry professionals</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#219ebc] hover:bg-[#219ebc]/90 text-white px-8 py-3 text-lg">
              Browse All Courses
            </Button>
            <Button variant="outline" className="border-[#082952] text-[#082952] hover:bg-[#082952] hover:text-white px-8 py-3 text-lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortCoursesHero;
