import React from 'react';
import { CreditCard, Users, FileText, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const StudentTicketInfo = () => {
  const ticketInfo = [
    {
      type: "Student Concession",
      price: "50% off regular fare",
      description: "Special discount for enrolled SINU students",
      requirements: ["Valid Student ID", "Enrollment verification", "Photo identification"]
    },
    {
      type: "Weekly Pass",
      price: "SBD $25",
      description: "Unlimited campus shuttle rides for one week",
      requirements: ["Student ID required", "Valid for campus routes only", "Non-transferable"]
    },
    {
      type: "Monthly Pass",
      price: "SBD $80",
      description: "Unlimited access to all SINU transportation services",
      requirements: ["Student verification", "Valid for all routes", "Includes city services"]
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#082952] mb-4">
            Student Transportation Tickets
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Take advantage of student-friendly transportation options with special 
            rates and convenient pass options designed for university life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ticketInfo.map((ticket, index) => (
            <Card key={index} className="border-[#8ecae6]/30 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-lg mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-xl text-[#082952]">
                  {ticket.type}
                </CardTitle>
                <div className="text-3xl font-bold text-[#219ebc]">
                  {ticket.price}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#082952]/80 mb-4">
                  {ticket.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#082952] text-sm">Requirements:</h4>
                  {ticket.requirements.map((req, idx) => (
                    <div key={idx} className="text-sm text-[#082952]/80 flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#219ebc] rounded-full mr-2"></div>
                      {req}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg border border-[#8ecae6]/30">
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-[#ffb703] rounded-lg flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-[#082952]" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#082952] mb-2">
                Important Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#082952] mb-2">For Student Discounts:</h4>
                  <ul className="space-y-1 text-[#082952]/80">
                    <li>• Always carry your valid Student ID</li>
                    <li>• Discounts apply to public transport only</li>
                    <li>• ID verification may be required</li>
                    <li>• International students eligible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#082952] mb-2">How to Purchase:</h4>
                  <ul className="space-y-1 text-[#082952]/80">
                    <li>• Visit Student Services Office</li>
                    <li>• Online through student portal</li>
                    <li>• At campus transport hubs</li>
                    <li>• Mobile payment options available</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <Button className="bg-[#219ebc] hover:bg-[#082952] text-white">
                  <Users className="mr-2 h-4 w-4" />
                  Apply for Student Transport Pass
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTicketInfo;