import React from 'react';
import { Heart, Users2, Handshake, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CommunityEngagement = () => {
  const initiatives = [
    {
      icon: Heart,
      title: "Cultural Outreach Program",
      description: "Students partner with local schools to teach traditional arts and cultural practices",
      impact: "500+ students reached annually",
      activities: ["School Workshops", "Teacher Training", "Cultural Presentations", "Art Supplies Donation"]
    },
    {
      icon: Users2,
      title: "Community Art Center",
      description: "Free arts programming for families and community members of all ages",
      impact: "200+ families participate monthly",
      activities: ["Family Art Days", "Senior Citizen Programs", "Youth After-School Classes", "Community Exhibitions"]
    },
    {
      icon: Handshake,
      title: "Artist Mentorship Network",
      description: "Connecting students with established local artists for guidance and collaboration",
      impact: "50+ mentorship pairs annually",
      activities: ["One-on-One Mentoring", "Group Critiques", "Professional Development", "Exhibition Opportunities"]
    },
    {
      icon: Target,
      title: "Cultural Preservation Project",
      description: "Documenting and preserving traditional Solomon Islands arts for future generations",
      impact: "100+ traditional techniques documented",
      activities: ["Elder Interviews", "Technique Documentation", "Digital Archive", "Educational Materials"]
    }
  ];

  const partnerships = [
    {
      name: "National Art Gallery of Solomon Islands",
      type: "Exhibition Partner",
      collaboration: "Student showcases and joint exhibitions"
    },
    {
      name: "Honiara Cultural Centre",
      type: "Performance Venue",
      collaboration: "Student performances and cultural events"
    },
    {
      name: "Solomon Islands Broadcasting Corporation",
      type: "Media Partner",
      collaboration: "Student media projects and cultural programming"
    },
    {
      name: "Traditional Craft Cooperatives",
      type: "Learning Partner",
      collaboration: "Authentic traditional arts instruction"
    },
    {
      name: "Pacific Arts Association",
      type: "Regional Network",
      collaboration: "Regional exchanges and collaborative projects"
    },
    {
      name: "Local Tourism Board",
      type: "Promotion Partner",
      collaboration: "Cultural tourism and arts promotion"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Community Engagement
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            Our arts and culture programs extend beyond campus walls, creating meaningful connections 
            with the broader Solomon Islands community and preserving cultural heritage for future generations.
          </p>
        </div>

        {/* Community Initiatives */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#082952' }}>
            Community Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card 
                key={index}
                className="transition-all duration-300 hover:shadow-lg border"
                style={{ 
                  backgroundColor: '#ffffff',
                  borderColor: '#8ecae6'
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#ffb703' }}
                    >
                      <initiative.icon className="h-8 w-8" style={{ color: '#082952' }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-3" style={{ color: '#082952' }}>
                        {initiative.title}
                      </h4>
                      <p className="mb-3" style={{ color: '#082952' }}>
                        {initiative.description}
                      </p>
                      <div 
                        className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                        style={{ 
                          backgroundColor: '#219ebc',
                          color: '#ffffff'
                        }}
                      >
                        {initiative.impact}
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: '#082952' }}>
                          Key Activities:
                        </h5>
                        <ul className="grid grid-cols-2 gap-1">
                          {initiative.activities.map((activity, idx) => (
                            <li 
                              key={idx} 
                              className="text-sm flex items-center gap-2"
                              style={{ color: '#082952' }}
                            >
                              <div 
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: '#d7a12c' }}
                              ></div>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Partnerships */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#082952' }}>
            Community Partnerships
          </h3>
          <div 
            className="p-8 rounded-2xl"
            style={{ backgroundColor: '#ffffff', border: '2px solid #8ecae6' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {partnerships.map((partner, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg border"
                  style={{ 
                    backgroundColor: '#edf4ff',
                    borderColor: '#8ecae6'
                  }}
                >
                  <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>
                    {partner.name}
                  </h4>
                  <div 
                    className="text-xs px-2 py-1 rounded-full mb-2 inline-block"
                    style={{ 
                      backgroundColor: '#219ebc',
                      color: '#ffffff'
                    }}
                  >
                    {partner.type}
                  </div>
                  <p className="text-sm" style={{ color: '#082952' }}>
                    {partner.collaboration}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold mb-4" style={{ color: '#082952' }}>
                Join Our Community Impact
              </h4>
              <p className="text-lg leading-relaxed mb-6 max-w-3xl mx-auto" style={{ color: '#082952' }}>
                Students, faculty, and community members work together to strengthen cultural connections, 
                preserve traditions, and create new artistic expressions that reflect our shared Pacific Island heritage.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2" style={{ color: '#d7a12c' }}>25+</div>
                  <div className="text-sm" style={{ color: '#082952' }}>Community Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2" style={{ color: '#d7a12c' }}>1000+</div>
                  <div className="text-sm" style={{ color: '#082952' }}>Lives Touched Annually</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2" style={{ color: '#d7a12c' }}>50+</div>
                  <div className="text-sm" style={{ color: '#082952' }}>Student Volunteers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagement;