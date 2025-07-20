import React from 'react';
import { Users, Heart, Microscope, FileText, Mail, Phone } from 'lucide-react';

const EthicsCommittees = () => {
  const committees = [
    {
      title: "Human Research Ethics Committee (HREC)",
      description: "Reviews research involving human participants to ensure ethical conduct and participant protection",
      icon: Users,
      color: '#ffb703',
      responsibilities: [
        "Review research proposals involving human participants",
        "Assess risk-benefit ratios of proposed research",
        "Monitor ongoing research for ethical compliance",
        "Provide guidance on informed consent procedures"
      ],
      chair: "Prof. Dr. Mary Taukila",
      members: "12 members including medical professionals, legal experts, and community representatives",
      meetingSchedule: "Second Tuesday of each month"
    },
    {
      title: "Animal Ethics Committee (AEC)",
      description: "Oversees research involving animals to ensure humane treatment and scientific justification",
      icon: Heart,
      color: '#8ecae6',
      responsibilities: [
        "Review proposals for animal research",
        "Ensure compliance with animal welfare standards",
        "Monitor animal housing and care facilities",
        "Approve modifications to approved protocols"
      ],
      chair: "Dr. James Waigani",
      members: "8 members including veterinarians and animal welfare advocates",
      meetingSchedule: "First Thursday of each month"
    },
    {
      title: "Biosafety Committee",
      description: "Manages biosafety protocols for research involving biological materials and genetic modification",
      icon: Microscope,
      color: '#219ebc',
      responsibilities: [
        "Review proposals involving biological agents",
        "Assess containment requirements",
        "Monitor laboratory safety protocols",
        "Ensure compliance with biosafety regulations"
      ],
      chair: "Dr. Sarah Kere",
      members: "6 members including microbiologists and safety officers",
      meetingSchedule: "Third Wednesday of each month"
    },
    {
      title: "Research Integrity Committee",
      description: "Addresses research misconduct allegations and promotes responsible research practices",
      icon: FileText,
      color: '#d7a12c',
      responsibilities: [
        "Investigate research misconduct allegations",
        "Develop research integrity policies",
        "Provide training on responsible research conduct",
        "Review publication and authorship disputes"
      ],
      chair: "Prof. Dr. Peter Qalo",
      members: "5 members including senior researchers and legal advisors",
      meetingSchedule: "As required for investigations"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Ethics Committees
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Our specialized ethics committees ensure comprehensive oversight of research activities
          </p>
        </div>

        <div className="space-y-8">
          {committees.map((committee, index) => (
            <div 
              key={index}
              className="rounded-lg p-6 shadow-lg"
              style={{ 
                backgroundColor: '#edf4ff',
                border: '1px solid #8ecae6'
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                <div className="flex-1">
                  <div className="flex items-start space-x-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: committee.color }}
                    >
                      <committee.icon className="w-6 h-6" style={{ color: '#082952' }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#082952' }}>
                        {committee.title}
                      </h3>
                      <p className="mb-4" style={{ color: '#082952' }}>
                        {committee.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3" style={{ color: '#219ebc' }}>
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {committee.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="text-sm" style={{ color: '#082952' }}>
                            • {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-1" style={{ color: '#219ebc' }}>
                          Committee Chair
                        </h4>
                        <p className="text-sm" style={{ color: '#082952' }}>
                          {committee.chair}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-1" style={{ color: '#219ebc' }}>
                          Composition
                        </h4>
                        <p className="text-sm" style={{ color: '#082952' }}>
                          {committee.members}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-1" style={{ color: '#219ebc' }}>
                          Meeting Schedule
                        </h4>
                        <p className="text-sm" style={{ color: '#082952' }}>
                          {committee.meetingSchedule}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-48 mt-4 lg:mt-0">
                  <div className="space-y-2">
                    <button 
                      className="w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:shadow-md text-sm"
                      style={{ backgroundColor: '#ffb703', color: '#082952' }}
                    >
                      <Mail className="w-4 h-4 inline mr-1" />
                      Contact Committee
                    </button>
                    <button 
                      className="w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:shadow-md text-sm"
                      style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                    >
                      <FileText className="w-4 h-4 inline mr-1" />
                      Submit Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthicsCommittees;