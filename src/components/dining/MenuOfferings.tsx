import React from 'react';
import { Sunrise, Sun, Moon, Coffee } from 'lucide-react';

const MenuOfferings = () => {
  const menuItems = [
    {
      meal: "Breakfast",
      time: "7:00 AM - 9:00 AM",
      icon: Sunrise,
      color: "bg-[#ffb703]",
      items: [
        "Continental breakfast station",
        "Fresh tropical fruits",
        "Variety of cereals and breads", 
        "Hot beverages and fresh juices",
        "Traditional Pacific breakfast options"
      ]
    },
    {
      meal: "Lunch", 
      time: "11:30 AM - 1:30 PM",
      icon: Sun,
      color: "bg-[#8ecae6]",
      items: [
        "International hot dishes",
        "Make-your-own salad bar",
        "Fresh sandwich station",
        "Daily soup selections",
        "Local Pacific specialties"
      ]
    },
    {
      meal: "Dinner",
      time: "5:30 PM - 8:00 PM", 
      icon: Moon,
      color: "bg-[#219ebc]",
      items: [
        "Gourmet main course options",
        "Fresh vegetables and sides",
        "International cuisine rotation",
        "Dessert selections",
        "Vegetarian and vegan options"
      ]
    },
    {
      meal: "Brunch (Weekends)",
      time: "9:00 AM - 2:00 PM",
      icon: Coffee,
      color: "bg-[#d7a12c]", 
      items: [
        "Extended breakfast menu",
        "Light lunch options",
        "Specialty weekend dishes",
        "Fresh pastries and baked goods",
        "Premium coffee selections"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
              Daily Menu Offerings
            </h2>
            <p className="text-xl text-[#219ebc] max-w-3xl mx-auto leading-relaxed">
              Every meal is carefully crafted by our experienced chefs using fresh, 
              quality ingredients to provide nutritious and delicious dining experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.map((menu, index) => (
              <div key={index} className="bg-[#edf4ff] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`${menu.color} w-16 h-16 rounded-full flex items-center justify-center mr-4`}>
                    <menu.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#082952]">{menu.meal}</h3>
                    <p className="text-[#219ebc] font-medium">{menu.time}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {menu.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-[#ffb703] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-[#082952] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full bg-transparent border-2 border-[#8ecae6] hover:bg-[#8ecae6] hover:text-white text-[#219ebc] py-3 rounded-lg font-semibold transition-all duration-300">
                  View Full Menu
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuOfferings;