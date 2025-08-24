// schemaTypes/featureProgramme.ts
export default {
  name: 'featureProgramme',
  title: 'Feature Programme',
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
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
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
    select: { title: 'title', media: 'image' },
  },
};
