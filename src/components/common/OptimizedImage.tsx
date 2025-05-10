
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

    // For Unsplash images, we can use their optimization parameters
    if (url.includes('unsplash.com')) {
      const size = isMobile ? 600 : width || 1200;
      const quality = 80;
      
      // Add width, height and quality parameters for Unsplash
      if (url.includes('?')) {
        return `${url}&w=${size}&q=${quality}&auto=format`;
      } else {
        return `${url}?w=${size}&q=${quality}&auto=format`;
      }
    }
    
    return url;
  };

  useEffect(() => {
    if (!src) return;

    // For priority images, load immediately
    if (priority) {
      setImgSrc(getOptimizedImageUrl(src));
      return;
    }

    // For non-priority images, use Intersection Observer
    let observer: IntersectionObserver;
    const element = document.createElement('div');
    
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setImgSrc(getOptimizedImageUrl(src));
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px' }); // Start loading when image is 200px away from viewport

    observer.observe(element);
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [src, priority, isMobile]);

  return (
    <div 
      className={cn(
        "relative overflow-hidden", 
        !isLoaded && "bg-gray-100",
        className
      )}
      style={{ width, height }}
    >
      {!isLoaded && loadingPlaceholder ? loadingPlaceholder : null}
      
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
          onError={() => {
            console.error(`Failed to load image: ${src}`);
            // Fallback to original URL if optimization fails
            if (imgSrc !== src) {
              setImgSrc(src);
            }
          }}
          loading={priority ? 'eager' : 'lazy'}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
