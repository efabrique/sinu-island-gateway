
import React from 'react';
import { CheckCircle, FileText, GraduationCap, Clock } from 'lucide-react';

const RequirementsSection = () => {
  const generalRequirements = [
    "Bachelor's degree with honours or equivalent qualification",
    "Minimum GPA of 3.0 (or equivalent)",
    "English language proficiency (IELTS 6.5 or equivalent)",
    "Academic transcripts and certificates",
    "Letters of recommendation (2-3 references)",
    "Statement of purpose or research proposal"
  ];

  const applicationSteps = [
    {
      icon: <FileText className="h-6 w-6 text-[#219ebc]" />,
      title: "Prepare Documents",
      description: "Gather all required academic documents and supporting materials"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-[#219ebc]" />,
      title: "Choose Your Program",
      description: "Select the postgraduate program that aligns with your career goals"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#219ebc]" />,
      title: "Submit Application",
      description: "Complete the online application form and upload all documents"
    },
    {
      icon: <Clock className="h-6 w-6 text-[#219ebc]" />,
      title: "Application Review",
      description: "Wait for assessment and potential interview invitation"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#023047] mb-4">
              Admission Requirements
            </h2>
            <p className="text-lg text-[#023047]">
              Find out what you need to apply for postgraduate study at SINU
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#023047] mb-6">
                General Requirements
              </h3>
              <ul className="space-y-3">
                {generalRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#219ebc] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#023047]">{requirement}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-[#8ecae6] rounded-lg">
                <h4 className="font-semibold text-[#023047] mb-2">Additional Requirements</h4>
                <p className="text-[#023047] text-sm">
                  Some programs may have specific requirements such as relevant work experience, 
                  portfolio submissions, or prerequisite courses. Check individual program pages for details.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-[#023047] mb-6">
                Application Process
              </h3>
              <div className="space-y-6">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#edf4ff] p-2 rounded-full mr-4">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#023047] mb-1">{step.title}</h4>
                      <p className="text-[#023047] text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-[#ffb703] bg-opacity-20 rounded-lg">
                <h4 className="font-semibold text-[#023047] mb-2">Application Deadlines</h4>
                <p className="text-[#023047] text-sm">
                  <strong>Semester 1:</strong> November 30 (previous year)<br />
                  <strong>Semester 2:</strong> May 31<br />
                  <strong>Research Programs:</strong> Applications accepted year-round
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
