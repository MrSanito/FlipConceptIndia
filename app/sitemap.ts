import { MetadataRoute } from 'next'
 
import { categories } from './data/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flipconceptindia.com'

  // Static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/categories',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic category routes
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...routes, ...categoryRoutes]
}
