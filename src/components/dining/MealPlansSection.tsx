import React from 'react';
import { Check, Coffee, Sandwich, ChefHat } from 'lucide-react';

const MealPlansSection = () => {
  const mealPlans = [
    {
      name: "Basic Plan",
      price: "$850",
      period: "per semester",
      meals: "10 meals per week",
      icon: Coffee,
      features: [
        "Breakfast & Lunch",
        "Weekday access",
        "Dining hall privileges",
        "Guest meal options"
      ],
      popular: false
    },
    {
      name: "Standard Plan",
      price: "$1,200",
      period: "per semester",
      meals: "15 meals per week",
      icon: Sandwich,
      features: [
        "All three meals",
        "Weekday & Weekend",
        "Dining hall privileges",
        "Café discounts",
        "Guest meal options"
      ],
      popular: true
    },
    {
      name: "Premium Plan",
      price: "$1,500",
      period: "per semester",
      meals: "19 meals per week",
      icon: ChefHat,
      features: [
        "All meals included",
        "7 days a week",
        "Priority seating",
        "Special events access",
        "Unlimited guest meals",
        "Café & snack credits"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
              Flexible Meal Plans
            </h2>
            <p className="text-xl text-[#219ebc] max-w-3xl mx-auto leading-relaxed">
              Choose the meal plan that fits your lifestyle and budget. All plans include 
              access to our diverse menu options and fresh ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mealPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${plan.popular ? 'border-[#ffb703] scale-105' : 'border-[#8ecae6]/30'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#ffb703] text-[#082952] px-6 py-2 rounded-full font-bold text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${plan.popular ? 'bg-[#ffb703]' : 'bg-[#8ecae6]'}`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-[#082952]' : 'text-white'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#082952] mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#219ebc]">{plan.price}</span>
                    <span className="text-[#219ebc] ml-2">{plan.period}</span>
                  </div>
                  <p className="text-[#d7a12c] font-semibold text-lg">{plan.meals}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-[#ffb703] mr-3 flex-shrink-0" />
                      <span className="text-[#082952]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952]' 
                    : 'bg-[#8ecae6] hover:bg-[#219ebc] text-white'
                }`}>
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealPlansSection;