import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AccommodationOverview = () => {
  const benefits = [
    "Fully furnished accommodation designed for students",
    "Built-in support network of peers and staff",
    "Independent apartment-style and residential college options",
    "Year-round program of social, academic and career events",
    "Short walk from SINU campus in the heart of the city",
    "Accommodation guarantee for new students (subject to availability)"
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#082952' }}>
              Why Choose SINU Accommodation
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
              Designed for Solomon Islands National University students, find quality and safe accommodation 
              made for your needs and success. With a built-in support network, SINU Accommodation is your home away from home.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80&auto=format&fit=crop"
                alt="Modern student accommodation interior"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
                Your Home Away From Home
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#219ebc' }} />
                    <span style={{ color: '#082952' }}>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Card className="mt-8" style={{ borderColor: '#219ebc', backgroundColor: 'rgba(33, 158, 188, 0.1)' }}>
                <CardHeader>
                  <CardTitle style={{ color: '#082952' }}>Accommodation Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2" style={{ color: '#082952' }}>
                    <p>SINU has an <strong>Accommodation Offer</strong> for all commencing students who are new to Honiara, subject to availability.</p>
                    <p className="text-sm mt-4" style={{ color: '#219ebc' }}>
                      Apply early to secure your preferred accommodation option.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Button 
                className="mt-6 hover:shadow-lg transition-all duration-300"
                style={{ 
                  backgroundColor: '#ffb703',
                  color: '#082952',
                  border: 'none'
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Accommodation Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};