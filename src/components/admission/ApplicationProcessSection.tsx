
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, FileText, CheckCircle, MessageCircle, Phone, Mail } from 'lucide-react';

const ApplicationProcessSection = () => {
  return (
    <section className="py-16 bg-[#8ecae6]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Application Process
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Follow these simple steps to submit your application and begin your journey at SINU.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow relative">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#219ebc] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <CardTitle className="text-[#082952] text-lg">Create Account</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] text-center text-sm mb-4">
                  Register on our online application portal with your personal details
                </p>
                <div className="text-center">
                  <Badge variant="outline" className="border-[#219ebc] text-[#082952]">
                    5 minutes
                  </Badge>
                </div>
              </CardContent>
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="h-6 w-6 text-[#219ebc]" />
              </div>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow relative">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#219ebc] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <CardTitle className="text-[#082952] text-lg">Complete Form</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] text-center text-sm mb-4">
                  Fill out the application form with your academic and personal information
                </p>
                <div className="text-center">
                  <Badge variant="outline" className="border-[#219ebc] text-[#082952]">
                    30 minutes
                  </Badge>
                </div>
              </CardContent>
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="h-6 w-6 text-[#219ebc]" />
              </div>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow relative">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#219ebc] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <CardTitle className="text-[#082952] text-lg">Upload Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] text-center text-sm mb-4">
                  Submit all required documents including transcripts and certificates
                </p>
                <div className="text-center">
                  <Badge variant="outline" className="border-[#219ebc] text-[#082952]">
                    1-2 hours
                  </Badge>
                </div>
              </CardContent>
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="h-6 w-6 text-[#219ebc]" />
              </div>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#219ebc] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <CardTitle className="text-[#082952] text-lg">Submit & Pay</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] text-center text-sm mb-4">
                  Review your application and pay the application fee to complete submission
                </p>
                <div className="text-center">
                  <Badge variant="outline" className="border-[#219ebc] text-[#082952]">
                    10 minutes
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Clock className="h-6 w-6 text-[#219ebc] mr-2" />
                  <CardTitle className="text-[#082952]">Processing Timeline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-[#8ecae6]/10 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#219ebc] mr-2" />
                      <span className="text-[#082952]">Application Received</span>
                    </div>
                    <Badge variant="outline" className="border-[#219ebc] text-[#082952]">Day 1</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#8ecae6]/10 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-[#219ebc] mr-2" />
                      <span className="text-[#082952]">Document Review</span>
                    </div>
                    <Badge variant="outline" className="border-[#219ebc] text-[#082952]">1-2 weeks</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#8ecae6]/10 rounded-lg">
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 text-[#219ebc] mr-2" />
                      <span className="text-[#082952]">Admission Decision</span>
                    </div>
                    <Badge variant="outline" className="border-[#219ebc] text-[#082952]">3-4 weeks</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#8ecae6]/10 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#219ebc] mr-2" />
                      <span className="text-[#082952]">Enrollment Confirmation</span>
                    </div>
                    <Badge variant="outline" className="border-[#219ebc] text-[#082952]">5-6 weeks</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Phone className="h-6 w-6 text-[#219ebc] mr-2" />
                  <CardTitle className="text-[#082952]">Application Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-[#8ecae6]">
                    <h4 className="font-semibold text-[#082952] mb-2">International Admissions Office</h4>
                    <div className="space-y-2 text-sm text-[#082952]">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-[#219ebc] mr-2" />
                        <span>international@sinu.edu.sb</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-[#219ebc] mr-2" />
                        <span>+677 30123</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-[#8ecae6]">
                    <h4 className="font-semibold text-[#082952] mb-2">Office Hours</h4>
                    <div className="text-sm text-[#082952]">
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
            <div className="bg-[#219ebc] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
              <p className="text-lg mb-6">
                Start your application today and join the SINU international community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#ffb703] text-[#082952] hover:bg-[#ffb703]/90 px-8 py-3">
                  Start Application
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#219ebc] px-8 py-3">
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
