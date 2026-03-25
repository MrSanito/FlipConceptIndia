
import { categories } from '../app/data/data'

function sitemap() {
  const baseUrl = 'https://flipconceptindia.com'

  const safeUrl = (url: string) => {
    if (url.startsWith('http')) {
      return encodeURI(url)
    }
    const encodedPath = encodeURI(url).replace(/&/g, '%26')
    return `${baseUrl}${encodedPath.startsWith('/') ? '' : '/'}${encodedPath}`
  }

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
      images: [safeUrl('/logo.png')],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
    images: category.image ? [safeUrl(category.image)] : [],
  }))

  const productRoutes = categories.flatMap((category) =>
    category.products.map((product) => ({
      url: `${baseUrl}/categories/${category.id}/${product.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      images: product.image ? [safeUrl(product.image)] : [],
    }))
  )

  return [...staticRoutes, ...categoryRoutes, ...productRoutes]
}

const res = sitemap();
console.log(JSON.stringify(res, null, 2));
