import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getOurStories, urlFor } from '../../../sanity/lib/sanity';


const OurStories: React.FC = () => {
 const [ourstories, setOurStories] = useState([]);

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
        getOurStories().then(setOurStories);

        return () => {};
    }, []);

  return (


    <section className="py-10 px-4 md:pt-40 pt-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#082952]">Our Stories
                <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>

        </h2>
      <div className="max-w-8xl md:pt-10 mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {ourstories.map((program, index) => (
          <div key={index} className="bg-[#22a2bf] rounded shadow hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col">
            <img
              src={getImageSrc(program.image)}
              alt={program.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600">{program.description}</p>
              </div>
              <div className="mt-4">
                <a
                  href={program.link}
                  className="inline-flex items-center text-blue-600 hover:text-[#222] font-medium"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
        ))}
      </div>
        <div className="text-center mt-8 md:mt-20">
            <Button variant="outline" className="bg-[#fff] text-[#035ac5ff] border-[#035ac5ff] hover:bg-[#035ac5ff] hover:text-white">
              Show More Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
         
          </div>
    </section>
  );
};

export default OurStories;
