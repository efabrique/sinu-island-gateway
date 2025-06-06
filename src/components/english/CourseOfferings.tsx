
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, Users, BookOpen } from 'lucide-react';

const CourseOfferings = () => {
  const courses = [
    {
      title: "General English",
      level: "Beginner to Advanced",
      duration: "10-20 weeks",
      hours: "20 hours/week",
      color: "#ffb703",
      description: "Build fundamental English skills in speaking, listening, reading, and writing",
      features: ["Interactive lessons", "Real-world communication", "Cultural activities", "Progress assessments"]
    },
    {
      title: "Academic English",
      level: "Intermediate to Advanced",
      duration: "15-30 weeks",
      hours: "25 hours/week",
      color: "#219ebc",
      description: "Develop academic English skills for university study and research",
      features: ["Essay writing", "Research skills", "Presentation techniques", "Critical thinking"]
    },
    {
      title: "IELTS Preparation",
      level: "Intermediate+",
      duration: "8-12 weeks",
      hours: "15 hours/week",
      color: "#8ecae6",
      description: "Intensive preparation for the IELTS examination",
      features: ["Test strategies", "Practice tests", "Individual feedback", "Score improvement"]
    },
    {
      title: "English for Specific Purposes",
      level: "Intermediate+",
      duration: "12-16 weeks",
      hours: "18 hours/week",
      color: "#d7a12c",
      description: "Specialized English for specific academic or professional fields",
      features: ["Field-specific vocabulary", "Professional communication", "Industry contexts", "Practical applications"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Course Offerings
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Choose from our range of English language courses designed to meet your specific needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-shadow bg-[#edf4ff]" style={{ borderColor: course.color }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-[#082952] text-xl">{course.title}</CardTitle>
                    <Badge style={{ backgroundColor: course.color, color: '#082952' }}>
                      {course.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952] mb-4">{course.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <Calendar className="h-5 w-5 mx-auto mb-1" style={{ color: course.color }} />
                      <p className="text-xs text-[#082952] font-medium">{course.duration}</p>
                    </div>
                    <div className="text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1" style={{ color: course.color }} />
                      <p className="text-xs text-[#082952] font-medium">{course.hours}</p>
                    </div>
                    <div className="text-center">
                      <Users className="h-5 w-5 mx-auto mb-1" style={{ color: course.color }} />
                      <p className="text-xs text-[#082952] font-medium">Max 15</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#082952] mb-2 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" style={{ color: course.color }} />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-[#082952]">
                          <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: course.color }}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOfferings;
