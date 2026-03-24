import { MetadataRoute } from 'next'
import { categories } from './data/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flipconceptindia.com'

  // Helper to safely encode URLs for XML sitemaps
  const safeUrl = (url: string) => {
    if (url.startsWith('http')) {
      // For absolute URLs (like Unsplash), we use encodeURI which keeps & for query params
      // but encodes spaces. We don't replace & with %26 here as it would break query params.
      return encodeURI(url)
    }
    
    // For relative paths, we encode spaces and replace & with %26 since & is 
    // part of the filename/path, not a query separator.
    const encodedPath = encodeURI(url).replace(/&/g, '%26')
    return `${baseUrl}${encodedPath.startsWith('/') ? '' : '/'}${encodedPath}`
  }

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
      images: [safeUrl('/logo.png')],
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
    images: category.image ? [safeUrl(category.image)] : [],
  }))

  // Dynamic product routes
  const productRoutes = categories.flatMap((category) =>
    category.products.map((product) => ({
      url: `${baseUrl}/categories/${category.id}/${product.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      images: product.image ? [safeUrl(product.image)] : [],
    }))
  )

  return [...staticRoutes, ...categoryRoutes, ...productRoutes]
}
