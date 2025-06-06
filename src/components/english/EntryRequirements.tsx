
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileText, GraduationCap, Globe } from 'lucide-react';

const EntryRequirements = () => {
  const generalRequirements = [
    "Minimum age of 18 years",
    "Valid passport and appropriate visa",
    "High school completion certificate",
    "Basic English proficiency assessment",
    "Health insurance coverage",
    "Financial support documentation"
  ];

  const courseRequirements = [
    {
      course: "General English",
      level: "No specific requirements",
      description: "Open to all students wanting to improve their English skills",
      color: "#ffb703"
    },
    {
      course: "Academic English", 
      level: "IELTS 4.5 or equivalent",
      description: "For students preparing for university study",
      color: "#219ebc"
    },
    {
      course: "IELTS Preparation",
      level: "IELTS 5.0 or equivalent", 
      description: "For students targeting IELTS scores of 6.0+",
      color: "#8ecae6"
    },
    {
      course: "English for Specific Purposes",
      level: "IELTS 5.5 or equivalent",
      description: "For students with specific professional or academic goals",
      color: "#d7a12c"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Entry Requirements
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Find out what you need to apply for our English Language Programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <Card className="border-[#219ebc] bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#082952] flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-[#219ebc]" />
                  General Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] mb-4">
                  All applicants must meet the following general requirements:
                </p>
                <ul className="space-y-3">
                  {generalRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#219ebc] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[#082952]">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&auto=format&fit=crop"
                alt="Students reviewing application documents"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#082952] mb-8 text-center">
              Course-Specific Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courseRequirements.map((req, index) => (
                <Card key={index} className="border-2 bg-white" style={{ borderColor: req.color }}>
                  <CardHeader>
                    <CardTitle className="text-[#082952] text-lg flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5" style={{ color: req.color }} />
                      {req.course}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3">
                      <span className="font-semibold text-[#082952]">English Level: </span>
                      <span 
                        className="px-2 py-1 rounded text-sm font-medium"
                        style={{ backgroundColor: req.color, color: '#082952' }}
                      >
                        {req.level}
                      </span>
                    </div>
                    <p className="text-[#082952] text-sm">{req.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mt-12 border-[#ffb703] bg-[#ffb703]/10">
            <CardHeader>
              <CardTitle className="text-[#082952] flex items-center">
                <Globe className="mr-2 h-5 w-5 text-[#ffb703]" />
                English Proficiency Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#082952] mb-4">
                If you don't have an official English test score, we offer a free online placement test to determine your starting level.
              </p>
              <ul className="text-[#082952] space-y-2">
                <li>• Online placement test available 24/7</li>
                <li>• Results available immediately</li>
                <li>• Personalized course recommendations</li>
                <li>• No cost or obligation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EntryRequirements;
