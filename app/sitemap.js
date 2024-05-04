export default function sitemap() {
  return [
    {
      url: 'https://merzakbenaissi.eu',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://merzakbenaissi.eu/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://merzakbenaissi.eu/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
        url: 'https://merzakbenaissi.eu/resume',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
  ]
}