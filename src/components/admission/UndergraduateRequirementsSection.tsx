import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Award, Calculator, Beaker } from 'lucide-react';

const UndergraduateRequirementsSection = () => {
  return (
    <section className="py-16 bg-[#8ecae6] relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=1200&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Undergraduate Admission Requirements
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Requirements for international students applying to undergraduate degree programs at SINU.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center mb-2">
                  <BookOpen className="h-6 w-6 text-[#ffb703] mr-2" />
                  <CardTitle className="text-[#082952]">General Requirements</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-[#082952]">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Secondary Education:</strong> Completion of 12 years of schooling or equivalent
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Minimum GPA:</strong> 3.0 out of 4.0 or equivalent
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Age Requirement:</strong> Must be at least 17 years old
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Visa Status:</strong> Valid student visa or eligibility to obtain one
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

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
                  <Award className="h-6 w-6 text-[#ffb703] mr-2" />
                  <CardTitle className="text-[#082952]">Academic Prerequisites</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-[#082952]">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>English:</strong> Satisfactory completion of English literature or language
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Mathematics:</strong> Required for science, engineering, and business programs
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Science Subjects:</strong> Required for health and science programs
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Social Studies:</strong> Recommended for humanities and social science programs
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="text-center relative z-10">
                <Calculator className="h-12 w-12 text-[#ffb703] mx-auto mb-2" />
                <CardTitle className="text-[#082952]">Business & Economics</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-[#d7a12c] text-white">Mathematics</Badge>
                  <Badge variant="secondary" className="bg-[#d7a12c] text-white">English</Badge>
                  <Badge variant="secondary" className="bg-[#d7a12c] text-white">Economics (preferred)</Badge>
                </div>
                <p className="text-sm text-[#082952] mt-3">
                  Strong mathematical skills and analytical thinking required
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="text-center relative z-10">
                <Beaker className="h-12 w-12 text-[#ffb703] mx-auto mb-2" />
                <CardTitle className="text-[#082952]">Science & Health</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-[#d7a12c] text-white">Biology</Badge>
                  <Badge variant="secondary" className="bg-[#d7a12c] text-white">Chemistry</Badge>
                  <Badge variant="secondary" className="bg-[#d7a12c] text-white">Physics</Badge>
                  <Badge variant="secondary" className="bg-[#d7a12c] text-white">Mathematics</Badge>
                </div>
                <p className="text-sm text-[#082952] mt-3">
                  Science prerequisites vary by specific program
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="text-center relative z-10">
                <BookOpen className="h-12 w-12 text-[#ffb703] mx-auto mb-2" />
                <CardTitle className="text-[#082952]">Arts & Humanities</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-[#d7a12c] text-white">English</Badge>
                  <Badge variant="secondary" className="bg-[#d7a12c] text-white">History</Badge>
                  <Badge variant="secondary" className="bg-[#d7a12c] text-white">Social Studies</Badge>
                </div>
                <p className="text-sm text-[#082952] mt-3">
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
