
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';

const UpcomingCoursesSection = () => {
  const upcomingCourses = [
    {
      title: "Introduction to Data Analysis",
      date: "July 8-10, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "SINU Main Campus",
      spots: "8 spots remaining",
      price: "$290"
    },
    {
      title: "Small Business Finance",
      date: "July 15-16, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Online",
      spots: "12 spots remaining",
      price: "$180"
    },
    {
      title: "Public Speaking & Presentation",
      date: "July 20, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "SINU Main Campus",
      spots: "5 spots remaining",
      price: "$120"
    },
    {
      title: "Sustainable Tourism Development",
      date: "July 25-26, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "SINU Main Campus",
      spots: "15 spots remaining",
      price: "$250"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Upcoming Courses
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Don't miss out on these upcoming short courses. Register early to secure your spot 
            and start building new skills this month.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingCourses.map((course, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-[#082952]">{course.title}</CardTitle>
                <CardDescription className="space-y-2">
                  <div className="flex items-center text-[#082952]">
                    <Calendar className="h-4 w-4 mr-2 text-[#219ebc]" />
                    {course.date}
                  </div>
                  <div className="flex items-center text-[#082952]">
                    <Clock className="h-4 w-4 mr-2 text-[#219ebc]" />
                    {course.time}
                  </div>
                  <div className="flex items-center text-[#082952]">
                    <MapPin className="h-4 w-4 mr-2 text-[#219ebc]" />
                    {course.location}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-[#219ebc] font-medium">{course.spots}</span>
                  <span className="text-2xl font-bold text-[#219ebc]">{course.price}</span>
                </div>
                <Button className="w-full bg-[#219ebc] hover:bg-[#219ebc]/90 text-white">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" className="border-[#082952] text-[#082952] hover:bg-[#082952] hover:text-white px-8 py-3 text-lg">
            View Full Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingCoursesSection;
