import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EligibilitySection = () => {
  const eligibleCriteria = [
    "Be admitted in an undergraduate or postgraduate degree program with minimum 300 credits",
    "Have a course weighted average (CWA) of 60 or above",
    "Maintain 'Good Standing' academic status with no misconduct",
    "Be able to maintain full-time enrollment at the partner university",
    "Have completed an approved Study Plan Proposal form"
  ];

  const yearRequirements = [
    {
      type: "Undergraduate Students",
      requirement: "Must be at least in their first semester of the second year"
    },
    {
      type: "Postgraduate Students", 
      requirement: "Must be in at least the second semester of their course"
    }
  ];

  const notEligible = [
    "Australia Award Students (AAS)",
    "Open University Australia enrolled students (OUA)",
    "Students in non-degree programs",
    "Students in graduate certificate/diploma programs of 200 credits or less"
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
              Check Your Eligibility
            </h2>
            <p className="text-lg" style={{ color: '#082952' }}>
              Review the requirements below to ensure you're eligible for our exchange programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Eligibility Criteria */}
            <Card className="border-none shadow-lg" style={{ backgroundColor: '#edf4ff' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#082952' }}>
                  <CheckCircle className="w-6 h-6" style={{ color: '#219ebc' }} />
                  Eligibility Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibleCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#219ebc' }} />
                      <span style={{ color: '#082952' }}>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Not Eligible */}
            <Card className="border-none shadow-lg" style={{ backgroundColor: '#edf4ff' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#082952' }}>
                  <XCircle className="w-6 h-6" style={{ color: '#d7a12c' }} />
                  Not Eligible
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {notEligible.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#d7a12c' }} />
                      <span style={{ color: '#082952' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Year Requirements */}
          <Card className="border-none shadow-lg mb-8" style={{ backgroundColor: '#8ecae6' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ color: '#082952' }}>
                <AlertCircle className="w-6 h-6" />
                Year Level Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {yearRequirements.map((req, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>
                      {req.type}
                    </h4>
                    <p style={{ color: '#082952' }}>{req.requirement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Special Cases */}
          <div className="bg-white rounded-lg p-6 shadow-lg" style={{ borderLeft: '4px solid #ffb703' }}>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
              Special Circumstances
            </h3>
            <p className="mb-4" style={{ color: '#082952' }}>
              If you don't meet the eligibility requirements, you may have your application assessed on a case-by-case basis, 
              based on circumstance and merit. Additional documentation, including an Academic Reference may be requested to support your application.
            </p>
            <p style={{ color: '#082952' }}>
              <strong>Note:</strong> Sponsored students must seek approval from Go Global prior to applying for exchange.
            </p>
          </div>

          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-[#219ebc] hover:bg-[#082952] text-white px-8 py-3"
            >
              Download Eligibility Flyer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;