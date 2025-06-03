
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users } from 'lucide-react';

const FeaturedCoursesSection = () => {
  const featuredCourses = [
    {
      title: "Digital Marketing Fundamentals",
      description: "Learn essential digital marketing strategies including SEO, social media, and content marketing.",
      duration: "6 weeks",
      startDate: "July 15, 2024",
      participants: "25 max",
      price: "$450",
      category: "Technology",
      level: "Beginner"
    },
    {
      title: "Project Management Essentials",
      description: "Master project planning, execution, and team leadership with practical tools and techniques.",
      duration: "8 weeks",
      startDate: "August 5, 2024",
      participants: "20 max",
      price: "$650",
      category: "Business",
      level: "Intermediate"
    },
    {
      title: "Sustainable Agriculture Practices",
      description: "Explore modern sustainable farming techniques and environmental conservation methods.",
      duration: "4 weeks",
      startDate: "July 22, 2024",
      participants: "30 max",
      price: "$380",
      category: "Agriculture",
      level: "All Levels"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Discover our most popular short courses that are helping professionals 
            advance their careers and develop new skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-[#8ecae6] text-[#082952]">
                    {course.category}
                  </Badge>
                  <Badge variant="outline" className="border-[#219ebc] text-[#219ebc]">
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-[#082952]">{course.title}</CardTitle>
                <CardDescription className="text-[#082952]">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-[#082952]">
                    <Clock className="h-4 w-4 mr-2 text-[#219ebc]" />
                    Duration: {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-[#082952]">
                    <Calendar className="h-4 w-4 mr-2 text-[#219ebc]" />
                    Starts: {course.startDate}
                  </div>
                  <div className="flex items-center text-sm text-[#082952]">
                    <Users className="h-4 w-4 mr-2 text-[#219ebc]" />
                    {course.participants}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#219ebc]">{course.price}</span>
                  <Button className="bg-[#219ebc] hover:bg-[#219ebc]/90 text-white">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" className="border-[#082952] text-[#082952] hover:bg-[#082952] hover:text-white px-8 py-3 text-lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
