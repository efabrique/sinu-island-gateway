
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, BookOpen, Users, Calendar } from 'lucide-react';

const VisaTypesSection = () => {
  return (
    <section className="py-16 bg-white relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Types of Student Visas
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Choose the right visa category based on your study plans and duration. Each visa type has specific requirements and conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#8ecae6] hover:shadow-xl transition-all duration-300 bg-[#edf4ff] relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-full mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Student Visa (Subclass 500)</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <p className="text-[#082952] text-center">
                    Primary visa for international students pursuing full-time study at SINU
                  </p>
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Includes:</h4>
                    <ul className="space-y-1 text-sm text-[#082952]">
                      <li>• Undergraduate degrees</li>
                      <li>• Postgraduate programs</li>
                      <li>• Diploma and certificate courses</li>
                      <li>• English language programs</li>
                    </ul>
                  </div>
                  <div className="bg-[#d7a12c]/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Duration:</h4>
                    <p className="text-sm text-[#082952]">Usually granted for the duration of your course plus additional time for completion</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#8ecae6] hover:shadow-xl transition-all duration-300 bg-[#edf4ff] relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-full mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Temporary Graduate Visa</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <p className="text-[#082952] text-center">
                    For recent graduates to gain work experience in Solomon Islands
                  </p>
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Eligibility:</h4>
                    <ul className="space-y-1 text-sm text-[#082952]">
                      <li>• Completed qualification at SINU</li>
                      <li>• Meet English requirements</li>
                      <li>• Applied within 6 months</li>
                      <li>• Adequate health insurance</li>
                    </ul>
                  </div>
                  <div className="bg-[#d7a12c]/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Duration:</h4>
                    <p className="text-sm text-[#082952]">18 months to 4 years depending on qualification level</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#8ecae6] hover:shadow-xl transition-all duration-300 bg-[#edf4ff] relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-full mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Student Guardian Visa</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <p className="text-[#082952] text-center">
                    For parents or guardians accompanying students under 18 years
                  </p>
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Requirements:</h4>
                    <ul className="space-y-1 text-sm text-[#082952]">
                      <li>• Student under 18 years old</li>
                      <li>• Adequate financial capacity</li>
                      <li>• Health insurance coverage</li>
                      <li>• Suitable accommodation</li>
                    </ul>
                  </div>
                  <div className="bg-[#d7a12c]/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Conditions:</h4>
                    <p className="text-sm text-[#082952]">Cannot work more than 20 hours per fortnight</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#8ecae6] hover:shadow-xl transition-all duration-300 bg-[#edf4ff] relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-full mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Short-term Study Visa</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <p className="text-[#082952] text-center">
                    For short courses, exchange programs, or research visits
                  </p>
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Suitable for:</h4>
                    <ul className="space-y-1 text-sm text-[#082952]">
                      <li>• Exchange student programs</li>
                      <li>• Short-term research projects</li>
                      <li>• Professional development courses</li>
                      <li>• Conference participation</li>
                    </ul>
                  </div>
                  <div className="bg-[#d7a12c]/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Duration:</h4>
                    <p className="text-sm text-[#082952]">Up to 3 months, non-renewable</p>
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

export default VisaTypesSection;
