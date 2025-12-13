import { useLocation, useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import Header from "@/components/layout/Header";
import OptimizedImage from "@/components/common/OptimizedImage";
import React, { useState, useEffect } from 'react';
import Footer from "@/components/layout/Footer";

const ProgrammeDetails = () => {
  const { state } = useLocation();
  const { code } = useParams();
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const {
    programme_name,
    programme_code,
  } = state;
  const maxPush = 200;
  const imagePush = Math.min(scrolled, maxPush);

  const imageSrc = '/lovable-uploads/DSC05873.jpg';
  const imageAlt = 'Beautiful coastal city at night with illuminated buildings and harbor';

  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative bg-[#023047] h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[98vh] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              transform: `translateY(${imagePush}px)`,
              transition: 'transform 0.2s',
            }}
          >
            <OptimizedImage
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover object-center transition-opacity duration-700"
              objectFit="cover"
              priority={true}
              width={1920}
              height={1080}
            />
          </div>
          {/* Banner Content */}
        </div>


        <Card className="shadow-lg">
          <CardContent className="space-y-4">
            <h1 className="text-2xl font-bold text-blue-600">
              {programme_name}
            </h1>

            <p className="text-gray-600">
              Programme Code: <strong>{programme_code}</strong>
            </p>

            <p className="text-sm text-muted-foreground">
              This is a static programme page.
              Content is rendered dynamically based on the selected card.
            </p>
          </CardContent>
        </Card>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default ProgrammeDetails;
