
import React from 'react';
import { Button } from '@/components/ui/button';

export type Course = {
  id: number;
  title: string;
  level: string;
  duration: string;
  faculty: string;
  description: string;
  career: string;
  code: string;
};

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => (
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

export default CourseCard;
