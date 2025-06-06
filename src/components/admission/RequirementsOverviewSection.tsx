
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Users, FileText } from 'lucide-react';

const RequirementsOverviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D950AE] mb-4">
              Admission Requirements Overview
            </h2>
            <p className="text-lg text-[#D950AE] max-w-3xl mx-auto">
              SINU welcomes international students from around the world. Our admission process is designed to identify students who will thrive in our academic environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-[#EFC6D4] hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-center w-12 h-12 bg-[#EFC6D4] rounded-full mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-[#D950AE]" />
                </div>
                <CardTitle className="text-center text-[#D950AE] text-lg">Academic Qualifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#D950AE] text-center text-sm">
                  Completed secondary education or equivalent qualification from your home country
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#EFC6D4] hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-center w-12 h-12 bg-[#EFC6D4] rounded-full mx-auto mb-3">
                  <FileText className="h-6 w-6 text-[#D950AE]" />
                </div>
                <CardTitle className="text-center text-[#D950AE] text-lg">English Proficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#D950AE] text-center text-sm">
                  IELTS, TOEFL, or equivalent English language test scores
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#EFC6D4] hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-center w-12 h-12 bg-[#EFC6D4] rounded-full mx-auto mb-3">
                  <Users className="h-6 w-6 text-[#D950AE]" />
                </div>
                <CardTitle className="text-center text-[#D950AE] text-lg">Personal Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#D950AE] text-center text-sm">
                  Written statement outlining your academic goals and motivation
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#EFC6D4] hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-center w-12 h-12 bg-[#EFC6D4] rounded-full mx-auto mb-3">
                  <Clock className="h-6 w-6 text-[#D950AE]" />
                </div>
                <CardTitle className="text-center text-[#D950AE] text-lg">Application Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#D950AE] text-center text-sm">
                  Submit your application by the specified deadline for your chosen intake
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#EEEDEE] rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#D950AE] mb-4">Important Information</h3>
            <ul className="space-y-2 text-[#D950AE]">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#AAE847] mr-2 mt-0.5 flex-shrink-0" />
                All documents must be officially translated into English if not originally in English
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#AAE847] mr-2 mt-0.5 flex-shrink-0" />
                Academic credentials must be verified by relevant authorities
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#AAE847] mr-2 mt-0.5 flex-shrink-0" />
                Some programs may have additional requirements or prerequisites
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#AAE847] mr-2 mt-0.5 flex-shrink-0" />
                Application fees are non-refundable once submitted
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsOverviewSection;
