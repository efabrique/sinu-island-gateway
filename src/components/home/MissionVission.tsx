import React, { useState, useEffect } from 'react';
import { getvision, getmission, getvalue, urlFor } from '../../../sanity/lib/sanity';

const MissionVission: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [combinedData, setCombinedData] = useState<any[]>([]);

  const getImageSrc = (image: { sanityImage?: any; imageUrl?: string }) => {
    if (image?.sanityImage) return urlFor(image.sanityImage).url();
    if (image?.imageUrl) return image.imageUrl;
    return '';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [visionData, missionData, valueData] = await Promise.all([
          getvision(),
          getmission(),
          getvalue(),
        ]);

        const tagged = [
          ...visionData.map((item: any) => ({ ...item, type: 'Our Vision' })),
          ...missionData.map((item: any) => ({ ...item, type: 'Our Mission' })),
          ...valueData.map((item: any) => ({ ...item, type: 'Our Value' })),
        ];

        setCombinedData(tagged);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#22a2bf] mt-20 text-white py-8 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16">
      {combinedData.map((feature, idx) => (
        <div
          key={feature.title || idx}
          className="relative flex-1 text-center cursor-pointer"
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Feature Title */}
          <span
            className={`font-bold transition-colors duration-300 ${
              hovered === idx ? 'text-[#222]' : 'text-white'
            } text-lg sm:text-xl md:text-2xl`}
          >
            {feature.type}
          </span>

          {/* Hover / Tap Popup */}
          {hovered === idx && (
            <div className="absolute z-50 top-full mt-4 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 shadow-lg p-4 sm:p-6 rounded-lg w-[90vw] max-w-lg md:max-w-xl text-[#082952] grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-items-center">
              {/* Description */}
              <div className="text-center sm:text-left text-sm sm:text-base font-medium">
                {feature.description}
              </div>
              {/* Image */}
              {feature.image && (
                <img
                  src={getImageSrc(feature.image)}
                  alt={feature.title || feature.type}
                  className="w-40 h-40 object-cover rounded-md"
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MissionVission;
