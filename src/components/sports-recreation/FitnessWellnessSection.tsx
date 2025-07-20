import React from 'react';
import { Heart, Brain, Zap, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FitnessWellnessSection = () => {
  const wellnessPrograms = [
    {
      icon: Heart,
      title: "Physical Health",
      programs: ["Cardiovascular Training", "Strength Building", "Flexibility Classes", "Injury Prevention"],
      description: "Comprehensive fitness programs to improve your physical health and endurance"
    },
    {
      icon: Brain,
      title: "Mental Wellness",
      programs: ["Yoga & Meditation", "Stress Relief Classes", "Mindfulness Sessions", "Relaxation Techniques"],
      description: "Activities focused on mental health and stress management for students"
    },
    {
      icon: Zap,
      title: "Energy & Vitality",
      programs: ["High-Intensity Training", "Dance Fitness", "Circuit Training", "Bootcamp Classes"],
      description: "High-energy programs to boost your vitality and overall fitness levels"
    },
    {
      icon: Shield,
      title: "Health & Safety",
      programs: ["First Aid Training", "Nutrition Workshops", "Health Assessments", "Safety Education"],
      description: "Educational programs promoting health awareness and safety practices"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Fitness & Wellness
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            Our holistic approach to fitness and wellness encompasses physical health, mental well-being, 
            and overall lifestyle improvement to support your academic success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wellnessPrograms.map((program, index) => (
            <Card 
              key={index}
              className="transition-all duration-300 hover:shadow-lg border"
              style={{ 
                backgroundColor: '#ffffff',
                borderColor: '#8ecae6'
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#d7a12c' }}
                  >
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#082952' }}>
                      {program.title}
                    </h3>
                    <p className="mb-4" style={{ color: '#082952' }}>
                      {program.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>
                        Available Programs:
                      </h4>
                      <ul className="space-y-1">
                        {program.programs.map((item, idx) => (
                          <li 
                            key={idx} 
                            className="text-sm flex items-center gap-2"
                            style={{ color: '#082952' }}
                          >
                            <div 
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: '#219ebc' }}
                            ></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div 
            className="max-w-4xl mx-auto p-8 rounded-2xl"
            style={{ backgroundColor: '#ffffff', border: '2px solid #8ecae6' }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#082952' }}>
              Student Health & Wellness Support
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
              Our qualified health and fitness professionals are here to support your wellness journey. 
              We offer personalized fitness assessments, nutrition guidance, and wellness coaching to help 
              you maintain a healthy balance between academic and personal life.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold" style={{ color: '#d7a12c' }}>24/7</div>
                <div className="text-sm" style={{ color: '#082952' }}>Gym Access</div>
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: '#d7a12c' }}>50+</div>
                <div className="text-sm" style={{ color: '#082952' }}>Weekly Classes</div>
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: '#d7a12c' }}>Free</div>
                <div className="text-sm" style={{ color: '#082952' }}>Health Assessments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessWellnessSection;