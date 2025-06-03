
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ShortCoursesHero from '@/components/short-courses/ShortCoursesHero';
import CourseTypesSection from '@/components/short-courses/CourseTypesSection';
import FeaturedCoursesSection from '@/components/short-courses/FeaturedCoursesSection';
import BenefitsSection from '@/components/short-courses/BenefitsSection';
import UpcomingCoursesSection from '@/components/short-courses/UpcomingCoursesSection';
import EnrollmentProcessSection from '@/components/short-courses/EnrollmentProcessSection';

const ShortCourses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ShortCoursesHero />
        <CourseTypesSection />
        <FeaturedCoursesSection />
        <BenefitsSection />
        <UpcomingCoursesSection />
        <EnrollmentProcessSection />
      </main>
      <Footer />
    </div>
  );
};

export default ShortCourses;
