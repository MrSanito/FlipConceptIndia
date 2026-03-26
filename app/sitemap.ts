import { MetadataRoute } from 'next'
import { categories } from './data/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.flipconceptindia.com'

  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Dynamic category routes
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  // Dynamic product routes
  const productRoutes = categories.flatMap((category) =>
    category.products.map((product) => ({
      url: `${baseUrl}/categories/${category.id}/${product.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  )

  return [...staticRoutes, ...categoryRoutes, ...productRoutes]
}

