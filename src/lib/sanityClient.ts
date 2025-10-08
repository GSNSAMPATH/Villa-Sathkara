import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'lxutuvfn', // from sanity.json or manage.sanity.io
  dataset: 'production',
  apiVersion: '2025-10-07',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)
