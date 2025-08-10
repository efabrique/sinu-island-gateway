import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';


type CardItem = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const cards: CardItem[] = [
  {
    title: 'Environmental Studies',
    description: 'Explore the relationship between humans and nature through our dynamic environmental program.',
    image: 'public/lovable-uploads/7284ab6b-b66f-44ea-be92-9f17dc726408.png',
    link: '#',
  },
  {
    title: 'Visual Arts',
    description: 'Dive into painting, sculpture, and design with our hands-on creative arts curriculum.',
    image: 'public/lovable-uploads/e770e3e6-8bc7-4ced-8a1b-acfda565e2a4.png',
    link: '#',
  },
  {
    title: 'Data Science',
    description: 'Analyze and interpret data to solve complex problems in real-world contexts.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    link: '#',
  }
];

const OurStories: React.FC = () => {
  return (
    <section className="py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#082952]">Our Stories
                <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>

        </h2>
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded shadow hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col">
            <img
              src={card.image}
              alt={card.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
              <div className="mt-4">
                <a
                  href={card.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
        ))}
      </div>
        <div className="text-center mt-8 md:mt-8">
            <Button className="bg-[#035ac5ff] text-white hover:bg-[#082952]/90">
              Show More Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
         
          </div>
    </section>
  );
};

export default OurStories;
