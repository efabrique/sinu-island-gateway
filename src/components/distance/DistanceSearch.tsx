import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, User } from 'lucide-react';

interface Course {
  name: string;
  incharge: string;
  location: string;
    phone: string;
    email: string;
    services: string[];
  image: string;
}

  const centers = [
        {
      name: "Munda Learning Center",
      incharge: "Mr. Boniface Liliu",
      location: "Kokeqolo CHS",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
        {
      name: "Buala Learning Center",
      incharge: "Mr. Amos Havi",
      location: "Provincial Education Office",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
        {
      name: "Auki Learning Center",
      incharge: "Mr. Austine Aebata",
      location: "Auki CHS",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
        {
      name: "Malu'u Learning Center",
      incharge: "Mr. Henry Bare",
      location: "Malu'u CHS",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
        {
      name: "Lata Learning Center",
      incharge: "Mr. Walter Mavaemua",
      location: "Provincial Education Office",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
        {
      name: "Lomlom Learning Center",
      incharge: "Mr. Moses Bwekuli",
      location: "Gwaoa CHS, Reefs Islands",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
        {
      name: "Tulagi Learning Center",
      incharge: "Mrs. Eunice Agutu",
      location: "Provincial Education Office",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
        {
      name: "Aflo Learning Center",
      incharge: "Mr. Rodney",
      location: "Maka'a Community High School",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
        {
      name: "Nila Learning Center",
      incharge: "Mr. Lawrence Salapa",
      location: "Nila Shortland Island",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
        {
      name: "South Choiseul Learning Center",
      incharge: "Honorable Wiliam Sualalu",
      location: "South Choiseul, Vivuru Ward 4",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
        {
      name: "Lau & Baelelea Learning Center",
      incharge: "Mr. Junior Simi",
      location: "Gwaunasu Community High School",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
        {
      name: "Kirakira Learning Center",
      incharge: "Mr. Gilbert Tabihau or Mr. Marion Ahi",
      location: "Provincial Education Office",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
        {
      name: "Russel Learning Center",
      incharge: "Mr. Brian Vaka - Principal",
      location: "Yandina Community High School, Russel Islands",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      name: "Honiara Learning Center",
      location: "Kukum Highway, Panatina, Honiara",
      phone: "+677 12345678",
      email: "honiara@sinu.edu.sb",
      services: ["Computer Lab", "Library Access", "Student Support", "Exam Center"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      name: "Gizo Regional Center",
      incharge: "Mr. Madison Binet",
      location: "Gizo, Western Province",
      phone: "+677 60123456",
      email: "gizo@sinu.edu.sb",
      services: ["Study Rooms", "Internet Access", "Local Tutoring", "Printing Services"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
  ];

const DistanceSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = centers.filter(course =>
    course.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (name: string) => {
    const course = centers.find(c => c.name === name);
    if (course) {
      setSelectedCourse(course);
      setQuery(course.name);
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 text-[#222222]">Our Learning Centers
        <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>
      </h2>
          <p className="text-xl text-[#222222] max-w-5xl mx-auto py-3">
            Find support and resources at our strategically located learning centers 
            throughout the Solomon Islands
          </p>
          <p className="text-xl text-[#222222] max-w-5xl mx-auto text-center mb-6 font-bold">
            Search for a center to find the one closest to you.
          </p>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedCourse(null);
          }}
          placeholder="Search for a center..."
          className="w-full border border-blue-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />

        {query && filteredCourses.length > 0 && !selectedCourse && (
          <ul className="absolute left-0 right-0 bg-white border border-gray-200 mt-1 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto text-sm sm:text-base">
            {filteredCourses.map((course, index) => (
              <li
                key={index}
                onClick={() => handleSelect(course.name)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {course.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            key={selectedCourse.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-10 bg-white rounded-lg shadow-lg overflow-hidden border border-[#082952]"
          >
            <img
              src={selectedCourse.image}
              alt={selectedCourse.name}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-5 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#fff] mb-2 bg-blue-900">{selectedCourse.name}</h3>
            <div className="flex items-center text-gray-700 text-sm sm:text-base mb-2 font-semibold">
                <MapPin className="h-4 w-4 mr-2" />
                {selectedCourse.location}
            </div>
            <div className="flex items-center text-gray-700 text-sm sm:text-base mb-2 font-semibold">
                <User className="h-4 w-4 mr-2" />
                {selectedCourse.incharge}
            </div>
            <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm  sm:text-base text-[#082952]">
                    <Phone className="h-4 w-4 mr-2 text-[#219ebc]" />
                    {selectedCourse.phone}
                  </div>
                  <div className="flex items-center text-sm sm:text-base text-[#082952]">
                    <Mail className="h-4 w-4 mr-2 text-[#219ebc]" />
                    {selectedCourse.email}
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                <h2 className="font-semibold text-[#082952] text-xl mb-2">Key Features:</h2>
                  <ul className="text-sm text-[#082952] space-y-1">
                    {selectedCourse.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start sm:text-base">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DistanceSearch;
