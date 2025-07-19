export function ScholarshipTypes() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#082952' }}>
          Types of Scholarships
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderLeft: '4px solid #ffb703' }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Academic Merit Scholarships
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Excellence Awards</h4>
                <p className="text-sm" style={{ color: '#082952' }}>For students with exceptional academic records (GPA 3.8+)</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Merit Scholarships</h4>
                <p className="text-sm" style={{ color: '#082952' }}>For high-achieving students (GPA 3.5+)</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Subject-Specific Awards</h4>
                <p className="text-sm" style={{ color: '#082952' }}>For excellence in specific fields of study</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderLeft: '4px solid #219ebc' }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Need-Based Support
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Financial Hardship</h4>
                <p className="text-sm" style={{ color: '#082952' }}>For students demonstrating financial need</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Emergency Assistance</h4>
                <p className="text-sm" style={{ color: '#082952' }}>Short-term support for unexpected circumstances</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Living Allowances</h4>
                <p className="text-sm" style={{ color: '#082952' }}>Additional support for accommodation and living costs</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderLeft: '4px solid #8ecae6' }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Regional Partnerships
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Pacific Island Nations</h4>
                <p className="text-sm" style={{ color: '#082952' }}>Special scholarships for students from Pacific Island countries</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Government Partnerships</h4>
                <p className="text-sm" style={{ color: '#082952' }}>Scholarships funded by government agreements</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Sister Universities</h4>
                <p className="text-sm" style={{ color: '#082952' }}>Exchange scholarships with partner institutions</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderLeft: '4px solid #d7a12c' }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Specialized Programs
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Research Scholarships</h4>
                <p className="text-sm" style={{ color: '#082952' }}>For postgraduate research students and PhD candidates</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Innovation Awards</h4>
                <p className="text-sm" style={{ color: '#082952' }}>For students with innovative project proposals</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Leadership Programs</h4>
                <p className="text-sm" style={{ color: '#082952' }}>For students demonstrating leadership potential</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}