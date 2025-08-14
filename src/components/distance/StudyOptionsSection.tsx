import React from 'react';
import { Laptop, Users, Calendar, BookOpen } from 'lucide-react';
import OptimizedImage from '@/components/common/OptimizedImage';
import { motion } from 'framer-motion';

const StudyOptionsSection = () => {
  const studyModes = [
    {
      icon: Laptop,
      title: "Fully Online",
      description: "Complete your studies entirely online with digital resources and virtual classrooms",
      features: ["24/7 Learning Platform", "Video Lectures", "Online Assessments", "Digital Library Access"],
      suitableFor: "a Working Professionals OR a Remote Island Residents",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      icon: Users,
      title: "Blended Learning",
      description: "Combine online study with regular face-to-face sessions at learning centers",
      features: ["Flexible Schedule", "Practical Workshops", "Peer Interaction", "Local Support"],
      suitableFor: "a Student Needing Hands-On Experience OR a Local Community Members",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      icon: Calendar,
      title: "Block Mode",
      description: "Intensive study periods followed by independent learning phases",
      features: ["Intensive Workshops", "Extended Projects", "Industry Placements", "Mentorship"],
      suitableFor: "a Working Adult OR a Career Changer",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      icon: BookOpen,
      title: "Correspondence",
      description: "Traditional distance learning with printed materials and postal support",
      features: ["Study Guides", "Assignment Booklets", "Phone Tutorials", "Regional Exams"],
      suitableFor: "in Areas with limited internet OR a Traditional learners",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
    }
  ];

  return (
    <section className="py-10 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4 text-center relative inline-block">
            Study Options & Learning Modes
          <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>
           </h2>
          <p className="text-xl text-[#222222] max-w-3xl mx-auto">
            Choose the learning format that best fits your lifestyle and circumstances
          </p>
        </div>

        <div className="space-y-16">
          {studyModes.map((mode, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center md:space-x-8 md:space-x-reverse`}
              >
                <div className="w-full md:w-1/2 relative">
                  <OptimizedImage
                    src={mode.image}
                    alt={mode.title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                  />
                </div>

                <div className={`w-full md:w-1/2 mt-6 md:mt-0 ${isEven ? '-ml-12' : '-mr-12'} bg-white bg-opacity-90 p-6 md:p-8 rounded-lg shadow-md z-10 relative`}>  
                  <div className="bg-[#219ebc] w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-blue-600">
                    <mode.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#222222] mb-2"> You are:</h3>
                  <div className="flex flex-wrap gap-10 border-b border-gray-300 pb-2">
                  <button
                    key={mode.suitableFor}
            className=" px-4 py-2 text-sm md:text-base text-[#fff] hover:text-grey-500 border-b-2 border-transparent hover:border-yellow-500 transition bg-blue-600 font-bold rounded-[10px]"
          >
            {mode.suitableFor}
          </button>
      </div>
                 
                  <h3 className="text-2xl font-semibold text-[#222222] mb-3"> Study Method:</h3>
                                    <button
                    key={mode.title}
            className=" px-4 py-2 text-sm mb-3 md:text-base text-[#fff] hover:text-grey-500 border-b-2 border-transparent hover:border-yellow-500 transition bg-blue-600 font-bold rounded-[10px]"
          >
            {mode.title}
          </button>
                  <p className="text-[#222222] mb-3">{mode.description}</p>
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-[#222222] mb-1">Key Features:</h3>
                    <ul className="list-disc list-inside text-[#222222] space-y-1">
                      {mode.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudyOptionsSection;
