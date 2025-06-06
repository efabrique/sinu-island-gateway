
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, FileText, CheckCircle, MessageCircle, Phone, Mail } from 'lucide-react';

const ApplicationProcessSection = () => {
  return (
    <section className="py-16 bg-[#2A1B3D]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Application Process
            </h2>
            <p className="text-lg text-[#A4B3B6] max-w-3xl mx-auto">
              Follow these simple steps to submit your application and begin your journey at SINU.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-[#D83F87] hover:shadow-lg transition-shadow relative bg-white">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#D83F87] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <CardTitle className="text-[#2A1B3D] text-lg">Create Account</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#2A1B3D] text-center text-sm mb-4">
                  Register on our online application portal with your personal details
                </p>
                <div className="text-center">
                  <Badge variant="outline" className="border-[#D83F87] text-[#2A1B3D]">
                    5 minutes
                  </Badge>
                </div>
              </CardContent>
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="h-6 w-6 text-[#D83F87]" />
              </div>
            </Card>

            <Card className="border-[#D83F87] hover:shadow-lg transition-shadow relative bg-white">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#D83F87] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <CardTitle className="text-[#2A1B3D] text-lg">Complete Form</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#2A1B3D] text-center text-sm mb-4">
                  Fill out the application form with your academic and personal information
                </p>
                <div className="text-center">
                  <Badge variant="outline" className="border-[#D83F87] text-[#2A1B3D]">
                    30 minutes
                  </Badge>
                </div>
              </CardContent>
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="h-6 w-6 text-[#D83F87]" />
              </div>
            </Card>

            <Card className="border-[#D83F87] hover:shadow-lg transition-shadow relative bg-white">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#D83F87] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <CardTitle className="text-[#2A1B3D] text-lg">Upload Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#2A1B3D] text-center text-sm mb-4">
                  Submit all required documents including transcripts and certificates
                </p>
                <div className="text-center">
                  <Badge variant="outline" className="border-[#D83F87] text-[#2A1B3D]">
                    1-2 hours
                  </Badge>
                </div>
              </CardContent>
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="h-6 w-6 text-[#D83F87]" />
              </div>
            </Card>

            <Card className="border-[#D83F87] hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#D83F87] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <CardTitle className="text-[#2A1B3D] text-lg">Submit & Pay</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#2A1B3D] text-center text-sm mb-4">
                  Review your application and pay the application fee to complete submission
                </p>
                <div className="text-center">
                  <Badge variant="outline" className="border-[#D83F87] text-[#2A1B3D]">
                    10 minutes
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-[#44318D] hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Clock className="h-6 w-6 text-[#D83F87] mr-2" />
                  <CardTitle className="text-[#2A1B3D]">Processing Timeline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-[#A4B3B6] rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#D83F87] mr-2" />
                      <span className="text-[#2A1B3D]">Application Received</span>
                    </div>
                    <Badge variant="outline" className="border-[#44318D] text-[#2A1B3D]">Day 1</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#A4B3B6] rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-[#D83F87] mr-2" />
                      <span className="text-[#2A1B3D]">Document Review</span>
                    </div>
                    <Badge variant="outline" className="border-[#44318D] text-[#2A1B3D]">1-2 weeks</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#A4B3B6] rounded-lg">
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 text-[#D83F87] mr-2" />
                      <span className="text-[#2A1B3D]">Admission Decision</span>
                    </div>
                    <Badge variant="outline" className="border-[#44318D] text-[#2A1B3D]">3-4 weeks</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#A4B3B6] rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#D83F87] mr-2" />
                      <span className="text-[#2A1B3D]">Enrollment Confirmation</span>
                    </div>
                    <Badge variant="outline" className="border-[#44318D] text-[#2A1B3D]">5-6 weeks</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#44318D] hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Phone className="h-6 w-6 text-[#D83F87] mr-2" />
                  <CardTitle className="text-[#2A1B3D]">Application Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-[#E98074] rounded-lg border border-[#44318D]">
                    <h4 className="font-semibold text-white mb-2">International Admissions Office</h4>
                    <div className="space-y-2 text-sm text-white">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-white mr-2" />
                        <span>international@sinu.edu.sb</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-white mr-2" />
                        <span>+677 30123</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-[#E98074] rounded-lg border border-[#44318D]">
                    <h4 className="font-semibold text-white mb-2">Office Hours</h4>
                    <div className="text-sm text-white">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-[#44318D] rounded-lg p-8 text-white border border-[#D83F87]">
              <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
              <p className="text-lg mb-6 text-[#A4B3B6]">
                Start your application today and join the SINU international community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#D83F87] text-white hover:bg-[#D83F87]/90 px-8 py-3">
                  Start Application
                </Button>
                <Button variant="outline" className="border-[#E98074] text-[#E98074] hover:bg-[#E98074] hover:text-white px-8 py-3">
                  Download Checklist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;
