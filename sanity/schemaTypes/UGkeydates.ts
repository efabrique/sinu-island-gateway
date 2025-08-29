export default {
  name: 'ugkeydates',
  title: 'UG Key Dates',
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
      name: 'day',
      title: 'Day',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(2),
    },
    {
      name: 'month',
      title: 'Month',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(3).max(100),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image.sanityImage',
    },
  },
};
