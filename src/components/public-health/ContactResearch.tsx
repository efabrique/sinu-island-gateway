import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, Users } from "lucide-react";

export function ContactResearch() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["research@sinu.edu.sb", "publichealth@sinu.edu.sb"],
      color: "text-[#219ebc]"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+677 30123", "+677 30124"],
      color: "text-[#219ebc]"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Public Health Research Center", "SINU Main Campus, Honiara"],
      color: "text-[#219ebc]"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"],
      color: "text-[#219ebc]"
    }
  ];

  const researchAreas = [
    "Health Services Research",
    "Environmental Health",
    "Global Health Partnerships",
    "Women's Health",
    "Child Health & Development",
    "Health Policy Research"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#219ebc] text-[#219ebc] px-4 py-2">
            Get Involved
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-6">
            Connect with Our Research Team
          </h2>
          <p className="text-lg text-[#082952]/80 max-w-3xl mx-auto">
            Join our research community or learn more about collaboration opportunities. 
            We welcome partnerships with researchers, institutions, and organizations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-[#8ecae6]/30 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#082952] flex items-center">
                <Send className="w-6 h-6 text-[#219ebc] mr-3" />
                Research Inquiry Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#082952] mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="Enter your first name"
                    className="border-[#8ecae6]/50 focus:border-[#219ebc]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#082952] mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Enter your last name"
                    className="border-[#8ecae6]/50 focus:border-[#219ebc]"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#082952] mb-2">
                  Email Address
                </label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="border-[#8ecae6]/50 focus:border-[#219ebc]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#082952] mb-2">
                  Institution/Organization
                </label>
                <Input 
                  placeholder="Your institution or organization"
                  className="border-[#8ecae6]/50 focus:border-[#219ebc]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#082952] mb-2">
                  Research Interest
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {researchAreas.map((area, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="border-[#8ecae6] text-[#082952] hover:bg-[#8ecae6]/20 cursor-pointer"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#082952] mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your research interests or collaboration ideas..."
                  rows={4}
                  className="border-[#8ecae6]/50 focus:border-[#219ebc]"
                />
              </div>
              
              <Button 
                className="w-full bg-[#219ebc] hover:bg-[#082952] text-white py-3"
                size="lg"
              >
                Send Research Inquiry
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-[#8ecae6]/30 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#082952] flex items-center">
                  <Users className="w-6 h-6 text-[#219ebc] mr-3" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-10 h-10 bg-[#8ecae6]/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#082952] mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-[#082952]/70 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-[#8ecae6]/10 to-[#219ebc]/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#082952] mb-4">
                Research Collaboration Opportunities
              </h3>
              <ul className="space-y-3 text-[#082952]/80">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#ffb703] rounded-full mr-3" />
                  Joint research projects and grants
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#ffb703] rounded-full mr-3" />
                  Visiting researcher programs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#ffb703] rounded-full mr-3" />
                  Student exchange opportunities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#ffb703] rounded-full mr-3" />
                  Data sharing partnerships
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#ffb703] rounded-full mr-3" />
                  Publication collaborations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}