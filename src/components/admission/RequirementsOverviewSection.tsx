
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Users, FileText } from 'lucide-react';

const RequirementsOverviewSection = () => {
  return (
    <section className="py-16 bg-[#edf4ff] relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Admission Requirements Overview
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              SINU welcomes international students from around the world. Our admission process is designed to identify students who will thrive in our academic environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="pb-3 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 bg-[#ffb703] rounded-full mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-lg">Academic Qualifications</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-[#082952] text-center text-sm">
                  Completed secondary education or equivalent qualification from your home country
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="pb-3 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 bg-[#ffb703] rounded-full mx-auto mb-3">
                  <FileText className="h-6 w-6 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-lg">English Proficiency</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-[#082952] text-center text-sm">
                  IELTS, TOEFL, or equivalent English language test scores
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="pb-3 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 bg-[#ffb703] rounded-full mx-auto mb-3">
                  <Users className="h-6 w-6 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-lg">Personal Statement</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-[#082952] text-center text-sm">
                  Written statement outlining your academic goals and motivation
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="pb-3 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 bg-[#ffb703] rounded-full mx-auto mb-3">
                  <Clock className="h-6 w-6 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-lg">Application Deadlines</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-[#082952] text-center text-sm">
                  Submit your application by the specified deadline for your chosen intake
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#219ebc] rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Important Information</h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#ffb703] mr-2 mt-0.5 flex-shrink-0" />
                All documents must be officially translated into English if not originally in English
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#ffb703] mr-2 mt-0.5 flex-shrink-0" />
                Academic credentials must be verified by relevant authorities
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#ffb703] mr-2 mt-0.5 flex-shrink-0" />
                Some programs may have additional requirements or prerequisites
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#ffb703] mr-2 mt-0.5 flex-shrink-0" />
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
