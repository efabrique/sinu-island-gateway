import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Stethoscope, Users, Target, BarChart3 } from "lucide-react";

export function HealthServices() {
  const services = [
    {
      icon: Stethoscope,
      title: "Health Technology Assessment",
      description: "Evaluating the value and effectiveness of health technologies and interventions to inform funding decisions.",
      features: ["Cost-effectiveness analysis", "Clinical outcome evaluation", "Implementation studies"]
    },
    {
      icon: Users,
      title: "Workforce Development",
      description: "Research and programs to improve healthcare workforce capacity in remote and underserved areas.",
      features: ["Training program design", "Retention strategies", "Skill development initiatives"]
    },
    {
      icon: Target,
      title: "Service Delivery Models",
      description: "Innovative approaches to healthcare delivery that address unique challenges of island nations.",
      features: ["Telemedicine solutions", "Mobile health units", "Community-based care models"]
    },
    {
      icon: BarChart3,
      title: "Health System Strengthening",
      description: "Research informing policies and practices to build resilient and effective health systems.",
      features: ["System performance metrics", "Quality improvement", "Resource optimization"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#219ebc] text-[#219ebc] px-4 py-2">
            Health Services Research
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-6">
            Improving Healthcare Delivery
          </h2>
          <p className="text-lg text-[#082952]/80 max-w-3xl mx-auto">
            We conduct health services research and research to inform better delivery of health services, 
            improve workforce, and ensure health care delivery is evidence-based.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-[#8ecae6]/30 hover:border-[#219ebc]/50 transition-all duration-300 hover:shadow-lg bg-white"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#8ecae6]/20 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#219ebc]" />
                  </div>
                  <CardTitle className="text-xl text-[#082952]">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952]/70 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-[#082952]/60">
                      <div className="w-1.5 h-1.5 bg-[#ffb703] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#8ecae6]/10 to-[#219ebc]/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#082952] mb-6">
                Evidence-Based Healthcare Solutions
              </h3>
              <p className="text-[#082952]/80 mb-6 leading-relaxed">
                We undertake applied research assessing the value of health technologies and health 
                interventions to determine whether they warrant government funding. Our research 
                ensures that healthcare resources are allocated effectively and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#219ebc] hover:bg-[#082952] text-white">
                  Research Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white">
                  Partnership Opportunities
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold text-[#219ebc] mb-2">40+</div>
                <div className="text-sm text-[#082952]/70">Technology Assessments</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold text-[#ffb703] mb-2">15</div>
                <div className="text-sm text-[#082952]/70">Health Systems</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold text-[#d7a12c] mb-2">90%</div>
                <div className="text-sm text-[#082952]/70">Implementation Success</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold text-[#219ebc] mb-2">250+</div>
                <div className="text-sm text-[#082952]/70">Healthcare Professionals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}