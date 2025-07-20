import React from 'react';
import { Dumbbell, Waves, Bike, Users, Trophy, Calendar } from 'lucide-react';

export const FitnessRecreation = () => {
  const facilities = [
    {
      icon: Dumbbell,
      title: "Modern Fitness Center",
      description: "State-of-the-art gym equipment including cardio machines, free weights, and strength training equipment.",
      features: ["Cardio equipment", "Weight training", "Functional training area", "Personal training available"]
    },
    {
      icon: Waves,
      title: "Aquatic Center",
      description: "Olympic-size swimming pool with lanes for lap swimming, water aerobics, and recreational activities.",
      features: ["25m pool", "Swimming lessons", "Water aerobics", "Competitive swimming"]
    },
    {
      icon: Users,
      title: "Group Fitness Classes",
      description: "Diverse range of group fitness classes led by certified instructors for all fitness levels.",
      features: ["Yoga classes", "Pilates", "Zumba", "HIIT training"]
    }
  ];

  const sports = [
    { name: "Basketball", icon: Trophy },
    { name: "Football", icon: Trophy },
    { name: "Volleyball", icon: Trophy },
    { name: "Tennis", icon: Trophy },
    { name: "Rugby", icon: Trophy },
    { name: "Athletics", icon: Trophy }
  ];

  const schedule = [
    { day: "Monday", morning: "Yoga (7:00 AM)", afternoon: "Basketball Training (4:00 PM)" },
    { day: "Tuesday", morning: "HIIT (7:00 AM)", afternoon: "Swimming (4:00 PM)" },
    { day: "Wednesday", morning: "Pilates (7:00 AM)", afternoon: "Football Training (4:00 PM)" },
    { day: "Thursday", morning: "Zumba (7:00 AM)", afternoon: "Volleyball (4:00 PM)" },
    { day: "Friday", morning: "Strength Training (7:00 AM)", afternoon: "Open Recreation (4:00 PM)" }
  ];

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 style={{ color: '#082952' }} className="text-4xl font-bold mb-6">
            Fitness & Recreation
          </h2>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            Stay active and healthy with our comprehensive fitness and recreation facilities. 
            From modern gym equipment to group classes and competitive sports, we have something for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              style={{ backgroundColor: '#edf4ff', borderColor: '#8ecae6' }}
              className="border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div 
                  style={{ backgroundColor: '#ffb703' }} 
                  className="w-14 h-14 rounded-lg flex items-center justify-center mr-4"
                >
                  <facility.icon style={{ color: '#082952' }} className="w-7 h-7" />
                </div>
                <h3 style={{ color: '#082952' }} className="text-xl font-semibold">
                  {facility.title}
                </h3>
              </div>
              
              <p style={{ color: '#219ebc' }} className="mb-6 leading-relaxed">
                {facility.description}
              </p>
              
              <ul className="space-y-2">
                {facility.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div 
                      style={{ backgroundColor: '#d7a12c' }} 
                      className="w-2 h-2 rounded-full mr-3"
                    />
                    <span style={{ color: '#082952' }} className="text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div style={{ backgroundColor: '#edf4ff' }} className="p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Bike style={{ color: '#d7a12c' }} className="w-8 h-8 mr-3" />
              <h3 style={{ color: '#082952' }} className="text-2xl font-semibold">
                Intramural Sports
              </h3>
            </div>
            
            <p style={{ color: '#219ebc' }} className="mb-6 leading-relaxed">
              Join our competitive intramural sports leagues and tournaments. 
              Great way to stay fit while building friendships and team spirit.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {sports.map((sport, index) => (
                <div key={index} className="flex items-center">
                  <sport.icon style={{ color: '#ffb703' }} className="w-5 h-5 mr-2" />
                  <span style={{ color: '#082952' }} className="text-sm font-medium">
                    {sport.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: '#edf4ff' }} className="p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Calendar style={{ color: '#d7a12c' }} className="w-8 h-8 mr-3" />
              <h3 style={{ color: '#082952' }} className="text-2xl font-semibold">
                Weekly Schedule
              </h3>
            </div>
            
            <div className="space-y-4">
              {schedule.map((day, index) => (
                <div key={index} style={{ backgroundColor: '#ffffff' }} className="p-4 rounded-lg">
                  <h4 style={{ color: '#082952' }} className="font-semibold mb-2">
                    {day.day}
                  </h4>
                  <div className="space-y-1">
                    <p style={{ color: '#219ebc' }} className="text-sm">
                      Morning: {day.morning}
                    </p>
                    <p style={{ color: '#219ebc' }} className="text-sm">
                      Afternoon: {day.afternoon}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#edf4ff' }} className="p-8 rounded-lg text-center">
          <h3 style={{ color: '#082952' }} className="text-2xl font-semibold mb-4">
            Ready to Get Active?
          </h3>
          <p style={{ color: '#219ebc' }} className="mb-6 max-w-2xl mx-auto">
            Join our fitness community today! Get access to all facilities, classes, and sports programs 
            with your student membership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
              className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              Register for Membership
            </button>
            <button 
              style={{ backgroundColor: '#d7a12c', color: '#082952' }}
              className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              View Full Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};