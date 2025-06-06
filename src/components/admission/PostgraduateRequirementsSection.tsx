
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Users, FileText, Clock } from 'lucide-react';

const PostgraduateRequirementsSection = () => {
  return (
    <section className="py-16 bg-[#219ebc]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Postgraduate Admission Requirements
            </h2>
            <p className="text-lg text-[#8ecae6] max-w-3xl mx-auto">
              Requirements for international students applying to Master's and doctoral programs at SINU.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-[#ffb703] hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-6 w-6 text-[#ffb703] mr-2" />
                  <CardTitle className="text-[#082952]">Master's Degree Requirements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[#082952]">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Bachelor's Degree:</strong> Completed undergraduate degree from a recognized institution
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>GPA Requirement:</strong> Minimum 3.0 out of 4.0 or equivalent
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Relevant Background:</strong> Academic background related to chosen field of study
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Work Experience:</strong> Professional experience may be required for some programs
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#ffb703] hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Users className="h-6 w-6 text-[#ffb703] mr-2" />
                  <CardTitle className="text-[#082952]">Doctoral Degree Requirements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[#082952]">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Master's Degree:</strong> Completed postgraduate degree in relevant field
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Research Experience:</strong> Demonstrated research capability and experience
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Research Proposal:</strong> Detailed research proposal aligned with faculty expertise
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Supervisor:</strong> Identified potential supervisor within the faculty
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <FileText className="h-6 w-6 text-[#ffb703] mr-2" />
                  <CardTitle className="text-[#082952]">Additional Documents</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-[#082952]">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Statement of Purpose
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Letters of Recommendation (2-3)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Updated CV/Resume
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Portfolio (for specific programs)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Research Publications (if any)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Clock className="h-6 w-6 text-[#ffb703] mr-2" />
                  <CardTitle className="text-[#082952]">Application Timeline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#edf4ff] rounded-lg">
                    <span className="font-medium text-[#082952]">Semester 1</span>
                    <Badge variant="outline" className="border-[#ffb703] text-[#082952]">October 31</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#edf4ff] rounded-lg">
                    <span className="font-medium text-[#082952]">Semester 2</span>
                    <Badge variant="outline" className="border-[#ffb703] text-[#082952]">March 31</Badge>
                  </div>
                  <p className="text-sm text-[#082952] mt-2">
                    Early applications are encouraged as some programs have limited capacity.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostgraduateRequirementsSection;
