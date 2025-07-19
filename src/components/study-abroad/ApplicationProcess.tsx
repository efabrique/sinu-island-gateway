export function ApplicationProcess() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#082952' }}>
          Application Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#ffb703' }}>
              <span className="text-2xl font-bold" style={{ color: '#082952' }}>1</span>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: '#082952' }}>Choose Application Path</h3>
            <p className="text-sm" style={{ color: '#082952' }}>Apply directly or through partner institutions</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#219ebc' }}>
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: '#082952' }}>Submit Documents</h3>
            <p className="text-sm" style={{ color: '#082952' }}>Upload all required academic and English proficiency documents</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
              <span className="text-2xl font-bold" style={{ color: '#082952' }}>3</span>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: '#082952' }}>Assessment</h3>
            <p className="text-sm" style={{ color: '#082952' }}>Individual assessment of application on rolling basis</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#d7a12c' }}>
              <span className="text-2xl font-bold" style={{ color: '#082952' }}>4</span>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: '#082952' }}>Acceptance</h3>
            <p className="text-sm" style={{ color: '#082952' }}>Receive offer letter and complete enrollment</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
            Application Deadlines
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#8ecae6' }}>
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>Semester 1</h4>
              <p className="mb-2" style={{ color: '#082952' }}>
                <strong>Application Deadline:</strong> November 30 (previous year)
              </p>
              <p style={{ color: '#082952' }}>
                <strong>Semester Period:</strong> February - June
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#ffb703' }}>
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>Semester 2</h4>
              <p className="mb-2" style={{ color: '#082952' }}>
                <strong>Application Deadline:</strong> April 30 (same year)
              </p>
              <p style={{ color: '#082952' }}>
                <strong>Semester Period:</strong> July - November
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
            <p className="text-center" style={{ color: '#082952' }}>
              <strong>Note:</strong> We strongly encourage applicants to apply as early as possible. Offers are made on a rolling basis, and late applications may be considered on a case-by-case basis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}