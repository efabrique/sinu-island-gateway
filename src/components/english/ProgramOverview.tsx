
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Users, Award } from 'lucide-react';

const ProgramOverview = () => {
  const features = [
    {
      icon: Clock,
      title: "Flexible Duration",
      description: "Programs ranging from 10 weeks to 1 year depending on your needs and goals"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Maximum 15 students per class for personalized attention and support"
    },
    {
      icon: Award,
      title: "Qualified Teachers",
      description: "Experienced English language teachers with international qualifications"
    }
  ];

  const outcomes = [
    "Improve your overall English proficiency",
    "Develop academic writing and research skills",
    "Enhance listening and speaking confidence",
    "Learn study skills for university success",
    "Build vocabulary for academic contexts",
    "Practice critical thinking in English"
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              About Our English Language Programs
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Our English Language Programs are designed to help international students develop the language 
              skills needed for academic success at Solomon Islands National University.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop"
                alt="Students in English language class discussion"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#082952] mb-6">Program Features</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#219ebc] p-2 rounded-full mr-4 mt-1">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#082952] mb-2">{feature.title}</h4>
                      <p className="text-[#082952]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="border-[#219ebc] bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#082952] text-2xl">Learning Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#082952] mb-6">
                Upon successful completion of our English Language Programs, you will be able to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#219ebc] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#082952]">{outcome}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
