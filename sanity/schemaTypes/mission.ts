export default {
  name: 'mission',
  title: 'Mission',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(3).max(100),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required().min(10).max(500),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'object',
      fields: [
        {
          name: 'sanityImage',
          title: 'Sanity Image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'imageUrl',
          title: 'Image URL',
          type: 'url',
          validation: (Rule: any) => Rule.uri({ scheme: ['http', 'https'] }),
        },
      ],
      validation: (Rule: any) =>
        Rule.custom((field: any) => {
          if (field?.sanityImage || field?.imageUrl) {
            return true;
          }
          return 'You must provide either an image asset or an image URL';
        }),
      // <--- remove this preview block from here!
      // preview: {
      //   select: {
      //     sanityImage: 'sanityImage',
      //     imageUrl: 'imageUrl',
      //   },
      //   prepare(selection: any) {
      //     const { sanityImage, imageUrl } = selection;
      //     return {
      //       title: 'Image',
      //       media: sanityImage || (imageUrl ? { asset: { _ref: imageUrl } } : undefined),
      //     };
      //   },
      // },
    },
  ],
  preview: {
    select: {
      title: 'visiontitle',
      media: 'visionimage.sanityImage',
    },
  },
};
