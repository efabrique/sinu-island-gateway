import React from 'react';
import OptimizedImage from '@/components/common/OptimizedImage';
import heroImage from '@/assets/student-clubs-hero.jpg';

const StudentClubsHero: React.FC = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <OptimizedImage
        src={heroImage}
        alt="Students participating in various club activities and organizations"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Student Clubs & Organizations
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
          Connect with people who share your passions and interests through our vibrant community of student-led clubs and organizations
        </p>
      </div>
    </section>
  );
};

export default StudentClubsHero;