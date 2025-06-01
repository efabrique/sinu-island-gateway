
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileText, Calendar, DollarSign } from 'lucide-react';

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
      ]
    },
    {
      title: "Application Process",
      icon: <Calendar className="h-6 w-6" />,
      items: [
        "Submit online application by December 31st",
        "Provide certified copies of academic transcripts",
        "Complete personal statement (500 words)",
        "Attend interview if required for specific programs"
      ]
    },
    {
      title: "Financial Information",
      icon: <DollarSign className="h-6 w-6" />,
      items: [
        "Tuition fees vary by program (SBD 8,000 - 15,000 per year)",
        "Scholarships available for eligible students",
        "Payment plans and financial aid options",
        "Additional costs for materials and accommodation"
      ]
    }
  ];

  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023047] mb-4">
            Entry Requirements & Application
          </h2>
          <p className="text-lg text-[#023047] max-w-3xl mx-auto">
            Everything you need to know about applying for undergraduate study at SINU. 
            We're here to support you through every step of the application process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {requirements.map((req, index) => (
            <Card key={index} className="border-[#8ecae6]">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-[#8ecae6] p-2 rounded-lg text-[#023047]">
                    {req.icon}
                  </div>
                  <CardTitle className="text-xl text-[#023047]">{req.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-[#219ebc] mt-0.5 flex-shrink-0" />
                      <span className="text-[#023047] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#8ecae6] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-[#023047] mb-4">
            Need Help with Your Application?
          </h3>
          <p className="text-[#023047] mb-6">
            Our admissions team is here to guide you through the application process. 
            Contact us for personalized support and advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <p className="font-semibold text-[#023047]">Phone</p>
              <p className="text-[#023047]">+677 12345678</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-[#023047]">Email</p>
              <p className="text-[#023047]">admissions@sinu.edu.sb</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-[#023047]">Office Hours</p>
              <p className="text-[#023047]">Mon-Fri, 8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
