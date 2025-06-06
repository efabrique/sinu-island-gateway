
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, PiggyBank, CreditCard, TrendingUp } from 'lucide-react';

const FinancialRequirementsSection = () => {
  return (
    <section className="py-16 bg-[#edf4ff] relative">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Financial Requirements
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Demonstrate sufficient financial capacity to support your studies and living expenses in Solomon Islands.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-full mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Annual Cost Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="bg-[#edf4ff] p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#082952] font-medium">Tuition Fees</span>
                      <span className="text-[#082952] font-bold">$15,000 - $25,000</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#082952] font-medium">Living Expenses</span>
                      <span className="text-[#082952] font-bold">$20,000 - $25,000</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#082952] font-medium">Health Insurance</span>
                      <span className="text-[#082952] font-bold">$500 - $800</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-2">
                      <span className="text-[#082952] font-bold">Total Annual Cost</span>
                      <span className="text-[#d7a12c] font-bold text-lg">$35,500 - $50,800</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-full mx-auto mb-4">
                  <PiggyBank className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Funding Sources</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="bg-[#edf4ff] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-3">Acceptable Sources:</h4>
                    <ul className="space-y-2 text-sm text-[#082952]">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#219ebc] rounded-full mr-2"></div>
                        Personal savings and family support
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#219ebc] rounded-full mr-2"></div>
                        Government scholarships
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#219ebc] rounded-full mr-2"></div>
                        Educational loans
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#219ebc] rounded-full mr-2"></div>
                        Employer sponsorship
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-[#219ebc] rounded-full mr-2"></div>
                        International organization grants
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-white relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-[#8ecae6] rounded-full mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Evidence Required</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Bank Statements</h5>
                    <p className="text-sm text-[#082952]">Last 6 months showing sufficient funds</p>
                  </div>
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Scholarship Letters</h5>
                    <p className="text-sm text-[#082952]">Official documentation of awards</p>
                  </div>
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Sponsor Declarations</h5>
                    <p className="text-sm text-[#082952]">Notarized financial support statements</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-white relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-[#d7a12c] rounded-full mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Financial Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Plan Early</h5>
                    <p className="text-sm text-[#082952]">Start saving and gathering funds well in advance</p>
                  </div>
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Budget Carefully</h5>
                    <p className="text-sm text-[#082952]">Include all expenses in your financial planning</p>
                  </div>
                  <div className="bg-[#edf4ff] p-3 rounded">
                    <h5 className="font-medium text-[#082952] mb-1">Exchange Rates</h5>
                    <p className="text-sm text-[#082952]">Consider currency fluctuations in your calculations</p>
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

export default FinancialRequirementsSection;
