
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  loadingPlaceholder?: React.ReactNode;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  objectFit = 'cover',
  loadingPlaceholder,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const isMobile = useIsMobile();

  // Function to add image size parameters for unsplash images
  const getOptimizedImageUrl = (url: string) => {
    if (!url) return '';

    try {
      // For Unsplash images, we can use their optimization parameters
      if (url.includes('unsplash.com')) {
        // Check if URL already has parameters
        const hasParams = url.includes('?');
        const size = isMobile ? 600 : width || 1200;
        const quality = 80;
        
        // Make sure we don't add duplicate parameters
        const baseUrl = url.split('?')[0];
        return `${baseUrl}?w=${size}&q=${quality}&auto=format&fit=crop`;
      }
      
      return url;
    } catch (error) {
      console.error('Error optimizing image URL:', error);
      return url; // Return original URL if optimization fails
    }
  };

  useEffect(() => {
    if (!src) return;
    
    // Set a default image source immediately to ensure something is displayed
    setImgSrc(src);

    // Then optimize it
    const optimizedUrl = getOptimizedImageUrl(src);
    setImgSrc(optimizedUrl);

    // For non-priority images, use Intersection Observer
    if (!priority) {
      let observer: IntersectionObserver;
      const element = document.createElement('div');
      
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setImgSrc(optimizedUrl);
            observer.disconnect();
          }
        });
      }, { rootMargin: '200px' });

      observer.observe(element);
      
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }
  }, [src, priority, isMobile, width]);

  return (
    <div 
      className={cn(
        "relative overflow-hidden", 
        !isLoaded && "bg-gray-100",
        className
      )}
      style={{ width: '100%', height: '100%' }}
    >
      {!isLoaded && loadingPlaceholder ? loadingPlaceholder : (
        !isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#8ecae6]/20">
            <div className="w-8 h-8 rounded-full border-2 border-[#219ebc] border-t-transparent animate-spin"></div>
          </div>
        )
      )}
      
      {imgSrc && (
        <img
          src={imgSrc}
          alt={alt}
          className={cn(
            'transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          style={{
            objectFit,
            width: '100%',
            height: '100%',
          }}
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            console.error(`Failed to load image: ${src}`);
            // Try without parameters as fallback
            if (imgSrc !== src) {
              setImgSrc(src);
            }
            // Add a placeholder background color
            const target = e.target as HTMLImageElement;
            target.style.backgroundColor = '#8ecae6';
          }}
          loading={priority ? 'eager' : 'lazy'}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
