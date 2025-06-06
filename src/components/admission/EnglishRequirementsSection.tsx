import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Globe, BookOpen, Award } from 'lucide-react';

const EnglishRequirementsSection = () => {
  return (
    <section className="py-16 bg-[#edf4ff] relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              English Language Requirements
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              All international students must demonstrate English proficiency through one of the accepted tests or qualifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center mb-2">
                  <MessageSquare className="h-6 w-6 text-[#ffb703] mr-2" />
                  <CardTitle className="text-[#082952]">Undergraduate Requirements</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-[#8ecae6] rounded-lg border border-[#219ebc]">
                    <span className="font-medium text-[#082952]">IELTS Academic</span>
                    <Badge className="bg-[#ffb703] text-[#082952]">6.0 overall</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#8ecae6] rounded-lg border border-[#219ebc]">
                    <span className="font-medium text-[#082952]">TOEFL iBT</span>
                    <Badge className="bg-[#ffb703] text-[#082952]">79 overall</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#8ecae6] rounded-lg border border-[#219ebc]">
                    <span className="font-medium text-[#082952]">PTE Academic</span>
                    <Badge className="bg-[#ffb703] text-[#082952]">58 overall</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#8ecae6] rounded-lg border border-[#219ebc]">
                    <span className="font-medium text-[#082952]">Cambridge English</span>
                    <Badge className="bg-[#ffb703] text-[#082952]">169 overall</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center mb-2">
                  <Globe className="h-6 w-6 text-[#ffb703] mr-2" />
                  <CardTitle className="text-[#082952]">Postgraduate Requirements</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-[#8ecae6] rounded-lg border border-[#219ebc]">
                    <span className="font-medium text-[#082952]">IELTS Academic</span>
                    <Badge className="bg-[#ffb703] text-[#082952]">6.5 overall</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#8ecae6] rounded-lg border border-[#219ebc]">
                    <span className="font-medium text-[#082952]">TOEFL iBT</span>
                    <Badge className="bg-[#ffb703] text-[#082952]">90 overall</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#8ecae6] rounded-lg border border-[#219ebc]">
                    <span className="font-medium text-[#082952]">PTE Academic</span>
                    <Badge className="bg-[#ffb703] text-[#082952]">65 overall</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#8ecae6] rounded-lg border border-[#219ebc]">
                    <span className="font-medium text-[#082952]">Cambridge English</span>
                    <Badge className="bg-[#ffb703] text-[#082952]">176 overall</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center mb-2">
                  <BookOpen className="h-6 w-6 text-[#ffb703] mr-2" />
                  <CardTitle className="text-[#082952]">Alternative Qualifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-[#082952]">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>Previous study completed in English at a recognized institution</div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>Secondary education completed entirely in English</div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>Citizenship from an English-speaking country</div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>SINU English Language Pathway Program completion</div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center mb-2">
                  <Award className="h-6 w-6 text-[#ffb703] mr-2" />
                  <CardTitle className="text-[#082952]">Important Notes</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-[#082952]">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>Test scores must be no more than 2 years old</div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>Some programs may require higher English proficiency</div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>Official score reports must be sent directly from testing agencies</div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>English support programs available for accepted students</div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#082952] rounded-lg p-6 border border-[#219ebc] relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&q=80&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Award className="h-6 w-6 text-[#ffb703] mr-2" />
                English Language Pathway Programs
              </h3>
              <p className="text-[#8ecae6] mb-4">
                If you don't meet the English requirements, SINU offers English Language Pathway Programs to help you reach the required level:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-[#219ebc]">
                  <h4 className="font-semibold text-[#082952] mb-2">Foundation English</h4>
                  <p className="text-sm text-[#082952]">Basic to intermediate level English preparation</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-[#219ebc]">
                  <h4 className="font-semibold text-[#082952] mb-2">Academic English</h4>
                  <p className="text-sm text-[#082952]">Advanced academic writing and communication skills</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-[#219ebc]">
                  <h4 className="font-semibold text-[#082952] mb-2">IELTS Preparation</h4>
                  <p className="text-sm text-[#082952]">Intensive preparation for IELTS examination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnglishRequirementsSection;
