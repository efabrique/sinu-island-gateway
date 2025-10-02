
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileText, Calendar, DollarSign } from 'lucide-react';
import OptimizedImage from '@/components/common/OptimizedImage';

const RequirementsSection = () => {
  const requirements = [
    {
      title: "Academic Requirements",
      icon: <FileText className="h-6 w-6" />,
      items: [
        "Solomon Islands School Certificate (SISC) or equivalent",
        "Minimum C grade in English and Mathematics",
        "Relevant subject prerequisites for specific programs",
        "International qualifications assessed case by case"
      ],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
    },
    {
      title: "Application Process",
      icon: <Calendar className="h-6 w-6" />,
      items: [
        "Submit online application by December 31st",
        "Provide certified copies of academic transcripts",
        "Complete personal statement (500 words)",
        "Attend interview if required for specific programs"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Financial Information",
      icon: <DollarSign className="h-6 w-6" />,
      items: [
        "Tuition fees vary by program (SBD 8,000 - 15,000 per year)",
        "Scholarships available for eligible students",
        "Payment plans and financial aid options",
        "Additional costs for materials and accommodation"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  return (
    <section className="py-10 bg-[#fff] md:mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
            Entry Requirements & Application
            <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>

          </h2>
          <p className="text-lg text-[#023047] max-w-3xl mx-auto">
            Everything you need to know about applying for undergraduate study at SINU. 
            We're here to support you through every step of the application process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {requirements.map((req, index) => (
            <Card key={index} className="border-[#8ecae6] overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage
                  src={req.image}
                  alt={req.title}
                  className="w-full h-full"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-[#082952]/20"></div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-[#035ac5ff] p-2 rounded-lg text-[#fff]">
                    {req.icon}
                  </div>
                  <CardTitle className="text-xl text-[#222222]">{req.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-[#035ac5ff] mt-0.5 flex-shrink-0" />
                      <span className="text-[#023047] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
