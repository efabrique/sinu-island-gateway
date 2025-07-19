import { BookOpen, Building, GraduationCap, DollarSign, Users, FileText } from 'lucide-react';

const iconMap = {
  BookOpen,
  Building,
  GraduationCap,
  DollarSign,
  Users,
  FileText
};

export const EventsCategories = () => {
  const categories = [
    {
      title: "Information Sessions",
      description: "Learn about our academic programs, admission requirements, and university life",
      icon: "BookOpen",
      events: "12 upcoming events"
    },
    {
      title: "Campus Tours",
      description: "Virtual and in-person tours of our beautiful Honiara campus and facilities",
      icon: "Building",
      events: "8 upcoming events"
    },
    {
      title: "Student Life Events",
      description: "Discover campus culture, clubs, societies, and student support services",
      icon: "GraduationCap",
      events: "6 upcoming events"
    },
    {
      title: "Scholarship Workshops",
      description: "Learn about funding opportunities and scholarship application processes",
      icon: "DollarSign",
      events: "4 upcoming events"
    },
    {
      title: "Faculty Presentations",
      description: "Meet academic staff and learn about specific schools and departments",
      icon: "Users",
      events: "10 upcoming events"
    },
    {
      title: "Application Workshops",
      description: "Get step-by-step guidance on completing your university application",
      icon: "FileText",
      events: "7 upcoming events"
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Event Categories
          </h2>
          <p className="text-lg text-[#082952]/80 max-w-3xl mx-auto">
            Explore different types of events designed to help you on your journey to SINU
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-[#8ecae6]/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                {(() => {
                  const IconComponent = iconMap[category.icon as keyof typeof iconMap];
                  return IconComponent ? <IconComponent className="h-10 w-10 text-[#219ebc]" /> : null;
                })()}
              </div>
              <h3 className="text-xl font-bold text-[#082952] mb-3">{category.title}</h3>
              <p className="text-[#082952]/70 mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#219ebc] font-medium">{category.events}</span>
                <button className="text-[#ffb703] hover:text-[#d7a12c] font-medium transition-colors duration-300">
                  View Events →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};