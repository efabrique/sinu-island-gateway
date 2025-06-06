
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, CreditCard, Calendar, Info } from 'lucide-react';

const CostsFeesSection = () => {
  const accommodationCosts = [
    {
      type: "Residential Hall (Shared)",
      weeklyRate: "$150",
      semesterRate: "$2,700",
      yearlyRate: "$5,400",
      included: ["Utilities", "Internet", "Common areas"],
      color: "#ffb703"
    },
    {
      type: "Apartment Style",
      weeklyRate: "$200",
      semesterRate: "$3,600",
      yearlyRate: "$7,200",
      included: ["Private bathroom", "Kitchenette", "All utilities"],
      color: "#219ebc"
    },
    {
      type: "Shared Apartment",
      weeklyRate: "$175",
      semesterRate: "$3,150",
      yearlyRate: "$6,300",
      included: ["Shared facilities", "All utilities", "Laundry"],
      color: "#8ecae6"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Costs & Fees
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Transparent pricing for all accommodation options. All rates include utilities and basic furnishing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {accommodationCosts.map((accommodation, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: accommodation.color }}>
                <CardHeader>
                  <div 
                    className="p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: accommodation.color }}
                  >
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-[#082952] text-center text-lg">{accommodation.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold" style={{ color: accommodation.color }}>
                      {accommodation.weeklyRate}
                    </div>
                    <div className="text-sm text-[#082952]">per week</div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm text-[#082952]">
                      <span>Per Semester:</span>
                      <span className="font-semibold">{accommodation.semesterRate}</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#082952]">
                      <span>Per Year:</span>
                      <span className="font-semibold">{accommodation.yearlyRate}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#082952] mb-2">Included:</h4>
                    <ul className="space-y-1">
                      {accommodation.included.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-[#082952]">
                          <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: accommodation.color }}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-[#d7a12c] bg-[#d7a12c]/10">
              <CardHeader>
                <CardTitle className="text-[#082952] flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-[#082952]">
                  <div>
                    <h4 className="font-semibold">Deposit Required:</h4>
                    <p className="text-sm">$500 (refundable security deposit)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Payment Schedule:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Deposit due with application</li>
                      <li>• Semester fees due before move-in</li>
                      <li>• Payment plans available</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] bg-[#219ebc]/10">
              <CardHeader>
                <CardTitle className="text-[#082952] flex items-center">
                  <Info className="mr-2 h-5 w-5" />
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-[#082952]">
                  <div>
                    <h4 className="font-semibold">What's Not Included:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Meals (optional meal plans available)</li>
                      <li>• Personal items and toiletries</li>
                      <li>• Long-distance phone calls</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cancellation Policy:</h4>
                    <p className="text-sm">30 days notice required for cancellation</p>
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

export default CostsFeesSection;
