export default {
  name: 'villaImage',
  title: 'Villa Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls the order of images (1 = first)',
    },
  ],
}
