import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';

const RegionalPartnersSection = () => {
  const regions = [
    {
      name: "Asia-Pacific",
      countries: [
        { name: "Australia", partners: ["University of Sydney", "Monash University", "Griffith University"] },
        { name: "Japan", partners: ["University of Tokyo", "Waseda University", "Sophia University"] },
        { name: "Singapore", partners: ["National University of Singapore", "Nanyang Technological University"] },
        { name: "Malaysia", partners: ["University of Malaya", "Universiti Putra Malaysia"] }
      ],
      totalPartners: 45
    },
    {
      name: "Europe", 
      countries: [
        { name: "United Kingdom", partners: ["University of Edinburgh", "King's College London", "University of Birmingham"] },
        { name: "Germany", partners: ["Humboldt University", "Technical University of Munich"] },
        { name: "France", partners: ["Sorbonne University", "Sciences Po"] },
        { name: "Netherlands", partners: ["University of Amsterdam", "Leiden University"] }
      ],
      totalPartners: 60
    },
    {
      name: "North America",
      countries: [
        { name: "United States", partners: ["University of California", "New York University", "Boston University"] },
        { name: "Canada", partners: ["University of Toronto", "McGill University", "University of British Columbia"] }
      ],
      totalPartners: 25
    },
    {
      name: "Other Regions",
      countries: [
        { name: "New Zealand", partners: ["University of Auckland", "Victoria University of Wellington"] },
        { name: "South Africa", partners: ["University of Cape Town", "University of the Witwatersrand"] }
      ],
      totalPartners: 20
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
              Partners by Region
            </h2>
            <p className="text-lg" style={{ color: '#082952' }}>
              Explore our partner universities organized by geographical regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#edf4ff' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl" style={{ color: '#082952' }}>
                    <MapPin className="w-5 h-5" style={{ color: '#219ebc' }} />
                    {region.name}
                  </CardTitle>
                  <p className="text-lg font-semibold" style={{ color: '#219ebc' }}>
                    {region.totalPartners} Partner Universities
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {region.countries.map((country, countryIndex) => (
                      <div key={countryIndex}>
                        <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>
                          {country.name}
                        </h4>
                        <ul className="space-y-1 ml-4">
                          {country.partners.map((partner, partnerIndex) => (
                            <li key={partnerIndex} className="flex items-center gap-2 text-sm" style={{ color: '#082952' }}>
                              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#ffb703' }}></span>
                              {partner}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6"
                    style={{ 
                      borderColor: '#219ebc', 
                      color: '#219ebc',
                      backgroundColor: 'transparent'
                    }}
                  >
                    View All Partners <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalPartnersSection;