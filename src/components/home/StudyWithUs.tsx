import React from 'react';
import { Button } from '../ui/button';

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
                <h2 style={{ marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.5rem' }}>Study With Us
                                    <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>

                </h2>
                <p style={{ marginBottom: '1.5rem', color: '#555', textAlign: 'justify' }}>
                    Choose a degree or course that excites and motivates, where you will gain the knowledge, industry connections and real-world experience needed to create the career you want.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Button
                        variant="outline"
                        className="w-full text-[#035ac5ff] border-[#035ac5ff] hover:bg-[#035ac5ff] hover:text-white"
                        onClick={() => alert('Find a degree clicked')}
                    >
                        Find a Degree
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full text-[#035ac5ff] border-[#035ac5ff] hover:bg-[#035ac5ff] hover:text-white"
                        onClick={() => alert('Ask an academic clicked')}
                    >
                        Ask an Academic
                    </Button>
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