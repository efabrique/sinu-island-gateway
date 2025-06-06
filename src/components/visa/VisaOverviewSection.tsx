
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, Clock, Users, AlertCircle } from 'lucide-react';

const VisaOverviewSection = () => {
  return (
    <section className="py-16 bg-[#edf4ff] relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Student Visa Overview
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Understanding the student visa process is crucial for your successful study journey at SINU. Our comprehensive guide covers everything from initial application to visa renewal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="pb-3 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 bg-[#ffb703] rounded-full mx-auto mb-3">
                  <Info className="h-6 w-6 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-lg">Visa Basics</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-[#082952] text-center text-sm">
                  Essential information about student visas, eligibility, and what you need to know before applying
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="pb-3 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 bg-[#ffb703] rounded-full mx-auto mb-3">
                  <Clock className="h-6 w-6 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-lg">Processing Times</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-[#082952] text-center text-sm">
                  Current visa processing times and what factors can affect your application timeline
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="pb-3 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 bg-[#ffb703] rounded-full mx-auto mb-3">
                  <Users className="h-6 w-6 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-lg">Family Members</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-[#082952] text-center text-sm">
                  Information about bringing family members and dependent visa requirements
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="pb-3 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 bg-[#ffb703] rounded-full mx-auto mb-3">
                  <AlertCircle className="h-6 w-6 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-lg">Important Updates</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-[#082952] text-center text-sm">
                  Latest changes in visa policies and important notices for international students
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#219ebc] rounded-lg p-6 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4">Before You Begin</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-[#ffb703] mb-2">Essential Steps</h4>
                  <ul className="space-y-2 text-white text-sm">
                    <li>• Secure admission to SINU</li>
                    <li>• Gather required documents</li>
                    <li>• Meet financial requirements</li>
                    <li>• Complete health assessments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#ffb703] mb-2">Key Considerations</h4>
                  <ul className="space-y-2 text-white text-sm">
                    <li>• Apply well in advance</li>
                    <li>• Ensure passport validity</li>
                    <li>• Consider travel arrangements</li>
                    <li>• Plan for arrival procedures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaOverviewSection;
