
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Download, Calendar, HelpCircle, Users, Laptop } from 'lucide-react';

const QuickLinksSection = () => {
  const quickLinks = [
    {
      title: "Library Catalog",
      description: "Search our collection",
      icon: BookOpen,
      color: "bg-[#219ebc]"
    },
    {
      title: "Digital Resources",
      description: "Access databases & e-books",
      icon: Download,
      color: "bg-[#ffb703]"
    },
    {
      title: "Book a Study Room",
      description: "Reserve study spaces",
      icon: Calendar,
      color: "bg-[#8ecae6]"
    },
    {
      title: "Research Help",
      description: "Get expert assistance",
      icon: HelpCircle,
      color: "bg-[#d7a12c]"
    },
    {
      title: "Interlibrary Loans",
      description: "Request external resources",
      icon: Users,
      color: "bg-[#219ebc]"
    },
    {
      title: "Computer Access",
      description: "Use library computers",
      icon: Laptop,
      color: "bg-[#ffb703]"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#082952] mb-4">Quick Access</h2>
          <p className="text-lg text-[#082952] max-w-2xl mx-auto">
            Find what you need quickly with our most popular library services and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className={`${link.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <link.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#082952] mb-2">{link.title}</h3>
                <p className="text-[#082952] opacity-80">{link.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
