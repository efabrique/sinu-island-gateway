export function ProgramDetails() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#082952' }}>
          Program Details
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Course Information
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 pl-4" style={{ borderColor: '#ffb703' }}>
                <h4 className="font-semibold" style={{ color: '#082952' }}>Duration</h4>
                <p style={{ color: '#082952' }}>One semester (18-20 weeks) or full academic year</p>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: '#219ebc' }}>
                <h4 className="font-semibold" style={{ color: '#082952' }}>Credit Points</h4>
                <p style={{ color: '#082952' }}>24 credit points per semester (equivalent to 4 subjects)</p>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: '#d7a12c' }}>
                <h4 className="font-semibold" style={{ color: '#082952' }}>Study Mode</h4>
                <p style={{ color: '#082952' }}>On-campus day classes with field study opportunities</p>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: '#8ecae6' }}>
                <h4 className="font-semibold" style={{ color: '#082952' }}>Location</h4>
                <p style={{ color: '#082952' }}>Main campus in Honiara, Solomon Islands</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#082952' }}>
              Subject Areas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#8ecae6', color: '#082952' }}>
                <h4 className="font-semibold">Marine Science</h4>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#ffb703', color: '#082952' }}>
                <h4 className="font-semibold">Education</h4>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#219ebc', color: '#ffffff' }}>
                <h4 className="font-semibold">Business</h4>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#d7a12c', color: '#082952' }}>
                <h4 className="font-semibold">Agriculture</h4>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#8ecae6', color: '#082952' }}>
                <h4 className="font-semibold">Health Sciences</h4>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#ffb703', color: '#082952' }}>
                <h4 className="font-semibold">Social Sciences</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}