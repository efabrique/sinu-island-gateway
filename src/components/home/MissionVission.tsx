import React, { useState } from 'react';

const features = [
    {
        name: 'Our Vision',
        content: 'A quality National University, raising standards of education and applied research in the Pacific region.',
    },
    {
        name: 'Our Mission',
        content: 'Championing the pursuit of knowledge, skills, academic inquiry and applied research to transform lives through higher education and training, inclusive of diverse communities, while providing relevant solutions for the Solomon Islands.',
    },
    {
        name: 'Our Values',
        content: 'Excellence and Quality: SINU is committed to providing excellent and high quality teaching, learning, skills training, and research. Innovativeness: SINU encourages and promotes creative ideas and solutions to existing and new challenges. Relevance: SINU is committed to providing relevant teaching.',
    },
];

const MissionVission: React.FC = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    // Images for each feature (replace with your actual image paths)
    const featureImages = [
        '/lovable-uploads/graduation-circle-portrait-students-university-ceremony-celebration-academic-achievement-college-degree-friends-men-women-education-learning-studying_590464-464488.avif',
        '/lovable-uploads/graduation-circle-portrait-students-university-ceremony-celebration-academic-achievement-college-degree-friends-men-women-education-learning-studying_590464-464488.avif',
        '/lovable-uploads/graduation-circle-portrait-students-university-ceremony-celebration-academic-achievement-college-degree-friends-men-women-education-learning-studying_590464-464488.avif',

    ];

    return (
        <div
            style={{
            display: 'flex',
            gap: '10rem',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '20vh',
            backgroundColor: '#0b2c55',
            padding: '2rem',
            color: '#ffb703',
            fontSize: '1.5rem',
            }}
        >
            {features.map((feature, idx) => (
            <div
                key={feature.name}
                style={{
                position: 'relative',
                cursor: 'pointer',
                textAlign: 'center',
                padding: '0 1rem',
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
            >
                <span style={{ fontWeight: 'bold', }}>{feature.name}</span>
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
                    fontSize: '1rem', // Set font size for hover box
                    }}
                >
                    <div style={{ flex: 1, textAlign: 'left' }}>
                    {feature.content}
                    </div>
                    <img
                    src={featureImages[idx]}
                    alt={feature.name}
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