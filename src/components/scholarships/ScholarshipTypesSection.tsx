
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Globe, Users, Briefcase } from 'lucide-react';

const ScholarshipTypesSection = () => {
  const scholarshipTypes = [
    {
      icon: GraduationCap,
      title: "Academic Merit Scholarships",
      description: "Awarded to students with outstanding academic performance and potential.",
      amount: "Up to $5,000 per year",
      color: "#219ebc"
    },
    {
      icon: Globe,
      title: "International Student Scholarships",
      description: "Supporting international students to study at SINU with reduced financial burden.",
      amount: "Up to $3,000 per year",
      color: "#d7a12c"
    },
    {
      icon: Users,
      title: "Community Leadership Scholarships",
      description: "For students demonstrating exceptional leadership in their communities.",
      amount: "Up to $4,000 per year",
      color: "#8ecae6"
    },
    {
      icon: Briefcase,
      title: "Industry Partnership Scholarships",
      description: "Funded by industry partners to support students in specific fields.",
      amount: "Varies by partner",
      color: "#ffb703"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Types of Scholarships
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            We offer various scholarship programs to support students from diverse backgrounds and academic pursuits.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scholarshipTypes.map((scholarship, index) => {
            const IconComponent = scholarship.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full w-16 h-16 flex items-center justify-center" style={{ backgroundColor: scholarship.color }}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-[#082952] text-lg">{scholarship.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-[#082952] mb-4">
                    {scholarship.description}
                  </CardDescription>
                  <div className="font-semibold text-[#219ebc] mb-4">
                    {scholarship.amount}
                  </div>
                  <Button variant="outline" size="sm" className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc]/10">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipTypesSection;
