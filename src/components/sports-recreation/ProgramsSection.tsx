import React from 'react';
import { GraduationCap, Users2, Star, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Learn to Swim",
      level: "Beginner",
      description: "Comprehensive swimming lessons for all ages and skill levels",
      duration: "8 weeks",
      schedule: "Mon, Wed, Fri",
      price: "$120"
    },
    {
      icon: Users2,
      title: "Group Fitness Classes",
      level: "All Levels",
      description: "Yoga, Pilates, Zumba, HIIT, and strength training classes",
      duration: "Ongoing",
      schedule: "Daily",
      price: "$15/class"
    },
    {
      icon: Star,
      title: "Personal Training",
      level: "All Levels",
      description: "One-on-one training sessions with certified fitness professionals",
      duration: "Flexible",
      schedule: "By appointment",
      price: "$60/session"
    },
    {
      icon: Clock,
      title: "Lunchtime Activities",
      level: "All Levels",
      description: "Quick fitness sessions designed for busy students and staff",
      duration: "30-45 min",
      schedule: "12-1pm",
      price: "Free"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return '#ffb703';
      case 'All Levels': return '#219ebc';
      default: return '#8ecae6';
    }
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Programs & Activities
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            Join our diverse range of programs designed to help you achieve your fitness goals, 
            learn new skills, and stay motivated throughout your university journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="h-full transition-all duration-300 hover:shadow-lg border"
              style={{ 
                backgroundColor: '#ffffff',
                borderColor: '#8ecae6'
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#219ebc' }}
                  >
                    <program.icon className="h-5 w-5 text-white" />
                  </div>
                  <Badge 
                    variant="outline"
                    style={{ 
                      backgroundColor: getLevelColor(program.level),
                      color: '#ffffff',
                      borderColor: getLevelColor(program.level)
                    }}
                  >
                    {program.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg" style={{ color: '#082952' }}>
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm mb-4" style={{ color: '#082952' }}>
                  {program.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: '#082952' }}>Duration:</span>
                    <span style={{ color: '#082952' }}>{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#082952' }}>Schedule:</span>
                    <span style={{ color: '#082952' }}>{program.schedule}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#082952' }}>Price:</span>
                    <span className="font-semibold" style={{ color: '#d7a12c' }}>
                      {program.price}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;