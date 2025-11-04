
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Upload, CheckCircle, AlertCircle } from 'lucide-react';

const DocumentsSection = () => {
  return (
    <section className="py-16 bg-[#8ecae6]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Required Documents
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Complete checklist of documents required for your international student application to SINU.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <FileText className="h-6 w-6 text-[#ffb703] mr-2" />
                  <CardTitle className="text-[#082952]">Academic Documents</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between p-3 bg-[#edf4ff] rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#ffb703] mr-2" />
                      <span className="text-[#082952]">Official Transcripts</span>
                    </div>
                    <Badge variant="outline" className="border-[#219ebc] text-[#082952]">Required</Badge>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-[#edf4ff] rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#ffb703] mr-2" />
                      <span className="text-[#082952]">Graduation Certificate</span>
                    </div>
                    <Badge variant="outline" className="border-[#219ebc] text-[#082952]">Required</Badge>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-[#edf4ff] rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#ffb703] mr-2" />
                      <span className="text-[#082952]">Academic References</span>
                    </div>
                    <Badge variant="outline" className="border-[#219ebc] text-[#082952]">2-3 letters</Badge>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-[#edf4ff] rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#ffb703] mr-2" />
                      <span className="text-[#082952]">English Test Scores</span>
                    </div>
                    <Badge variant="outline" className="border-[#219ebc] text-[#082952]">Official</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Upload className="h-6 w-6 text-[#ffb703] mr-2" />
                  <CardTitle className="text-[#082952]">Personal Documents</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between p-3 bg-[#edf4ff] rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#ffb703] mr-2" />
                      <span className="text-[#082952]">Passport Copy</span>
                    </div>
                    <Badge variant="outline" className="border-[#219ebc] text-[#082952]">Valid</Badge>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-[#edf4ff] rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#ffb703] mr-2" />
                      <span className="text-[#082952]">Personal Statement</span>
                    </div>
                    <Badge variant="outline" className="border-[#219ebc] text-[#082952]">500-1000 words</Badge>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-[#edf4ff] rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#ffb703] mr-2" />
                      <span className="text-[#082952]">CV/Resume</span>
                    </div>
                    <Badge variant="outline" className="border-[#219ebc] text-[#082952]">Updated</Badge>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-[#edf4ff] rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#ffb703] mr-2" />
                      <span className="text-[#082952]">Passport Photos</span>
                    </div>
                    <Badge variant="outline" className="border-[#219ebc] text-[#082952]">Recent</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="text-center">
                <FileText className="h-12 w-12 text-[#ffb703] mx-auto mb-2" />
                <CardTitle className="text-[#082952]">Document Format</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-[#082952] text-sm">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    PDF format preferred
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    High resolution scans
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Maximum 5MB per file
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Clear and legible text
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="text-center">
                <CheckCircle className="h-12 w-12 text-[#ffb703] mx-auto mb-2" />
                <CardTitle className="text-[#082952]">Translation Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-[#082952] text-sm">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Certified translations required
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Include original language documents
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Use qualified translators
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Translator credentials included
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="text-center">
                <AlertCircle className="h-12 w-12 text-[#ffb703] mx-auto mb-2" />
                <CardTitle className="text-[#082952]">Document Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-[#082952] text-sm">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Official institution seals
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Apostille certification
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Notarized copies
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-2"></span>
                    Embassy authentication
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#219ebc] rounded-lg p-6 border border-[#ffb703]">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 text-[#ffb703] mr-2" />
              Important Document Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Submission Requirements</h4>
                <ul className="space-y-2 text-[#8ecae6] text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#ffb703] mr-2 mt-0.5 flex-shrink-0" />
                    Submit all documents before the application deadline
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#ffb703] mr-2 mt-0.5 flex-shrink-0" />
                    Incomplete applications will not be processed
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#ffb703] mr-2 mt-0.5 flex-shrink-0" />
                    Original documents required for enrollment
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Additional Information</h4>
                <ul className="space-y-2 text-[#8ecae6] text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#ffb703] mr-2 mt-0.5 flex-shrink-0" />
                    Some programs may require additional documents
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#ffb703] mr-2 mt-0.5 flex-shrink-0" />
                    Document verification may take 2-4 weeks
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#ffb703] mr-2 mt-0.5 flex-shrink-0" />
                    Contact admissions for document queries
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
