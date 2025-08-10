import React, { useState } from "react";
import { motion } from "framer-motion";

const learningPathways = [
  {
    id: "form3-4",
    title: "For Form 3 and 4",
    description: "Explore foundation-level courses to build core skills.",
    image: "/public/lovable-uploads/9763b031-1bb6-490a-bd9c-b086819fa224.png",
    eligibleCourses: ["Course 1", "Course 2", "Course 3"],
  },
  {
    id: "form5",
    title: "For Form 5",
    description: "Advance your education with intermediate-level courses.",
    image: "/public/lovable-uploads/9763b031-1bb6-490a-bd9c-b086819fa224.png",
    eligibleCourses: ["Course 4", "Course 5", "Course 6"],
  },
  {
    id: "form6-7",
    title: "For Form 6 and 7",
    description: "Prepare for higher studies with specialized programs.",
    image: "/public/lovable-uploads/9763b031-1bb6-490a-bd9c-b086819fa224.png",
    eligibleCourses: ["Course 7", "Course 8", "Course 9"],
  },
];

const higherQualificationCourses = [
  "Course 4",
  "Course 5",
  "Course 6",
  "Course 7",
  "Course 8",
  "Course 9",
];

const DFLProgramStructure = () => {
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleCardClick = (pathwayId: string) => {
    setSelectedPathway(pathwayId);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleSearch = (query: string, eligibleCourses: string[]) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
    } else {
      setSearchResults(
        eligibleCourses.filter((course) =>
          course.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  const handleHigherQualificationSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
    } else {
      setSearchResults(
        higherQualificationCourses.filter((course) =>
          course.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="p-6 space-y-12">
      {/* Section 1 - Learning Pathway Education */}
      <section>
                <h2 className="text-4xl font-bold text-center mb-10">
          DFL Program Structure
        </h2>
        <h2 className="text-2xl font-bold text-center mb-10">
          The Learning Pathway Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningPathways.map((path) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => handleCardClick(path.id)}
              className="cursor-pointer rounded-lg shadow-md bg-white hover:shadow-lg transition-all"
            >
              <img
                src={path.image}
                alt={path.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {path.title}
                </h3>
                <p className="text-gray-600 text-sm">{path.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search bar for selected pathway */}
        {selectedPathway && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6"
          >
            <input
              type="text"
              placeholder="Search for courses..."
              value={searchQuery}
              onChange={(e) =>
                handleSearch(
                  e.target.value,
                  learningPathways.find((p) => p.id === selectedPathway)
                    ?.eligibleCourses || []
                )
              }
              className="w-full p-3 border rounded-lg shadow-sm"
            />
            {/* Search results */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {searchResults.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <img
                    src="/course.jpg"
                    alt={course}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <h4 className="mt-2 font-semibold">{course}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </section>

      {/* Section 2 - Higher Qualification Programs */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-6">
          Higher Qualification Programs
        </h2>
        <input
          type="text"
          placeholder="Search for higher qualification courses..."
          value={searchQuery}
          onChange={(e) => handleHigherQualificationSearch(e.target.value)}
          className="w-full p-3 border rounded-lg shadow-sm"
        />
        {/* Search results */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {searchResults.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <img
                src="/course.jpg"
                alt={course}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <h4 className="mt-2 font-semibold">{course}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DFLProgramStructure;
