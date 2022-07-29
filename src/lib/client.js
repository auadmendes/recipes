import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'g093kzk1',
  dataset: 'production',
  apiVersion: '2022-07-27',
  useCdn: true,
  token: ''
})

const builder = ImageUrlBuilder(client)

export const urlFor = source => builder.image(source)

export default client
