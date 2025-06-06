
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Award, Calculator, Beaker } from 'lucide-react';

const UndergraduateRequirementsSection = () => {
  return (
    <section className="py-16 bg-[#EEEDEE]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D950AE] mb-4">
              Undergraduate Admission Requirements
            </h2>
            <p className="text-lg text-[#D950AE] max-w-3xl mx-auto">
              Requirements for international students applying to undergraduate degree programs at SINU.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-[#AAE847] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <BookOpen className="h-6 w-6 text-[#AAE847] mr-2" />
                  <CardTitle className="text-[#D950AE]">General Requirements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[#D950AE]">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Secondary Education:</strong> Completion of 12 years of schooling or equivalent
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Minimum GPA:</strong> 3.0 out of 4.0 or equivalent
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Age Requirement:</strong> Must be at least 17 years old
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Visa Status:</strong> Valid student visa or eligibility to obtain one
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#AAE847] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Award className="h-6 w-6 text-[#AAE847] mr-2" />
                  <CardTitle className="text-[#D950AE]">Academic Prerequisites</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[#D950AE]">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>English:</strong> Satisfactory completion of English literature or language
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Mathematics:</strong> Required for science, engineering, and business programs
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Science Subjects:</strong> Required for health and science programs
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Social Studies:</strong> Recommended for humanities and social science programs
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-[#EFC6D4] hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Calculator className="h-12 w-12 text-[#AAE847] mx-auto mb-2" />
                <CardTitle className="text-[#D950AE]">Business & Economics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-[#EFC6D4] text-[#D950AE]">Mathematics</Badge>
                  <Badge variant="secondary" className="bg-[#EFC6D4] text-[#D950AE]">English</Badge>
                  <Badge variant="secondary" className="bg-[#EFC6D4] text-[#D950AE]">Economics (preferred)</Badge>
                </div>
                <p className="text-sm text-[#D950AE] mt-3">
                  Strong mathematical skills and analytical thinking required
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#EFC6D4] hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Beaker className="h-12 w-12 text-[#AAE847] mx-auto mb-2" />
                <CardTitle className="text-[#D950AE]">Science & Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-[#EFC6D4] text-[#D950AE]">Biology</Badge>
                  <Badge variant="secondary" className="bg-[#EFC6D4] text-[#D950AE]">Chemistry</Badge>
                  <Badge variant="secondary" className="bg-[#EFC6D4] text-[#D950AE]">Physics</Badge>
                  <Badge variant="secondary" className="bg-[#EFC6D4] text-[#D950AE]">Mathematics</Badge>
                </div>
                <p className="text-sm text-[#D950AE] mt-3">
                  Science prerequisites vary by specific program
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#EFC6D4] hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-[#AAE847] mx-auto mb-2" />
                <CardTitle className="text-[#D950AE]">Arts & Humanities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-[#EFC6D4] text-[#D950AE]">English</Badge>
                  <Badge variant="secondary" className="bg-[#EFC6D4] text-[#D950AE]">History</Badge>
                  <Badge variant="secondary" className="bg-[#EFC6D4] text-[#D950AE]">Social Studies</Badge>
                </div>
                <p className="text-sm text-[#D950AE] mt-3">
                  Strong communication and critical thinking skills essential
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UndergraduateRequirementsSection;
