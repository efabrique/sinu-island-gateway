
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RefreshCw, Calendar, FileText, AlertCircle } from 'lucide-react';

const RenewalExtensionSection = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Visa Renewal & Extension
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Learn about extending your student visa for continued studies or transitioning to other visa categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-[#edf4ff]">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-[#219ebc] rounded-full mx-auto mb-4">
                  <RefreshCw className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Renewal Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-3">When to Apply:</h4>
                    <ul className="space-y-2 text-sm text-[#082952]">
                      <li>• 2-3 months before visa expiry</li>
                      <li>• Before current visa expires</li>
                      <li>• When extending studies</li>
                      <li>• When changing course levels</li>
                    </ul>
                  </div>
                  <div className="bg-[#d7a12c]/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Processing Time:</h4>
                    <p className="text-sm text-[#082952]">4-6 weeks for standard applications</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-[#edf4ff]">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-full mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Extension Reasons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-3">Valid Reasons:</h4>
                    <ul className="space-y-2 text-sm text-[#082952]">
                      <li>• Continuing to higher degree</li>
                      <li>• Course duration extension</li>
                      <li>• Changing study programs</li>
                      <li>• Completing thesis/research</li>
                      <li>• Academic progression requirements</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-[#8ecae6] rounded-full mx-auto mb-4">
                  <FileText className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">New CoE</h5>
                    <p className="text-sm text-[#082952]">Updated Confirmation of Enrollment</p>
                  </div>
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Academic Transcripts</h5>
                    <p className="text-sm text-[#082952]">Recent academic progress records</p>
                  </div>
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Financial Evidence</h5>
                    <p className="text-sm text-[#082952]">Updated financial capacity proof</p>
                  </div>
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Health Insurance</h5>
                    <p className="text-sm text-[#082952]">Continued coverage documentation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-[#d7a12c] rounded-full mx-auto mb-4">
                  <AlertCircle className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Continuous Enrollment</h5>
                    <p className="text-sm text-[#082952]">Maintain active enrollment status</p>
                  </div>
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Academic Progress</h5>
                    <p className="text-sm text-[#082952]">Demonstrate satisfactory progress</p>
                  </div>
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Visa Conditions</h5>
                    <p className="text-sm text-[#082952]">Continue complying with all conditions</p>
                  </div>
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Early Application</h5>
                    <p className="text-sm text-[#082952]">Apply well before expiry date</p>
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

export default RenewalExtensionSection;
