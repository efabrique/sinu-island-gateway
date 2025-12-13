import React, { useState, useEffect } from "react";
import { getvision, getmission, getvalue, urlFor } from "../../../sanity/lib/sanity";

const MissionVission = () => {
  const [hovered, setHovered] = useState(null);
  const [combinedData, setCombinedData] = useState([]);
  const [popupPosition, setPopupPosition] = useState("center");

  const getImageSrc = (image) => {
    if (image?.sanityImage) return urlFor(image.sanityImage).url();
    if (image?.imageUrl) return image.imageUrl;
    return "";
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
          ...visionData.map((item) => ({ ...item, type: "Our Vision" })),
          ...missionData.map((item) => ({ ...item, type: "Our Mission" })),
          ...valueData.map((item) => ({ ...item, type: "Our Value" })),
        ];

        setCombinedData(tagged);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#22a2bf] mt-20 text-white py-8 px-4 sm:px-6 md:px-12 
      flex flex-col md:flex-row justify-center items-center 
      md:items-start gap-8 md:gap-16"
    >
      {combinedData.map((feature, idx) => (
        <div
          key={feature.title || idx}
          className="relative flex-1 text-center cursor-pointer"
          onMouseEnter={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            let position = "center";

            if (rect.left < 150) {
              position = "left";
            } else if (viewportWidth - rect.right < 150) {
              position = "right";
            }

            setPopupPosition(position);
            setHovered(idx);
          }}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Title */}
          <span
            className={`font-bold transition-colors duration-300 ${
              hovered === idx ? "text-[#222]" : "text-white"
            } text-lg sm:text-xl md:text-2xl`}
          >
            {feature.type}
          </span>

          {/* Popup */}
          {hovered === idx && (
            <div
              className={`
                absolute z-50 top-full mt-4 bg-white border border-gray-300 shadow-lg 
                p-4 sm:p-6 rounded-lg w-[90vw] max-w-lg text-[#082952]
                grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-items-center
                transition-all duration-200
                ${popupPosition === "center" ? "left-1/2 -translate-x-1/2" : ""}
                ${popupPosition === "left" ? "left-0" : ""}
                ${popupPosition === "right" ? "right-0" : ""}
              `}
            >
              {/* Description */}
              <p className="text-justify text-sm sm:text-base font-medium">
                {feature.description}
              </p>

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
