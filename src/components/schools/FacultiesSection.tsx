
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const FacultiesSection = () => {
  const faculties = [
    {
      name: "Faculty of Arts and Social Sciences",
      description: "Exploring human culture, society, and communication through diverse academic disciplines including languages, history, sociology, and media studies.",
      programs: ["Bachelor of Arts", "Bachelor of Social Work", "Bachelor of Communication", "Graduate Programs"],
      link: "#"
    },
    {
      name: "Faculty of Business and Economics",
      description: "Developing business leaders and economic thinkers who drive innovation and sustainable development in the Pacific region.",
      programs: ["Bachelor of Business", "Bachelor of Economics", "MBA", "Graduate Diplomas"],
      link: "#"
    },
    {
      name: "Faculty of Education",
      description: "Preparing educators and educational leaders who shape the future through quality teaching and learning practices.",
      programs: ["Bachelor of Teaching", "Graduate Diploma in Education", "Master of Education", "Educational Leadership"],
      link: "#"
    },
    {
      name: "Faculty of Science and Technology",
      description: "Advancing scientific knowledge and technological innovation to address environmental and development challenges.",
      programs: ["Bachelor of Science", "Bachelor of Engineering", "Bachelor of Information Technology", "Research Degrees"],
      link: "#"
    },
    {
      name: "Faculty of Health and Medical Sciences",
      description: "Training healthcare professionals and conducting research to improve health outcomes in the Solomon Islands and Pacific region.",
      programs: ["Bachelor of Nursing", "Bachelor of Public Health", "Medical Programs", "Health Research"],
      link: "#"
    },
    {
      name: "Faculty of Law",
      description: "Developing legal professionals who understand the unique legal landscape of the Solomon Islands and Pacific jurisdictions.",
      programs: ["Bachelor of Laws", "Graduate Diploma in Legal Practice", "Legal Research", "Community Law"],
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Faculties
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Our faculties bring together related disciplines and schools to deliver comprehensive education and research programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faculties.map((faculty, index) => (
              <Card key={index} className="border-2 border-[#8ecae6] hover:border-[#219ebc] transition-colors">
                <CardHeader className="bg-[#8ecae6]">
                  <CardTitle className="text-xl text-[#082952]">{faculty.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-[#082952] mb-4">{faculty.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#082952] mb-2">Key Programs:</h4>
                    <ul className="list-disc list-inside text-[#082952] space-y-1">
                      {faculty.programs.map((program, idx) => (
                        <li key={idx}>{program}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="bg-[#219ebc] hover:bg-[#ffb703] text-white">
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

export default FacultiesSection;
