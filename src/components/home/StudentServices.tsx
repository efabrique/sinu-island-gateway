import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { gethome_studentservices, urlFor } from '../../../sanity/lib/sanity';

export default function StudentServices() {
    const [studentservices, setstudentservices] = useState([]);

    const getImageSrc = (image: { sanityImage?: any; imageUrl?: string }) => {
        if (image?.sanityImage) {
            return urlFor(image.sanityImage).url();
        }
        if (image?.imageUrl) {
            return image.imageUrl;
        }
        return '';
    };

    useEffect(() => {
        // Fetch courses once on mount
        gethome_studentservices().then(setstudentservices);

        return () => {};
    }, []);

    return (
        <>
            {studentservices.map((program, index) => (
                <div
                    key={index}
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
                        <h2 style={{ marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.5rem' }}>
                            {program.title}
                            <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>
                        </h2>
                        <p style={{ marginBottom: '1.5rem', color: '#023047', textAlign: 'justify' }}>
                            {program.description}
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
                        src={getImageSrc(program.image)}
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
            ))}
        </>
    );
}