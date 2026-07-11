import type { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/services';
import { TOOLS } from '@/lib/tools';
import { BLOG_POSTS } from '@/lib/blog';

const SITE_URL = 'https://rankingpromax.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1.0, lastModified: new Date() },
    { url: `${SITE_URL}/services`, changeFrequency: 'monthly', priority: 0.9, lastModified: new Date() },
    { url: `${SITE_URL}/quick-wins`, changeFrequency: 'monthly', priority: 0.8, lastModified: new Date() },
    { url: `${SITE_URL}/tools`, changeFrequency: 'monthly', priority: 0.9, lastModified: new Date() },
    { url: `${SITE_URL}/blog`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },
    { url: `${SITE_URL}/process`, changeFrequency: 'yearly', priority: 0.6, lastModified: new Date() },
    { url: `${SITE_URL}/about`, changeFrequency: 'yearly', priority: 0.6, lastModified: new Date() },
    { url: `${SITE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3, lastModified: new Date() },
    { url: `${SITE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3, lastModified: new Date() },
    { url: `${SITE_URL}/thank-you`, changeFrequency: 'yearly', priority: 0.3, lastModified: new Date() },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((svc) => ({
    url: `${SITE_URL}/services/${svc.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    lastModified: new Date(),
  }));

  const toolPages: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${SITE_URL}/tools/${tool.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: new Date(),
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: new Date(),
  }));

  return [...staticPages, ...servicePages, ...toolPages, ...blogPages];
}
