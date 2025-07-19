import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, GraduationCap, Globe } from 'lucide-react';

const PartnerUniversities = () => {
  const regions = [
    {
      name: "Asia-Pacific",
      countries: ["Singapore", "Malaysia", "Japan", "South Korea", "Thailand"],
      universities: 45,
      highlight: "Strong in business, technology, and engineering programs"
    },
    {
      name: "Europe",
      countries: ["United Kingdom", "Germany", "France", "Netherlands", "Sweden"],
      universities: 60,
      highlight: "Excellence in research, liberal arts, and sustainability"
    },
    {
      name: "North America",
      countries: ["United States", "Canada"],
      universities: 25,
      highlight: "Leading institutions in innovation and diverse academic offerings"
    },
    {
      name: "Oceania",
      countries: ["Australia", "New Zealand"],
      universities: 20,
      highlight: "World-class education with cultural similarities to Solomon Islands"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
              Partner Universities Worldwide
            </h2>
            <p className="text-lg" style={{ color: '#082952' }}>
              Explore opportunities at over 150 partner institutions across 30 countries. 
              Find the perfect destination for your academic and cultural journey.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-none shadow-lg" style={{ backgroundColor: '#8ecae6' }}>
              <CardContent className="p-8">
                <Globe className="w-12 h-12 mx-auto mb-4" style={{ color: '#082952' }} />
                <div className="text-4xl font-bold mb-2" style={{ color: '#082952' }}>150+</div>
                <p className="text-lg" style={{ color: '#082952' }}>Partner Universities</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg" style={{ backgroundColor: '#ffb703' }}>
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 mx-auto mb-4" style={{ color: '#082952' }} />
                <div className="text-4xl font-bold mb-2" style={{ color: '#082952' }}>30</div>
                <p className="text-lg" style={{ color: '#082952' }}>Countries Available</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg" style={{ backgroundColor: '#219ebc' }}>
              <CardContent className="p-8">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-white" />
                <div className="text-4xl font-bold mb-2 text-white">1000+</div>
                <p className="text-lg text-white">Students Exchanged</p>
              </CardContent>
            </Card>
          </div>

          {/* Regional Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {regions.map((region, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#edf4ff' }}>
                <CardHeader>
                  <CardTitle className="text-xl" style={{ color: '#082952' }}>
                    {region.name}
                  </CardTitle>
                  <p className="text-lg font-semibold" style={{ color: '#219ebc' }}>
                    {region.universities} Partner Universities
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Countries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((country, countryIndex) => (
                        <span 
                          key={countryIndex}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{ backgroundColor: '#8ecae6', color: '#082952' }}
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: '#082952' }}>
                    <strong>Highlights:</strong> {region.highlight}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Map CTA */}
          <Card className="border-none shadow-lg text-center" style={{ backgroundColor: '#082952' }}>
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Find Your Perfect Destination
              </h3>
              <p className="text-lg mb-6 text-white max-w-2xl mx-auto">
                Use our interactive map to explore partner universities by location, academic programs, 
                and special features. Discover where your exchange adventure could take you!
              </p>
              <Button 
                size="lg" 
                className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold px-8 py-3"
              >
                Explore Interactive Map
              </Button>
            </CardContent>
          </Card>

          {/* Testimonial */}
          <div className="mt-12 bg-white rounded-lg p-8 shadow-lg" style={{ borderLeft: '4px solid #219ebc' }}>
            <blockquote className="text-lg italic mb-4" style={{ color: '#082952' }}>
              "There were so many amazing things about going on exchange. My top 3 would be having the experience of living independently on Campus, 
              meeting some incredible people and making life-long friends from all over the globe, and having the opportunity to travel around the region."
            </blockquote>
            <cite className="font-semibold" style={{ color: '#219ebc' }}>
              - Sarah Johnson, Semester Exchange to Nanyang Technology University, Singapore
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversities;