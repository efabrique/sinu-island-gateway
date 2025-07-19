import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, ExternalLink, Award, BookOpen } from 'lucide-react';

const LeadershipTeam = () => {
  const leaders = [
    {
      name: "Dr. Mary Siaguru",
      title: "Network Director & Senior Research Fellow",
      school: "School of Education and Social Sciences",
      email: "mary.siaguru@sinu.edu.sb",
      expertise: ["Indigenous Pedagogy", "Cultural Preservation", "Community Research"],
      achievements: "Leading researcher in Pacific Indigenous education systems and traditional knowledge preservation."
    },
    {
      name: "Prof. John Roughan",
      title: "Research Coordinator",
      school: "School of Environment and Natural Resources",
      email: "john.roughan@sinu.edu.sb",
      expertise: ["Traditional Ecological Knowledge", "Environmental Conservation", "Community Development"],
      achievements: "Recognized expert in integrating traditional knowledge with contemporary environmental management."
    },
    {
      name: "Dr. Agnes Rarawa",
      title: "Community Partnerships Lead",
      school: "School of Arts and Humanities",
      email: "agnes.rarawa@sinu.edu.sb",
      expertise: ["Cultural Heritage", "Oral Traditions", "Community Engagement"],
      achievements: "Dedicated to strengthening connections between academic research and community knowledge systems."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Leadership Team
          </h2>
          <p className="text-xl text-[#219ebc] max-w-4xl mx-auto leading-relaxed">
            Our network is led by distinguished Indigenous academics and researchers 
            committed to advancing Indigenous knowledge systems and community empowerment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card 
              key={index} 
              className="bg-[#edf4ff] border-[#8ecae6] hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8ecae6] to-[#219ebc] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#082952] mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-[#219ebc] font-semibold mb-1">
                    {leader.title}
                  </p>
                  <p className="text-[#d7a12c] text-sm">
                    {leader.school}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-[#082952] font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Research Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((area, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-[#ffb703] text-[#082952] text-sm rounded-full font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-[#082952] font-semibold mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Recognition
                  </h4>
                  <p className="text-[#219ebc] text-sm leading-relaxed">
                    {leader.achievements}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-[#8ecae6] text-[#8ecae6] hover:bg-[#8ecae6] hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;