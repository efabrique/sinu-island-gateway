import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, BookOpen, Users } from 'lucide-react';

const PartnersOverview = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
              Global Partnership Network
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
              SINU has exchange agreements with a range of partner universities in many countries. 
              Some agreements are university-wide, while others are specific to discipline areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-none shadow-lg" style={{ backgroundColor: '#ffffff' }}>
              <CardContent className="p-8">
                <Globe className="w-12 h-12 mx-auto mb-4" style={{ color: '#219ebc' }} />
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#082952' }}>150+</h3>
                <p className="text-lg" style={{ color: '#082952' }}>Partner Universities</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg" style={{ backgroundColor: '#8ecae6' }}>
              <CardContent className="p-8">
                <BookOpen className="w-12 h-12 mx-auto mb-4" style={{ color: '#082952' }} />
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#082952' }}>35</h3>
                <p className="text-lg" style={{ color: '#082952' }}>Countries</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg" style={{ backgroundColor: '#ffb703' }}>
              <CardContent className="p-8">
                <Users className="w-12 h-12 mx-auto mb-4" style={{ color: '#082952' }} />
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#082952' }}>1000+</h3>
                <p className="text-lg" style={{ color: '#082952' }}>Exchange Students</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderLeft: '4px solid #219ebc' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#082952' }}>
              Important Information
            </h3>
            <ul className="space-y-3" style={{ color: '#082952' }}>
              <li>• Many partner universities offer courses in English, even in non-English speaking countries</li>
              <li>• Students who have room in their degree can apply for one semester of exchange studies</li>
              <li>• The number of exchange places at partner universities can vary each semester</li>
              <li>• Both university-wide and discipline-specific agreements are available</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersOverview;