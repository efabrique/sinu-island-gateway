
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const CentresSection = () => {
  const centres = [
    {
      name: "Student Success Centre",
      description: "Supporting student academic achievement through tutoring, mentoring, and learning support services.",
      services: ["Academic Tutoring", "Study Skills Workshops", "Peer Mentoring", "Learning Disabilities Support"],
      link: "#"
    },
    {
      name: "Career Development Centre",
      description: "Preparing students for successful careers through guidance, internships, and industry connections.",
      services: ["Career Counseling", "Resume Writing", "Interview Preparation", "Industry Partnerships"],
      link: "#"
    },
    {
      name: "International Programmes Centre",
      description: "Facilitating international partnerships, student exchanges, and global learning opportunities.",
      services: ["Student Exchange", "International Partnerships", "Study Abroad", "Global Programs"],
      link: "#"
    },
    {
      name: "Community Engagement Centre",
      description: "Connecting the university with local communities through outreach, service, and collaborative projects.",
      services: ["Community Projects", "Volunteer Programs", "Public Lectures", "Community Research"],
      link: "#"
    },
    {
      name: "Digital Innovation Centre",
      description: "Promoting digital literacy, innovation, and technology adoption across the university and community.",
      services: ["Digital Skills Training", "Innovation Labs", "Technology Support", "Digital Resources"],
      link: "#"
    },
    {
      name: "Wellness and Counseling Centre",
      description: "Supporting student mental health and wellbeing through counseling services and wellness programs.",
      services: ["Counseling Services", "Mental Health Support", "Wellness Programs", "Crisis Intervention"],
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Support Centres
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Our specialized centres provide essential support services to enhance student success and community engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centres.map((centre, index) => (
              <Card key={index} className="border-2 border-[#8ecae6] hover:border-[#219ebc] transition-colors h-full">
                <CardHeader className="bg-[#8ecae6]">
                  <CardTitle className="text-lg text-[#082952]">{centre.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex flex-col h-full">
                  <p className="text-[#082952] mb-4 flex-grow">{centre.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#082952] mb-2">Services:</h4>
                    <ul className="list-disc list-inside text-[#082952] space-y-1 text-sm">
                      {centre.services.map((service, idx) => (
                        <li key={idx}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="bg-[#219ebc] hover:bg-[#ffb703] text-white mt-auto">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CentresSection;
