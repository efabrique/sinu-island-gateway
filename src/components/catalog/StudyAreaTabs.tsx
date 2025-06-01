
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen } from 'lucide-react';

const STUDY_AREAS = [
  "Agriculture & Environmental Sciences",
  "Business & Economics",
  "Education & Teaching",
  "Engineering & Technology",
  "Health & Medicine",
  "Humanities & Social Sciences",
  "Law & Justice",
  "Science & Mathematics",
  "Tourism & Hospitality"
];

const StudyAreaTabs = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-[#0b2c55] mb-4">Browse by Study Area</h2>
      <Tabs defaultValue="all">
        <TabsList className="grid grid-cols-3 md:grid-cols-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="undergrad">Undergraduate</TabsTrigger>
          <TabsTrigger value="postgrad">Postgraduate</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="vocational">Vocational</TabsTrigger>
          <TabsTrigger value="short">Short Courses</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STUDY_AREAS.map((area) => (
              <div key={area} className="bg-[#8ecae6]/10 p-4 rounded-lg hover:bg-[#8ecae6]/20 transition-colors">
                <a href="#" className="flex items-center group">
                  <BookOpen className="h-5 w-5 text-[#219ebc] mr-2" />
                  <span className="text-[#023047] group-hover:text-[#0b2c55] font-medium">{area}</span>
                </a>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="undergrad" className="pt-6">
          <p>Undergraduate courses will be shown here.</p>
        </TabsContent>
        <TabsContent value="postgrad" className="pt-6">
          <p>Postgraduate courses will be shown here.</p>
        </TabsContent>
        <TabsContent value="research" className="pt-6">
          <p>Research programs will be shown here.</p>
        </TabsContent>
        <TabsContent value="vocational" className="pt-6">
          <p>Vocational courses will be shown here.</p>
        </TabsContent>
        <TabsContent value="short" className="pt-6">
          <p>Short courses will be shown here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyAreaTabs;
