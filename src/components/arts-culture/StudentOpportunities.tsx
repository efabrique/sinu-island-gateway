import React from 'react';
import { Users, Award, Briefcase, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const StudentOpportunities = () => {
  const opportunities = [
    {
      icon: Users,
      title: "Student Arts Council",
      description: "Lead cultural initiatives and represent student interests in arts programming",
      benefits: ["Leadership Experience", "Event Planning", "Budget Management", "Networking"],
      commitment: "Academic Year",
      application: "September Intake"
    },
    {
      icon: Award,
      title: "Artist-in-Residence Program",
      description: "Work closely with visiting professional artists on collaborative projects",
      benefits: ["Mentorship", "Portfolio Development", "Exhibition Opportunities", "Stipend"],
      commitment: "One Semester",
      application: "Rolling Admissions"
    },
    {
      icon: Briefcase,
      title: "Cultural Internships",
      description: "Gain practical experience with local galleries, theaters, and cultural organizations",
      benefits: ["Work Experience", "Industry Connections", "Academic Credit", "References"],
      commitment: "Summer/Semester",
      application: "Year-round"
    },
    {
      icon: Globe,
      title: "International Exchange",
      description: "Study arts and culture at partner universities across the Pacific region",
      benefits: ["Cultural Immersion", "Academic Credits", "Global Perspective", "Language Skills"],
      commitment: "One Semester",
      application: "February Deadline"
    }
  ];

  const scholarships = [
    {
      name: "Pacific Arts Excellence Scholarship",
      amount: "$2,500",
      criteria: "Outstanding portfolio and academic performance",
      deadline: "March 31"
    },
    {
      name: "Traditional Arts Preservation Grant",
      amount: "$1,500",
      criteria: "Projects focusing on cultural heritage preservation",
      deadline: "June 30"
    },
    {
      name: "Student Exhibition Support Fund",
      amount: "$800",
      criteria: "Students organizing independent exhibitions",
      deadline: "Rolling"
    },
    {
      name: "Community Arts Partnership Award",
      amount: "$1,200",
      criteria: "Collaborative projects with community organizations",
      deadline: "September 15"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Student Opportunities
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            Take your artistic journey to the next level with our comprehensive opportunities for 
            leadership, professional development, and financial support.
          </p>
        </div>

        {/* Leadership & Experience Opportunities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#082952' }}>
            Leadership & Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card 
                key={index}
                className="transition-all duration-300 hover:shadow-lg border"
                style={{ 
                  backgroundColor: '#edf4ff',
                  borderColor: '#8ecae6'
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: '#219ebc' }}
                    >
                      <opportunity.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle style={{ color: '#082952' }}>
                      {opportunity.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4" style={{ color: '#082952' }}>
                    {opportunity.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Benefits:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {opportunity.benefits.map((benefit, idx) => (
                        <div key={idx} className="text-sm flex items-center gap-2" style={{ color: '#082952' }}>
                          <div 
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: '#ffb703' }}
                          ></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between text-sm mb-4">
                    <div>
                      <span style={{ color: '#082952' }}>Commitment: </span>
                      <span className="font-medium" style={{ color: '#d7a12c' }}>
                        {opportunity.commitment}
                      </span>
                    </div>
                    <div>
                      <span style={{ color: '#082952' }}>Apply: </span>
                      <span className="font-medium" style={{ color: '#d7a12c' }}>
                        {opportunity.application}
                      </span>
                    </div>
                  </div>

                  <Button 
                    className="w-full"
                    style={{ 
                      backgroundColor: '#219ebc',
                      borderColor: '#219ebc',
                      color: '#ffffff'
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scholarships & Grants */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#082952' }}>
            Scholarships & Grants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scholarships.map((scholarship, index) => (
              <Card 
                key={index}
                className="transition-all duration-300 hover:shadow-md border"
                style={{ 
                  backgroundColor: '#ffffff',
                  borderColor: '#8ecae6'
                }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold" style={{ color: '#082952' }}>
                      {scholarship.name}
                    </h4>
                    <span 
                      className="text-xl font-bold px-3 py-1 rounded-lg"
                      style={{ 
                        backgroundColor: '#ffb703',
                        color: '#082952'
                      }}
                    >
                      {scholarship.amount}
                    </span>
                  </div>
                  <p className="text-sm mb-3" style={{ color: '#082952' }}>
                    {scholarship.criteria}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span style={{ color: '#082952' }}>Deadline:</span>
                    <span className="font-medium" style={{ color: '#d7a12c' }}>
                      {scholarship.deadline}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Financial Support Info */}
          <div 
            className="mt-12 p-8 rounded-2xl text-center"
            style={{ backgroundColor: '#edf4ff', border: '2px solid #8ecae6' }}
          >
            <h4 className="text-xl font-bold mb-4" style={{ color: '#082952' }}>
              Need Financial Support?
            </h4>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#082952' }}>
              We're committed to making arts education accessible. In addition to these targeted 
              scholarships, students can access general university financial aid, work-study programs, 
              and emergency assistance funds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                style={{ 
                  backgroundColor: '#d7a12c',
                  borderColor: '#d7a12c',
                  color: '#ffffff'
                }}
              >
                Apply for Aid
              </Button>
              <Button 
                variant="outline"
                style={{ 
                  borderColor: '#219ebc',
                  color: '#219ebc'
                }}
              >
                Financial Counseling
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentOpportunities;