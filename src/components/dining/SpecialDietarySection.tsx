import React from 'react';
import { Leaf, Heart, Shield, Users } from 'lucide-react';

const SpecialDietarySection = () => {
  const dietaryOptions = [
    {
      icon: Leaf,
      title: "Vegetarian & Vegan",
      description: "Comprehensive plant-based options available at every meal",
      features: ["Daily vegan specials", "Fresh produce", "Plant-based proteins", "Nutritional balance"]
    },
    {
      icon: Shield,
      title: "Halal Certified",
      description: "Certified Halal options to meet religious dietary requirements",
      features: ["Certified suppliers", "Separate preparation", "Clear labeling", "Daily availability"]
    },
    {
      icon: Heart,
      title: "Gluten-Free",
      description: "Safe dining options for those with gluten sensitivities and celiac disease",
      features: ["Dedicated prep areas", "Certified ingredients", "Clear allergen labeling", "Staff training"]
    },
    {
      icon: Users,
      title: "Special Diets",
      description: "Accommodating various dietary needs and cultural preferences",
      features: ["Custom meal plans", "Nutritionist consultations", "Cultural cuisines", "Medical diets"]
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
              Special Dietary Accommodations
            </h2>
            <p className="text-xl text-[#219ebc] max-w-3xl mx-auto leading-relaxed">
              We understand that every student has unique dietary needs. Our dining services 
              are committed to providing safe, delicious options for all dietary requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {dietaryOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-[#ffb703] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <option.icon className="w-8 h-8 text-[#082952]" />
                </div>
                <h3 className="text-xl font-bold text-[#082952] mb-3 text-center">
                  {option.title}
                </h3>
                <p className="text-[#219ebc] text-center mb-4 leading-relaxed">
                  {option.description}
                </p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-[#8ecae6] rounded-full mr-2"></div>
                      <span className="text-[#082952]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#082952] mb-4">
                Need Special Accommodations?
              </h3>
              <p className="text-[#219ebc] mb-6 leading-relaxed">
                Our nutrition team is here to help create a personalized dining plan that meets your specific needs.
                Contact us to discuss your requirements and available options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Schedule Consultation
                </button>
                <button className="bg-[#8ecae6] hover:bg-[#219ebc] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Download Menu Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDietarySection;