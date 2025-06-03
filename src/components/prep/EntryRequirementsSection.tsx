
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Info } from 'lucide-react';

const EntryRequirementsSection = () => {
  const requirements = [
    "Completion of Year 12 or equivalent qualification",
    "Minimum IELTS 5.5 overall (or equivalent English proficiency)",
    "Basic computer literacy skills",
    "Commitment to academic study and university preparation"
  ];

  const documents = [
    "Completed application form",
    "Official academic transcripts",
    "English proficiency test results",
    "Copy of passport or birth certificate",
    "Personal statement (500 words)"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Entry Requirements
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Our preparatory courses are designed to be accessible. Here's what you need to get started.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-[#edf4ff] border-[#8ecae6]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#082952] flex items-center">
                <CheckCircle className="mr-3 h-6 w-6 text-[#219ebc]" />
                Academic Requirements
              </CardTitle>
              <CardDescription className="text-[#082952]">
                Minimum qualifications needed for admission
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-[#219ebc] mt-0.5 flex-shrink-0" />
                    <span className="text-[#082952]">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#edf4ff] border-[#8ecae6]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#082952] flex items-center">
                <Info className="mr-3 h-6 w-6 text-[#219ebc]" />
                Required Documents
              </CardTitle>
              <CardDescription className="text-[#082952]">
                Documents you'll need to submit with your application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {documents.map((document, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-[#219ebc] mt-0.5 flex-shrink-0" />
                    <span className="text-[#082952]">{document}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-[#ffb703] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-[#082952] mb-4">
            Don't Meet the Requirements?
          </h3>
          <p className="text-[#082952] mb-6 max-w-2xl mx-auto">
            We understand that everyone's educational journey is different. If you don't meet the standard 
            entry requirements, we offer alternative pathways and can assess your application on a case-by-case basis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="font-semibold text-[#082952]">Contact our admissions team:</span>
            <span className="text-[#082952]">admissions@sinu.edu.sb | +677 123 4567</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntryRequirementsSection;
