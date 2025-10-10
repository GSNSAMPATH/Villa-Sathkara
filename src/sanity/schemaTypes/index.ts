import { type SchemaTypeDefinition } from 'sanity'
import galleryImage from './galleryImage'
import villaImage from './villaImage'
import blog from './blog'
import managerImage from './managerImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryImage,villaImage,blog,managerImage],
}




