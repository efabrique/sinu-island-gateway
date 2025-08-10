import React, { useState } from 'react';

const courseData = {
  'Bachelors of Science': {
    description: 'Explore scientific disciplines, research, and innovation in the natural world.',
    image: 'https://source.unsplash.com/featured/?science,lab',
  },
  'Bachelors of Business': {
    description: 'Gain insights into management, marketing, and entrepreneurship.',
    image: 'https://source.unsplash.com/featured/?business,office',
  },
  'Bachelors of Laws': {
    description: 'Study legal systems, jurisprudence, and prepare for a career in law.',
    image: 'https://source.unsplash.com/featured/?law,court',
  },
  'Bachelors of Nursing': {
    description: 'Train in patient care, medical procedures, and healthcare ethics.',
    image: 'https://source.unsplash.com/featured/?nursing,hospital',
  },
  'Bachelors of Education': {
    description: 'Prepare for teaching roles and educational leadership in schools and communities.',
    image: 'https://source.unsplash.com/featured/?education,classroom',
  },
  'Bachelors of Arts': {
    description: 'Delve into humanities, languages, and social sciences.',
    image: 'https://source.unsplash.com/featured/?arts,creativity',
  },
};

const UndergraduateStudyOptions: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const courseNames = Object.keys(courseData);
  const filteredCourses = courseNames.filter(course =>
    course.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleCourseSelect = (courseName: string) => {
    setSelectedCourse(courseName);
    setSearchInput(courseName);
  };

  const course = courseData[selectedCourse as keyof typeof courseData];

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
                <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
            Undergraduate Degrees
                            <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>

          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Choose from our range of undergraduate programs designed to prepare you for success 
            in your chosen career while contributing to the development of the Solomon Islands.
          </p>
        </div>
      {/* Sentence with Dropdown */}
      <label className="text-lg font-medium text-[#222222]">
        Degree you are looking for:{' '}
              </label>
    <div className="relative">
        <input
          type="text"
          value={searchInput}
          placeholder="Search for a course..."
          onChange={(e) => {setSearchInput(e.target.value);
            setSelectedCourse('');}}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        {/* Suggestions */}
        {searchInput && filteredCourses.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto mt-1">
            {filteredCourses.map((courseName) => (
              <li
                key={courseName}
                onClick={() => handleCourseSelect(courseName)}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {courseName}
              </li>
            ))}
          </ul>
        )}
        {searchInput && filteredCourses.length === 0 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 px-4 py-2 text-gray-500">
            No matching course found.
          </div>
        )}
      </div>

      {/* Selected Course Info */}
      {course && (
        <div className="mt-8 rounded-lg shadow-lg overflow-hidden bg-white">
          <img
            src={course.image}
            alt={selectedCourse}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {selectedCourse}
            </h2>
            <p className="mt-2 text-gray-600">{course.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UndergraduateStudyOptions;
