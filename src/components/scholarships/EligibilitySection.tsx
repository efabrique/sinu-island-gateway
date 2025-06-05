
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle, FileText, Clock } from 'lucide-react';

const EligibilitySection = () => {
  const generalRequirements = [
    "Enrolled or accepted for enrollment at SINU",
    "Maintain satisfactory academic progress",
    "Demonstrate financial need (for need-based scholarships)",
    "Submit complete application by deadline",
    "Provide academic transcripts and references"
  ];

  const applicationTips = [
    {
      icon: FileText,
      title: "Complete Documentation",
      description: "Ensure all required documents are submitted with your application."
    },
    {
      icon: Clock,
      title: "Apply Early",
      description: "Submit your application well before the deadline to avoid technical issues."
    },
    {
      icon: CheckCircle,
      title: "Meet Requirements",
      description: "Carefully review and meet all eligibility criteria before applying."
    },
    {
      icon: AlertCircle,
      title: "Follow Up",
      description: "Check your application status and respond promptly to any requests."
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Eligibility & Requirements
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Understanding the requirements and application process will help you prepare a strong scholarship application.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#082952] text-xl">General Requirements</CardTitle>
              <CardDescription>
                Basic eligibility criteria that apply to most scholarships
              </CardDescription>
            </CardHeader>
            <CardContent>
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

          <Card>
            <CardHeader>
              <CardTitle className="text-[#082952] text-xl">Application Tips</CardTitle>
              <CardDescription>
                Best practices for a successful scholarship application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applicationTips.map((tip, index) => {
                  const IconComponent = tip.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="bg-[#219ebc] p-2 rounded-full mr-3 flex-shrink-0">
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#082952] mb-1">{tip.title}</h4>
                        <p className="text-[#082952] text-sm">{tip.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
