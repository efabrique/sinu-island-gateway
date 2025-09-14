import React, { useState, useEffect } from 'react';
import { getundergraduateDegrees, urlFor } from '../../../sanity/lib/sanity';

interface UndergraduateDegree {
  _id: string;
  title: string;
  description: string;
  image?: { sanityImage?: any; imageUrl?: string };
}

const UndergraduateStudyOptions: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<UndergraduateDegree | null>(null);
  const [undergraduateDegrees, setUndergraduateDegrees] = useState<UndergraduateDegree[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    getundergraduateDegrees().then(setUndergraduateDegrees);
  }, []);

  const getImageSrc = (image: { sanityImage?: any; imageUrl?: string } | undefined) => {
    if (image?.sanityImage) {
      return urlFor(image.sanityImage).url();
    }
    if (image?.imageUrl) {
      return image.imageUrl;
    }
    return '';
  };

  const filteredDegrees = undergraduateDegrees.filter(degree =>
    degree.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleCourseSelect = (degree: UndergraduateDegree) => {
    setSelectedCourse(degree);
    setSearchInput(degree.title);
    setShowDropdown(false); // Hide dropdown on selection
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setSelectedCourse(null);
    setShowDropdown(true);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 md:pt-40">
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

      <label className="text-lg font-medium text-[#222222]">
        Degree you are looking for:{' '}
      </label>
      <div className="relative">
        <input
          type="text"
          value={searchInput}
          placeholder="Search for a course..."
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(true)} // Show dropdown on input focus
          className="w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Suggestions */}
        {showDropdown && searchInput && filteredDegrees.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto mt-1">
            {filteredDegrees.map((degree) => (
              <li
                key={degree._id}
                onClick={() => handleCourseSelect(degree)}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {degree.title}
              </li>
            ))}
          </ul>
        )}
        {showDropdown && searchInput && filteredDegrees.length === 0 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 px-4 py-2 text-gray-500">
            No matching course found.
          </div>
        )}
      </div>

      {/* Selected Course Info */}
      {selectedCourse && (
        <div className="mt-8 rounded-lg shadow-lg overflow-hidden bg-white">
          <img
            src={getImageSrc(selectedCourse.image)}
            alt={selectedCourse.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {selectedCourse.title}
            </h2>
            <p className="mt-2 text-gray-600">{selectedCourse.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UndergraduateStudyOptions;
