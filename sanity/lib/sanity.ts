import { createClient, SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize Sanity client
export const client = createClient({
  projectId: 'xha46ejg',    // must match exactly
  dataset: 'sinu_website',  // must match exactly
  apiVersion: '2025-08-23', // or a recent date
  useCdn: false
});

// Image URL builder
const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

export interface FeatureProgramme {
  _id: string;
  title: string;
  description: string;
  image: {
    sanityImage?: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    imageUrl?: string;
  };
  link?: string;
}

export interface StudyWithUs {
  _id: string;
  title: string;
  description: string;
  image: {
    sanityImage?: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    imageUrl?: string;
  };
}

export interface Home_StudentServices {
  _id: string;
  title: string;
  description: string;
  image: {
    sanityImage?: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    imageUrl?: string;
  };
}

export interface OurStories {
  _id: string;
  title: string;
  description: string;
  image: {
    sanityImage?: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    imageUrl?: string;
  };
  link?: string;
}

export interface News {
  _id: string;
  title: string;
  description: string;
  image: {
    sanityImage?: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    imageUrl?: string;
  };
  link?: string;
}
export interface Events {
  _id: string;
  title: string;
  description: string;
  image: {
    sanityImage?: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    imageUrl?: string;
  };
  link?: string;
}
export const getFeatureProgrammes = async (): Promise<FeatureProgramme[]> => {
  const query = `*[_type == "featureProgramme"]{
    _id,
    title,
    description,
    image {
      sanityImage,
      imageUrl
    },
    link
  }`;

  try {
    const featureProgrammes: FeatureProgramme[] = await client.fetch(query);
    console.log("Featured Programs Data:", featureProgrammes);
    return featureProgrammes;
  } catch (error) {
    console.error('Error fetching feature programmes:', error);
    return [];
  }
};

export const getstudywithus = async (): Promise<StudyWithUs[]> => {
  const query = `*[_type == "studywithus"]{
    _id,
    title,
    description,
    image {
      sanityImage,
      imageUrl
    },
  }`;

  try {
    const studywithus: StudyWithUs[] = await client.fetch(query);
    console.log("Study With Us Data:", studywithus);
    return studywithus;
  } catch (error) {
    console.error('Error fetching study with us data:', error);
    return [];
  }
};

export const gethome_studentservices = async (): Promise<Home_StudentServices[]> => {
  const query = `*[_type == "home_studentservices"]{
    _id,
    title,
    description,
    image {
      sanityImage,
      imageUrl
    },
  }`;

  try {
    const home_studentservices: Home_StudentServices[] = await client.fetch(query);
    console.log("Student services Data:", home_studentservices);
    return home_studentservices;
  } catch (error) {
    console.error('Error fetching student services at homepage data:', error);
    return [];
  }
};

export const getOurStories = async (): Promise<OurStories[]> => {
  const query = `*[_type == "ourstories"]{
    _id,
    title,
    description,
    image {
      sanityImage,
      imageUrl
    },
    link
  }`;

  try {
    const ourstories: OurStories[] = await client.fetch(query);
    console.log("Our Stories Data:", ourstories);
    return ourstories;
  } catch (error) {
    console.error('Error fetching our stories data:', error);
    return [];
  }
};

export const getNews = async (): Promise<News[]> => {
  const query = `*[_type == "news"]{
    _id,
    title,
    description,
    image {
      sanityImage,
      imageUrl
    },
    link
  }`;

  try {
    const news: News[] = await client.fetch(query);
    console.log("News Data:", news);
    return news;
  } catch (error) {
    console.error('Error fetching news data:', error);
    return [];
  }
};
export const getEvents = async (): Promise<Events[]> => {
  const query = `*[_type == "events"]{
    _id,
    title,
    description,
    image {
      sanityImage,
      imageUrl
    },
    link
  }`;

  try {
    const events: Events[] = await client.fetch(query);
    console.log("Events Data:", events);
    return events;
  } catch (error) {
    console.error('Error fetching events data:', error);
    return [];
  }
};

// Helper to get image URL
export const getImageUrl = (imageField: FeatureProgramme['image']) => {
  if (imageField?.sanityImage) {
    return urlFor(imageField.sanityImage).url();
  }
  if (imageField?.imageUrl) {
    return imageField.imageUrl;
  }
  return null;
};
