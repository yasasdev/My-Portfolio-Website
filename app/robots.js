export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://my-portfolio-website-two-wine.vercel.app/sitemap.xml',
  };
}
