
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Globe, BookOpen, Award } from 'lucide-react';

const EnglishRequirementsSection = () => {
  return (
    <section className="py-16 bg-[#EEEDEE]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D950AE] mb-4">
              English Language Requirements
            </h2>
            <p className="text-lg text-[#D950AE] max-w-3xl mx-auto">
              All international students must demonstrate English proficiency through one of the accepted tests or qualifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-[#AAE847] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <MessageSquare className="h-6 w-6 text-[#AAE847] mr-2" />
                  <CardTitle className="text-[#D950AE]">Undergraduate Requirements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#EFC6D4]">
                    <span className="font-medium text-[#D950AE]">IELTS Academic</span>
                    <Badge className="bg-[#AAE847] text-[#D950AE]">6.0 overall</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#EFC6D4]">
                    <span className="font-medium text-[#D950AE]">TOEFL iBT</span>
                    <Badge className="bg-[#AAE847] text-[#D950AE]">79 overall</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#EFC6D4]">
                    <span className="font-medium text-[#D950AE]">PTE Academic</span>
                    <Badge className="bg-[#AAE847] text-[#D950AE]">58 overall</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#EFC6D4]">
                    <span className="font-medium text-[#D950AE]">Cambridge English</span>
                    <Badge className="bg-[#AAE847] text-[#D950AE]">169 overall</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#AAE847] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Globe className="h-6 w-6 text-[#AAE847] mr-2" />
                  <CardTitle className="text-[#D950AE]">Postgraduate Requirements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#EFC6D4]">
                    <span className="font-medium text-[#D950AE]">IELTS Academic</span>
                    <Badge className="bg-[#AAE847] text-[#D950AE]">6.5 overall</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#EFC6D4]">
                    <span className="font-medium text-[#D950AE]">TOEFL iBT</span>
                    <Badge className="bg-[#AAE847] text-[#D950AE]">90 overall</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#EFC6D4]">
                    <span className="font-medium text-[#D950AE]">PTE Academic</span>
                    <Badge className="bg-[#AAE847] text-[#D950AE]">65 overall</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#EFC6D4]">
                    <span className="font-medium text-[#D950AE]">Cambridge English</span>
                    <Badge className="bg-[#AAE847] text-[#D950AE]">176 overall</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-[#EFC6D4] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <BookOpen className="h-6 w-6 text-[#AAE847] mr-2" />
                  <CardTitle className="text-[#D950AE]">Alternative Qualifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[#D950AE]">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>Previous study completed in English at a recognized institution</div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>Secondary education completed entirely in English</div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>Citizenship from an English-speaking country</div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>SINU English Language Pathway Program completion</div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#EFC6D4] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Award className="h-6 w-6 text-[#AAE847] mr-2" />
                  <CardTitle className="text-[#D950AE]">Important Notes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-[#D950AE]">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>Test scores must be no more than 2 years old</div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>Some programs may require higher English proficiency</div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>Official score reports must be sent directly from testing agencies</div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#AAE847] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>English support programs available for accepted students</div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#EFC6D4] rounded-lg p-6 border border-[#AAE847]">
            <h3 className="text-xl font-bold text-[#D950AE] mb-4 flex items-center">
              <Award className="h-6 w-6 text-[#AAE847] mr-2" />
              English Language Pathway Programs
            </h3>
            <p className="text-[#D950AE] mb-4">
              If you don't meet the English requirements, SINU offers English Language Pathway Programs to help you reach the required level:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-[#AAE847]">
                <h4 className="font-semibold text-[#D950AE] mb-2">Foundation English</h4>
                <p className="text-sm text-[#D950AE]">Basic to intermediate level English preparation</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-[#AAE847]">
                <h4 className="font-semibold text-[#D950AE] mb-2">Academic English</h4>
                <p className="text-sm text-[#D950AE]">Advanced academic writing and communication skills</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-[#AAE847]">
                <h4 className="font-semibold text-[#D950AE] mb-2">IELTS Preparation</h4>
                <p className="text-sm text-[#D950AE]">Intensive preparation for IELTS examination</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnglishRequirementsSection;
