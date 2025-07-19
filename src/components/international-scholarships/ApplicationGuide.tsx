export function ApplicationGuide() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#082952' }}>
          How to Apply
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#ffb703' }}>
              <span className="text-3xl font-bold" style={{ color: '#082952' }}>1</span>
            </div>
            <h3 className="font-semibold mb-3" style={{ color: '#082952' }}>Apply to SINU</h3>
            <p className="text-sm" style={{ color: '#082952' }}>
              Submit your application for admission to an eligible course at SINU
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#219ebc' }}>
              <span className="text-3xl font-bold text-white">2</span>
            </div>
            <h3 className="font-semibold mb-3" style={{ color: '#082952' }}>Gather Documents</h3>
            <p className="text-sm" style={{ color: '#082952' }}>
              Prepare all required documentation including transcripts and references
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
              <span className="text-3xl font-bold" style={{ color: '#082952' }}>3</span>
            </div>
            <h3 className="font-semibold mb-3" style={{ color: '#082952' }}>Submit Application</h3>
            <p className="text-sm" style={{ color: '#082952' }}>
              Complete and submit your scholarship application before the deadline
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#d7a12c' }}>
              <span className="text-3xl font-bold" style={{ color: '#082952' }}>4</span>
            </div>
            <h3 className="font-semibold mb-3" style={{ color: '#082952' }}>Await Results</h3>
            <p className="text-sm" style={{ color: '#082952' }}>
              Wait for notification of scholarship outcome and acceptance
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderLeft: '4px solid #ffb703' }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Required Documents
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-3 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-xs font-bold" style={{ color: '#082952' }}>✓</span>
                </div>
                <span style={{ color: '#082952' }}>Completed scholarship application form</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-3 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-xs font-bold" style={{ color: '#082952' }}>✓</span>
                </div>
                <span style={{ color: '#082952' }}>Academic transcripts and certificates</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-3 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-xs font-bold" style={{ color: '#082952' }}>✓</span>
                </div>
                <span style={{ color: '#082952' }}>English language proficiency test results</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-3 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-xs font-bold" style={{ color: '#082952' }}>✓</span>
                </div>
                <span style={{ color: '#082952' }}>Personal statement (500-1000 words)</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-3 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-xs font-bold" style={{ color: '#082952' }}>✓</span>
                </div>
                <span style={{ color: '#082952' }}>Two academic or professional references</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-3 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-xs font-bold" style={{ color: '#082952' }}>✓</span>
                </div>
                <span style={{ color: '#082952' }}>Passport copy and visa documents</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderLeft: '4px solid #219ebc' }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Application Deadlines
            </h3>
            <div className="space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>Semester 1 Intake</h4>
                <div className="space-y-2">
                  <p style={{ color: '#082952' }}>
                    <strong>Application Opens:</strong> September 1
                  </p>
                  <p style={{ color: '#082952' }}>
                    <strong>Application Closes:</strong> December 15
                  </p>
                  <p style={{ color: '#082952' }}>
                    <strong>Results Announced:</strong> January 31
                  </p>
                </div>
              </div>
              
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>Semester 2 Intake</h4>
                <div className="space-y-2">
                  <p style={{ color: '#082952' }}>
                    <strong>Application Opens:</strong> February 1
                  </p>
                  <p style={{ color: '#082952' }}>
                    <strong>Application Closes:</strong> May 15
                  </p>
                  <p style={{ color: '#082952' }}>
                    <strong>Results Announced:</strong> June 30
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#ffb703' }}>
              <p className="text-center font-semibold" style={{ color: '#082952' }}>
                Early applications are strongly encouraged as scholarships are awarded on a competitive basis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}