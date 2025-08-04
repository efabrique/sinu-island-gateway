import React from 'react';

const backgroundImageUrl = 'public/lovable-uploads/7284ab6b-b66f-44ea-be92-9f17dc726408.png';

export default function StudyWithUs() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                minHeight: '100vh',
                position: 'relative',
                paddingLeft: '15vw',
            }}
        >
            <div
                style={{
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: 16,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                    padding: '2rem 2.5rem',
                    maxWidth: 400,
                    textAlign: 'center',
                    zIndex: 2,
                    position: 'relative',
                    left: '2vw', // Slight overlap
                }}
            >
                <h2 style={{ marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.5rem' }}>Study With Us</h2>
                <p style={{ marginBottom: '1.5rem', color: '#555', textAlign: 'justify' }}>
                    Choose a degree or course that excites and motivates, where you will gain the knowledge, industry connections and real-world experience needed to create the career you want.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <button
                        style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: 8,
                            border: 'none',
                            background: '#0b2c55',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                        }}
                        onClick={() => alert('Find a degree clicked')}
                    >
                        Find a Degree
                    </button>
                    <button
                        style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: 8,
                            border: '1px solid #0b2c55',
                            background: '#0b2c55',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'background 0.2s, color 0.2s',
                        }}
                        onClick={() => alert('Ask an academic clicked')}
                    >
                        Ask an Academic
                    </button>
                </div>
            </div>
            <img
                src={backgroundImageUrl}
                alt="Study With Us"
                style={{
                    height: '70vh',
                    objectFit: 'cover',
                    borderRadius: 16,
                    marginLeft: '-60px', // Overlap content
                    zIndex: 1,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                }}
            />
        </div>
    );
}