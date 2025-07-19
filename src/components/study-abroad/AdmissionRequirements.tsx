export function AdmissionRequirements() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#082952' }}>
          Admission Requirements
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderTop: '4px solid #ffb703' }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Academic Requirements
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-xs font-bold" style={{ color: '#082952' }}>✓</span>
                </div>
                <div>
                  <p style={{ color: '#082952' }}>
                    Completed equivalent of an Australian Bachelor degree with substantiating evidence
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-xs font-bold" style={{ color: '#082952' }}>✓</span>
                </div>
                <div>
                  <p style={{ color: '#082952' }}>
                    Cumulative GPA of 3.0 on a 4.0 point scale or equivalent 'Credit' average
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
                  <span className="text-xs font-bold" style={{ color: '#082952' }}>✓</span>
                </div>
                <div>
                  <p style={{ color: '#082952' }}>
                    Currently enrolled at an accredited university or higher education institution
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderTop: '4px solid #219ebc' }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              English Language Requirements
            </h3>
            <div className="space-y-6">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>IELTS Score</h4>
                <p style={{ color: '#082952' }}>Minimum 6.5 overall with 6.0 in each band</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>TOEFL - IBT Score</h4>
                <p style={{ color: '#082952' }}>Minimum 79 overall</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#edf4ff' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Pearson Test of English</h4>
                <p style={{ color: '#082952' }}>Minimum 58 overall</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}