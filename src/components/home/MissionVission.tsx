import React, { useState } from 'react';
import { getvision, getmission, getvalue, urlFor } from '../../../sanity/lib/sanity';

const MissionVission: React.FC = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const [comibinedData, setCombinedData] = useState<any[]>([]);

      const getImageSrc = (image: { sanityImage?: any; imageUrl?: string }) => {
        if (image?.sanityImage) {
          return urlFor(image.sanityImage).url();
        }
        if (image?.imageUrl) {
          return image.imageUrl;
        }
        return '';
      };

    React.useEffect(() => {
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
      console.log('Combined Data:', tagged);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

    return (
        <div
            style={{
                display: 'flex',
                gap: '18rem',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '15vh',
                backgroundColor: '#22a2bf',
                padding: '2rem',
                color: '#fff',
                fontSize: '1.5rem',
            }}
        >
            {comibinedData.map((feature, idx) => (
                <div
                    key={feature.title || idx}
                    style={{
                        position: 'relative',
                        cursor: 'pointer',
                        textAlign: 'center',
                        padding: '0 1rem',
                    }}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                >
                    {/* Feature Name with hover text color */}
                    <span
                        style={{
                            fontWeight: 'bold',
                            color: hovered === idx ? '#222' : '#fff',
                            transition: 'color 0.3s',
                        }}
                    >
                        {feature.type}
                    </span>

                    {hovered === idx && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'white',
                                border: '1px solid #ccc',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                padding: '1rem',
                                minWidth: '320px',
                                zIndex: 10,
                                color: '#082952',
                                display: 'grid',
                                alignItems: 'center',
                                gap: '1.5rem',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                            }}
                        >
                            <div style={{ flex: 1, textAlign: 'left' }}>
                                {feature.description}
                            </div>
                            <img
                                src={getImageSrc(feature.image)}
                                alt={feature.title || feature.type}
                                style={{
                                    width: '300px',
                                    height: '300px',
                                    borderRadius: '8px',
                                }}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MissionVission;
