
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const AccommodationOverviewSection = () => {
  const benefits = [
    "All-inclusive accommodation packages",
    "Fully furnished rooms and common areas",
    "High-speed internet and utilities included",
    "24/7 security and resident support",
    "Close proximity to campus facilities",
    "Multicultural living environment"
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Your Home Away From Home
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Solomon Islands National University provides comfortable and affordable accommodation options 
              designed to support your academic journey and enhance your university experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&q=80&auto=format&fit=crop"
                alt="Modern student accommodation living area"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#082952] mb-6">Why Choose SINU Accommodation?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#219ebc] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#082952]">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Card className="mt-8 border-[#219ebc] bg-[#219ebc]/10">
                <CardHeader>
                  <CardTitle className="text-[#082952]">Application Deadlines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-[#082952]">
                    <p><strong>Semester 1:</strong> December 31st (previous year)</p>
                    <p><strong>Semester 2:</strong> May 31st</p>
                    <p className="text-sm text-[#219ebc] mt-4">
                      Apply early to secure your preferred accommodation option.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationOverviewSection;
