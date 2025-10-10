export default {
  name: 'managerImage',
  title: 'Manager Image',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    },
  ],
};
