
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileCheck, DollarSign, Heart, Globe } from 'lucide-react';

const RequirementsSection = () => {
  return (
    <section className="py-16 bg-white relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Visa Requirements
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Meet all the essential requirements for your student visa application. Ensure you have everything needed for a successful application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-[#edf4ff] relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-full mx-auto mb-4">
                  <FileCheck className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Document Requirements</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-3">Essential Documents:</h4>
                    <ul className="space-y-2 text-sm text-[#082952]">
                      <li>• Valid passport (minimum 6 months validity)</li>
                      <li>• Confirmation of Enrollment (CoE) from SINU</li>
                      <li>• Academic transcripts and certificates</li>
                      <li>• English proficiency test results</li>
                      <li>• Statement of Purpose</li>
                      <li>• Recent passport-sized photographs</li>
                    </ul>
                  </div>
                  <div className="bg-[#d7a12c]/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Additional Documents:</h4>
                    <ul className="space-y-1 text-sm text-[#082952]">
                      <li>• Birth certificate</li>
                      <li>• Character certificates</li>
                      <li>• Previous visa grants (if applicable)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-[#edf4ff] relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-full mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Financial Requirements</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-3">Proof of Funds:</h4>
                    <ul className="space-y-2 text-sm text-[#082952]">
                      <li>• Tuition fees for first year</li>
                      <li>• Living expenses ($20,000-25,000 per year)</li>
                      <li>• Return airfare costs</li>
                      <li>• Health insurance coverage</li>
                      <li>• Additional funds for family members</li>
                    </ul>
                  </div>
                  <div className="bg-[#d7a12c]/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Acceptable Evidence:</h4>
                    <ul className="space-y-1 text-sm text-[#082952]">
                      <li>• Bank statements (last 6 months)</li>
                      <li>• Scholarship letters</li>
                      <li>• Sponsor declarations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-[#edf4ff] relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-full mx-auto mb-4">
                  <Heart className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Health Requirements</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-3">Health Assessments:</h4>
                    <ul className="space-y-2 text-sm text-[#082952]">
                      <li>• Medical examination by approved doctors</li>
                      <li>• Chest X-ray (if required)</li>
                      <li>• HIV test (for some countries)</li>
                      <li>• Vaccination records</li>
                      <li>• Health insurance evidence</li>
                    </ul>
                  </div>
                  <div className="bg-[#d7a12c]/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Important Notes:</h4>
                    <p className="text-sm text-[#082952]">
                      Health requirements vary by country. Check specific requirements for your nationality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-[#edf4ff] relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-full mx-auto mb-4">
                  <Globe className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Character Requirements</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-3">Character Evidence:</h4>
                    <ul className="space-y-2 text-sm text-[#082952]">
                      <li>• Police clearance certificates</li>
                      <li>• Character statutory declarations</li>
                      <li>• Military service records (if applicable)</li>
                      <li>• Court documents (if applicable)</li>
                    </ul>
                  </div>
                  <div className="bg-[#d7a12c]/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Requirements:</h4>
                    <p className="text-sm text-[#082952]">
                      Police certificates required from all countries where you lived for 12+ months in the last 10 years.
                    </p>
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

export default RequirementsSection;
