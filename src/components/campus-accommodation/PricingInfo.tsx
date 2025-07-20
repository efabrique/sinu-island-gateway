import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, CreditCard, Info } from 'lucide-react';

export const PricingInfo = () => {
  const pricingOptions = [
    {
      type: "Residential College",
      weeklyRate: "SBD 280",
      semesterRate: "SBD 4,480",
      yearlyRate: "SBD 8,960",
      included: ["All meals", "Utilities", "Wi-Fi", "Academic support", "Events program"],
      color: '#ffb703'
    },
    {
      type: "Independent Apartment",
      weeklyRate: "SBD 220",
      semesterRate: "SBD 3,520",
      yearlyRate: "SBD 7,040",
      included: ["Utilities", "Wi-Fi", "Kitchen facilities", "Common areas", "Support services"],
      color: '#219ebc'
    },
    {
      type: "Shared Housing",
      weeklyRate: "SBD 160",
      semesterRate: "SBD 2,560",
      yearlyRate: "SBD 5,120",
      included: ["Utilities", "Wi-Fi", "Shared facilities", "Community events", "Basic support"],
      color: '#8ecae6'
    },
    {
      type: "Studio Apartment",
      weeklyRate: "SBD 300",
      semesterRate: "SBD 4,800",
      yearlyRate: "SBD 9,600",
      included: ["All utilities", "Wi-Fi", "Private facilities", "Kitchenette", "Premium support"],
      color: '#d7a12c'
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#082952' }}>
              Accommodation Fees & Pricing
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
              Transparent pricing with no hidden costs. All fees include utilities and support services.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {pricingOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300" style={{ borderColor: option.color }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle style={{ color: '#082952' }}>{option.type}</CardTitle>
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${option.color}20` }}
                    >
                      <DollarSign className="h-5 w-5" style={{ color: option.color }} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold" style={{ color: option.color }}>{option.weeklyRate}</div>
                      <div className="text-xs" style={{ color: '#082952' }}>per week</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold" style={{ color: option.color }}>{option.semesterRate}</div>
                      <div className="text-xs" style={{ color: '#082952' }}>per semester</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold" style={{ color: option.color }}>{option.yearlyRate}</div>
                      <div className="text-xs" style={{ color: '#082952' }}>per year</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>What's Included:</h4>
                    <ul className="space-y-1">
                      {option.included.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm">
                          <div 
                            className="w-2 h-2 rounded-full mr-2"
                            style={{ backgroundColor: option.color }}
                          ></div>
                          <span style={{ color: '#082952' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card style={{ borderColor: '#219ebc' }}>
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: '#082952' }}>
                  <CreditCard className="h-5 w-5 mr-2" style={{ color: '#219ebc' }} />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm" style={{ color: '#082952' }}>
                  <div>
                    <h4 className="font-semibold mb-2">Security Deposit</h4>
                    <p>A refundable security deposit of SBD 500 is required upon acceptance of your accommodation offer.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Payment Schedule</h4>
                    <ul className="space-y-1">
                      <li>• First payment due upon acceptance</li>
                      <li>• Semester payments accepted</li>
                      <li>• Monthly payment plans available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Accepted Payment Methods</h4>
                    <p>Bank transfer, credit card, or cash payments at the Student Services Office.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card style={{ borderColor: '#ffb703' }}>
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: '#082952' }}>
                  <Info className="h-5 w-5 mr-2" style={{ color: '#ffb703' }} />
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm" style={{ color: '#082952' }}>
                  <div>
                    <h4 className="font-semibold mb-2">What's NOT Included</h4>
                    <ul className="space-y-1">
                      <li>• Personal meals (except residential colleges)</li>
                      <li>• Personal phone charges</li>
                      <li>• Laundry services</li>
                      <li>• Personal insurance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cancellation Policy</h4>
                    <p>Cancellations more than 30 days before move-in: Full refund. Less than 30 days: 50% refund. No refund after move-in date.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Financial Assistance</h4>
                    <p>Payment plans and financial hardship assistance available. Contact Student Services for more information.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};