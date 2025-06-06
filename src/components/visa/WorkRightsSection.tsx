
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Clock, GraduationCap, AlertTriangle } from 'lucide-react';

const WorkRightsSection = () => {
  return (
    <section className="py-16 bg-[#edf4ff] relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Work Rights & Employment
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Understand your work rights as an international student. Balance work and study while complying with visa conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-[#219ebc] rounded-full mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Work Hour Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-[#edf4ff] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-3">During Study Period:</h4>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#d7a12c] mb-2">20 Hours</div>
                      <p className="text-sm text-[#082952]">per week maximum</p>
                    </div>
                  </div>
                  <div className="bg-[#edf4ff] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-3">During Study Breaks:</h4>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#219ebc] mb-2">Full-time</div>
                      <p className="text-sm text-[#082952]">40+ hours per week allowed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-full mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Employment Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">On-Campus Work</h5>
                    <p className="text-sm text-[#082952]">University jobs, research assistance, tutoring</p>
                  </div>
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Off-Campus Work</h5>
                    <p className="text-sm text-[#082952]">Retail, hospitality, administrative roles</p>
                  </div>
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Internships</h5>
                    <p className="text-sm text-[#082952]">Course-related work placements</p>
                  </div>
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Volunteer Work</h5>
                    <p className="text-sm text-[#082952]">Community service and unpaid positions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-[#8ecae6] rounded-full mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Post-Study Work</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-[#edf4ff] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Temporary Graduate Visa</h4>
                    <p className="text-sm text-[#082952] mb-3">
                      Work full-time after graduation with appropriate visa
                    </p>
                    <ul className="space-y-1 text-sm text-[#082952]">
                      <li>• 18 months to 4 years duration</li>
                      <li>• Based on qualification level</li>
                      <li>• Full work rights included</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-[#d7a12c] rounded-full mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Important Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-[#edf4ff] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Visa Compliance</h4>
                    <ul className="space-y-2 text-sm text-[#082952]">
                      <li>• Maintain enrollment and attendance</li>
                      <li>• Don't exceed work hour limits</li>
                      <li>• Keep employment records</li>
                      <li>• Notify of address changes</li>
                      <li>• Maintain adequate health insurance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkRightsSection;
