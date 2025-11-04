
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Microscope, Calculator, Gavel, Stethoscope, Palette, Globe } from 'lucide-react';
import OptimizedImage from '@/components/common/OptimizedImage';
import { getundergraduateDegrees, urlFor } from '../../../sanity/lib/sanity';

interface UndergraduateDegree {
  _id: string;
  title: string;
  description: string;
  duration?: string;
  image?: { sanityImage?: any; imageUrl?: string };
}

const StudyOptionsSection = () => {
  const [undergraduateDegrees, setUndergraduateDegrees] = useState<UndergraduateDegree[]>([]);
  useEffect(() => {
      getundergraduateDegrees().then(setUndergraduateDegrees);
    }, []);
  
    const getImageSrc = (image: { sanityImage?: any; imageUrl?: string } | undefined) => {
      if (image?.sanityImage) {
        return urlFor(image.sanityImage).url();
      }
      if (image?.imageUrl) {
        return image.imageUrl;
      }
      return '';
    };

  return (
    <section className="py-16 bg-white md:mt-40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
            Search by study area...
                            <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>

          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {undergraduateDegrees.map((UGdegree, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-[#8ecae6] overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage
                  src={getImageSrc(UGdegree.image)}
                  alt={UGdegree.title}
                  className="w-full h-full"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-[#082952]/20"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-[#222222]">{UGdegree.title}</CardTitle>
                <CardDescription className="text-[#ffb703] font-medium">
                  {UGdegree.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952]">{UGdegree.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyOptionsSection;
