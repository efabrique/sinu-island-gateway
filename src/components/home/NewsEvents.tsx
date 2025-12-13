
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    title: "SINU Researcher Wins International Award",
    date: "May 8, 2025",
    summary: "Dr. Sarah Johnson's groundbreaking research on coral reef conservation receives global recognition.",
    link: "#"
  },
  {
    title: "New Technology Center Opening Ceremony",
    date: "May 1, 2025",
    summary: "The state-of-the-art technology center will enhance learning experiences for students across disciplines.",
    link: "#"
  },
  {
    title: "SINU Hosts Pacific Islands Education Summit",
    date: "April 20, 2025",
    summary: "Educational leaders from across the Pacific gathered to discuss regional collaboration and innovation.",
    link: "#"
  }
];

const events = [
  {
    title: "Virtual Open Day",
    date: "May 15, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Online",
    link: "#"
  },
  {
    title: "Guest Lecture: Climate Change in the Pacific",
    date: "May 20, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Main Auditorium",
    link: "#"
  },
  {
    title: "Alumni Networking Evening",
    date: "May 25, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Student Center",
    link: "#"
  }
];

const NewsEvents = () => {
  return (
    <section className="py-16 bg-[#8ecae6]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* News Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#219ebc]">Latest News</h2>
              <Button variant="link" className="text-[#219ebc]">
                All News <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-6">
              {news.map((item, index) => (
                <Card key={index} className="border-[#8ecae6]/30">
                  <CardHeader className="pb-2">
                    <div className="text-sm text-[#023047]/70 mb-1">{item.date}</div>
                    <CardTitle className="text-lg text-[#023047]">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#023047]/80">{item.summary}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0 h-auto text-[#219ebc]">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Events Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#219ebc]">Upcoming Events</h2>
              <Button variant="link" className="text-[#219ebc]">
                All Events <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card key={index} className="border-[#222]">
                  <CardHeader className="pb-2">
                    <div className="flex items-center text-sm text-[#023047]/70 mb-1">
                      <Calendar className="mr-1 h-4 w-4" />
                      {event.date} | {event.time}
                    </div>
                    <CardTitle className="text-lg text-[#023047]">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#023047]/80">Location: {event.location}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0 h-auto text-[#219ebc]">
                      Event Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
