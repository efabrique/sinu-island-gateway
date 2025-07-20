import React from 'react';
import { FileText, Clock, CheckCircle, Users, AlertCircle } from 'lucide-react';

const ApplicationProcess = () => {
  const processSteps = [
    {
      step: "1",
      title: "Determine Committee Type",
      description: "Identify which ethics committee needs to review your research based on the nature of your study",
      timeframe: "Before application",
      icon: Users
    },
    {
      step: "2",
      title: "Prepare Application",
      description: "Complete the appropriate ethics application form and gather all required documentation",
      timeframe: "1-2 weeks",
      icon: FileText
    },
    {
      step: "3",
      title: "Submit Application",
      description: "Submit your complete application through the SINU Ethics Portal before the deadline",
      timeframe: "2 weeks before meeting",
      icon: CheckCircle
    },
    {
      step: "4",
      title: "Committee Review",
      description: "The relevant ethics committee reviews your application during their scheduled meeting",
      timeframe: "1 month",
      icon: Clock
    },
    {
      step: "5",
      title: "Response & Approval",
      description: "Receive the committee's decision and address any conditions or recommendations",
      timeframe: "1-2 weeks post-meeting",
      icon: AlertCircle
    }
  ];

  const applicationTypes = [
    {
      type: "Expedited Review",
      description: "For minimal risk research that qualifies for expedited review procedures",
      timeframe: "2-3 weeks",
      color: '#8ecae6'
    },
    {
      type: "Full Committee Review",
      description: "For research involving more than minimal risk or vulnerable populations",
      timeframe: "4-6 weeks",
      color: '#ffb703'
    },
    {
      type: "Continuing Review",
      description: "Annual review for ongoing research projects",
      timeframe: "2-4 weeks",
      color: '#219ebc'
    },
    {
      type: "Amendment Review",
      description: "For modifications to previously approved research protocols",
      timeframe: "1-3 weeks",
      color: '#d7a12c'
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Application Process
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Follow our streamlined process to obtain ethics approval for your research
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#082952' }}>
            Step-by-Step Process
          </h3>
          <div className="relative max-w-4xl mx-auto">
            {processSteps.map((process, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                  style={{ backgroundColor: '#219ebc' }}
                >
                  <span className="text-white font-bold">{process.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1 md:mr-4">
                      <h4 className="text-lg font-semibold mb-2" style={{ color: '#082952' }}>
                        {process.title}
                      </h4>
                      <p className="mb-2" style={{ color: '#082952' }}>
                        {process.description}
                      </p>
                    </div>
                    <div 
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{ backgroundColor: '#ffb703', color: '#082952' }}
                    >
                      {process.timeframe}
                    </div>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div 
                    className="absolute left-6 w-0.5 h-8 mt-12"
                    style={{ backgroundColor: '#8ecae6', top: `${index * 120 + 48}px` }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Application Types */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#082952' }}>
            Types of Review
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applicationTypes.map((type, index) => (
              <div 
                key={index}
                className="rounded-lg p-6 shadow-lg"
                style={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #8ecae6'
                }}
              >
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-4 h-4 rounded-full flex-shrink-0 mt-2"
                    style={{ backgroundColor: type.color }}
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2" style={{ color: '#082952' }}>
                      {type.type}
                    </h4>
                    <p className="mb-3" style={{ color: '#082952' }}>
                      {type.description}
                    </p>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" style={{ color: '#219ebc' }} />
                      <span className="text-sm font-medium" style={{ color: '#219ebc' }}>
                        Processing Time: {type.timeframe}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div 
          className="rounded-lg p-6 mt-12"
          style={{ backgroundColor: '#ffffff', border: '1px solid #ffb703' }}
        >
          <div className="flex items-start space-x-4">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#ffb703' }}
            >
              <AlertCircle className="w-5 h-5" style={{ color: '#082952' }} />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#082952' }}>
                Important Notes
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: '#082952' }}>
                <li>• Research cannot commence until ethics approval is received</li>
                <li>• Applications must be submitted at least 2 weeks before committee meetings</li>
                <li>• Incomplete applications will be returned without review</li>
                <li>• Annual continuing review is required for ongoing projects</li>
                <li>• Any protocol modifications require committee approval before implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;