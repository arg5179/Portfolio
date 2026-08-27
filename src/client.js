import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  if (!source) {
    return '';
  }
  try {
    return builder.image(source).url();
  } catch (error) {
    console.warn('Unable to resolve image URL from source:', source);
    if (typeof source === 'string') return source;
    if (source?._upload?.previewImage) return source._upload.previewImage;
    if (source?.asset?.url) return source.asset.url;
    if (source?.url) return source.url;
    return '';
  }
};

