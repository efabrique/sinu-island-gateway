import React from 'react';
import { Music, Mic, Users, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PerformingArts = () => {
  const programs = [
    {
      icon: Music,
      title: "SINU Orchestra",
      type: "Music Ensemble",
      description: "Student and faculty orchestra performing classical and contemporary Pacific music",
      meetings: "Tue & Thu, 7:00 PM",
      experience: "All Levels Welcome",
      upcoming: "Annual Concert - November"
    },
    {
      icon: Mic,
      title: "Drama Society",
      type: "Theater Group",
      description: "Student-led theater productions featuring local and international works",
      meetings: "Mon & Wed, 6:30 PM",
      experience: "Beginners Encouraged",
      upcoming: "Spring Musical - October"
    },
    {
      icon: Users,
      title: "Cultural Dance Troupe",
      type: "Traditional Arts",
      description: "Preserving and performing traditional Solomon Islands dance and music",
      meetings: "Fri & Sat, 5:00 PM",
      experience: "Cultural Immersion",
      upcoming: "Heritage Festival - December"
    },
    {
      icon: Star,
      title: "Contemporary Arts Collective",
      type: "Modern Performance",
      description: "Experimental and contemporary performance art exploring modern themes",
      meetings: "Wed & Fri, 7:30 PM",
      experience: "Intermediate+",
      upcoming: "Student Showcase - January"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Music Ensemble': return '#ffb703';
      case 'Theater Group': return '#219ebc';
      case 'Traditional Arts': return '#d7a12c';
      case 'Modern Performance': return '#8ecae6';
      default: return '#8ecae6';
    }
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Performing Arts Programs
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            Join our vibrant performing arts community where students explore music, theater, dance, 
            and contemporary performance in both traditional Pacific and modern contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#219ebc' }}
                  >
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge 
                    variant="outline"
                    style={{ 
                      backgroundColor: getTypeColor(program.type),
                      color: '#ffffff',
                      borderColor: getTypeColor(program.type)
                    }}
                  >
                    {program.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl" style={{ color: '#082952' }}>
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="mb-4" style={{ color: '#082952' }}>
                  {program.description}
                </p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: '#082952' }}>Meetings:</span>
                    <span style={{ color: '#082952' }}>{program.meetings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#082952' }}>Experience:</span>
                    <span style={{ color: '#082952' }}>{program.experience}</span>
                  </div>
                  <div className="pt-2 border-t" style={{ borderColor: '#8ecae6' }}>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold" style={{ color: '#082952' }}>Upcoming:</span>
                      <span className="font-medium" style={{ color: '#d7a12c' }}>
                        {program.upcoming}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div 
            className="max-w-4xl mx-auto p-8 rounded-2xl"
            style={{ backgroundColor: '#ffffff', border: '2px solid #8ecae6' }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#082952' }}>
              Ready to Perform?
            </h3>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#082952' }}>
              Whether you're a seasoned performer or trying something new, our performing arts programs 
              welcome students of all backgrounds and skill levels. Join us and discover your creative voice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                style={{ 
                  backgroundColor: '#219ebc',
                  borderColor: '#219ebc',
                  color: '#ffffff'
                }}
              >
                Join a Group
              </Button>
              <Button 
                variant="outline"
                style={{ 
                  borderColor: '#d7a12c',
                  color: '#d7a12c'
                }}
              >
                Audition Information
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformingArts;