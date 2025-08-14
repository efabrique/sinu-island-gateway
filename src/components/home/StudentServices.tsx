import React from 'react';
import { Button } from '../ui/button';

const backgroundImageUrl = 'public/lovable-uploads/bb44fb80-3e75-4c83-8246-f60f42997ac3.png';

export default function StudentServices() {
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
                    position: 'absolute',
                    left: '50vw', // Slight overlap
                }}
            >
                <h2 style={{ marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.5rem' }}>Student Services</h2>
                <p style={{ marginBottom: '1.5rem', color: '#555', textAlign: 'justify' }}>
                    Explore a range of services designed to support your academic journey, from counseling and career advice to health and wellness resources.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Button
                        variant="outline"
                        className="w-full text-[#035ac5ff] border-[#035ac5ff] hover:bg-[#035ac5ff] hover:text-white"
                        onClick={() => alert('Find a degree clicked')}
                    >
                        Student Services
                    </Button>
                    <Button
                                            variant="outline"
                                            className="w-full text-[#035ac5ff] border-[#035ac5ff] hover:bg-[#035ac5ff] hover:text-white"
                                            onClick={() => alert('Find a degree clicked')}
                                        >
                                            Student Wellness
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
                    marginLeft: '-80px', // Overlap content
                    zIndex: 1,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                }}
            />
        </div>
    );
}