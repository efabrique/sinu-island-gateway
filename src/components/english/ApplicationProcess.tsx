
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, CheckCircle, Clock, Send } from 'lucide-react';

const ApplicationProcess = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Complete Application",
      description: "Fill out our online application form with your personal and academic details",
      color: "#ffb703"
    },
    {
      number: "02", 
      icon: Send,
      title: "Submit Documents",
      description: "Upload required documents including passport copy and academic transcripts",
      color: "#219ebc"
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Assessment & Review",
      description: "Our admissions team reviews your application and conducts placement testing",
      color: "#8ecae6"
    },
    {
      number: "04",
      icon: Clock,
      title: "Confirmation & Enrollment",
      description: "Receive acceptance letter and complete enrollment with payment",
      color: "#d7a12c"
    }
  ];

  const documents = [
    "Completed application form",
    "Copy of passport (photo page)",
    "High school completion certificate",
    "Academic transcripts (translated if needed)",
    "Passport-sized photos (2)",
    "Financial support documentation",
    "Health insurance proof",
    "English proficiency test scores (if available)"
  ];

  const intakes = [
    {
      term: "Term 1",
      dates: "February - April",
      deadline: "December 15",
      color: "#ffb703"
    },
    {
      term: "Term 2", 
      dates: "May - July",
      deadline: "March 15",
      color: "#219ebc"
    },
    {
      term: "Term 3",
      dates: "August - October", 
      deadline: "June 15",
      color: "#8ecae6"
    },
    {
      term: "Term 4",
      dates: "November - January",
      deadline: "September 15", 
      color: "#d7a12c"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Application Process
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Follow these simple steps to apply for our English Language Programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => (
              <Card key={index} className="border-2 bg-white text-center shadow-lg" style={{ borderColor: step.color }}>
                <CardHeader>
                  <div className="mx-auto mb-2">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>
                  </div>
                  <div className="mb-2">
                    <step.icon className="h-6 w-6 mx-auto" style={{ color: step.color }} />
                  </div>
                  <CardTitle className="text-[#082952] text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952] text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <Card className="border-[#219ebc] bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#082952]">Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] mb-4">
                  Please prepare the following documents for your application:
                </p>
                <ul className="space-y-2">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-[#219ebc] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-[#082952] text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#d7a12c] bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#082952]">Intake Dates & Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] mb-4">
                  We offer multiple start dates throughout the year:
                </p>
                <div className="space-y-3">
                  {intakes.map((intake, index) => (
                    <div key={index} className="p-3 rounded-lg" style={{ backgroundColor: `${intake.color}20` }}>
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-[#082952]">{intake.term}</h4>
                          <p className="text-sm text-[#082952]">{intake.dates}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-[#082952]">Apply by:</p>
                          <p className="font-semibold text-[#082952]">{intake.deadline}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-[#ffb703] bg-[#ffb703]/10 text-center">
            <CardHeader>
              <CardTitle className="text-[#082952]">Need Help with Your Application?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#082952] mb-6">
                Our international student services team is here to guide you through every step of the application process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#ffb703] text-[#082952] px-6 py-3 rounded-lg font-semibold hover:bg-[#d7a12c] transition-colors">
                  Start Application
                </button>
                <button className="border-2 border-[#ffb703] text-[#082952] px-6 py-3 rounded-lg font-semibold hover:bg-[#ffb703] hover:text-white transition-colors">
                  Contact Admissions
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
