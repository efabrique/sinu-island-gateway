import { createClient, SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize Sanity client
export const client = createClient({
  projectId: 'xha46ejg',    // must match exactly
  dataset: 'sinu_website',  // must match exactly
  apiVersion: '2025-08-23', // or a recent date
  useCdn: false
});


// Optional: Image URL builder for sanity images
const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

// TypeScript interface for FeatureProgramme
export interface FeatureProgramme {
  _id: string;
  title: string;
  description: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  link?: string;
}


// Function to fetch all feature programmes
export const getFeatureProgrammes = async (): Promise<FeatureProgramme[]> => {
  const query = `*[_type == "featureProgramme"]{
    _id,
    title,
    description,
    image,
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
