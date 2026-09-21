import { MetadataRoute } from 'next'
import { getPostSlugs } from '@/sanity/lib/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostSlugs()

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://yieldedcircletech.com/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    {
      url: 'https://yieldedcircletech.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://yieldedcircletech.com/about-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://yieldedcircletech.com/client-stories',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://yieldedcircletech.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://yieldedcircletech.com/community',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      },
    {
      url: 'https://yieldedcircletech.com/contact-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      },
    {
      url: 'https://yieldedcircletech.com/careers',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      },
    {
      url: 'https://yieldedcircletech.com/blog',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      },
    {
      url: 'https://yieldedcircletech.com/client-stories/haba-na-haba',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      },
    {
      url: 'https://yieldedcircletech.com/client-stories/leddar',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      },
    {
      url: 'https://yieldedcircletech.com/client-stories/bookpound',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      },
    {
      url: 'https://yieldedcircletech.com/client-stories/itan-technologies',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...postEntries
  ]
}