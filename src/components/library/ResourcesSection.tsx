
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Globe, Book, FileText, Video, Headphones } from 'lucide-react';

const ResourcesSection = () => {
  const resources = [
    {
      title: "Academic Databases",
      description: "Access to scholarly articles, journals, and research papers from leading academic publishers.",
      icon: Database,
      count: "100+ databases",
      color: "bg-[#219ebc]"
    },
    {
      title: "E-Books Collection",
      description: "Thousands of digital books available 24/7 from any device on or off campus.",
      icon: Book,
      count: "25,000+ e-books",
      color: "bg-[#ffb703]"
    },
    {
      title: "Digital Archives",
      description: "Historical documents, photographs, and materials related to Solomon Islands heritage.",
      icon: FileText,
      count: "5,000+ documents",
      color: "bg-[#8ecae6]"
    },
    {
      title: "Multimedia Resources",
      description: "Educational videos, documentaries, and audio materials for diverse learning needs.",
      icon: Video,
      count: "1,000+ videos",
      color: "bg-[#d7a12c]"
    },
    {
      title: "Online Journals",
      description: "Current and archived issues of academic and professional journals across all disciplines.",
      icon: Globe,
      count: "10,000+ journals",
      color: "bg-[#219ebc]"
    },
    {
      title: "Audio Collections",
      description: "Language learning materials, lectures, and audio books for enhanced learning.",
      icon: Headphones,
      count: "500+ audio items",
      color: "bg-[#ffb703]"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#082952] mb-4">Digital Resources</h2>
          <p className="text-lg text-[#082952] max-w-2xl mx-auto">
            Explore our extensive collection of digital resources available to support your academic and research needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`${resource.color} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <resource.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-[#219ebc] bg-[#219ebc]/10 px-2 py-1 rounded">
                    {resource.count}
                  </span>
                </div>
                <CardTitle className="text-[#082952] mt-4">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] opacity-80 mb-4">{resource.description}</p>
                <Button className="bg-[#219ebc] hover:bg-[#082952] text-white w-full">
                  Access Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952]">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
